import { office } from "@/lib/office";

type MarkProps = {
  variant?: "tile" | "plain";
  animated?: boolean;
  className?: string;
};

export function LogoMark({ animated = false, className = "h-12 w-12" }: MarkProps) {
  return (
    <img
      src="/brand-logo.png"
      alt={office.name}
      width={1024}
      height={1024}
      className={`${className} rounded-2xl object-contain ${animated ? "logo-bloom" : ""}`}
    />
  );
}

export function Logo({
  className = "",
}: {
  variant?: "tile" | "plain";
  tone?: "default" | "onDark";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <LogoMark className="h-12 w-12 shrink-0" />
    </span>
  );
}
