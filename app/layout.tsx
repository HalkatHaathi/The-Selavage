import type { Metadata } from "next";
import "./globals.css";
import { displaySerif, bodySerif } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Selvage",
    template: "%s · The Selvage",
  },
  description:
    "An editorial fashion magazine covering menswear and womenswear — inspiration, style guides, trend commentary, and brand and industry writing, for readers who want clothes built to last.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
