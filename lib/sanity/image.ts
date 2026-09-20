import createImageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { projectId, dataset } from "@/lib/sanity/client";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
