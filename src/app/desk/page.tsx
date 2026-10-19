import type { Metadata } from "next";
import { DeskPanel } from "@/app/desk/DeskPanel";

export const metadata: Metadata = {
  title: "Office desk",
  robots: { index: false, follow: false },
};

export default function DeskPage() {
  return <DeskPanel />;
}
