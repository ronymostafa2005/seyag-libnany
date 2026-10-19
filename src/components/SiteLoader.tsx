"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/Logo";
import { office } from "@/lib/office";

export function SiteLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const leave = window.setTimeout(() => setPhase("out"), 2400);
    const hide = window.setTimeout(() => setPhase("gone"), 3100);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(hide);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`site-loader ${phase === "out" ? "is-leaving" : ""}`} role="status" aria-live="polite">
      <LogoMark variant="plain" animated className="h-28 w-28" />
      <p className="loader-name" dir="rtl">{office.name}</p>
      <p className="loader-latin">{office.latin}</p>
      <p className="loader-city">{office.city}</p>
    </div>
  );
}
