import BentoCard from "@/components/BentoCard";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getAllArticlesSorted, getArticlesByCategory, getCategories } from "@/lib/sanity/queries";
import Link from "next/link";

// Revalidate periodically so newly published Sanity content shows up without
// needing a full redeploy.
export const revalidate = 60;

export default async function HomePage() {
  const [all, categories] = await Promise.all([getAllArticlesSorted(), getCategories()]);

  if (all.length === 0) {
    return (
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-24 text-center">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight mb-3">
          Nothing published yet
        </h1>
        <p className="text-foreground-muted max-w-md mx-auto">
          Head to{" "}
          <a href="/studio" className="text-accent hover:underline">
            /studio
          </a>{" "}
          to create your first article, category, and author.
        </p>
      </div>
    );
  }

  const [flagship, ...rest] = all;
  const asideItems = rest.slice(0, 4);
  const latest = rest.slice(4, 8);

  // Split the aside articles into two independent columns so each card's
  // height follows its own image, instead of being locked to a shared grid row.
  const colA = [asideItems[0], asideItems[2]].filter(Boolean);
  const colB = [asideItems[1], asideItems[3]].filter(Boolean);

  const categorySections = await Promise.all(
    categories.map(async (category) => ({
      category,
      items: (await getArticlesByCategory(category.slug)).slice(0, 4),
    })),
  );

  return (
    <div className="mx-auto max-w-[1400px] px-8 lg:px-16 py-12 lg:py-14">
      {/* Hero: sticky large story on the left, image-sized teaser columns on the right */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 mb-20 lg:mb-24 items-start content-start">
        <div className="self-start w-full lg:sticky lg:top-[var(--site-header-height,6.5rem)]">
          <BentoCard article={flagship} tall />
        </div>
        <div className="self-start w-full grid grid-cols-2 gap-6 lg:gap-8 items-start content-start">
          <div className="flex flex-col gap-8">
            {colA.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {colB.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {latest.length > 0 && (
        <section className="mb-20 lg:mb-24">
          <div className="flex items-baseline justify-between mb-8 border-b-2 border-rule pb-2">
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight">Latest</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      <NewsletterSignup />

      {categorySections.map(({ category, items }) => {
        if (items.length === 0) return null;
        return (
          <section key={category.slug} className="mt-20 lg:mt-24 mb-20 lg:mb-24">
            <div className="flex items-baseline justify-between mb-8 border-b-2 border-rule pb-2">
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight">
                {category.name}
              </h2>
              <Link
                href={`/${category.slug}`}
                className="text-xs font-bold uppercase tracking-wide text-accent hover:underline whitespace-nowrap"
              >
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {items.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
