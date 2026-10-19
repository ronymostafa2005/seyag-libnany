export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm font-semibold text-sea rise">{kicker}</p>
        <h1 className="rise mt-3 max-w-4xl text-4xl font-extrabold leading-[1.15] md:text-6xl" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        <p className="rise mt-5 max-w-2xl text-lg leading-9 text-ink/70" style={{ animationDelay: "140ms" }}>
          {text}
        </p>
      </div>
    </section>
  );
}
