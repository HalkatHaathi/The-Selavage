import Link from "next/link";
import { categories } from "@/lib/data/categories";
import SearchBar from "@/components/SearchBar";

const navLinks = [
  { href: "/", label: "Home" },
  ...categories.map((c) => ({ href: `/${c.slug}`, label: c.name })),
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-foreground-muted py-2 border-b border-rule">
        <span>Vol. 01 — 2026</span>
        <span className="hidden sm:inline text-accent">No Shop. No Fast Fashion.</span>
        <span>Est. 2026</span>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-center">
        <Link href="/" className="inline-block">
          <span className="font-display text-5xl sm:text-6xl font-black tracking-tight">
            The Selvage
          </span>
        </Link>
      </div>
      <div className="h-[3px] bg-accent" />
      <nav className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-4 py-3 border-b border-rule">
        <SearchBar compact />
      </div>
    </header>
  );
}
