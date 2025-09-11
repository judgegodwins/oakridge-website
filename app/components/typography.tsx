export function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-semibold text-[40px] leading-[130%] font-serif ${className || ''}`}
    >
      {children}
    </h2>
  );
}

export function Heading3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-semibold text-2xl leading-[140%] font-serif ${className || ''}`}
    >
      {children}
    </p>
  );
}


export function BigPara({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-medium text-xl leading-[140%] ${className || ''}`}
    >
      {children}
    </p>
  );
}

export function Para({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-medium text-base leading-[150%] ${className || ''}`}
    >
      {children}
    </p>
  );
}

export function SPara({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-medium text-sm leading-[150%] ${className || ''}`}
    >
      {children}
    </p>
  );
}