export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-paper py-4">
      <div className="marquee-track flex w-max gap-8 pe-8">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8 text-lg font-semibold text-ink/80">
            {item}
            <span className="text-gold" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
