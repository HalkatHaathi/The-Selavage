/**
 * Seeds the Sanity dataset with placeholder editorial content so the site
 * has something to render before real content is written.
 *
 * Run with:
 *   npx sanity exec scripts/seed.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient();

function key() {
  return Math.random().toString(36).slice(2, 10);
}

function block(text: string) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  };
}

const author = {
  _id: "seed-author-rowan",
  _type: "author",
  name: "A. Rowan",
  bio:
    "A. Rowan writes The Selvage from a workbench view of fashion — more interested in how a garment is built than how fast it sold.",
};

const categories = [
  {
    _id: "seed-category-menswear",
    _type: "category",
    name: "Menswear",
    slug: { _type: "slug", current: "menswear" },
    description:
      "Tailoring, workwear, and the quiet details of dressing well — read as a study of construction, not a shopping list.",
  },
  {
    _id: "seed-category-womenswear",
    _type: "category",
    name: "Womenswear",
    slug: { _type: "slug", current: "womenswear" },
    description:
      "Silhouette, fabric, and the histories that inform how women dress now — considered at the pace of a longer read.",
  },
  {
    _id: "seed-category-style-guides",
    _type: "category",
    name: "Style Guides",
    slug: { _type: "slug", current: "style-guides" },
    description:
      "Practical, opinionated guidance for building a wardrobe that holds up — capsule thinking without the jargon.",
  },
  {
    _id: "seed-category-trends-commentary",
    _type: "category",
    name: "Trends & Commentary",
    slug: { _type: "slug", current: "trends-commentary" },
    description:
      "A skeptical eye on what's moving fast in fashion media, and why some things are built to last and others aren't.",
  },
];

const articles: {
  id: string;
  title: string;
  slug: string;
  dek: string;
  alt: string;
  category: string;
  tags: string[];
  publishDate: string;
  paragraphs: string[];
}[] = [
  {
    id: "seed-article-good-coat",
    title: "The Case for Buying One Good Coat",
    slug: "the-case-for-buying-one-good-coat",
    dek: "On why a single well-built overcoat outlasts a decade of trend purchases, and what to actually look for at the seams.",
    alt: "A tailored wool overcoat hung on a wooden valet stand",
    category: "seed-category-menswear",
    tags: ["outerwear", "capsule wardrobe", "tailoring"],
    publishDate: "2026-08-14T09:00:00Z",
    paragraphs: [
      "There is a particular kind of fashion advice that ages badly within a season, and a smaller kind that doesn't age at all. Buy one coat, properly, and wear it for ten years — that is the second kind.",
      "A good overcoat is not defined by its label but by its construction: a full or half canvas, not fused interlining that will bubble after a few dry-cleans; a wool with enough weight to hold its shape in wind; seams finished so they don't fray at the edge, the way a selvage denim edge is woven to resist unraveling.",
      "Look at the underside of the collar and the inside of the cuffs before you look at anything else. That's where cheap construction shows first.",
      "The economics work out, too. A £600 coat worn for ten winters costs less per wear than a £120 coat replaced every two.",
    ],
  },
  {
    id: "seed-article-workwear",
    title: "Workwear Was Never a Trend",
    slug: "workwear-was-never-a-trend",
    dek: "Chore coats and canvas trousers keep getting 'rediscovered' by fashion media. They were never lost.",
    alt: "A canvas chore coat and denim trousers folded on a wooden bench",
    category: "seed-category-menswear",
    tags: ["workwear", "denim", "history"],
    publishDate: "2026-07-02T09:00:00Z",
    paragraphs: [
      "Every few years, a glossy feature declares the chore coat 'back.' It never left; it was just being worn by people whose jobs didn't require a press release.",
      "Workwear's durability is the point, not an aesthetic accident. Reinforced pockets, triple-stitched seams, and fabric chosen to survive abrasion were solutions to real problems long before they were photographed on a runway.",
      "If you're buying into the look, buy into the construction that justified it in the first place.",
    ],
  },
  {
    id: "seed-article-unremarkable-suit",
    title: "In Praise of the Unremarkable Suit",
    slug: "in-praise-of-the-unremarkable-suit",
    dek: "The best suit in your closet is probably the one you've stopped noticing.",
    alt: "A charcoal wool suit jacket on a hanger against a cream wall",
    category: "seed-category-menswear",
    tags: ["tailoring", "capsule wardrobe"],
    publishDate: "2026-05-21T09:00:00Z",
    paragraphs: [
      "A suit that photographs well is not the same as a suit that serves you well. The two occasionally overlap; more often, the interesting one is uncomfortable by the second wearing.",
      "What holds up, year over year, is fabric weight matched to climate, a cut that flatters without being fitted for a single event, and a color — navy, charcoal — boring enough to wear to anything.",
    ],
  },
  {
    id: "seed-article-slip-dress",
    title: "The Slip Dress Never Actually Left",
    slug: "the-slip-dress-never-actually-left",
    dek: "A brief history of the garment that keeps getting declared over and keeps outlasting the declaration.",
    alt: "A bias-cut silk slip dress on a vintage wooden hanger",
    category: "seed-category-womenswear",
    tags: ["history", "silhouette"],
    publishDate: "2026-08-02T09:00:00Z",
    paragraphs: [
      "The bias-cut slip dress has been declared dead by trend forecasters at least four times since the 1990s, and it keeps returning for the same reason it worked the first time: cut on the bias, it moves the way the body does.",
      "What changes each decade is the styling, not the garment. That's a useful distinction to keep in mind the next time a trend piece announces something is 'back.'",
    ],
  },
  {
    id: "seed-article-blazer",
    title: "Structure, Not Size: Rethinking the Blazer",
    slug: "structure-not-size-rethinking-the-blazer",
    dek: "A well-cut blazer earns its place through shoulder structure and lapel proportion, not through fit trends that reverse every few years.",
    alt: "A structured double-breasted blazer on a dress form",
    category: "seed-category-womenswear",
    tags: ["tailoring", "silhouette"],
    publishDate: "2026-06-18T09:00:00Z",
    paragraphs: [
      "Oversized, fitted, oversized again — blazer proportions cycle faster than almost anything else in womenswear. What doesn't cycle is the quality of the shoulder construction underneath.",
      "A canvassed shoulder with a clean roll to the lapel will look considered in any silhouette. A fused, boxy one will look cheap in all of them.",
    ],
  },
  {
    id: "seed-article-natural-dyes",
    title: "The Quiet Return of Natural Dyes",
    slug: "the-quiet-return-of-natural-dyes",
    dek: "Indigo, madder, and walnut are showing up again in small-batch womenswear — and it's not just an aesthetic choice.",
    alt: "Hanks of naturally dyed indigo and madder-colored yarn",
    category: "seed-category-womenswear",
    tags: ["denim", "craft", "sustainability"],
    publishDate: "2026-04-09T09:00:00Z",
    paragraphs: [
      "Natural dye is slower, less consistent, and considerably harder to scale than synthetic dye — which is exactly why its return says something about where a maker's priorities sit.",
      "The fading patterns are different, too: natural indigo fades in a way that tells the story of how a garment was actually worn.",
    ],
  },
  {
    id: "seed-article-capsule",
    title: "Building a Ten-Piece Capsule That Actually Works",
    slug: "building-a-ten-piece-capsule-that-actually-works",
    dek: "Most capsule wardrobe guides are aspirational listicles. Here's a version built around cost-per-wear and climate, not aesthetics.",
    alt: "Ten folded garments arranged in a neat grid on a wooden table",
    category: "seed-category-style-guides",
    tags: ["capsule wardrobe"],
    publishDate: "2026-08-20T09:00:00Z",
    paragraphs: [
      "A capsule wardrobe guide that doesn't account for your actual climate and actual week is a moodboard, not a wardrobe.",
      "Start with the two garments you already reach for most, then work outward: what do they need to be paired with to cover five more days without repeating an outfit exactly.",
      "Ten pieces, chosen this way, will outperform thirty chosen by trend.",
    ],
  },
  {
    id: "seed-article-construction",
    title: "How to Actually Read a Garment's Construction",
    slug: "how-to-actually-read-a-garments-construction",
    dek: "A short, practical guide to checking seams, interlining, and fabric weight before you buy — in-store or online.",
    alt: "Close-up of a garment's inside seam construction and stitching",
    category: "seed-category-style-guides",
    tags: ["tailoring", "craft"],
    publishDate: "2026-07-11T09:00:00Z",
    paragraphs: [
      "Turn the garment inside out before you decide anything else about it. The outside is marketing; the inside is engineering.",
      "Check whether the interlining is fused (bonded with heat and glue) or sewn — fused will eventually bubble and separate, sewn will not. Check whether seams are finished or raw. Raw edges fray; the selvage principle applies everywhere, not just to denim.",
    ],
  },
  {
    id: "seed-article-interview",
    title: "Dressing for a Job Interview Without Losing Yourself",
    slug: "dressing-for-a-job-interview-without-losing-yourself",
    dek: "A style guide for the specific, high-stakes edge case everyone has to navigate at least once.",
    alt: "A neatly arranged interview outfit laid flat on a bed",
    category: "seed-category-style-guides",
    tags: ["capsule wardrobe"],
    publishDate: "2026-03-30T09:00:00Z",
    paragraphs: [
      "The advice to 'dress for the job you want' is incomplete. Dress for the room you're walking into, in a version of your own style that's been turned down one notch, not replaced entirely.",
    ],
  },
  {
    id: "seed-article-fast-fashion",
    title: "Fast Fashion's Speed Was Always the Point — and the Problem",
    slug: "fast-fashions-speed-was-always-the-point-and-the-problem",
    dek: "A closer look at why '52 micro-seasons a year' broke something in how people relate to clothes.",
    alt: "Racks of identical garments in a fast fashion warehouse",
    category: "seed-category-trends-commentary",
    tags: ["sustainability", "history"],
    publishDate: "2026-08-05T09:00:00Z",
    paragraphs: [
      "Fast fashion's business model required customers to see their existing wardrobe as already out of date. That's a psychological trick as much as a manufacturing one.",
      "The counter-movement toward 'quality basics' is real, but it's also becoming its own marketing category — worth watching for the same speed-over-substance pattern re-emerging under a slower-sounding name.",
    ],
  },
  {
    id: "seed-article-denim-revival",
    title: "What the Denim Revival Gets Right (and Wrong)",
    slug: "what-the-denim-revival-gets-right-and-wrong",
    dek: "Selvage denim is having a moment again. Most of the coverage misses why the fabric was built that way in the first place.",
    alt: "A pair of raw selvage denim jeans with the woven edge visible at the cuff",
    category: "seed-category-trends-commentary",
    tags: ["denim", "history", "craft"],
    publishDate: "2026-06-27T09:00:00Z",
    paragraphs: [
      "Selvage denim is woven on old narrow-width shuttle looms that finish their own edge — a tightly bound line that won't fray, unlike the raw-cut edge of fabric from a modern wide loom.",
      "That's the whole idea behind the name of this publication: a finished edge holds. The current denim revival is mostly right to prize that, though a lot of the marketing around it is closer to cosplay than craft.",
    ],
  },
  {
    id: "seed-article-industry-consolidation",
    title: "Industry Consolidation Is Quietly Reshaping Who Gets to Design",
    slug: "industry-consolidation-is-quietly-reshaping-who-gets-to-design",
    dek: "A handful of conglomerates now sit behind most of the labels you think are independent. What that means for the next generation of designers.",
    alt: "A row of unmarked garment factory doors",
    category: "seed-category-trends-commentary",
    tags: ["fashion industry"],
    publishDate: "2026-02-14T09:00:00Z",
    paragraphs: [
      "It's increasingly rare for a mid-sized fashion label to stay independent past its first decade of real success. The economics of scaling production push most toward acquisition.",
      "That consolidation isn't inherently bad, but it changes incentives — and it's worth understanding before you decide a brand's story is the whole story.",
    ],
  },
];

async function run() {
  console.log("Seeding author...");
  await client.createOrReplace(author);

  console.log("Seeding categories...");
  for (const category of categories) {
    await client.createOrReplace(category);
  }

  console.log("Seeding articles...");
  for (const a of articles) {
    await client.createOrReplace({
      _id: a.id,
      _type: "article",
      title: a.title,
      slug: { _type: "slug", current: a.slug },
      dek: a.dek,
      featuredImage: { alt: a.alt },
      body: a.paragraphs.map(block),
      category: { _type: "reference", _ref: a.category },
      tags: a.tags,
      author: { _type: "reference", _ref: author._id },
      publishDate: a.publishDate,
    });
  }

  console.log(`Done. Seeded 1 author, ${categories.length} categories, ${articles.length} articles.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
