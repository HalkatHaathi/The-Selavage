import type { Metadata } from "next";
import { getAllArticlesSorted } from "@/lib/sanity/queries";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Search",
};

export const revalidate = 60;

function plainTextFromBody(body: unknown): string {
  if (!Array.isArray(body)) return "";
  return body
    .map((block) => {
      if (!block || typeof block !== "object" || !("children" in block)) return "";
      const children = (block as { children?: { text?: string }[] }).children;
      return (children ?? []).map((c) => c.text ?? "").join(" ");
    })
    .join(" ");
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const results = query
    ? (await getAllArticlesSorted()).filter((a) => {
        const haystack = [
          a.title,
          a.dek ?? "",
          plainTextFromBody(a.body),
          ...a.tags,
          a.category?.name ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : [];

  return (
    <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-10">
      <h1 className="font-display text-4xl font-black uppercase tracking-tight mb-6">Search</h1>
      <div className="mb-10">
        <SearchBar />
      </div>

      {query && (
        <p className="text-sm text-foreground-muted mb-8">
          {results.length} result{results.length === 1 ? "" : "s"} for
          &ldquo;{q}&rdquo;
        </p>
      )}

      {query && results.length === 0 && (
        <p className="text-foreground-muted">
          Nothing matched that search. Try a category name or a tag like
          &ldquo;denim&rdquo; or &ldquo;capsule wardrobe.&rdquo;
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
