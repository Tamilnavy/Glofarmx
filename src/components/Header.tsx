import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { Button } from "./Button";
import logoMark from "../assets/brand/mark-96.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logoMark} alt="" width={36} height={36} className="h-8 w-8 rounded-lg sm:h-9 sm:w-9" />
          <span
            className={`font-heading text-xl font-extrabold tracking-tight transition-colors duration-300 sm:text-2xl ${
              solid ? "text-forest-dark" : "text-white"
            }`}
          >
            {siteConfig.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors duration-300 ${
                solid ? "text-slate hover:text-forest" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  solid ? "bg-forest" : "bg-white"
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#contact" variant={solid ? "primary" : "ghost"}>
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 lg:hidden ${
            solid ? "text-forest-dark" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-forest/10 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate transition-colors hover:bg-bg-light hover:text-forest"
                >
                  {item.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                variant="primary"
                className="mt-3 w-full"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
