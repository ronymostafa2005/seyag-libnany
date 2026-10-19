"use client";

import { useMemo, useState } from "react";
import { JobCard } from "@/components/JobCard";
import { categories, jobTypes, type Job } from "@/lib/types";

const all = "All";

export function JobsExplorer({ jobs }: { jobs: Job[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(all);
  const [type, setType] = useState(all);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const haystack = `${job.title} ${job.company} ${job.district} ${job.category}`.toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesCategory = category === all || job.category === category;
      const matchesType = type === all || job.type === type;
      return matchesQuery && matchesCategory && matchesType;
    });
  }, [jobs, query, category, type]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="rounded-[32px] border border-line bg-paper p-4 md:p-5">
        <label className="block">
          <span className="sr-only">Search roles</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, company, or district"
            className="w-full rounded-2xl border border-line bg-sand px-4 py-3 outline-none"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2">
          {[all, ...categories].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1.5 text-sm ${
                category === item ? "bg-sea-deep text-sand" : "bg-sand text-ink/75"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {[all, ...jobTypes].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                type === item ? "border-gold bg-gold-soft/50" : "border-line"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink/60">
        {visible.length} role{visible.length === 1 ? "" : "s"} showing
      </p>
      {visible.length === 0 ? (
        <p className="mt-8 rounded-[28px] border border-dashed border-line bg-paper px-6 py-12 text-center text-ink/70">
          Nothing matches today. Try another field, or ask the office on WhatsApp.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {visible.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
