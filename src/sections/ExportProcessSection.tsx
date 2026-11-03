import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/SectionHeading";

const steps = [
  {
    title: "Submit Your Enquiry",
    description: "Tell us about the product, quantity, and destination market you have in mind.",
  },
  {
    title: "Confirm Product Requirements",
    description: "We discuss grading, packaging, and any destination-specific requirements with you.",
  },
  {
    title: "Review Quotation and Specifications",
    description: "You receive a quotation and specification details for review and confirmation.",
  },
  {
    title: "Finalize Order and Shipping Terms",
    description: "Once agreed, order quantities, shipping terms, and timelines are finalized together.",
  },
  {
    title: "Coordinate Documentation and Shipment",
    description: "We coordinate the necessary documentation and shipment logistics for the order.",
  },
];

export function ExportProcessSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="export-process" aria-labelledby="process-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Export Process"
          title="A clear path from enquiry to shipment"
          titleId="process-heading"
          description="Exact requirements and timelines depend on the product, destination, applicable regulations, and terms agreed with each buyer."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-11 right-11 top-[42px] hidden h-px bg-forest/10 lg:block"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleX: lineScale }}
            className="absolute left-11 right-11 top-[42px] hidden h-px origin-left bg-gradient-to-r from-fresh via-gold to-fresh lg:block"
          />

          <ol ref={listRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col gap-3 rounded-xl border border-forest/10 bg-bg-light p-6 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-xl hover:shadow-forest/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-heading text-sm font-bold text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-forest-dark">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate/75">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
