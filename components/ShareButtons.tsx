"use client";

import { useState } from "react";

export default function ShareButtons({
  url,
  title,
  imageAlt,
}: {
  url: string;
  title: string;
  imageAlt: string;
}) {
  const [copied, setCopied] = useState(false);

  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const pinterestHref = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}&media=${encodeURIComponent(imageAlt)}`;

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-wide">
      <span className="text-foreground-muted">Share</span>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        X
      </a>
      <a
        href={pinterestHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Pinterest
      </a>
      <button onClick={copyLink} className="text-accent hover:underline">
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
