import type { Metadata } from "next";
import { DeskPanel } from "@/app/desk/DeskPanel";

export const metadata: Metadata = {
  title: "المكتب الداخلي",
  robots: { index: false, follow: false },
};

export default function DeskPage() {
  return <DeskPanel />;
}
