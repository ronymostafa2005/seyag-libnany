import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/app/jobs/[id]/ApplyForm";
import { formatPosted, getJob, jobs } from "@/lib/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = getJob(id);
  if (!job) return { title: "Role" };
  return { title: job.title, description: job.summary };
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();

  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <Link href="/jobs" className="text-sm text-sea">
          ← All roles
        </Link>
        <p className="mt-6 text-sm text-sea">
          {job.category} · {job.type}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{job.title}</h1>
        <p className="mt-4 text-lg text-ink/70">
          {job.company} · {job.district} · {job.city}
        </p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Pay", job.salary],
            ["Experience", job.experience],
            ["Posted", formatPosted(job.postedAt)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-line bg-paper px-4 py-4">
              <dt className="text-xs text-ink/50">{label}</dt>
              <dd className="mt-1 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-lg leading-9">{job.description}</p>
        <Section title="The day itself" items={job.responsibilities} />
        <Section title="What we look for" items={job.requirements} />
      </div>
      <aside className="lg:pt-16">
        <div className="lg:sticky lg:top-24">
          <ApplyForm job={job} />
        </div>
      </aside>
    </article>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-paper px-4 py-3 leading-8">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
