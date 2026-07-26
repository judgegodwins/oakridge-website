import Button from "./button";
import { Para } from "./typography";

export function NewsletterInput({ className }: { className?: string }) {
  return (
    <div
      className={`flex w-[500px] items-center rounded-full bg-grey-200 p-1 border-2 border-grey-300 ${className}`}
    >
      <input
        type="email"
        placeholder="Email address"
        className="flex-1 rounded-full bg-transparent px-4 py-[11px] font-medium text-base text-grey-700 leading-[150%] placeholder:text-grey-600 focus:outline-none"
      />
      <Button className="text-lg! h-11.5">Subscribe</Button>
    </div>
  );
}

export function Input({
  label,
  error,
  className,
  helperText,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 items-stretch ${className}`}>
      {label && <Para className={`${error && "text-red-700"}`}>{label}</Para>}
      <input
        {...rest}
        type="text"
        className={`bg-white rounded-lg border py-4 px-3 outline-none text-grey-700 ${error ? "border-red-800" : "border-grey-400"}`}
      />
      {(error || helperText) && (
        <span className={`${error && "text-red-700"} font-semibold text-xs`}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
