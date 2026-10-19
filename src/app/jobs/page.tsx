import type { Metadata } from "next";
import { JobsExplorer } from "@/app/jobs/JobsExplorer";
import { PageHero } from "@/components/PageHero";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "الوظائف",
  description: "وظائف مفتوحة عبر سياج اللبناني في الإسكندرية. التقديم على واتساب.",
};

export default function JobsPage() {
  return (
    <>
      <PageHero
        kicker="وظائف مفتوحة"
        title="وظائف نشتغل عليها الآن."
        text="كل إعلان مرّ على المكتب. اختر واحدًا، ثم قدّم أو اسأل عنه على واتساب."
      />
      <JobsExplorer jobs={jobs} />
    </>
  );
}
