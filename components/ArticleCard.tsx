import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "@/components/ArticleImage";
import { CategoryTag } from "@/components/Tag";
import { formatDate } from "@/lib/format";

export default function ArticleCard({
  article,
  aspectClass = "aspect-square",
}: {
  article: Article;
  aspectClass?: string;
}) {
  const category = article.category;
  return (
    <article className="group">
      <Link href={`/articles/${article.slug}`} className="block overflow-hidden mb-3">
        <ArticleImage
          seed={article.slug}
          alt={article.featuredImage.alt}
          src={article.featuredImage.url}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`${aspectClass} w-full transition-transform duration-300 group-hover:scale-105`}
        />
      </Link>
      {category && <CategoryTag category={category.slug} name={category.name} />}
      <h3 className="font-display text-xl font-extrabold mt-2 leading-snug">
        <Link href={`/articles/${article.slug}`} className="group-hover:text-accent transition-colors">
          {article.title}
        </Link>
      </h3>
      {article.dek && (
        <p className="text-sm text-foreground-muted mt-1 line-clamp-3">{article.dek}</p>
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mt-2">
        {article.author.name} · {formatDate(article.publishDate)}
      </p>
    </article>
  );
}
