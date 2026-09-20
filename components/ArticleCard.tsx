import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "@/components/ArticleImage";
import { CategoryTag } from "@/components/Tag";
import { getCategory } from "@/lib/data/categories";
import { formatDate } from "@/lib/format";

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);
  return (
    <article className="group">
      <Link href={`/articles/${article.slug}`}>
        <ArticleImage
          seed={article.slug}
          alt={article.featuredImage.alt}
          className="aspect-[4/3] w-full mb-3"
        />
      </Link>
      {category && <CategoryTag category={category.slug} name={category.name} />}
      <h3 className="font-display text-xl mt-2 leading-snug">
        <Link href={`/articles/${article.slug}`} className="group-hover:text-accent">
          {article.title}
        </Link>
      </h3>
      {article.dek && (
        <p className="text-sm text-foreground-muted mt-1 line-clamp-3">{article.dek}</p>
      )}
      <p className="text-xs text-foreground-muted mt-2">
        {article.author.name} · {formatDate(article.publishDate)}
      </p>
    </article>
  );
}
