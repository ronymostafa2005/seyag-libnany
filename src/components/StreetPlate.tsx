import { office } from "@/lib/office";

export function StreetPlate() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-sea-deep p-6 text-sand md:p-8">
      <p className="text-sm text-gold-soft">Office plate</p>
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
          <p className="text-sm text-sand/60">Street 45 · Alexandria</p>
          <h3 className="mt-2 text-3xl font-extrabold">Through the tunnel, then the office.</h3>
          <p className="mt-4 max-w-sm leading-8 text-sand/75">
            {office.tunnel} is the way in. {office.name} sits on Street 45.
          </p>
          <a href={office.mapsHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-gold-soft">
            Open the map →
          </a>
        </div>
      </div>
    </div>
  );
}
