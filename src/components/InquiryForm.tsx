"use client";

import { FormEvent, useState } from "react";
import { office, whatsappUrl } from "@/lib/office";

type Kind = "visit" | "employer";

export function InquiryForm({ kind }: { kind: Kind }) {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const employer = kind === "employer";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").replace(/[^\d]/g, "");
    const company = String(form.get("company") || "").trim();
    const topic = String(form.get("topic") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (name.length < 3) {
      setError("اكتب اسمك.");
      return;
    }
    if (!/^01[0125]\d{8}$/.test(phone)) {
      setError("اكتب رقم موبايل مصري صحيح.");
      return;
    }
    if (employer && company.length < 2) {
      setError("اكتب اسم الشركة.");
      return;
    }

    const lines = employer
      ? [
          `مرحبًا ${office.name}،`,
          `نحتاج مرشحين لوظيفة.`,
          `الشركة: ${company}`,
          `المسؤول: ${name}`,
          `الموبايل: ${phone}`,
          topic ? `الوظيفة: ${topic}` : "",
          message ? `التفاصيل: ${message}` : "",
        ]
      : [
          `مرحبًا ${office.name}،`,
          `أريد السؤال عن وظيفة.`,
          `الاسم: ${name}`,
          `الموبايل: ${phone}`,
          topic ? `الموضوع: ${topic}` : "",
          message ? `التفاصيل: ${message}` : "",
        ];

    void fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, name, phone, company, topic, message }),
    });
    window.open(whatsappUrl(lines.filter(Boolean).join("\n")), "_blank", "noopener,noreferrer");
    setError("");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-paper p-6">
      <h2 className="text-2xl font-extrabold">{employer ? "اطلب على واتساب" : "اسأل على واتساب"}</h2>
      <p className="mt-2 text-sm leading-7 text-ink/65">
        هذا يفتح محادثة مع {office.name} على {office.phoneDisplay}.
      </p>
      <div className="mt-5 grid gap-3">
        {employer ? <Input name="company" label="الشركة" /> : null}
        <Input name="name" label={employer ? "اسمك" : "الاسم"} />
        <Input name="phone" label="الموبايل" placeholder="01xxxxxxxxx" dir="ltr" />
        {employer ? (
          <Input name="topic" label="الوظيفة المطلوبة" />
        ) : (
          <label className="text-sm">
            السبب
            <select name="topic" className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3" defaultValue="أبحث عن عمل">
              <option>أبحث عن عمل</option>
              <option>موعد مقابلة</option>
              <option>كيف أصل إلى المكتب</option>
            </select>
          </label>
        )}
        <label className="text-sm">
          التفاصيل
          <textarea name="message" rows={5} className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3" />
        </label>
      </div>
      {error ? <p className="mt-3 text-sm text-coral">{error}</p> : null}
      {sent ? <p className="mt-3 text-sm text-sea">المفروض واتساب اتفتح برسالتك.</p> : null}
      <button type="submit" className="mt-5 rounded-full bg-sea-deep px-6 py-3 font-semibold text-sand">
        {employer ? "أرسل على واتساب" : "كمّل على واتساب"}
      </button>
    </form>
  );
}

function Input({
  name,
  label,
  placeholder,
  dir,
}: {
  name: string;
  label: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <label className="text-sm">
      {label}
      <input
        required
        dir={dir}
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3"
      />
    </label>
  );
}
