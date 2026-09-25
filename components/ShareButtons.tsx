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
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide">
      <span className="text-foreground-muted mr-1">Share</span>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-rule px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
      >
        X
      </a>
      <a
        href={pinterestHref}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-rule px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
      >
        Pinterest
      </a>
      <button
        onClick={copyLink}
        className="border border-rule px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
