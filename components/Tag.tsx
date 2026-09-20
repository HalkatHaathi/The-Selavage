import Link from "next/link";

export function CategoryTag({ category, name }: { category: string; name: string }) {
  return (
    <Link
      href={`/${category}`}
      className="inline-block bg-accent text-[#f3ede0] text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 hover:opacity-90"
    >
      {name}
    </Link>
  );
}

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(tag)}`}
      className="text-xs border border-rule rounded-full px-2.5 py-1 text-foreground-muted hover:border-accent hover:text-accent"
    >
      {tag}
    </Link>
  );
}
