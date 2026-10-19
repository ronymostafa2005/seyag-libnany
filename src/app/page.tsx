import { Hero } from "@/components/Hero";
import { JobCard } from "@/components/JobCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { StreetPlate } from "@/components/StreetPlate";
import { jobs } from "@/lib/jobs";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";
import Link from "next/link";

const stations = [
  {
    n: "01",
    title: "اسأل على واتساب",
    text: "سؤال عن وظيفة يفتح محادثة مع المكتب. لا صناديق تضيع.",
  },
  {
    n: "02",
    title: "نجلس ربع ساعة",
    text: "لقاء قصير عند نفق 45. نسمع ما تعمله فعلًا.",
  },
  {
    n: "03",
    title: "تعريف واحد",
    text: "شركة واحدة تناسبك، لا عشرة إعلانات. الرد يرجع على نفس المحادثة.",
  },
];

export default function HomePage() {
  const featured = jobs.filter((job) => job.featured);

  return (
    <>
      <Hero />
      <Marquee items={jobs.map((job) => job.title)} />

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3">
        {[
          ["وظائف مفتوحة", String(jobs.length).padStart(2, "0")],
          ["أول رد", "في يوم عمل"],
          ["المقابلات", office.tunnel],
        ].map(([label, value], index) => (
          <Reveal key={label} delay={index * 0.08}>
            <div className="rounded-[28px] border border-white/70 bg-paper/75 px-6 py-7 shadow-sm backdrop-blur">
              <p className="text-sm text-ink/50">{label}</p>
              <p className="mt-3 text-3xl font-extrabold text-sea-deep">{value}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-sea">هذا الأسبوع</p>
            <h2 className="mt-2 text-4xl font-extrabold">وظائف يشتغل عليها المكتب فعلًا.</h2>
          </div>
          <Link href="/jobs" className="font-semibold text-sea">
            كل الوظائف ←
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.06}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold text-sea">ثلاث خطوات</p>
          <h2 className="mt-2 max-w-2xl text-4xl font-extrabold">سياج، لا قمع من الإعلانات.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stations.map((station, index) => (
            <Reveal key={station.n} delay={index * 0.08}>
              <article className="h-full rounded-[28px] bg-sea-deep p-6 text-sand">
                <p className="text-gold-soft">{station.n}</p>
                <h3 className="mt-6 text-2xl font-extrabold">{station.title}</h3>
                <p className="mt-3 leading-8 text-sand/75">{station.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-5 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[32px] border border-line bg-paper p-7">
            <p className="text-sm text-sea">تبحث عن عمل</p>
            <h2 className="mt-3 text-3xl font-extrabold">ابدأ بوظيفة واحدة، على واتساب.</h2>
            <p className="mt-4 leading-8 text-ink/70">
              افتح إعلانًا وقدّم في المحادثة، أو اسأل أولًا. الخط هو {office.phoneDisplay}.
            </p>
            <Link href="/jobs" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sand">
              شاهد الوظائف
            </Link>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-[32px] border border-line bg-foam p-7">
            <p className="text-sm text-sea">للتوظيف</p>
            <h2 className="mt-3 text-3xl font-extrabold">صف يوم العمل، لا الشعار.</h2>
            <p className="mt-4 leading-8 text-ink/70">
              نقابل المرشحين في شارع 45 قبل أن يصل أحد إليك. تصلك أسماء قليلة، بعد أن نجلس معهم.
            </p>
            <Link href="/employers" className="mt-6 inline-flex rounded-full bg-sea px-5 py-3 text-paper">
              اطلب مرشحين
            </Link>
          </article>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
        <Reveal>
          <StreetPlate />
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="text-sm font-semibold text-sea">زيارة</p>
            <h2 className="mt-2 text-4xl font-extrabold">العنوان جزء من الاسم.</h2>
            <p className="mt-4 leading-8 text-ink/75">
              {office.hours}. لو هتتأخر عند النفق، ابعت رسالة قبل ما ترجع.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(generalAskMessage())}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sea-deep px-5 py-3 font-semibold text-sand"
              >
                واتساب {office.phoneDisplay}
              </a>
              <a href={office.phoneHref} className="rounded-full border border-line bg-paper px-5 py-3 font-semibold">
                اتصل
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
