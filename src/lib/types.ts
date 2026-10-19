export const categories = [
  "تقنية",
  "محاسبة",
  "مبيعات",
  "تصميم",
  "هندسة",
  "صحة",
  "ضيافة",
  "تشغيل",
] as const;

export const jobTypes = ["دوام كامل", "دوام جزئي", "عن بُعد", "عقد"] as const;

export type Category = (typeof categories)[number];
export type JobType = (typeof jobTypes)[number];

export type Job = {
  id: string;
  title: string;
  company: string;
  district: string;
  city: string;
  category: Category;
  type: JobType;
  salary: string;
  experience: string;
  postedAt: string;
  featured: boolean;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  phone: string;
  email: string;
  note: string;
  createdAt: string;
};

export type Lead = {
  id: string;
  kind: "visit" | "employer";
  name: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
  createdAt: string;
};
