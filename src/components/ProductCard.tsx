import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../data/products";
import { localProductImages } from "../data/productImages";
import { buildMailtoHref, buildWhatsappHref } from "../config/site";
import { ResponsiveImage } from "./ResponsiveImage";
import { LocalResponsiveImage } from "./LocalResponsiveImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const subject = `Enquiry: ${product.name}`;
  const body = `Hello Glofarmx,\n\nI am interested in sourcing ${product.name}. Could you please share availability, packaging options, and export quotation details?\n\nThank you.`;
  const mailHref = buildMailtoHref(subject, body);
  const whatsappHref = buildWhatsappHref(
    `Hello Glofarmx, I am interested in sourcing ${product.name}. Please contact me regarding availability, packaging, and export quotations.`,
  );
  const enquiryHref = mailHref || whatsappHref || "#contact";
  const localSet = product.image.localKey ? localProductImages[product.image.localKey] : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/10"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-bg-light">
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
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-forest-dark">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate/75">
          {product.description}
        </p>
        <a
          href={enquiryHref}
          {...(enquiryHref === whatsappHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-fresh"
        >
          Enquire About This Product
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.article>
  );
}
