import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { office } from "@/lib/office";

export const metadata: Metadata = {
  title: "Employers",
  description: "Ask Siyaj Al-Lubnani for candidates on WhatsApp.",
};

const points = [
  "Describe the role as it happens on a working day.",
  "We meet people on Street 45 before we send anyone.",
  "You receive a few names, with a short note from the meeting.",
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        kicker="Employers"
        title="Candidates after the meeting, not before."
        text="Tell us the role on WhatsApp. We call back, agree what matters in the first month, then start interviews in the office."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ol className="space-y-4">
            {points.map((point, index) => (
              <li key={point} className="rounded-[28px] border border-line bg-paper p-5 leading-8">
                <span className="font-extrabold text-gold">0{index + 1}</span>
                <p className="mt-2">{point}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/60">If it is urgent: {office.phoneDisplay}</p>
        </div>
        <InquiryForm kind="employer" />
      </section>
    </>
  );
}
