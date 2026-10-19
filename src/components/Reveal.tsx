export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className ? `rise ${className}` : "rise"} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
