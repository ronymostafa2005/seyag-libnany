"use client";

import { FormEvent, useState } from "react";
import { applyMessage, askJobMessage, whatsappUrl } from "@/lib/office";
import type { Job } from "@/lib/types";

const initial = { name: "", phone: "", note: "" };

export function ApplyForm({ job }: { job: Job }) {
  const [fields, setFields] = useState(initial);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = fields.name.trim();
    const phone = fields.phone.replace(/[^\d]/g, "");
    if (name.length < 3) {
      setError("اكتب اسمك.");
      return;
    }
    if (!/^01[0125]\d{8}$/.test(phone)) {
      setError("اكتب رقم موبايل مصري صحيح.");
      return;
    }
    setError("");
    const message = applyMessage({
      title: job.title,
      company: job.company,
      name,
      phone,
      note: fields.note.trim(),
    });
    void fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, phone, name, jobId: job.id }),
    });
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="space-y-4">
      <a
        href={whatsappUrl(askJobMessage(job.title))}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between rounded-[28px] border border-line bg-foam px-5 py-4"
      >
        <span>
          <span className="block text-sm text-sea">سؤال، لا طلب توظيف</span>
          <span className="mt-1 block font-bold">اسأل عن هذه الوظيفة</span>
        </span>
        <span aria-hidden="true">←</span>
      </a>

      <form onSubmit={onSubmit} className="rounded-[28px] border border-line bg-paper p-6">
        <h2 className="text-2xl font-extrabold">قدّم على واتساب</h2>
        <p className="mt-2 text-sm leading-7 text-ink/65">
          اسمك وموبايلك يفتحان محادثة مع سياج اللبناني، وفيها هذه الوظيفة جاهزة.
        </p>
        <div className="mt-5 space-y-3">
          <Field label="الاسم" value={fields.name} onChange={(name) => setFields({ ...fields, name })} />
          <Field
            label="الموبايل"
            value={fields.phone}
            inputMode="tel"
            placeholder="01xxxxxxxxx"
            dir="ltr"
            onChange={(phone) => setFields({ ...fields, phone })}
          />
          <label className="block text-sm">
            ملاحظة قصيرة
            <textarea
              value={fields.note}
              onChange={(event) => setFields({ ...fields, note: event.target.value })}
              rows={4}
              className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3 outline-none"
            />
          </label>
        </div>
        {error ? <p className="mt-3 text-sm text-coral">{error}</p> : null}
        {sent ? (
          <p className="mt-3 text-sm text-sea">المفروض واتساب اتفتح. لو ما اتفتحش، اضغط الزر تاني.</p>
        ) : null}
        <button type="submit" className="mt-5 w-full rounded-full bg-sea-deep py-3 font-semibold text-sand">
          كمّل على واتساب
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
  dir,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputMode?: "tel" | "text";
  dir?: "ltr" | "rtl";
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        required
        dir={dir}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3 outline-none"
      />
    </label>
  );
}
