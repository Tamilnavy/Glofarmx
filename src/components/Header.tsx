import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { Button } from "./Button";
import logoDark from "../assets/brand/header-logo-dark.png";
import logoLight from "../assets/brand/header-logo-light.png";
import iconHeader from "../assets/brand/icon-header.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

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

  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActiveHash(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-3 sm:gap-4" aria-label={siteConfig.brandName}>
          <img src={iconHeader} alt="" className="h-8 w-auto shrink-0 object-contain sm:h-[42px]" />
          <img
            src={solid ? logoDark : logoLight}
            alt={siteConfig.brandName}
            className="h-9 w-auto max-w-[130px] object-contain sm:h-[46px] sm:max-w-[170px]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  solid
                    ? isActive
                      ? "text-forest"
                      : "text-slate hover:text-forest"
                    : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } ${solid ? "bg-forest" : "bg-white"}`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
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
