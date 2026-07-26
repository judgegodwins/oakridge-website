import { SelectHTMLAttributes } from "react";
import { Para } from "./typography";

export default function SelectInput({
  label,
  options,
  cta,
  helperText,
  className,
  error,
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { label: string; value: string }[];
  cta: string;
  error?: string;
  helperText?: string;
  ref?: React.Ref<HTMLSelectElement>;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <Para className={error && "text-red-700"}>{label}</Para>}

      <select
        {...rest}
        className={`rounded-lg border py-4 px-3 ${error ? "border-red-700" : "border-grey-400"}  outline-none`}
      >
        <option value="">{cta}</option>

        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {(error || helperText) && (
        <span className={`${error && 'text-red-700'} font-semibold text-xs`}>{error || helperText}</span>
      )}
    </div>
  );
}
