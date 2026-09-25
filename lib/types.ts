import type { PortableTextBlock } from "@portabletext/react";

export interface Category {
  slug: string;
  name: string;
  description?: string;
}

export interface Author {
  name: string;
  bio?: string;
  avatarUrl?: string;
}

export interface Article {
  title: string;
  slug: string;
  dek?: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  body: PortableTextBlock[];
  category: Category | null;
  tags: string[];
  author: Author;
  publishDate: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
