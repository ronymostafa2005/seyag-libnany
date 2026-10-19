import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { office } from "@/lib/office";

export const metadata: Metadata = {
  title: "The office",
  description: "Siyaj Al-Lubnani, a recruitment office at Tunnel 45, Street 45, Alexandria.",
};

const beliefs = [
  {
    title: "The address is visible",
    text: "You know where we sit before you send a page. Tunnel 45, Street 45, Alexandria.",
  },
  {
    title: "A meeting before an introduction",
    text: "We do not forward CVs in a pile. We sit with the person, then choose one company.",
  },
  {
    title: "WhatsApp is the door",
    text: `Questions and applications come in on ${office.phoneDisplay}. If we miss it, we reply the same working day.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={office.name}
        title="Named as a fence, not a megaphone."
        text="سياج اللبناني keeps a boundary around a good match. We are a recruitment office on Street 45, at Tunnel 45, in Alexandria."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-5xl font-extrabold leading-tight text-sea-deep">{office.name}</p>
          <p className="mt-4 leading-8 text-ink/70">
            The Arabic name stays on the door. The conversation, from the first question to the application, happens on WhatsApp.
          </p>
        </Reveal>
        <div className="space-y-4">
          {beliefs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-line bg-paper p-6">
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="mt-3 leading-8 text-ink/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
