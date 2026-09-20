import { Article } from "@/lib/types";
import { author } from "@/lib/data/author";

function p(...paragraphs: string[]) {
  return paragraphs.map((t) => `<p>${t}</p>`).join("\n");
}

export const articles: Article[] = [
  {
    title: "The Case for Buying One Good Coat",
    slug: "the-case-for-buying-one-good-coat",
    dek: "On why a single well-built overcoat outlasts a decade of trend purchases, and what to actually look for at the seams.",
    featuredImage: { src: "coat-01", alt: "A tailored wool overcoat hung on a wooden valet stand" },
    category: "menswear",
    tags: ["outerwear", "capsule wardrobe", "tailoring"],
    author,
    publishDate: "2026-08-14",
    bodyHtml: p(
      "There is a particular kind of fashion advice that ages badly within a season, and a smaller kind that doesn't age at all. Buy one coat, properly, and wear it for ten years — that is the second kind.",
      "A good overcoat is not defined by its label but by its construction: a full or half canvas, not fused interlining that will bubble after a few dry-cleans; a wool with enough weight to hold its shape in wind; seams finished so they don't fray at the edge, the way a selvage denim edge is woven to resist unraveling.",
      "Look at the underside of the collar and the inside of the cuffs before you look at anything else. That's where cheap construction shows first.",
      "The economics work out, too. A £600 coat worn for ten winters costs less per wear than a £120 coat replaced every two.",
    ),
  },
  {
    title: "Workwear Was Never a Trend",
    slug: "workwear-was-never-a-trend",
    dek: "Chore coats and canvas trousers keep getting 'rediscovered' by fashion media. They were never lost.",
    featuredImage: { src: "workwear-01", alt: "A canvas chore coat and denim trousers folded on a wooden bench" },
    category: "menswear",
    tags: ["workwear", "denim", "history"],
    author,
    publishDate: "2026-07-02",
    bodyHtml: p(
      "Every few years, a glossy feature declares the chore coat 'back.' It never left; it was just being worn by people whose jobs didn't require a press release.",
      "Workwear's durability is the point, not an aesthetic accident. Reinforced pockets, triple-stitched seams, and fabric chosen to survive abrasion were solutions to real problems long before they were photographed on a runway.",
      "If you're buying into the look, buy into the construction that justified it in the first place.",
    ),
  },
  {
    title: "In Praise of the Unremarkable Suit",
    slug: "in-praise-of-the-unremarkable-suit",
    dek: "The best suit in your closet is probably the one you've stopped noticing.",
    featuredImage: { src: "suit-01", alt: "A charcoal wool suit jacket on a hanger against a cream wall" },
    category: "menswear",
    tags: ["tailoring", "capsule wardrobe"],
    author,
    publishDate: "2026-05-21",
    bodyHtml: p(
      "A suit that photographs well is not the same as a suit that serves you well. The two occasionally overlap; more often, the interesting one is uncomfortable by the second wearing.",
      "What holds up, year over year, is fabric weight matched to climate, a cut that flatters without being fitted for a single event, and a color — navy, charcoal — boring enough to wear to anything.",
    ),
  },
  {
    title: "The Slip Dress Never Actually Left",
    slug: "the-slip-dress-never-actually-left",
    dek: "A brief history of the garment that keeps getting declared over and keeps outlasting the declaration.",
    featuredImage: { src: "slip-01", alt: "A bias-cut silk slip dress on a vintage wooden hanger" },
    category: "womenswear",
    tags: ["history", "silhouette"],
    author,
    publishDate: "2026-08-02",
    bodyHtml: p(
      "The bias-cut slip dress has been declared dead by trend forecasters at least four times since the 1990s, and it keeps returning for the same reason it worked the first time: cut on the bias, it moves the way the body does.",
      "What changes each decade is the styling, not the garment. That's a useful distinction to keep in mind the next time a trend piece announces something is 'back.'",
    ),
  },
  {
    title: "Structure, Not Size: Rethinking the Blazer",
    slug: "structure-not-size-rethinking-the-blazer",
    dek: "A well-cut blazer earns its place through shoulder structure and lapel proportion, not through fit trends that reverse every few years.",
    featuredImage: { src: "blazer-01", alt: "A structured double-breasted blazer on a dress form" },
    category: "womenswear",
    tags: ["tailoring", "silhouette"],
    author,
    publishDate: "2026-06-18",
    bodyHtml: p(
      "Oversized, fitted, oversized again — blazer proportions cycle faster than almost anything else in womenswear. What doesn't cycle is the quality of the shoulder construction underneath.",
      "A canvassed shoulder with a clean roll to the lapel will look considered in any silhouette. A fused, boxy one will look cheap in all of them.",
    ),
  },
  {
    title: "The Quiet Return of Natural Dyes",
    slug: "the-quiet-return-of-natural-dyes",
    dek: "Indigo, madder, and walnut are showing up again in small-batch womenswear — and it's not just an aesthetic choice.",
    featuredImage: { src: "dye-01", alt: "Hanks of naturally dyed indigo and madder-colored yarn" },
    category: "womenswear",
    tags: ["denim", "craft", "sustainability"],
    author,
    publishDate: "2026-04-09",
    bodyHtml: p(
      "Natural dye is slower, less consistent, and considerably harder to scale than synthetic dye — which is exactly why its return says something about where a maker's priorities sit.",
      "The fading patterns are different, too: natural indigo fades in a way that tells the story of how a garment was actually worn.",
    ),
  },
  {
    title: "Building a Ten-Piece Capsule That Actually Works",
    slug: "building-a-ten-piece-capsule-that-actually-works",
    dek: "Most capsule wardrobe guides are aspirational listicles. Here's a version built around cost-per-wear and climate, not aesthetics.",
    featuredImage: { src: "capsule-01", alt: "Ten folded garments arranged in a neat grid on a wooden table" },
    category: "style-guides",
    tags: ["capsule wardrobe"],
    author,
    publishDate: "2026-08-20",
    bodyHtml: p(
      "A capsule wardrobe guide that doesn't account for your actual climate and actual week is a moodboard, not a wardrobe.",
      "Start with the two garments you already reach for most, then work outward: what do they need to be paired with to cover five more days without repeating an outfit exactly.",
      "Ten pieces, chosen this way, will outperform thirty chosen by trend.",
    ),
  },
  {
    title: "How to Actually Read a Garment's Construction",
    slug: "how-to-actually-read-a-garments-construction",
    dek: "A short, practical guide to checking seams, interlining, and fabric weight before you buy — in-store or online.",
    featuredImage: { src: "construction-01", alt: "Close-up of a garment's inside seam construction and stitching" },
    category: "style-guides",
    tags: ["tailoring", "craft"],
    author,
    publishDate: "2026-07-11",
    bodyHtml: p(
      "Turn the garment inside out before you decide anything else about it. The outside is marketing; the inside is engineering.",
      "Check whether the interlining is fused (bonded with heat and glue) or sewn — fused will eventually bubble and separate, sewn will not. Check whether seams are finished or raw. Raw edges fray; the selvage principle applies everywhere, not just to denim.",
    ),
  },
  {
    title: "Dressing for a Job Interview Without Losing Yourself",
    slug: "dressing-for-a-job-interview-without-losing-yourself",
    dek: "A style guide for the specific, high-stakes edge case everyone has to navigate at least once.",
    featuredImage: { src: "interview-01", alt: "A neatly arranged interview outfit laid flat on a bed" },
    category: "style-guides",
    tags: ["capsule wardrobe"],
    author,
    publishDate: "2026-03-30",
    bodyHtml: p(
      "The advice to 'dress for the job you want' is incomplete. Dress for the room you're walking into, in a version of your own style that's been turned down one notch, not replaced entirely.",
    ),
  },
  {
    title: "Fast Fashion's Speed Was Always the Point — and the Problem",
    slug: "fast-fashions-speed-was-always-the-point-and-the-problem",
    dek: "A closer look at why '52 micro-seasons a year' broke something in how people relate to clothes.",
    featuredImage: { src: "trend-01", alt: "Racks of identical garments in a fast fashion warehouse" },
    category: "trends-commentary",
    tags: ["sustainability", "history"],
    author,
    publishDate: "2026-08-05",
    bodyHtml: p(
      "Fast fashion's business model required customers to see their existing wardrobe as already out of date. That's a psychological trick as much as a manufacturing one.",
      "The counter-movement toward 'quality basics' is real, but it's also becoming its own marketing category — worth watching for the same speed-over-substance pattern re-emerging under a slower-sounding name.",
    ),
  },
  {
    title: "What the Denim Revival Gets Right (and Wrong)",
    slug: "what-the-denim-revival-gets-right-and-wrong",
    dek: "Selvage denim is having a moment again. Most of the coverage misses why the fabric was built that way in the first place.",
    featuredImage: { src: "denim-01", alt: "A pair of raw selvage denim jeans with the woven edge visible at the cuff" },
    category: "trends-commentary",
    tags: ["denim", "history", "craft"],
    author,
    publishDate: "2026-06-27",
    bodyHtml: p(
      "Selvage denim is woven on old narrow-width shuttle looms that finish their own edge — a tightly bound line that won't fray, unlike the raw-cut edge of fabric from a modern wide loom.",
      "That's the whole idea behind the name of this publication: a finished edge holds. The current denim revival is mostly right to prize that, though a lot of the marketing around it is closer to cosplay than craft.",
    ),
  },
  {
    title: "Industry Consolidation Is Quietly Reshaping Who Gets to Design",
    slug: "industry-consolidation-is-quietly-reshaping-who-gets-to-design",
    dek: "A handful of conglomerates now sit behind most of the labels you think are independent. What that means for the next generation of designers.",
    featuredImage: { src: "industry-01", alt: "A row of unmarked garment factory doors" },
    category: "trends-commentary",
    tags: ["fashion industry"],
    author,
    publishDate: "2026-02-14",
    bodyHtml: p(
      "It's increasingly rare for a mid-sized fashion label to stay independent past its first decade of real success. The economics of scaling production push most toward acquisition.",
      "That consolidation isn't inherently bad, but it changes incentives — and it's worth understanding before you decide a brand's story is the whole story.",
    ),
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getAllArticlesSorted() {
  return [...articles].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getRelatedArticles(article: Article, max = 3) {
  return articles
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      article: a,
      score:
        (a.category === article.category ? 2 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((x) => x.article);
}
