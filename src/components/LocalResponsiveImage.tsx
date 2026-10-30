import type { LocalImageSet } from "../data/productImages";

interface LocalResponsiveImageProps {
  set: LocalImageSet;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

/** Renders a pre-generated local webp/jpg responsive variant set (see src/data/productImages.ts). */
export function LocalResponsiveImage({
  set,
  alt,
  sizes,
  className = "",
  priority = false,
  objectPosition = "center",
}: LocalResponsiveImageProps) {
  const webpSrcSet = set.webp.map((v) => `${v.src} ${v.width}w`).join(", ");
  const jpgSrcSet = set.jpg.map((v) => `${v.src} ${v.width}w`).join(", ");
  const fallback = set.jpg[Math.floor(set.jpg.length / 2)];

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallback.src}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectPosition }}
      />
    </picture>
  );
}
