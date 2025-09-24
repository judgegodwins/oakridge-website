import Button from "./button";

export function NewsletterInput({ className }: { className?: string }) {
  return (
    <div className={`flex w-[500px] items-center rounded-full bg-grey-200 p-1 border-2 border-grey-300 ${className}`}>
      <input
        type="email"
        placeholder="Email address"
        className="flex-1 rounded-full bg-transparent px-4 py-[11px] font-medium text-base text-grey-700 leading-[150%] placeholder:text-grey-600 focus:outline-none"
      />
      <Button className="text-lg! h-[46px]">Subscribe</Button>
    </div>
  );
}
