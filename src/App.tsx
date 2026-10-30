import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Marquee } from "./components/Marquee";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { HeroSection } from "./sections/HeroSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { ProductsSection } from "./sections/ProductsSection";
import { WhyGlofarmxSection } from "./sections/WhyGlofarmxSection";
import { ExportProcessSection } from "./sections/ExportProcessSection";
import { BuyerCtaSection } from "./sections/BuyerCtaSection";
import { ContactSection } from "./sections/ContactSection";
import { products } from "./data/products";

const PRODUCT_NAMES = products.map((p) => p.name);

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <ScrollProgressBar />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest-dark focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />

        <div className="relative z-10 -mt-8 overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-24px_60px_-20px_rgba(15,54,38,0.35)] sm:-mt-14 sm:rounded-t-[3rem]">
          <div className="border-b border-forest/10 py-5">
            <Marquee items={PRODUCT_NAMES} />
          </div>
          <HighlightsSection />
          <ProductsSection />
        </div>

        <WhyGlofarmxSection />
        <ExportProcessSection />
        <BuyerCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
