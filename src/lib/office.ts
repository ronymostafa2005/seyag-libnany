const whatsappNumber = "201153490204";

export const office = {
  name: "سياج اللبناني",
  latin: "Siyaj Al-Lubnani",
  short: "Siyaj",
  tagline: "Recruitment",
  address: "Tunnel 45, Street 45, Alexandria",
  tunnel: "Tunnel 45",
  street: "Street 45",
  city: "Alexandria",
  phone: "01153490204",
  phoneDisplay: "0115 349 0204",
  phoneHref: "tel:+201153490204",
  whatsappNumber,
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  hours: "Sunday — Thursday, 9:00 to 17:00",
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("نفق 45 شارع 45 الإسكندرية")}`,
} as const;

export function whatsappUrl(message: string) {
  return `${office.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function askJobMessage(title: string) {
  return `Hello ${office.name}, I would like to ask about the ${title} role.`;
}

export function generalAskMessage() {
  return `Hello ${office.name}, I would like to ask about a job.`;
}

export function applyMessage(input: {
  title: string;
  company: string;
  name: string;
  phone: string;
  note: string;
}) {
  const lines = [
    `Hello ${office.name},`,
    `I would like to apply for ${input.title} at ${input.company}.`,
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
  ];
  if (input.note) lines.push(`Note: ${input.note}`);
  return lines.join("\n");
}
