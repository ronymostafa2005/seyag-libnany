"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { isThemeId, themes, type ThemeId } from "@/lib/themes";

const STORAGE_KEY = "siyaj-theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("cedar");
  const [open, setOpen] = useState(false);
  const [wash, setWash] = useState<{ x: number; y: number; color: string } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (isThemeId(current)) setTheme(current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!wash) return;
    const timer = window.setTimeout(() => setWash(null), 900);
    return () => window.clearTimeout(timer);
  }, [wash]);

  function apply(next: ThemeId, event: React.MouseEvent<HTMLButtonElement>) {
    if (next !== theme) {
      const rect = event.currentTarget.getBoundingClientRect();
      const chosen = themes.find((item) => item.id === next);
      setWash({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        color: chosen?.wash ?? "#5ac4b0",
      });
      setTheme(next);
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* Private browsing can block storage. The color still changes for this visit. */
      }
    }
    setOpen(false);
  }

  const active = themes.find((item) => item.id === theme) ?? themes[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper shadow-sm"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`ألوان الموقع، ${active.label}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="theme-trigger-orb h-5 w-5 rounded-full" style={{ background: active.swatch }} />
      </button>
      {open ? (
        <div
          id={panelId}
          role="radiogroup"
          aria-label="ألوان الموقع"
          className="theme-panel absolute end-0 top-14 z-50 w-60 rounded-3xl border border-line bg-paper p-2 shadow-[0_24px_50px_-24px_rgba(20,36,31,0.45)]"
        >
          <p className="px-2 pt-1 pb-2 text-[11px] font-semibold text-ink/45">الألوان</p>
          {themes.map((item, index) => {
            const selected = item.id === theme;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                className="theme-choice flex w-full items-center gap-3 rounded-2xl px-2 py-2 text-left hover:bg-foam"
                style={{ animationDelay: `${index * 45}ms` }}
                onClick={(event) => apply(item.id, event)}
              >
                <span
                  className="theme-swatch h-9 w-9 shrink-0 rounded-full"
                  data-active={selected ? "true" : "false"}
                  style={{ background: item.swatch }}
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">{item.label}</span>
                  <span className="block text-xs text-ink/55">{item.note}</span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
      {wash
        ? createPortal(
            <span className="theme-wash" style={{ left: wash.x, top: wash.y, background: wash.color }} />,
            document.body,
          )
        : null}
    </div>
  );
}
