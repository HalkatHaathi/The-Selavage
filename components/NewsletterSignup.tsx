export default function NewsletterSignup({
  variant = "block",
}: {
  variant?: "block" | "inline";
}) {
  const emailInput = (
    <input
      type="email"
      required
      placeholder="you@email.com"
      aria-label="Email address"
      className="w-full min-w-0 flex-1 bg-background border border-rule px-3 py-2.5 text-sm focus:outline-none focus:border-accent"
    />
  );

  const subscribeButton = (
    <button
      type="submit"
      className="bg-accent text-white! px-5 py-2.5 text-xs font-bold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
    >
      Subscribe
    </button>
  );

  // Replace the form `action` with the real Substack embed once the
  // publication is live, e.g. an <iframe> from
  // https://<publication>.substack.com/embed

  if (variant === "inline") {
    // Narrow-column layout: title/copy stacked above a compact form.
    return (
      <div className="border border-rule p-6 sm:p-8 text-center my-10">
        <p className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight mb-1">
          The Selvage, in your inbox
        </p>
        <p className="text-sm text-foreground-muted mb-4">
          One dispatch, no fast fashion. Cross-posted to Substack.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto" action="#">
          {emailInput}
          {subscribeButton}
        </form>
      </div>
    );
  }

  // Full-width layout: title/copy on the left, form on the right, space-between.
  return (
    <div className="py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="text-center sm:text-left shrink-0">
          <p className="font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight mb-1">
            The Selvage, in your inbox
          </p>
          <p className="text-sm text-foreground-muted">
            One dispatch, no fast fashion. Cross-posted to Substack.
          </p>
        </div>
        <form className="flex gap-2 w-full sm:flex-1 sm:min-w-[min(100%,22rem)] lg:min-w-[28rem] xl:min-w-[36rem] max-w-3xl" action="#">
          {emailInput}
          {subscribeButton}
        </form>
      </div>
    </div>
  );
}
