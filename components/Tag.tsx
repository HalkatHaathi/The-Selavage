import Link from "next/link";

export function CategoryTag({ category, name }: { category: string; name: string }) {
  return (
    <Link
      href={`/${category}`}
      className="text-xs uppercase tracking-wide text-accent hover:underline"
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
