import { motion } from "framer-motion";
import { Boxes, PackageCheck, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Sourcing",
    description:
      "We work closely with growers to select produce based on freshness, grading, and consistency before it is prepared for export.",
  },
  {
    icon: PackageCheck,
    title: "Export-Ready Packaging",
    description:
      "Packaging is coordinated to suit the product, destination, and mode of transport, helping produce travel in good condition.",
  },
  {
    icon: Boxes,
    title: "Reliable Supply Coordination",
    description:
      "We coordinate sourcing, documentation, and logistics timelines with buyers so expectations stay clear from enquiry to shipment.",
  },
];

export function HighlightsSection() {
  return (
    <section aria-labelledby="highlights-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 id="highlights-heading" className="sr-only">
          Business highlights
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                className="flex flex-col gap-4 rounded-xl border border-forest/10 bg-bg-light p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest/10 text-forest">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-forest-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate/75">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
