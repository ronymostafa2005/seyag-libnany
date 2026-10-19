import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { office } from "@/lib/office";

export const metadata: Metadata = {
  title: "أصحاب الأعمال",
  description: "اطلب مرشحين من سياج اللبناني على واتساب.",
};

const points = [
  "صف الوظيفة كما تحدث في يوم عمل.",
  "نقابل الناس في شارع 45 قبل أن نرسل أحدًا.",
  "تصلك أسماء قليلة، مع ملاحظة قصيرة من اللقاء.",
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        kicker="أصحاب الأعمال"
        title="المرشحون بعد اللقاء، لا قبله."
        text="قل لنا الوظيفة على واتساب. نرد بالاتصال، نتفق على ما يهم في الشهر الأول، ثم نبدأ المقابلات في المكتب."
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
          <p className="mt-6 text-sm text-ink/60">لو الأمر مستعجل: {office.phoneDisplay}</p>
        </div>
        <InquiryForm kind="employer" />
      </section>
    </>
  );
}
