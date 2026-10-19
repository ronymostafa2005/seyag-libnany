import Link from "next/link";
import { RoleSpotlight } from "@/components/RoleSpotlight";
import { generalAskMessage, office, whatsappUrl } from "@/lib/office";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-8 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pt-14">
      <div>
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-sm text-sea">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          {office.city} · {office.tunnel}
        </p>
        <h1 className="rise mt-6 text-5xl font-extrabold leading-tight md:text-6xl" style={{ animationDelay: "80ms" }}>
          اسأل. قدّم. على واتساب.
        </h1>
        <p className="rise mt-6 max-w-xl text-lg leading-9 text-ink/75" style={{ animationDelay: "140ms" }}>
          {office.name} مكتب توظيف في {office.address}. السؤال عن وظيفة، أو التقديم، يصل مباشرة إلى خط المكتب.
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <Link href="/jobs" className="rounded-full bg-sea-deep px-6 py-3 font-semibold text-sand shadow-[0_14px_30px_-18px_rgba(7,28,26,0.9)]">
            تصفّح الوظائف
          </Link>
          <a
            href={whatsappUrl(generalAskMessage())}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-paper/80 px-6 py-3 font-semibold backdrop-blur"
          >
            راسل المكتب
          </a>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm">
          <div className="rounded-3xl border border-white/70 bg-paper/70 p-4 shadow-sm backdrop-blur">
            <dt className="text-ink/50">العنوان</dt>
            <dd className="mt-1 font-semibold leading-7">{office.address}</dd>
          </div>
          <div className="rounded-3xl border border-white/70 bg-paper/70 p-4 shadow-sm backdrop-blur">
            <dt className="text-ink/50">واتساب</dt>
            <dd className="mt-1 font-semibold">
              <a href={whatsappUrl(generalAskMessage())} target="_blank" rel="noreferrer">
                {office.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="rise" style={{ animationDelay: "120ms" }}>
        <RoleSpotlight />
      </div>
    </section>
  );
}
