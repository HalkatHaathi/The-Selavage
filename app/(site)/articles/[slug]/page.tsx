import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import ArticleImage from "@/components/ArticleImage";
import ArticleCard from "@/components/ArticleCard";
import { CategoryTag, TagPill } from "@/components/Tag";
import ShareButtons from "@/components/ShareButtons";
import NewsletterSignup from "@/components/NewsletterSignup";
import { formatDate } from "@/lib/format";
import { siteUrl } from "@/lib/site";
import Image from "next/image";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
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

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1400).url();
      return (
        <span className="block relative w-full aspect-[16/10] my-8 overflow-hidden">
          <Image src={url} alt={value.alt ?? ""} fill className="object-cover" />
        </span>
      );
    },
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article);
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const category = article.category;

  return (
    <article>
      <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[560px] overflow-hidden">
        <ArticleImage
          seed={article.slug}
          alt={article.featuredImage.alt}
          src={article.featuredImage.url}
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <header className="mx-auto w-full max-w-[50vw] min-w-0 px-6 py-10 text-center max-lg:max-w-2xl">
        {category && (
          <div className="mb-3">
            <CategoryTag category={category.slug} name={category.name} />
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
          {article.title}
        </h1>
        {article.dek && (
          <p className="text-lg text-foreground-muted mb-4">{article.dek}</p>
        )}
        <p className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
          By {article.author.name} · {formatDate(article.publishDate)}
        </p>
      </header>

      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 pb-16">
        <div className="flex justify-center mb-10">
          <ShareButtons
            url={canonicalUrl}
            title={article.title}
            imageAlt={article.featuredImage.alt}
          />
        </div>

        <div className="prose-selvage max-w-[70ch] mx-auto text-[1.125rem] leading-[1.8] [&>p]:mb-6">
          <PortableText value={article.body} components={portableTextComponents} />
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center my-10">
            {article.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}

        <NewsletterSignup variant="inline" />

        {related.length > 0 && (
          <section className="mt-16 border-t-2 border-rule pt-10">
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight mb-6">
              Related Reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
