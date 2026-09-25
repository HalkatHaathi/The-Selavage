import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl mb-8">Terms of Use</h1>
      <div className="space-y-5 text-foreground-muted leading-relaxed">
        <p>
          <em>
            Placeholder content — replace with reviewed legal terms before
            public launch. Last updated: draft, not yet published.
          </em>
        </p>
        <p>
          By accessing The Selvage (&ldquo;the Site&rdquo;), you agree to these Terms of
          Use. The Site is provided for editorial and informational purposes
          only; it does not sell products or services.
        </p>
        <p>
          All articles, images, and other content on the Site are the
          property of The Selvage unless otherwise credited, and may not be
          reproduced without permission.
        </p>
        <p>
          The Site is provided &ldquo;as is&rdquo; without warranties of any kind. The
          Selvage is not liable for any damages arising from use of the
          Site.
        </p>
        <p>
          These terms may be updated from time to time; continued use of the
          Site constitutes acceptance of the current terms.
        </p>
      </div>
    </div>
  );
}
