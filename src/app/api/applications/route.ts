import { getJob } from "@/lib/jobs";
import { createId, updateList } from "@/lib/store";
import type { Application } from "@/lib/types";
import { clean, digits, isEgyptianMobile, isEmail } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await readBody(request);
  if (!body) return Response.json({ error: "تعذّر قراءة النموذج." }, { status: 400 });

  const jobId = clean(body.jobId, 80);
  const job = getJob(jobId);
  const name = clean(body.name, 80);
  const phone = digits(clean(body.phone, 20));
  const email = clean(body.email, 120);
  const note = clean(body.note, 800);

  if (!job) return Response.json({ error: "هذه الوظيفة لم تعد مفتوحة." }, { status: 404 });
  if (name.length < 3) return Response.json({ error: "اكتب اسمك." }, { status: 400 });
  if (!isEgyptianMobile(phone)) return Response.json({ error: "اكتب رقم موبايل مصري صحيح." }, { status: 400 });
  if (email && !isEmail(email)) return Response.json({ error: "البريد الإلكتروني غير مكتمل." }, { status: 400 });

  const application: Application = {
    id: createId("app"),
    jobId: job.id,
    jobTitle: job.title,
    name,
    phone,
    email,
    note,
    createdAt: new Date().toISOString(),
  };

  await updateList("applications.json", application);
  return Response.json({ ok: true, id: application.id });
}

async function readBody(request: Request) {
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}
