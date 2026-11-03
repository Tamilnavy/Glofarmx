import { siteConfig } from "../config/site";
import logoLight from "../assets/brand/footer-logo-light.png";
import iconFooter from "../assets/brand/icon-footer.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-dark text-white/80">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fresh to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={iconFooter} alt="" className="h-8 w-auto shrink-0 object-contain" />
              <img
                src={logoLight}
                alt={siteConfig.brandName}
                className="h-9 w-auto max-w-[150px] object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A sourcing partner for fresh Indian agricultural produce, connecting quality
              growers with international importers and distributors.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-fresh transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Get in touch
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href="#products"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-fresh transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                  Browse products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-fresh transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                  Contact us
                </a>
              </li>
              {siteConfig.privacyPolicyUrl && (
                <li>
                  <a
                    href={siteConfig.privacyPolicyUrl}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-fresh transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                    Privacy Policy
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
