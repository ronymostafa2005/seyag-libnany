const whatsappNumber = "201222650380";

export const office = {
  name: "سياج اللبناني",
  latin: "Siyaj Al-Lubnani",
  short: "Siyaj",
  tagline: "للتوظيف",
  address: "نفق 45، شارع 45، الإسكندرية",
  tunnel: "نفق 45",
  street: "شارع 45",
  city: "الإسكندرية",
  phone: "01222650380",
  phoneDisplay: "\u20660122 265 0380\u2069",
  phoneHref: "tel:+201222650380",
  whatsappNumber,
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  hours: "الأحد — الخميس، 9:00 إلى 17:00",
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("نفق 45 شارع 45 الإسكندرية")}`,
} as const;

export function whatsappUrl(message: string) {
  return `${office.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function askJobMessage(title: string) {
  return `مرحبًا ${office.name}، أريد السؤال عن وظيفة ${title}.`;
}

export function generalAskMessage() {
  return `مرحبًا ${office.name}، أريد السؤال عن وظيفة.`;
}

export function applyMessage(input: {
  title: string;
  company: string;
  name: string;
  phone: string;
  note: string;
}) {
  const lines = [
    `مرحبًا ${office.name}،`,
    `أريد التقديم على ${input.title} في ${input.company}.`,
    `الاسم: ${input.name}`,
    `الموبايل: ${input.phone}`,
  ];
  if (input.note) lines.push(`ملاحظة: ${input.note}`);
  return lines.join("\n");
}
