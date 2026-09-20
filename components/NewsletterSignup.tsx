export default function NewsletterSignup({
  variant = "block",
}: {
  variant?: "block" | "inline";
}) {
  return (
    <div
      className={`border border-rule rounded-sm p-6 text-center bg-paper ${
        variant === "inline" ? "my-10" : ""
      }`}
    >
      <p className="font-display text-xl mb-1">The Selvage, in your inbox</p>
      <p className="text-sm text-foreground-muted mb-4">
        One dispatch, no fast fashion. Cross-posted to Substack.
      </p>
      {/*
        Replace this action with the real Substack embed once the
        publication is live, e.g. an <iframe> from
        https://<publication>.substack.com/embed
      */}
      <form
        className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto"
        action="#"
      >
        <input
          type="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          className="flex-1 bg-background border border-rule px-3 py-2 text-sm focus:outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="bg-accent text-background px-4 py-2 text-xs uppercase tracking-wide hover:opacity-90"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
