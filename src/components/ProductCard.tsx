import { motion, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { Product } from "../data/products";
import { localProductImages } from "../data/productImages";
import { buildMailtoHref, buildWhatsappHref } from "../config/site";
import { ResponsiveImage } from "./ResponsiveImage";
import { LocalResponsiveImage } from "./LocalResponsiveImage";

interface ProductCardProps {
  product: Product;
}

const canTilt = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export function ProductCard({ product }: ProductCardProps) {
  const subject = `Enquiry: ${product.name}`;
  const body = `Hello Glofarmx,\n\nI am interested in sourcing ${product.name}. Could you please share availability, packaging options, and export quotation details?\n\nThank you.`;
  const mailHref = buildMailtoHref(subject, body);
  const whatsappHref = buildWhatsappHref(
    `Hello Glofarmx, I am interested in sourcing ${product.name}. Please contact me regarding availability, packaging, and export quotations.`,
  );
  const enquiryHref = mailHref || whatsappHref || "#contact";
  const localSet = product.image.localKey ? localProductImages[product.image.localKey] : undefined;

  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!canTilt || prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={canTilt && !prefersReducedMotion ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-light">
        {localSet ? (
          <LocalResponsiveImage
            set={localSet}
            alt={product.image.alt}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.08]"
            objectPosition={product.image.position ?? "center"}
          />
        ) : (
          <ResponsiveImage
            src={product.image.src!}
            alt={product.image.alt}
            widths={[320, 480, 640, 800]}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.08]"
            objectPosition={product.image.position ?? "center"}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-forest-dark shadow-sm backdrop-blur-sm">
          {product.category}
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-forest-dark">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate/75">
          {product.description}
        </p>
        <a
          href={enquiryHref}
          {...(enquiryHref === whatsappHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-forest/15 px-4 py-2 text-sm font-semibold text-forest transition-all duration-200 hover:border-fresh hover:bg-fresh hover:text-white hover:shadow-md hover:shadow-fresh/20"
        >
          Enquire Now
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
