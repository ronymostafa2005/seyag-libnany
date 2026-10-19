"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { jobs } from "@/lib/jobs";
import { askJobMessage, whatsappUrl } from "@/lib/office";

const board = jobs.filter((job) => job.featured);

export function RoleSpotlight() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const job = board[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % board.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-sea-deep p-6 text-sand shadow-[0_30px_80px_-36px_rgba(7,28,26,0.8)] md:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-glow/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-8 h-28 w-28 rounded-full bg-gold-soft/25 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-gold-soft">لوحة مباشرة</p>
        <span className="inline-flex items-center gap-2 text-xs text-sand/70">
          <span className="h-1.5 w-1.5 animate-[pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-glow shadow-[0_0_12px_var(--color-glow)]" />
          {paused ? "متوقفة" : "تتحدث"}
        </span>
      </div>
      <div key={job.id} className="rise relative">
        <p className="mt-8 text-sm text-sand/60">
          {job.category} · {job.type}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">{job.title}</h2>
        <p className="mt-2 text-sand/75">
          {job.company} · {job.district}
        </p>
        <p className="mt-4 max-w-md text-sm leading-7 text-sand/70">{job.summary}</p>
        <p className="mt-4 font-semibold text-gold-soft">{job.salary}</p>
      </div>
      <div className="relative mt-6 flex flex-wrap gap-2">
        {board.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              itemIndex === index ? "bg-sand text-sea-deep" : "bg-white/10 text-sand/80 hover:bg-white/15"
            }`}
            aria-pressed={itemIndex === index}
          >
            {item.category}
          </button>
        ))}
      </div>
      <div className="relative mt-6 flex flex-wrap gap-3">
        <Link href={`/jobs/${job.id}`} className="rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-sea-deep">
          افتح الوظيفة
        </Link>
        <a
          href={whatsappUrl(askJobMessage(job.title))}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold"
        >
          اسأل على واتساب
        </a>
      </div>
    </div>
  );
}
