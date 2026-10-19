import { generalAskMessage, whatsappUrl } from "@/lib/office";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl(generalAskMessage())}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 end-5 z-40 inline-flex items-center gap-2 rounded-full bg-sea-deep px-4 py-3 text-sm font-semibold text-sand shadow-[0_16px_40px_-16px_rgba(7,28,26,0.8)] transition hover:-translate-y-0.5"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366] text-[11px] text-sea-deep">W</span>
      واتساب
    </a>
  );
}
