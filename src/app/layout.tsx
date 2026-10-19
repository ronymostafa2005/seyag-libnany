import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLoader } from "@/components/SiteLoader";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "سياج اللبناني — توظيف في الإسكندرية",
    template: "%s — سياج اللبناني",
  },
  description:
    "سياج اللبناني مكتب توظيف في نفق 45، شارع 45، الإسكندرية. اسأل عن وظيفة أو قدّم على واتساب: 01153490204.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" data-theme="cedar" className={cairo.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("siyaj-theme");if(t==="cedar"||t==="dusk"||t==="ember"||t==="tide"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`,
          }}
        />
        <SiteLoader />
        <SiteHeader />
        <main>{children}</main>
        <WhatsAppFab />
        <SiteFooter />
      </body>
    </html>
  );
}
