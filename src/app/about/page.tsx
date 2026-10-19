import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { office } from "@/lib/office";

export const metadata: Metadata = {
  title: "المكتب",
  description: "سياج اللبناني، مكتب توظيف في نفق 45، شارع 45، الإسكندرية.",
};

const beliefs = [
  {
    title: "العنوان ظاهر",
    text: "تعرف أين نجلس قبل أن ترسل صفحة. نفق 45، شارع 45، الإسكندرية.",
  },
  {
    title: "لقاء قبل التعريف",
    text: "لا نمرّر السير الذاتية في كومة. نجلس مع الشخص، ثم نختار شركة واحدة.",
  },
  {
    title: "واتساب هو الباب",
    text: `الأسئلة والطلبات تصل على ${office.phoneDisplay}. لو فاتتنا رسالة، نرد في نفس يوم العمل.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={office.name}
        title="اسمه سياج، لا مكبّر صوت."
        text="سياج اللبناني يحفظ حدًا حول التوافق الجيد. نحن مكتب توظيف في شارع 45، عند نفق 45، في الإسكندرية."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-5xl font-extrabold leading-tight text-sea-deep">{office.name}</p>
          <p className="mt-4 leading-8 text-ink/70">
            الاسم العربي على الباب. المحادثة، من أول سؤال حتى التقديم، تتم على واتساب.
          </p>
        </Reveal>
        <div className="space-y-4">
          {beliefs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-line bg-paper p-6">
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="mt-3 leading-8 text-ink/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
