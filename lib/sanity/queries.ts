import { sanityClient } from "@/lib/sanity/client";
import type { Article, Category } from "@/lib/types";

// Shared GROQ projection: resolves references (category, author) and image
// asset URLs so components never need to know about Sanity's raw shape.
const articleProjection = /* groq */ `{
  title,
  "slug": slug.current,
  dek,
  "featuredImage": {
    "url": featuredImage.asset->url,
    "alt": featuredImage.alt
  },
  "body": body[]{
    ...,
    _type == "image" => {
      ...,
      "asset": asset->
    }
  },
  "category": category->{
    "slug": slug.current,
    name,
    description
  },
  "tags": coalesce(tags, []),
  "author": {
    "name": author->name,
    "bio": author->bio,
    "avatarUrl": author->avatar.asset->url
  },
  "publishDate": publishDate,
  "seo": {
    "metaTitle": seoTitle,
    "metaDescription": seoDescription
  }
}`;

const categoryProjection = /* groq */ `{
  "slug": slug.current,
  name,
  description
}`;

export async function getAllArticlesSorted(): Promise<Article[]> {
  return sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)] | order(publishDate desc) ${articleProjection}`,
  );
}

export async function getAllArticleSlugs(): Promise<string[]> {
  return sanityClient.fetch(`*[_type == "article" && defined(slug.current)].slug.current`);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] ${articleProjection}`,
    { slug },
  );
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  return sanityClient.fetch(
    `*[_type == "article" && category->slug.current == $categorySlug] | order(publishDate desc) ${articleProjection}`,
    { categorySlug },
  );
}

export async function getRelatedArticles(article: Article, max = 3): Promise<Article[]> {
  const candidates: Article[] = await sanityClient.fetch(
    `*[_type == "article" && slug.current != $slug] ${articleProjection}`,
    { slug: article.slug },
  );
  return candidates
    .map((a) => ({
      article: a,
      score:
        (a.category?.slug === article.category?.slug ? 2 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((x) => x.article);
}

export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch(`*[_type == "category"] | order(name asc) ${categoryProjection}`);
}

export async function getAllCategorySlugs(): Promise<string[]> {
  return sanityClient.fetch(`*[_type == "category" && defined(slug.current)].slug.current`);
}

export async function getCategory(slug: string): Promise<Category | null> {
  return sanityClient.fetch(
    `*[_type == "category" && slug.current == $slug][0] ${categoryProjection}`,
    { slug },
  );
}

export async function getFeaturedAuthorBio(): Promise<string | null> {
  const bio: string | null = await sanityClient.fetch(
    `*[_type == "author" && defined(bio)][0].bio`,
  );
  return bio ?? null;
}
