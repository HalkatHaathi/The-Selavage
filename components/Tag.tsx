import Link from "next/link";

export function CategoryTag({
  category,
  name,
  light = false,
}: {
  category: string;
  name: string;
  light?: boolean;
}) {
  return (
    <Link
      href={`/${category}`}
      className={`inline-block text-[10px] font-bold uppercase tracking-[0.1em] hover:text-accent transition-colors ${
        light ? "text-white" : "text-foreground-muted"
      }`}
    >
      {name}
    </Link>
  );
}

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(tag)}`}
      className="text-xs font-semibold uppercase tracking-wide border border-rule rounded-full px-3 py-1.5 text-foreground-muted hover:border-accent hover:text-accent transition-colors"
    >
      {tag}
    </Link>
  );
}
