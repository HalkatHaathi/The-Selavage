import Link from "next/link";
import { Article } from "@/lib/types";
import ArticleImage from "@/components/ArticleImage";
import { CategoryTag } from "@/components/Tag";
import { getCategory } from "@/lib/data/categories";
import { formatDate } from "@/lib/format";

export default function Hero({ article }: { article: Article }) {
  const category = getCategory(article.category);
  return (
    <section className="grid sm:grid-cols-2 gap-6 sm:gap-10 items-center pb-10 mb-10 border-b border-rule">
      <Link href={`/articles/${article.slug}`}>
        <ArticleImage
          seed={article.slug}
          alt={article.featuredImage.alt}
          className="aspect-[4/3] w-full"
        />
      </Link>
      <div>
        {category && <CategoryTag category={category.slug} name={category.name} />}
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mt-2 mb-4">
          <Link href={`/articles/${article.slug}`} className="hover:text-accent">
            {article.title}
          </Link>
        </h1>
        {article.dek && (
          <p className="text-lg text-foreground-muted mb-4">{article.dek}</p>
        )}
        <p className="text-sm text-foreground-muted">
          {article.author.name} · {formatDate(article.publishDate)}
        </p>
      </div>
    </section>
  );
}
