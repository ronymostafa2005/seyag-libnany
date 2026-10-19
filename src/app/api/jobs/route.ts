import { jobs } from "@/lib/jobs";
import type { Category, JobType } from "@/lib/types";
import { categories, jobTypes } from "@/lib/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";

  const list = jobs.filter((job) => {
    const haystack = `${job.title} ${job.company} ${job.district} ${job.category}`.toLowerCase();
    const matchesQuery = !q || haystack.includes(q);
    const matchesCategory = !category || (categories.includes(category as Category) && job.category === category);
    const matchesType = !type || (jobTypes.includes(type as JobType) && job.type === type);
    return matchesQuery && matchesCategory && matchesType;
  });

  return Response.json({ jobs: list });
}
