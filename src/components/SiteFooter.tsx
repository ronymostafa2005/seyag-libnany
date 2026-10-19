import Link from "next/link";
import { Logo } from "@/components/Logo";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";

const links = [
  { href: "/jobs", label: "Roles" },
  { href: "/employers", label: "Employers" },
  { href: "/about", label: "The office" },
  { href: "/contact", label: "Visit" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-sea-deep text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="plain" tone="onDark" />
          <p className="mt-3 max-w-sm leading-8 text-sand/75">
            A recruitment office at {office.address}. Ask about a role, or send an application, on WhatsApp.
          </p>
        </div>
        <div>
          <p className="text-sm text-gold-soft">Office</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sand/85 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/desk" className="text-sand/50 hover:text-white">
                Office desk
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gold-soft">WhatsApp</p>
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-2xl font-bold tracking-wide"
          >
            {office.phoneDisplay}
          </a>
          <p className="mt-3 leading-7 text-sand/75">{office.address}</p>
          <p className="mt-2 text-sm text-sand/60">{office.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-sm text-sand/50">
          <p>{office.name} · {office.city}</p>
          <p>{office.latin}</p>
        </div>
      </div>
    </footer>
  );
}
