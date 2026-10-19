"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";

const links = [
  { href: "/jobs", label: "الوظائف" },
  { href: "/employers", label: "أصحاب الأعمال" },
  { href: "/about", label: "المكتب" },
  { href: "/contact", label: "الزيارة" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 px-4 py-2.5 shadow-[0_16px_40px_-28px_rgba(20,36,31,0.7)]">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label={office.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "font-bold text-sea" : "text-ink/75 hover:text-ink"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-sea-deep px-4 py-2 text-sm font-semibold text-sand sm:inline-flex"
          >
            واتساب
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper md:hidden"
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="glass mx-auto mt-2 max-w-6xl rounded-3xl border border-white/70 px-5 py-4 shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-line py-3 text-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block font-semibold text-sea"
          >
            اسأل على واتساب
          </a>
        </nav>
      ) : null}
    </header>
  );
}
