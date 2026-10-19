import { createId, updateList } from "@/lib/store";
import type { Lead } from "@/lib/types";
import { clean, digits, isEgyptianMobile } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await readBody(request);
  if (!body) return Response.json({ error: "The form could not be read." }, { status: 400 });

  const kind = body.kind === "employer" ? "employer" : body.kind === "visit" ? "visit" : "";
  const name = clean(body.name, 80);
  const phone = digits(clean(body.phone, 20));
  const company = clean(body.company, 120);
  const topic = clean(body.topic, 140);
  const message = clean(body.message, 1000);

  if (!kind) return Response.json({ error: "Unknown message type." }, { status: 400 });
  if (name.length < 3) return Response.json({ error: "Enter your name." }, { status: 400 });
  if (!isEgyptianMobile(phone)) return Response.json({ error: "Enter a valid Egyptian mobile number." }, { status: 400 });
  if (kind === "employer" && company.length < 2) {
    return Response.json({ error: "Enter the company name." }, { status: 400 });
  }

  const lead: Lead = {
    id: createId("lead"),
    kind,
    name,
    phone,
    company,
    topic,
    message,
    createdAt: new Date().toISOString(),
  };

  await updateList("leads.json", lead);
  return Response.json({ ok: true, id: lead.id });
}

async function readBody(request: Request) {
  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}
