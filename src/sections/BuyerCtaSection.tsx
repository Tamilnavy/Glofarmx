import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/Button";
import { KineticText } from "../components/KineticText";

export function BuyerCtaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="buyer-cta-heading" className="relative overflow-hidden bg-forest-dark py-20 sm:py-24">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fresh/10 blur-[100px]"
        animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <KineticText
          as="h2"
          id="buyer-cta-heading"
          text="Looking for an Agricultural Sourcing Partner?"
          trigger="inView"
          className="text-3xl font-bold text-white sm:text-4xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Tell us what products you need, the required quantity, and your destination market.
          Get in touch to discuss your requirements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button as="a" href="#contact" variant="primary" className="bg-gold text-forest-dark hover:bg-gold/90 w-full sm:w-auto">
            Request a Quote
          </Button>
          <Button as="a" href="#contact" variant="ghost" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
