import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/data/articles";
import { getCategory } from "@/lib/data/categories";
import ArticleImage from "@/components/ArticleImage";
import ArticleCard from "@/components/ArticleCard";
import { CategoryTag, TagPill } from "@/components/Tag";
import ShareButtons from "@/components/ShareButtons";
import NewsletterSignup from "@/components/NewsletterSignup";
import { formatDate } from "@/lib/format";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const canonical = `${siteUrl}/articles/${article.slug}`;
  return {
    title: article.seo?.metaTitle ?? article.title,
    description: article.seo?.metaDescription ?? article.dek,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.dek,
      url: canonical,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = getRelatedArticles(article);
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8 text-center">
        {category && (
          <div className="mb-3">
            <CategoryTag category={category.slug} name={category.name} />
          </div>
        )}
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">
          {article.title}
        </h1>
        {article.dek && (
          <p className="text-lg text-foreground-muted mb-4">{article.dek}</p>
        )}
        <p className="text-sm text-foreground-muted">
          By {article.author.name} · {formatDate(article.publishDate)}
        </p>
      </header>

      <ArticleImage
        seed={article.slug}
        alt={article.featuredImage.alt}
        className="aspect-[16/9] w-full mb-8"
      />

      <div className="flex justify-center mb-10">
        <ShareButtons url={canonicalUrl} title={article.title} imageAlt={article.featuredImage.alt} />
      </div>

      <div
        className="prose-selvage max-w-[70ch] mx-auto text-[1.125rem] leading-[1.8] [&>p]:mb-6"
        dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
      />

      <div className="flex flex-wrap gap-2 justify-center my-10">
        {article.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>

      <NewsletterSignup variant="inline" />

      {related.length > 0 && (
        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-display text-2xl mb-6">Related Reading</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
