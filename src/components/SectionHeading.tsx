import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { KineticText } from "./KineticText";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-fresh"
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <KineticText
        as="h2"
        text={title}
        trigger="inView"
        className={`max-w-2xl text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-forest-dark"
        }`}
        id={titleId}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className={`max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-slate/80"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
