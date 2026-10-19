import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { StreetPlate } from "@/components/StreetPlate";
import { office } from "@/lib/office";

export const metadata: Metadata = {
  title: "الزيارة",
  description: "سياج اللبناني في نفق 45، شارع 45، الإسكندرية، أو راسلنا على واتساب.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="زيارة"
        title="تعال، أو ابعت رسالة قبل ما تتحرك."
        text={`${office.address}. ${office.hours}.`}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 lg:grid-cols-2">
        <div className="space-y-4">
          <StreetPlate />
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={office.phoneHref} className="rounded-[28px] border border-line bg-paper p-5">
              <p className="text-sm text-ink/50">اتصال</p>
              <p className="mt-2 text-2xl font-extrabold">{office.phoneDisplay}</p>
            </a>
            <div className="rounded-[28px] border border-line bg-paper p-5">
              <p className="text-sm text-ink/50">واتساب</p>
              <p className="mt-2 text-2xl font-extrabold">نفس الرقم</p>
            </div>
          </div>
        </div>
        <InquiryForm kind="visit" />
      </section>
    </>
  );
}
