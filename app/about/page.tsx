import type { Metadata } from "next";
import { author } from "@/lib/data/author";

export const metadata: Metadata = {
  title: "About",
  description: "The editorial mission behind The Selvage, and who writes it.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl mb-8 text-center">About &amp; Masthead</h1>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Why &ldquo;The Selvage&rdquo;</h2>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            A selvage is the self-finished edge of a woven fabric — the part
            that comes off the loom already bound, so it never frays. It&apos;s a
            small detail that says everything about how something was made:
            slowly, on older machinery, by someone who cared whether the edge
            held.
          </p>
          <p>
            The Selvage exists because most fashion media today is optimized
            for the opposite: speed, volume, and a constant sense that
            everything you own is already out of date. This is a slower
            publication. It&apos;s about menswear and womenswear as craft and
            history as much as trend — tailoring, workwear, denim, capsule
            wardrobes, and the industry decisions that shape what ends up on
            the rack.
          </p>
          <p>
            This is not a shop. There&apos;s nothing to buy here — just writing
            intended to help readers build taste and make fewer, better
            decisions about what they wear.
          </p>
        </div>
      </section>

      <section className="mb-12 border-t border-rule pt-10">
        <h2 className="font-display text-2xl mb-4">The Author</h2>
        <p className="text-lg leading-relaxed">{author.bio}</p>
      </section>

      <section className="border-t border-rule pt-10">
        <h2 className="font-display text-2xl mb-4">Get in Touch</h2>
        <p className="text-lg leading-relaxed">
          Reach The Selvage at{" "}
          <a href="mailto:editor@theselvage.example.com" className="text-accent hover:underline">
            editor@theselvage.example.com
          </a>{" "}
          or find the newsletter on{" "}
          <a href="https://theselvage.substack.com" className="text-accent hover:underline">
            Substack
          </a>
          .
        </p>
      </section>
    </div>
  );
}
