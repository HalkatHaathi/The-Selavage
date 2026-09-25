import { metadata, viewport } from "next-sanity/studio";

export { metadata, viewport };

/** Studio fills the viewport — no site header/footer (see app/(site)/layout.tsx). */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
