import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const points = [
  {
    title: "Buyer-focused sourcing",
    description:
      "We aim to understand what each buyer needs — product type, grading, and destination market — before proposing a sourcing plan.",
  },
  {
    title: "Clear communication",
    description:
      "Enquiries are met with direct, transparent communication about what is realistically possible for a given product and timeline.",
  },
  {
    title: "Product and packaging coordination",
    description:
      "Packaging and handling are discussed upfront so produce is prepared appropriately for the intended transport method.",
  },
  {
    title: "Understanding of buyer requirements",
    description:
      "We take time to learn the regulatory and quality expectations of each destination market before confirming an order.",
  },
  {
    title: "Long-term supplier and buyer relationships",
    description:
      "Our goal is dependable, ongoing partnerships with both growers and buyers, rather than one-off transactions.",
  },
];

export function WhyGlofarmxSection() {
  return (
    <section id="why-glofarmx" aria-labelledby="why-heading" className="bg-bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Glofarmx"
          title="An approach built around the buyer"
          titleId="why-heading"
          description="We are building Glofarmx around a simple principle: sourcing and export coordination should be transparent, responsive, and tailored to each buyer's actual requirements."
          align="left"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (index % 2) * 0.08 }}
              className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <CheckCircle2
                size={22}
                className="mt-0.5 shrink-0 text-fresh"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-forest-dark">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate/75">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
