import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const fieldMap = {
  firstName: 'First name',
  surname: 'Surname',
  middleName: 'Middle name',
  email: 'Email',
  phoneNumber: 'Phone number',
  address: 'Address',
}

export const studentApplicationSchema = z
  .object({
    // Basic Information
    surname: z.string().min(1, "Surname is required"),

    firstName: z.string().min(1, "First name is required"),

    middleName: z.string().min(1, "Middle name is required"),

    gender: z.enum(["FEMALE", "MALE"], {
      message: "Please select a gender",
    }),

    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((value) => !Number.isNaN(new Date(value).getTime()), {
        message: "Please enter a valid date",
      }),

    // Place of Origin
    countryOfOrigin: z.string().min(1, "Country of origin is required"),

    stateOfOrigin: z.string().min(1, "State of origin is required"),

    localGovernmentArea: z.string().min(1, "Local Government Area is required"),

    // Health Information
    hasMedicalCondition: z.enum(["yes", "no"], {
      message: "Please select Yes or No",
    }),

    medicalCondition: z.string().optional(),

    lastClass: z.string().min(1, "Last class is required"),
    class: z.string().min(1, "This is required"),

    // First Parent/Guardian
    firstParent: z.object({
      surname: z.string().min(1, "Surname is required"),

      firstName: z.string().min(1, "First name is required"),

      phoneNumber: z
        .string()
        .min(1, "Phone number is required")
        .refine(isValidPhoneNumber, {
          message: "Please enter a valid phone number",
        }),
      email: z.email("Please enter a valid email"),

      address: z.string().min(1, "Address is required"),
    }),

    // Second Parent/Guardian
    secondParent: z
      .object({
        surname: z.string().optional(),

        firstName: z.string().optional(),

        phoneNumber: z
          .string()
          .optional()
          .refine((value) => !value || isValidPhoneNumber(value), {
            message: "Please enter a valid phone number",
          }),

        email: z
          .string()
          .optional()
          .refine((value) => !value || z.email().safeParse(value).success, {
            message: "Please enter a valid email",
          }),

        address: z.string().optional(),
      })
      .optional()
      .superRefine((data, ctx) => {
        if (!data) return;

        const hasAnyValue = Object.values(data).some((value) =>
          Boolean(value?.trim()),
        );

        if (!hasAnyValue) return;

        const fields = [
          "surname",
          "firstName",
          "phoneNumber",
          "email",
          "address",
        ] as const;

        for (const field of fields) {
          if (!data[field]?.trim()) {
            ctx.addIssue({
              code: "custom",
              path: [field],
              message: `${fieldMap[field]} is required`,
            });
          }
        }
      }),
  })
  .superRefine((data, ctx) => {
    console.log("SUPERREFINE CALLED");
    console.log("data", data.hasMedicalCondition, data.medicalCondition);
    if (data.hasMedicalCondition === "yes" && !data.medicalCondition?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["medicalCondition"],
        message: "Please state the medical condition",
      });
    }
  });

export type StudentApplicationFormData = z.infer<
  typeof studentApplicationSchema
>;
