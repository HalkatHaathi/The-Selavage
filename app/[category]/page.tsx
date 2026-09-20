import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategory } from "@/lib/data/categories";
import { getArticlesByCategory } from "@/lib/data/articles";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 border-b border-rule pb-6">
        <h1 className="font-display text-4xl mb-3">{category.name}</h1>
        <p className="text-foreground-muted max-w-2xl">{category.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="text-foreground-muted">
          Nothing published in this section yet — check back soon.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
