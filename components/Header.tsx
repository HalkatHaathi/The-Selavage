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
    <header className="border-b border-rule bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-4 text-center">
        <Link href="/" className="inline-block">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            The Selvage
          </span>
        </Link>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground-muted">
          Menswear &amp; Womenswear, Considered Slowly
        </p>
      </div>
      <nav className="selvage-edge border-t border-rule">
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
