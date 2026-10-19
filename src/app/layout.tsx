import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLoader } from "@/components/SiteLoader";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Siyaj Al-Lubnani — Recruitment in Alexandria",
    template: "%s — Siyaj Al-Lubnani",
  },
  description:
    "سياج اللبناني is a recruitment office at Tunnel 45, Street 45, Alexandria. Ask about a role or apply on WhatsApp: 01153490204.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={cairo.variable}>
      <body className="min-h-screen antialiased">
        <SiteLoader />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
