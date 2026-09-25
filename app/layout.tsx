import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Selvage",
    template: "%s · The Selvage",
  },
  description:
    "An editorial fashion magazine covering menswear and womenswear — inspiration, style guides, trend commentary, and brand and industry writing, for readers who want clothes built to last.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
