import { siteConfig } from "../config/site";
import logoLight from "../assets/brand/footer-logo-light.png";
import iconFooter from "../assets/brand/icon-footer.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white/80">
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
                  <a href={item.href} className="text-sm text-white/75 hover:text-white">
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
                <a href="#products" className="text-sm text-white/75 hover:text-white">
                  Browse products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/75 hover:text-white">
                  Contact us
                </a>
              </li>
              {siteConfig.privacyPolicyUrl && (
                <li>
                  <a href={siteConfig.privacyPolicyUrl} className="text-sm text-white/75 hover:text-white">
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
