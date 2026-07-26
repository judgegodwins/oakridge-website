import Button from "./button";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export function SuccessModal({
  isOpen,
  onClose,
  title = "Application Submitted Successfully!",
  message = "Thank you for submitting your enrollment application. We have received your application and will contact you with further information about the next steps.",
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex flex-col gap-4 items-center text-center">
          {/* Success Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-7 w-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="text-sm leading-6 text-gray-600">
            {message}
          </p>

          <Button
            type="button"
            onClick={onClose}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}