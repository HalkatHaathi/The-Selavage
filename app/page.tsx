import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories } from "@/lib/data/categories";
import { getAllArticlesSorted, getArticlesByCategory } from "@/lib/data/articles";
import Link from "next/link";

export default function HomePage() {
  const all = getAllArticlesSorted();
  const [flagship, ...rest] = all;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Hero article={flagship} />

      <section className="mb-16">
        <h2 className="font-display text-2xl mb-6">Latest</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {rest.slice(0, 6).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {categories.map((category) => {
        const items = getArticlesByCategory(category.slug).slice(0, 3);
        if (items.length === 0) return null;
        return (
          <section key={category.slug} className="mb-16">
            <div className="flex items-baseline justify-between mb-6 border-b border-rule pb-2">
              <h2 className="font-display text-2xl">Latest in {category.name}</h2>
              <Link href={`/${category.slug}`} className="text-xs uppercase tracking-wide text-accent hover:underline">
                View all
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {items.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        );
      })}

      <NewsletterSignup />
    </div>
  );
}
