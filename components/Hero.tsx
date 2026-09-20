import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "@/components/ArticleImage";
import { getCategory } from "@/lib/data/categories";
import { formatDate } from "@/lib/format";

export default function Hero({ article }: { article: Article }) {
  const category = getCategory(article.category);
  return (
    <section className="relative mb-16">
      <Link href={`/articles/${article.slug}`} className="block relative">
        <ArticleImage
          seed={article.slug}
          alt={article.featuredImage.alt}
          className="aspect-[16/10] sm:aspect-[21/9] w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1210]/85 via-[#1c1210]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-[#f3ede0]">
          {category && (
            <span className="inline-block bg-accent text-[#f3ede0] text-xs uppercase tracking-[0.2em] px-3 py-1 mb-4">
              {category.name}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            {article.title}
          </h1>
          {article.dek && (
            <p className="mt-4 text-base sm:text-lg max-w-2xl text-[#f3ede0]/85">
              {article.dek}
            </p>
          )}
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-wide text-[#f3ede0]/70">
            {article.author.name} · {formatDate(article.publishDate)}
          </p>
        </div>
      </Link>
    </section>
  );
}
