export type CategorySlug =
  | "menswear"
  | "womenswear"
  | "style-guides"
  | "trends-commentary";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Author {
  name: string;
  bio: string;
}

export interface Article {
  title: string;
  slug: string;
  dek?: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  bodyHtml: string;
  category: CategorySlug;
  tags: string[];
  author: Author;
  publishDate: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
