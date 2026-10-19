import Link from "next/link";
import { formatPosted } from "@/lib/jobs";
import { askJobMessage, whatsappUrl } from "@/lib/office";
import type { Job } from "@/lib/types";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-paper/85 p-5 shadow-[0_18px_50px_-36px_rgba(20,36,31,0.7)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(15,110,104,0.55)]">
      <span className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-r from-sea via-glow to-gold transition duration-500 group-hover:scale-x-100" />
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
          <p className="mt-1 text-xs text-ink/50">نُشر {formatPosted(job.postedAt)}</p>
          <a
            href={whatsappUrl(askJobMessage(job.title))}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-sm font-semibold text-sea"
          >
            اسأل على واتساب
          </a>
        </div>
        <Link
          href={`/jobs/${job.id}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sea-deep text-sand transition group-hover:bg-sea"
          aria-label={`تفاصيل ${job.title}`}
        >
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </article>
  );
}
