"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Application, Lead } from "@/lib/types";

type DeskData = {
  applications: Application[];
  leads: Lead[];
};

export function DeskPanel() {
  const [data, setData] = useState<DeskData | null>(null);
  const [ready, setReady] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function load() {
    const response = await fetch("/api/desk");
    if (response.status === 401) {
      setData(null);
      setReady(true);
      return;
    }
    setData((await response.json()) as DeskData);
    setReady(true);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void load();
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  async function login(event: FormEvent) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/desk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (!response.ok) {
      setError("هذا الرمز غير صحيح.");
      return;
    }
    await load();
  }

  async function logout() {
    await fetch("/api/desk", { method: "DELETE" });
    setData(null);
  }

  if (!ready) {
    return <p className="px-5 py-20 text-center text-ink/60">جارٍ فتح المكتب...</p>;
  }

  if (!data) {
    return (
      <form onSubmit={login} className="mx-auto max-w-md px-5 py-20">
        <p className="text-sm text-sea">المكتب الداخلي</p>
        <h1 className="mt-2 text-4xl font-extrabold">أدخل رمز المكتب.</h1>
        <p className="mt-3 leading-8 text-ink/70">على هذا الجهاز الرمز التجريبي 4545. غيّره عبر DESK_CODE.</p>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          inputMode="numeric"
          className="mt-6 w-full rounded-2xl border border-line bg-paper px-4 py-3"
          placeholder="الرمز"
        />
        {error ? <p className="mt-3 text-sm text-coral">{error}</p> : null}
        <button type="submit" className="mt-4 rounded-full bg-sea-deep px-5 py-3 font-semibold text-sand">
          افتح المكتب
        </button>
      </form>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-sea">المكتب الداخلي</p>
          <h1 className="mt-2 text-4xl font-extrabold">الطلبات والرسائل.</h1>
        </div>
        <button type="button" onClick={logout} className="rounded-full border border-line bg-paper px-4 py-2 text-sm">
          إغلاق
        </button>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <List
          title="الطلبات"
          empty="لا طلبات بعد."
          rows={data.applications.map((item) => ({
            id: item.id,
            title: item.name,
            meta: `${item.jobTitle} · ${item.phone}`,
            body: item.note || item.email || "بدون ملاحظة",
            time: item.createdAt,
          }))}
        />
        <List
          title="الزيارات والشركات"
          empty="لا رسائل بعد."
          rows={data.leads.map((item) => ({
            id: item.id,
            title: item.kind === "employer" ? item.company || item.name : item.name,
            meta: `${item.kind === "employer" ? "شركة" : "زيارة"} · ${item.phone}`,
            body: `${item.topic}${item.message ? ` — ${item.message}` : ""}`,
            time: item.createdAt,
          }))}
        />
      </div>
    </section>
  );
}

function List({
  title,
  empty,
  rows,
}: {
  title: string;
  empty: string;
  rows: { id: string; title: string; meta: string; body: string; time: string }[];
}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-4 rounded-3xl border border-dashed border-line px-4 py-8 text-ink/60">{empty}</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {rows.map((row) => (
            <li key={row.id} className="rounded-3xl border border-line bg-paper p-4">
              <p className="font-bold">{row.title}</p>
              <p className="mt-1 text-sm text-sea">{row.meta}</p>
              <p className="mt-2 text-sm leading-7 text-ink/75">{row.body}</p>
              <p className="mt-2 text-xs text-ink/45">
                {new Intl.DateTimeFormat("ar-EG", { dateStyle: "medium", timeStyle: "short" }).format(new Date(row.time))}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
