import { Para } from "./typography";

type DatePickerProps = {
  label: string;
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function DatePicker({
  label,
  className,
  error,
  ...props
}: DatePickerProps) {
  return (
    <div
      className={`relative w-full cursor-pointer flex flex-col gap-2 ${className ?? ""}`}
    >
      <Para className={error && "text-red-700"}>{label}</Para>

      <input
        type="date"
        className={`w-full bg-white rounded-lg border py-4 px-3 ${error ? 'border-red-700' : 'border-grey-400'} outline-none text-grey-800`}
        {...props}
      />

      {error && (
        <span className="text-red-700 font-semibold text-xs">
          {error}
        </span>
      )}
    </div>
  );
}