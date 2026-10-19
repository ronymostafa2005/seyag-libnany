import { getJob } from "@/lib/jobs";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const job = getJob(id);
  if (!job) return Response.json({ error: "الوظيفة غير موجودة." }, { status: 404 });
  return Response.json({ job });
}
