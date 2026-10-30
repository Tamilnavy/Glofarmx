import { SectionHeading } from "../components/SectionHeading";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export function ProductsSection() {
  return (
    <section id="products" aria-labelledby="products-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Products"
          title="A premium selection of Indian produce"
          titleId="products-heading"
          description="Availability varies by season and region — please confirm current availability and specifications with us before placing an order."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
