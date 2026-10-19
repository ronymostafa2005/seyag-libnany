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
      setError("Enter your name.");
      return;
    }
    if (!/^01[0125]\d{8}$/.test(phone)) {
      setError("Enter a valid Egyptian mobile number.");
      return;
    }
    if (employer && company.length < 2) {
      setError("Enter the company name.");
      return;
    }

    const lines = employer
      ? [
          `Hello ${office.name},`,
          `We would like candidates for a role.`,
          `Company: ${company}`,
          `Contact: ${name}`,
          `Phone: ${phone}`,
          topic ? `Role: ${topic}` : "",
          message ? `Details: ${message}` : "",
        ]
      : [
          `Hello ${office.name},`,
          `I would like to ask about a job.`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          topic ? `Topic: ${topic}` : "",
          message ? `Details: ${message}` : "",
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
      <h2 className="text-2xl font-extrabold">{employer ? "Request on WhatsApp" : "Ask on WhatsApp"}</h2>
      <p className="mt-2 text-sm leading-7 text-ink/65">
        This opens a chat with {office.name} on {office.phoneDisplay}.
      </p>
      <div className="mt-5 grid gap-3">
        {employer ? <Input name="company" label="Company" /> : null}
        <Input name="name" label={employer ? "Your name" : "Name"} />
        <Input name="phone" label="Mobile" placeholder="01xxxxxxxxx" />
        {employer ? (
          <Input name="topic" label="Role you need" />
        ) : (
          <label className="text-sm">
            Reason
            <select name="topic" className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3" defaultValue="Looking for work">
              <option>Looking for work</option>
              <option>Interview time</option>
              <option>How to reach the office</option>
            </select>
          </label>
        )}
        <label className="text-sm">
          Details
          <textarea name="message" rows={5} className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3" />
        </label>
      </div>
      {error ? <p className="mt-3 text-sm text-coral">{error}</p> : null}
      {sent ? <p className="mt-3 text-sm text-sea">WhatsApp should be open with your message.</p> : null}
      <button type="submit" className="mt-5 rounded-full bg-sea-deep px-6 py-3 font-semibold text-sand">
        {employer ? "Send on WhatsApp" : "Continue on WhatsApp"}
      </button>
    </form>
  );
}

function Input({ name, label, placeholder }: { name: string; label: string; placeholder?: string }) {
  return (
    <label className="text-sm">
      {label}
      <input
        required
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-2xl border border-line bg-sand px-3 py-3"
      />
    </label>
  );
}
