interface ResponsiveImageProps {
  src: string;
  alt: string;
  widths: number[];
  sizes: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

/**
 * Wraps an Unsplash CDN base URL (e.g. https://images.unsplash.com/photo-XXXX)
 * with width/quality/format query params to build a responsive srcset.
 * Unsplash's imgix backend auto-negotiates AVIF/WebP via `auto=format`
 * based on the browser's Accept header, falling back to JPEG.
 */
function buildUrl(src: string, width: number) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}w=${width}&q=80&auto=format&fit=crop`;
}

export function ResponsiveImage({
  src,
  alt,
  widths,
  sizes,
  className = "",
  priority = false,
  objectPosition = "center",
}: ResponsiveImageProps) {
  const srcSet = widths.map((w) => `${buildUrl(src, w)} ${w}w`).join(", ");
  const fallbackWidth = widths[Math.floor(widths.length / 2)];

  return (
    <img
      src={buildUrl(src, fallbackWidth)}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition }}
    />
  );
}
