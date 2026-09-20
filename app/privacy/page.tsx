import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-4xl mb-8">Privacy Policy</h1>
      <div className="space-y-5 text-foreground-muted leading-relaxed">
        <p>
          <em>
            Placeholder content — replace with a reviewed privacy policy
            before collecting any real visitor or subscriber data.
          </em>
        </p>
        <p>
          The Selvage collects email addresses submitted through the
          newsletter signup form for the sole purpose of sending
          publication updates. Newsletter delivery is handled by Substack;
          see Substack&apos;s own privacy policy for how it processes subscriber
          data.
        </p>
        <p>
          The Site may use basic, privacy-respecting analytics to understand
          traffic to articles. No data is sold to third parties.
        </p>
        <p>
          Contact editor@theselvage.example.com to request removal of your
          email address from any mailing list.
        </p>
      </div>
    </div>
  );
}
