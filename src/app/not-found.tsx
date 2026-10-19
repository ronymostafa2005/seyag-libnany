import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-20">
      <p className="text-sm font-semibold text-sea">سياج اللبناني</p>
      <h1 className="mt-3 text-4xl font-extrabold">This path does not lead anywhere.</h1>
      <p className="mt-4 text-lg text-ink/70">The link is missing. Go back to the office, or look at the open roles.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-sea-deep px-5 py-3 text-sand">
          Home
        </Link>
        <Link href="/jobs" className="rounded-full border border-line bg-paper px-5 py-3">
          Roles
        </Link>
      </div>
    </section>
  );
}
