import Image from "next/image";

const PALETTE = ["#d0103a", "#111111", "#6b6b6b"];

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
  src,
  className = "",
  sizes,
}: {
  seed: string;
  alt: string;
  /** Real image URL from Sanity. Falls back to a generated placeholder pattern when omitted. */
  src?: string;
  className?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-paper ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "100vw"}
          className="object-cover"
        />
      </div>
    );
  }

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
        className="font-display text-sm font-bold uppercase tracking-[0.2em] px-4 text-center"
        style={{ color: tone }}
      >
        The Selvage
      </span>
    </div>
  );
}
