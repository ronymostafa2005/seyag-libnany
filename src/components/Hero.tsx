import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";

const chips = [
  { label: "Senior Accountant", place: "Raml Station" },
  { label: "Brand Designer", place: "Laurent" },
  { label: "Wholesale Sales", place: "Mansheya" },
];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pt-16">
      <div>
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm text-sea">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          {office.city} · {office.tunnel}
        </p>
        <h1 className="rise mt-6 text-5xl font-extrabold leading-[1.05] md:text-7xl" style={{ animationDelay: "80ms" }}>
          Ask. Apply. On WhatsApp.
        </h1>
        <p className="rise mt-6 max-w-xl text-lg leading-8 text-ink/75" style={{ animationDelay: "140ms" }}>
          {office.name} is a recruitment office at {office.address}. A question about a role, or an application, goes
          straight to the office line.
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <Link href="/jobs" className="rounded-full bg-sea-deep px-6 py-3 font-semibold text-sand">
            Browse roles
          </Link>
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-paper px-6 py-3 font-semibold"
          >
            WhatsApp the office
          </a>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm">
          <div className="rounded-3xl border border-line bg-paper p-4">
            <dt className="text-ink/50">Address</dt>
            <dd className="mt-1 font-semibold leading-7">{office.address}</dd>
          </div>
          <div className="rounded-3xl border border-line bg-paper p-4">
            <dt className="text-ink/50">WhatsApp</dt>
            <dd className="mt-1 font-semibold">
              <a href={whatsappUrl(generalAskMessage())} target="_blank" rel="noreferrer">
                {office.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="rise" style={{ animationDelay: "120ms" }}>
        <div className="float-chip rounded-[36px] bg-sea-deep px-8 py-12 text-center shadow-2xl">
          <LogoMark variant="plain" animated className="mx-auto h-44 w-44" />
          <p dir="rtl" className="mt-4 text-3xl font-extrabold text-sand">
            {office.name}
          </p>
          <p className="mt-2 text-xs tracking-[0.28em] text-gold-soft uppercase">{office.latin}</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li key={chip.label} className="rounded-full border border-line bg-paper px-4 py-2 text-sm">
              <span className="font-bold">{chip.label}</span>
              <span className="mx-2 text-gold">/</span>
              <span className="text-ink/60">{chip.place}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
