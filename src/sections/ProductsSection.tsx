import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ProductCard } from "../components/ProductCard";
import { productCategories, products, type ProductCategory } from "../data/products";

type Filter = "All" | ProductCategory;

const filters: Filter[] = ["All", ...productCategories];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProducts = useMemo(
    () =>
      activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="products" aria-labelledby="products-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Products"
          title="A premium selection of Indian produce"
          titleId="products-heading"
          description="Availability varies by season and region — please confirm current availability and specifications with us before placing an order."
        />

        <div
          role="group"
          aria-label="Filter products by category"
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  isActive
                    ? "text-white"
                    : "text-forest-dark/70 hover:text-forest-dark bg-bg-light hover:bg-forest/10"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="product-filter-pill"
                    className="absolute inset-0 rounded-full bg-forest"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative">{filter}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProducts.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate/60">
            No products in this category right now.
          </p>
        )}
      </div>
    </section>
  );
}
