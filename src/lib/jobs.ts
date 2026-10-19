import type { Job } from "./types";

export const jobs: Job[] = [
  {
    id: "frontend-smouha",
    title: "Frontend Developer",
    company: "Shore Studio",
    district: "Smouha",
    city: "Alexandria",
    category: "Technology",
    type: "Full-time",
    salary: "EGP 22,000 — 32,000",
    experience: "2+ years",
    postedAt: "2026-10-12",
    featured: true,
    summary: "Clear interfaces for a product used by companies across the city.",
    description:
      "Shore Studio builds working tools for small companies in Alexandria. This seat is for someone who writes calm, precise interfaces and cares about the details before the effects.",
    responsibilities: [
      "Build new product screens with the design team.",
      "Improve page speed and the phone experience.",
      "Review the interface with the product owner once a week.",
    ],
    requirements: [
      "Practical React experience, including right-to-left layouts.",
      "Work samples that can be opened, not only a profile.",
      "Able to be in Smouha three days a week.",
    ],
  },
  {
    id: "accountant-raml",
    title: "Senior Accountant",
    company: "Ledger House",
    district: "Raml Station",
    city: "Alexandria",
    category: "Accounting",
    type: "Full-time",
    salary: "EGP 15,000 — 20,000",
    experience: "4 years",
    postedAt: "2026-10-09",
    featured: true,
    summary: "Monthly closes and tax files for a steady list of clients downtown.",
    description:
      "Ledger House is an accounting office near Raml Station. They need a senior accountant who runs an existing client list and meets people in the office.",
    responsibilities: [
      "Review daily entries and close each month on time.",
      "Prepare filings and follow the replies.",
      "Explain the numbers to the client in plain language.",
    ],
    requirements: [
      "Commerce degree and accounting-office experience.",
      "Excel and common accounting software.",
      "On site Sunday to Thursday.",
    ],
  },
  {
    id: "sales-port",
    title: "Wholesale Sales",
    company: "Port Stores",
    district: "Mansheya",
    city: "Alexandria",
    category: "Sales",
    type: "Full-time",
    salary: "EGP 10,000 base + commission",
    experience: "3 years in sales",
    postedAt: "2026-10-08",
    featured: true,
    summary: "City accounts, daily warehouse visits, and a written commission.",
    description:
      "Port Stores supplies dry goods to traders in Alexandria. The role is for someone who can open a visit, close an order, and send a short note the same day.",
    responsibilities: [
      "Visit current accounts and open new ones.",
      "Follow collections with finance.",
      "Write what happened on the visit before the day ends.",
    ],
    requirements: [
      "Wholesale experience, preferably food or household goods.",
      "A valid driving licence.",
      "Lives in Alexandria.",
    ],
  },
  {
    id: "designer-naqsh",
    title: "Brand and Print Designer",
    company: "Naqsh House",
    district: "Laurent",
    city: "Alexandria",
    category: "Design",
    type: "Part-time",
    salary: "EGP 12,000 — 16,000",
    experience: "A strong portfolio",
    postedAt: "2026-10-06",
    featured: false,
    summary: "Identities and printed pieces for local shops, three days in Laurent.",
    description:
      "Naqsh House works with restaurants, clinics, and small workshops. They want a designer who is comfortable with Arabic lettering and sends print-ready files.",
    responsibilities: [
      "Design marks, print, and menus.",
      "Prepare print files and follow the press.",
      "Present the idea in one clear meeting.",
    ],
    requirements: [
      "A portfolio with real printed work.",
      "Vector tools, used properly.",
      "Three days a week in the studio.",
    ],
  },
  {
    id: "civil-ofoq",
    title: "Site Engineer",
    company: "Ofoq Office",
    district: "Borg El Arab",
    city: "Alexandria",
    category: "Engineering",
    type: "Contract",
    salary: "Based on site experience",
    experience: "3+ years on sites",
    postedAt: "2026-10-04",
    featured: false,
    summary: "Finishing supervision for housing in Borg El Arab, through the end of the year.",
    description:
      "Ofoq Office needs a site engineer until the current phase is handed over. The work is on the ground every day, with a weekly note back to the office.",
    responsibilities: [
      "Follow contractors and the handover schedule.",
      "Record issues with photos in a weekly report.",
      "Be on site daily.",
    ],
    requirements: [
      "Civil engineering degree.",
      "Finishing or site-supervision experience.",
      "Able to travel to Borg El Arab each day.",
    ],
  },
  {
    id: "pharmacist-loaloa",
    title: "Community Pharmacist",
    company: "Loulou Pharmacy",
    district: "Miami",
    city: "Alexandria",
    category: "Health",
    type: "Full-time",
    salary: "EGP 14,000 — 18,000",
    experience: "Valid licence",
    postedAt: "2026-10-03",
    featured: false,
    summary: "A morning shift in a neighbourhood pharmacy, with time to explain.",
    description:
      "Loulou Pharmacy in Miami is hiring a pharmacist for the morning shift. The pace is steady, and the neighbourhood matters more than the counter speed.",
    responsibilities: [
      "Dispense prescriptions and check interactions.",
      "Keep stock and flag what is running out.",
      "Explain clearly, and with patience.",
    ],
    requirements: [
      "Pharmacy degree and a valid licence.",
      "Community-pharmacy experience is welcome.",
      "The shift is 9:00 to 17:00.",
    ],
  },
  {
    id: "host-corniche",
    title: "Floor Host",
    company: "Corniche Kitchen",
    district: "Montazah",
    city: "Alexandria",
    category: "Hospitality",
    type: "Part-time",
    salary: "Per shift + incentives",
    experience: "At least one season",
    postedAt: "2026-10-02",
    featured: false,
    summary: "Evenings and weekends at a restaurant on the corniche.",
    description:
      "Corniche Kitchen is adding evening shifts. The role is for someone who can welcome guests, hold the room, and settle a queue without raising their voice.",
    responsibilities: [
      "Welcome guests and keep the order of seating.",
      "Coordinate timing with the kitchen.",
      "Close the shift and hand over the cash.",
    ],
    requirements: [
      "Hospitality or restaurant experience.",
      "Clear Arabic. English is useful.",
      "Evenings, plus Thursday and Friday.",
    ],
  },
  {
    id: "coordinator-siyaj",
    title: "Interview Coordinator",
    company: "Siyaj Al-Lubnani",
    district: "Tunnel 45",
    city: "Alexandria",
    category: "Operations",
    type: "Full-time",
    salary: "EGP 11,000 — 14,000",
    experience: "1 year coordinating or in service",
    postedAt: "2026-10-14",
    featured: true,
    summary: "Run the interview diary inside the office at Tunnel 45, Street 45.",
    description:
      "This role sits inside Siyaj Al-Lubnani. We need someone to set interviews, welcome candidates, and follow companies until there is an answer.",
    responsibilities: [
      "Book interviews and confirm them by phone.",
      "Welcome candidates and explain the next step.",
      "Update every file the same day.",
    ],
    requirements: [
      "A calm manner on the phone and at the door.",
      "Personal organisation that shows in the first week.",
      "Office hours on Street 45.",
    ],
  },
  {
    id: "remote-support",
    title: "Customer Support",
    company: "City Line",
    district: "Remote from Alexandria",
    city: "Alexandria",
    category: "Operations",
    type: "Remote",
    salary: "EGP 9,000 — 12,000",
    experience: "Support or contact-centre experience",
    postedAt: "2026-09-28",
    featured: false,
    summary: "Written Arabic support, with one day a month in the office.",
    description:
      "City Line serves customers in Arabic. The work is from home, with a monthly review day at Siyaj Al-Lubnani for the difficult cases.",
    responsibilities: [
      "Reply to tickets inside the agreed time.",
      "Escalate technical issues in a clear note.",
      "Attend the monthly review on Street 45.",
    ],
    requirements: [
      "Fast, correct written Arabic.",
      "Support or phone-sales experience.",
      "A stable connection and your own computer.",
    ],
  },
];

export function getJob(id: string) {
  return jobs.find((job) => job.id === id);
}

export function formatPosted(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}
