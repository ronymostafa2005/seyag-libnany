import Link from "next/link";
import { formatPosted } from "@/lib/jobs";
import { askJobMessage, whatsappUrl } from "@/lib/office";
import type { Job } from "@/lib/types";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-line bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/50">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-foam px-3 py-1 text-sea">{job.category}</span>
        <span className="text-ink/55">{job.type}</span>
      </div>
      <h3 className="mt-4 text-2xl font-extrabold leading-snug">
        <Link href={`/jobs/${job.id}`} className="hover:text-sea">
          {job.title}
        </Link>
      </h3>
      <p className="mt-2 text-ink/70">
        {job.company} · {job.district}
      </p>
      <p className="mt-4 text-sm leading-7 text-ink/75">{job.summary}</p>
      <div className="mt-6 flex items-end justify-between gap-3 border-t border-line pt-4">
        <div>
          <p className="text-sm font-semibold">{job.salary}</p>
          <p className="mt-1 text-xs text-ink/50">Posted {formatPosted(job.postedAt)}</p>
          <a
            href={whatsappUrl(askJobMessage(job.title))}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-sm font-semibold text-sea"
          >
            Ask on WhatsApp
          </a>
        </div>
        <Link
          href={`/jobs/${job.id}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sea-deep text-sand transition group-hover:bg-sea"
          aria-label={`Details for ${job.title}`}
        >
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
