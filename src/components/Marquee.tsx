interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Pure-CSS infinite ticker (not Framer Motion) so it keeps running smoothly
 * without JS scroll work. Paused via prefers-reduced-motion in index.css.
 */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`group overflow-hidden ${className}`} aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-forest-dark/50"
          >
            {item}
            <span className="text-fresh">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
