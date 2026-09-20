import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "menswear",
    name: "Menswear",
    description:
      "Tailoring, workwear, and the quiet details of dressing well — read as a study of construction, not a shopping list.",
  },
  {
    slug: "womenswear",
    name: "Womenswear",
    description:
      "Silhouette, fabric, and the histories that inform how women dress now — considered at the pace of a longer read.",
  },
  {
    slug: "style-guides",
    name: "Style Guides",
    description:
      "Practical, opinionated guidance for building a wardrobe that holds up — capsule thinking without the jargon.",
  },
  {
    slug: "trends-commentary",
    name: "Trends & Commentary",
    description:
      "A skeptical eye on what's moving fast in fashion media, and why some things are built to last and others aren't.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
