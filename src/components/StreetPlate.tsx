import { office } from "@/lib/office";

export function StreetPlate() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-sea-deep p-6 text-sand md:p-8">
      <p className="text-sm text-gold-soft">لوحة المكتب</p>
      <div className="mt-8 grid grid-cols-[auto_1fr] gap-5">
        <div className="relative flex w-16 flex-col items-center">
          <span className="h-10 w-px bg-gold-soft/40" />
          <span className="grid h-16 w-16 place-items-center rounded-full border border-gold-soft/50 text-xl font-extrabold text-gold-soft">
            45
          </span>
          <span className="h-16 w-px bg-gold-soft/40" />
          <span className="h-3 w-3 rounded-full bg-coral" />
        </div>
        <div className="pt-8">
          <p className="text-sm text-sand/60">{office.street} · {office.city}</p>
          <h3 className="mt-2 text-3xl font-extrabold">من النفق، ثم المكتب.</h3>
          <p className="mt-4 max-w-sm leading-8 text-sand/75">
            {office.tunnel} هو المدخل. {office.name} على {office.street}.
          </p>
          <a href={office.mapsHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-gold-soft">
            افتح الخريطة ←
          </a>
        </div>
      </div>
    </div>
  );
}
