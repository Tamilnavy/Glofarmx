import { motion } from "framer-motion";
import type { JSX } from "react";

interface KineticTextProps {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  /** "mount" animates immediately (hero, above the fold). "inView" waits for scroll. */
  trigger?: "mount" | "inView";
  delay?: number;
  id?: string;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.055, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Splits text into words, each masked in a overflow-hidden span, and slides them up in a stagger. */
export function KineticText({ text, as = "h1", className = "", trigger = "mount", delay = 0, id }: KineticTextProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  const words = text.split(" ");
  const viewportProps = trigger === "inView" ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } } : { animate: "visible" };

  return (
    <Tag id={id} className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        {...viewportProps}
        variants={container}
        custom={delay}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span className="inline-block" variants={word}>
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
