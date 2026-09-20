const PALETTE = ["#7a2e2e", "#3c4a5e", "#8a7350", "#4a5a3c"];

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function ArticleImage({
  seed,
  alt,
  className = "",
}: {
  seed: string;
  alt: string;
  className?: string;
}) {
  const tone = PALETTE[hash(seed) % PALETTE.length];
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-paper ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${tone}1a 0px, ${tone}1a 2px, transparent 2px, transparent 14px)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(${tone} 1px, transparent 1px)`,
          backgroundSize: "6px 6px",
        }}
      />
      <span
        className="font-display text-sm uppercase tracking-[0.2em] px-4 text-center"
        style={{ color: tone }}
      >
        The Selvage
      </span>
    </div>
  );
}
