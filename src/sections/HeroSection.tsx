import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "../components/Button";
import { KineticText } from "../components/KineticText";
import hero640webp from "../assets/hero/hero-640.webp";
import hero960webp from "../assets/hero/hero-960.webp";
import hero1280webp from "../assets/hero/hero-1280.webp";
import hero1672webp from "../assets/hero/hero-1672.webp";
import hero640jpg from "../assets/hero/hero-640.jpg";
import hero960jpg from "../assets/hero/hero-960.jpg";
import hero1280jpg from "../assets/hero/hero-1280.jpg";
import hero1672jpg from "../assets/hero/hero-1672.jpg";

const HERO_ALT =
  "Crates of freshly harvested Indian vegetables staged for export, with a cargo ship and plane in the background";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, prefersReducedMotion ? 1 : 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative flex h-[100svh] min-h-[640px] items-center overflow-hidden bg-forest-dark"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${hero640webp} 640w, ${hero960webp} 960w, ${hero1280webp} 1280w, ${hero1672webp} 1672w`}
            sizes="100vw"
          />
          <img
            src={hero1672jpg}
            srcSet={`${hero640jpg} 640w, ${hero960jpg} 960w, ${hero1280jpg} 1280w, ${hero1672jpg} 1672w`}
            sizes="100vw"
            alt={HERO_ALT}
            width={1672}
            height={941}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
        </picture>
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/50 to-forest-dark/20"
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
        >
          Agricultural Export Partner
        </motion.span>

        <KineticText
          as="h1"
          text="Fresh From India. Delivered to Global Markets."
          className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Your sourcing partner for fresh Indian agricultural produce, connecting quality
          growers with international importers and distributors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
        >
          <Button as="a" href="#products" variant="primary" className="bg-fresh hover:bg-fresh/90">
            Explore Our Products
            <ArrowRight size={16} />
          </Button>
          <Button as="a" href="#contact" variant="ghost">
            Request a Quote
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center text-white/70"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
