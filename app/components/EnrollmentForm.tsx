import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Button from "./button";
import DatePicker from "./DatePicker";
import { Input } from "./input";
import PassportUpload from "./passport-upload";
import SelectInput from "./select-input";
import { Heading3, Para, SPara } from "./typography";
import {
  StudentApplicationFormData,
  studentApplicationSchema,
} from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import classData from "@/lib/data/classes";
import { nigeriaStates } from "@/lib/data/nigerianStates";
import httpBase from "@/lib/httpBase";
import axios from "axios";
import { SuccessModal } from "./SuccessModal";

export default function EnrollmentForm() {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    control,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<StudentApplicationFormData>({
    resolver: zodResolver(studentApplicationSchema),
    defaultValues: {
      countryOfOrigin: "Nigeria",
      firstParent: {
        phoneNumber: "",
      },
      // secondParent: {
      //   phoneNumber: ''
      // }
    },
  });

  const [passport, setPassport] = useState<File | undefined>(undefined);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = async (data: StudentApplicationFormData) => {
    console.log("submit");
    try {
      let passportKey: string | null = null;
      if (passport) {
        const { data: resData } = await httpBase.get(
          "/v1/files/upload-signed-url",
        );
        console.log("upload data", data);
        const {
          data: [{ key, url }],
        }: { data: { key: string; url: string }[] } = resData;
        console.log("key", key, url);

        const uploadRes = await axios.put(url, passport);
        console.log("uploadRes.status", uploadRes.status);
        passportKey = key;
      }

      await httpBase.post("/v1/enrollments", {
        ...data,
        passportKey,
        hasMedicalCondition: true,
        secondParent: data.secondParent?.surname
          ? data.secondParent
          : undefined,
      });

      setPassport(undefined);
      reset();
      setShowSuccessModal(true);
    } catch (e) {
      alert("Something went wrong");
    }
  };

  // console.log("val", getValues());

  // console.log("er", errors.medicalCondition);
  // console.log("errs", errors);

  const hasMedicalCondition = watch("hasMedicalCondition");
  const stateOfOrigin = watch("stateOfOrigin");

  return (
    <>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      <form
        className="flex flex-col gap-10 mt-10 w-full text-grey-700"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col gap-4">
          <Heading3 className="text-grey-900">Basic Information</Heading3>

          <div className="self-start mb-1">
            <PassportUpload onChange={setPassport} value={passport} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              className="grow"
              label="Surname"
              placeholder="Enter surname"
              {...register("surname")}
              error={errors.surname?.message}
            />
            <Input
              className="grow"
              label="First Name"
              placeholder="Enter first name"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
            <Input
              className="basis-full md:basis-[calc(50%-12px)]"
              label="Middle Name"
              placeholder="Enter surname"
              {...register("middleName")}
              error={errors.middleName?.message}
            />
            <SelectInput
              label="Gender"
              cta="Select a gender"
              options={[
                { label: "Female", value: "FEMALE" },
                { label: "Male", value: "MALE" },
              ]}
              {...register("gender")}
              error={errors.gender?.message}
            />
            <DatePicker
              label="Date of Birth"
              {...register("dateOfBirth")}
              error={errors.dateOfBirth?.message}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Heading3 className="text-grey-900">Place of Origin</Heading3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectInput
              label="Country of Origin"
              cta="Select a country"
              options={[{ label: "Nigeria", value: "Nigeria" }]}
              {...register("countryOfOrigin")}
              error={errors.countryOfOrigin?.message}
            />
            <SelectInput
              label="State of Origin"
              cta="Select a state"
              options={nigeriaStates.map((s) => ({
                label: s.name,
                value: s.name,
              }))}
              {...register("stateOfOrigin")}
              error={errors.stateOfOrigin?.message}
            />
            <SelectInput
              label="Local Government Area"
              cta="Select a Local Government Area"
              options={
                nigeriaStates
                  .find((s) => s.name === stateOfOrigin)
                  ?.lgas.map((lga) => ({ label: lga, value: lga })) || []
              }
              {...register("localGovernmentArea")}
              error={errors.localGovernmentArea?.message}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Heading3 className="text-grey-900">Health Information</Heading3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectInput
              label="Does the student have any known medical condition(s)?"
              cta="Select Yes or No"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              {...register("hasMedicalCondition")}
              error={errors.hasMedicalCondition?.message}
            />

            {hasMedicalCondition === "yes" && (
              <Input
                className="grow"
                label="If yes, please state below"
                placeholder="Medical Condition"
                {...register("medicalCondition")}
                error={errors.medicalCondition?.message}
              />
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Heading3 className="text-grey-900">Academic Information</Heading3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectInput
              label="Last Class Attended"
              cta="Select a class"
              options={classData}
              {...register("lastClass")}
              error={errors.lastClass?.message}
              helperText="The last class the student completed."
            />
            <SelectInput
              label="Class Applying For"
              cta="Select a class"
              options={classData.filter((c) => c.value !== "primary-6")}
              {...register("class")}
              helperText="The class the student is seeking admission into."
              error={errors.class?.message}
            />
          </div>
        </div>

        {[
          {
            label: "First",
            optional: false,
            field: "firstParent" as const,
          },
          {
            label: "Second",
            optional: true,
            field: "secondParent" as const,
          },
        ].map((p, i) => (
          <div key={p.label} className="w-full flex flex-col gap-4">
            <Heading3 className="text-grey-900">
              {p.label} Parent/Guardian Details
              {p.optional && " (Optional)"}
            </Heading3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label={`Surname of ${p.label} Parent/Guardian`}
                placeholder="Enter surname"
                {...register(`${p.field}.surname`, {
                  onChange:
                    i > 0
                      ? () => {
                          trigger(p.field);
                        }
                      : undefined,
                })}
                error={errors[p.field]?.surname?.message}
              />

              <Input
                label={`First Name of ${p.label} Parent/Guardian`}
                placeholder="Enter first name"
                {...register(`${p.field}.firstName`, {
                  onChange:
                    i > 0
                      ? () => {
                          trigger(p.field);
                        }
                      : undefined,
                })}
                error={errors[p.field]?.firstName?.message}
              />

              {/* <Input
              type="tel"
              inputMode="numeric"
              label={`Phone Number of ${p.label} Parent/Guardian`}
              placeholder="Enter phone number"
              {...register(`${p.field}.phoneNumber`, {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                },
              })}
              error={errors[p.field]?.phoneNumber?.message}
            /> */}

              <Controller
                name={`${p.field}.phoneNumber`}
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-2 items-stretch">
                    <Para
                      className={`${fieldState.error && "text-red-700"}`}
                    >{`Phone Number of ${p.label} Parent/Guardian`}</Para>
                    <PhoneInput
                      // international
                      defaultCountry="NG"
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        if (i > 0) trigger(p.field);
                      }}
                      onBlur={field.onBlur}
                      placeholder="Enter phone number"
                      className={`phone-input gap-0 rounded-lg bg-white border outline-none text-grey-700 ${fieldState.error ? "border-red-800" : "border-grey-400"}`}
                      name={`${p.field}.phoneNumber`}
                    />

                    <p
                      className={`${fieldState.error && "text-red-700"} font-semibold text-xs`}
                    >
                      {fieldState.error?.message ||
                        "You will be contacted with this phone number."}
                    </p>
                  </div>
                )}
              />

              <Input
                label={`Email of ${p.label} Parent/Guardian`}
                placeholder="Enter email"
                {...register(`${p.field}.email`, {
                  onChange:
                    i > 0
                      ? () => {
                          trigger(p.field);
                        }
                      : undefined,
                })}
                helperText="You may be contacted with this email."
                error={errors[p.field]?.email?.message}
              />

              <Input
                label={`Address of ${p.label} Parent/Guardian`}
                placeholder="Enter address"
                {...register(`${p.field}.address`, {
                  onChange:
                    i > 0
                      ? () => {
                          trigger(p.field);
                        }
                      : undefined,
                })}
                error={errors[p.field]?.address?.message}
              />
            </div>
          </div>
        ))}

        <Button disabled={isSubmitting} type="submit" className="self-start">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </>
  );
}
