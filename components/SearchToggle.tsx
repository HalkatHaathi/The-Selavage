"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function SearchToggle() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="flex items-center gap-2">
        <SearchBar compact />
        <button
          type="button"
          aria-label="Close search"
          onClick={() => setOpen(false)}
          className="text-lg leading-none px-1 hover:text-accent"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label="Open search"
      onClick={() => setOpen(true)}
      className="p-1 hover:text-accent transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}
