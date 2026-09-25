import Link from "next/link";
import FooterSocialLinks from "@/components/FooterSocialLinks";
import { getCategories } from "@/lib/sanity/queries";

export default async function Footer() {
  const categories = await getCategories();
  return (
    <footer className="bg-black text-white mt-16">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-black uppercase mb-6">The Selvage</p>
          <FooterSocialLinks />
        </div>

        <nav className="text-sm">
          <p className="nav-link text-[11px] text-white/60 mb-4">
            More From The Selvage
          </p>
          <ul className="space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="font-semibold hover:text-white/70 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="text-sm">
          <p className="nav-link text-[11px] text-white/60 mb-4">
            The Selvage
          </p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/about" className="font-semibold hover:text-white/70 transition-colors">
                About &amp; Masthead
              </Link>
            </li>
            <li>
              <Link href="/search" className="font-semibold hover:text-white/70 transition-colors">
                Search
              </Link>
            </li>
            <li>
              <a href="mailto:editor@theselvage.example.com" className="font-semibold hover:text-white/70 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-5 flex flex-wrap gap-x-6 gap-y-2 items-center text-xs">
          <Link href="/about" className="hover:text-white/70 transition-colors">
            About
          </Link>
          <span className="text-white/30">|</span>
          <Link href="/terms" className="hover:text-white/70 transition-colors">
            Terms of Use
          </Link>
          <span className="text-white/30">|</span>
          <Link href="/privacy" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/30">|</span>
          <a href="mailto:editor@theselvage.example.com" className="hover:text-white/70 transition-colors">
            Contact
          </a>
        </div>
        <div className="mx-auto max-w-[1400px] px-8 lg:px-16 pb-6 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} The Selvage. All rights reserved. The material on
            this site may not be reproduced, distributed, transmitted, cached, or
            otherwise used except with prior written permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
