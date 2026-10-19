import { codeMatches, deskToken, tokenMatches } from "@/lib/desk";
import { readList } from "@/lib/store";
import type { Application, Lead } from "@/lib/types";

const cookieName = "nafaq_desk";

export async function GET(request: Request) {
  if (!authed(request)) return Response.json({ error: "Office code required." }, { status: 401 });
  const [applications, leads] = await Promise.all([
    readList<Application>("applications.json"),
    readList<Lead>("leads.json"),
  ]);
  return Response.json({ applications, leads });
}

export async function POST(request: Request) {
  const body = await readBody(request);
  const code = typeof body?.code === "string" ? body.code : "";
  if (!codeMatches(code)) return Response.json({ error: "That code is not right." }, { status: 401 });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `${cookieName}=${deskToken()}; HttpOnly; Path=/; SameSite=Lax; Max-Age=604800`,
    },
  });
}

export async function DELETE() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `${cookieName}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`,
    },
  });
}

function authed(request: Request) {
  const cookie = request.headers.get("cookie") || "";
  const pair = cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`));
  return tokenMatches(pair?.slice(cookieName.length + 1));
}

async function readBody(request: Request) {
  try {
    return (await request.json()) as { code?: string };
  } catch {
    return null;
  }
}
