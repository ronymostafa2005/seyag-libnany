"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";

const links = [
  { href: "/jobs", label: "Roles" },
  { href: "/employers", label: "Employers" },
  { href: "/about", label: "The office" },
  { href: "/contact", label: "Visit" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-sand/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
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
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-sea-deep px-4 py-2 text-sm font-semibold text-sand sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-5 py-4 md:hidden">
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
            Ask on WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
