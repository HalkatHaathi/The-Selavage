import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "@/components/ArticleImage";
import { CategoryTag } from "@/components/Tag";
import { formatDate } from "@/lib/format";

export default function BentoCard({
  article,
  tall = false,
}: {
  article: Article;
  tall?: boolean;
}) {
  const category = article.category;
  return (
    <div
      className={`group relative overflow-hidden ${
        tall ? "aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" : "aspect-[4/3]"
      }`}
    >
      <ArticleImage
        seed={article.slug}
        alt={article.featuredImage.alt}
        src={article.featuredImage.url}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      {/* Full-card click target for the article */}
      <Link
        href={`/articles/${article.slug}`}
        aria-label={article.title}
        className="absolute inset-0"
      />
      {/* Visible content on top; only the category tag re-enables pointer events */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 pointer-events-none">
        {category && (
          <div className="mb-1.5 inline-block pointer-events-auto relative z-10">
            <CategoryTag category={category.slug} name={category.name} light />
          </div>
        )}
        <h3
          className={`font-display font-extrabold leading-tight text-white ${
            tall ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
          }`}
        >
          {article.title}
        </h3>
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/75">
          By {article.author.name} · {formatDate(article.publishDate)}
        </p>
      </div>
    </div>
  );
}
