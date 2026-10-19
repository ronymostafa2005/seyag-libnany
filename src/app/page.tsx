import { Hero } from "@/components/Hero";
import { JobCard } from "@/components/JobCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StreetPlate } from "@/components/StreetPlate";
import { jobs } from "@/lib/jobs";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";
import Link from "next/link";

const stations = [
  {
    n: "01",
    title: "Ask on WhatsApp",
    text: "A question about a role opens a chat with the office. No lost inboxes.",
  },
  {
    n: "02",
    title: "We sit for a quarter hour",
    text: "A short meeting at Tunnel 45. We listen to what you actually do.",
  },
  {
    n: "03",
    title: "One introduction",
    text: "One company that fits, not ten adverts. The reply comes back on the same chat.",
  },
];

export default function HomePage() {
  const featured = jobs.filter((job) => job.featured);

  return (
    <>
      <Hero />
      <Marquee items={jobs.map((job) => job.title)} />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3">
        {[
          ["Open roles", String(jobs.length).padStart(2, "0")],
          ["First reply", "On a working day"],
          ["Interviews", office.tunnel],
        ].map(([label, value], index) => (
          <Reveal key={label} delay={index * 0.08}>
            <div className="rounded-[28px] border border-line bg-paper px-6 py-7">
              <p className="text-sm text-ink/50">{label}</p>
              <p className="mt-3 text-3xl font-extrabold text-sea-deep">{value}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-sea">This week</p>
            <h2 className="mt-2 text-4xl font-extrabold">Roles the office is actually working.</h2>
          </div>
          <Link href="/jobs" className="font-semibold text-sea">
            All roles →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.06}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold text-sea">Three steps</p>
          <h2 className="mt-2 max-w-2xl text-4xl font-extrabold">A fence, not a funnel of noise.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stations.map((station, index) => (
            <Reveal key={station.n} delay={index * 0.08}>
              <article className="h-full rounded-[28px] bg-sea-deep p-6 text-sand">
                <p className="text-gold-soft">{station.n}</p>
                <h3 className="mt-6 text-2xl font-extrabold">{station.title}</h3>
                <p className="mt-3 leading-8 text-sand/75">{station.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-5 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[32px] border border-line bg-paper p-7">
            <p className="text-sm text-sea">Looking for work</p>
            <h2 className="mt-3 text-3xl font-extrabold">Start with one role, on WhatsApp.</h2>
            <p className="mt-4 leading-8 text-ink/70">
              Open a listing and apply in the chat, or ask a question first. The line is {office.phoneDisplay}.
            </p>
            <Link href="/jobs" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sand">
              See the roles
            </Link>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-[32px] border border-line bg-foam p-7">
            <p className="text-sm text-sea">Hiring</p>
            <h2 className="mt-3 text-3xl font-extrabold">Describe the day, not the slogan.</h2>
            <p className="mt-4 leading-8 text-ink/70">
              We meet candidates on Street 45 before anyone is sent to you. You receive a few people, after we have sat with them.
            </p>
            <Link href="/employers" className="mt-6 inline-flex rounded-full bg-sea px-5 py-3 text-paper">
              Request candidates
            </Link>
          </article>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
        <Reveal>
          <StreetPlate />
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="text-sm font-semibold text-sea">Visit</p>
            <h2 className="mt-2 text-4xl font-extrabold">The address is part of the name.</h2>
            <p className="mt-4 leading-8 text-ink/75">
              {office.hours}. If you are running late for the tunnel, message before you turn back.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(generalAskMessage())}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sea-deep px-5 py-3 font-semibold text-sand"
              >
                WhatsApp {office.phoneDisplay}
              </a>
              <a href={office.phoneHref} className="rounded-full border border-line bg-paper px-5 py-3 font-semibold">
                Call
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
