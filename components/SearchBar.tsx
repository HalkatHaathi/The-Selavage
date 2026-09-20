"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex items-center gap-2 ${compact ? "max-w-sm mx-auto" : "max-w-md"}`}
      role="search"
    >
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search articles, tags…"
        aria-label="Search articles"
        className="w-full bg-transparent border-b border-rule px-1 py-1 text-sm placeholder:text-foreground-muted focus:outline-none focus:border-accent"
      />
      <button
        type="submit"
        className="text-xs uppercase tracking-wide text-accent hover:underline"
      >
        Search
      </button>
    </form>
  );
}
