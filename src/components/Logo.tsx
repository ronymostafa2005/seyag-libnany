import { office } from "@/lib/office";

type MarkProps = {
  variant?: "tile" | "plain";
  animated?: boolean;
  className?: string;
};

export function LogoMark({ variant = "tile", animated = false, className = "h-11 w-11" }: MarkProps) {
  const ink = "#e8d4a6";

  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={office.name}>
      {variant === "tile" ? <rect width="64" height="64" rx="16" fill="#071c1a" /> : null}
      <path
        className={animated ? "logo-post" : undefined}
        d="M13 18v34M51 18v34"
        stroke={ink}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        className={animated ? "logo-rail" : undefined}
        d="M13 28h38"
        stroke="#c4533c"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <g className={animated ? "logo-cedar" : undefined} fill={ink}>
        <path d="M32 12c3.2 0 7 3.6 7 7.4-3 .8-5 2-7 4.2-2-2.2-4-3.4-7-4.2 0-3.8 3.8-7.4 7-7.4z" />
        <path d="M32 21.5c5.2 0 11 4.6 11 9.6-5-1.6-8-1-11 2.2-3-3.2-6-3.8-11-2.2 0-5 5.8-9.6 11-9.6z" />
        <path d="M32 30.5c6.4 0 14 5.4 14 12-6-2.2-10-1.2-14 3.2-4-4.4-8-5.4-14-3.2 0-6.6 7.6-12 14-12z" />
        <path d="M30.3 44.2h3.4V52h-3.4z" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "tile",
  tone = "default",
  className = "",
}: {
  variant?: "tile" | "plain";
  tone?: "default" | "onDark";
  className?: string;
}) {
  const name = tone === "onDark" ? "text-sand" : "text-ink";
  const sub = tone === "onDark" ? "text-gold-soft" : "text-ink/55";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark variant={variant} className="h-11 w-11 shrink-0" />
      <span>
        <span dir="rtl" className={`block text-lg font-extrabold leading-none ${name}`}>
          {office.name}
        </span>
        <span className={`mt-1 block text-[11px] tracking-[0.2em] uppercase ${sub}`}>{office.tagline}</span>
      </span>
    </span>
  );
}
