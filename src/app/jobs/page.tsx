import type { Metadata } from "next";
import { JobsExplorer } from "@/app/jobs/JobsExplorer";
import { PageHero } from "@/components/PageHero";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Roles",
  description: "Open roles through Siyaj Al-Lubnani in Alexandria. Apply on WhatsApp.",
};

export default function JobsPage() {
  return (
    <>
      <PageHero
        kicker="Open roles"
        title="Roles we are working now."
        text="Every listing passed through the office. Choose one, then apply or ask about it on WhatsApp."
      />
      <JobsExplorer jobs={jobs} />
    </>
  );
}
