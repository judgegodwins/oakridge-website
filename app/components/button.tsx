import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`flex cursor-pointer justify-center items-center gap-2 rounded-full py-3 px-6 bg-c-red text-white font-medium text-xl leading-[100%] capitalize ${className}`}
    >
      {children}
    </button>
  );
}
