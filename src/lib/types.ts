export const categories = [
  "Technology",
  "Accounting",
  "Sales",
  "Design",
  "Engineering",
  "Health",
  "Hospitality",
  "Operations",
] as const;

export const jobTypes = ["Full-time", "Part-time", "Remote", "Contract"] as const;

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
