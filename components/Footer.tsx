import Link from "next/link";
import { categories } from "@/lib/data/categories";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-16 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl mb-3">The Selvage</p>
          <p className="text-sm text-foreground-muted">
            An editorial fashion magazine about clothes built — and worn — to
            last.
          </p>
        </div>
        <nav className="text-sm">
          <p className="uppercase tracking-wide text-xs text-foreground-muted mb-3">
            Sections
          </p>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <NewsletterSignup />
        </div>
      </div>
      <div className="border-t border-rule mx-auto max-w-6xl px-4 py-4 flex flex-wrap gap-4 justify-between items-center text-xs text-foreground-muted">
        <p>© {new Date().getFullYear()} The Selvage. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://theselvage.substack.com" className="hover:text-accent">
            Substack
          </a>
          <a href="https://x.com" className="hover:text-accent">
            X
          </a>
          <a href="https://pinterest.com" className="hover:text-accent">
            Pinterest
          </a>
          <Link href="/terms" className="hover:text-accent">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
