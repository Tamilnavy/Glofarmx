/**
 * Central place for brand + contact configuration.
 *
 * IMPORTANT: The values below are placeholders. Replace them with Glofarmx's
 * real business details before deploying publicly. Nothing here is a
 * fabricated claim rendered on the page as fact — contactEmail / whatsapp
 * gate whether the related UI (mailto link, WhatsApp button) is shown at all.
 */

export const siteConfig = {
  brandName: "Glofarmx",
  tagline: "Fresh From India. Delivered to Global Markets.",

  /** Set to a real monitored inbox. Leave empty string to hide direct email CTAs. */
  contactEmail: "",

  /**
   * Web3Forms access key (https://web3forms.com) — lets the "Submit Enquiry"
   * form email you directly without opening the visitor's own mail app.
   * Get a free key by entering your inbox at web3forms.com, then set
   * VITE_WEB3FORMS_ACCESS_KEY in a `.env.local` file (see `.env.example`).
   * Leave unset and the form falls back to the `mailto:` behavior below.
   */
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",

  /**
   * WhatsApp business number in international format, digits only, e.g. "971501234567".
   * Leave empty to hide the WhatsApp button for public visitors.
   */
  whatsappNumber: "",

  whatsappPrefillMessage:
    "Hello Glofarmx, I am interested in sourcing agricultural products. Please contact me regarding availability, packaging, and export quotations.",

  /** Shown in the footer. Set a real URL only once a policy page exists. */
  privacyPolicyUrl: "",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Why Glofarmx", href: "#why-glofarmx" },
    { label: "Export Process", href: "#export-process" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export function buildMailtoHref(subject: string, body: string): string {
  const email = siteConfig.contactEmail;
  if (!email) return "";
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsappHref(message: string = siteConfig.whatsappPrefillMessage): string {
  const number = siteConfig.whatsappNumber;
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
