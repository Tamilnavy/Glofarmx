import { MessageCircle } from "lucide-react";
import { buildWhatsappHref } from "../config/site";

interface WhatsAppButtonProps {
  className?: string;
  label?: string;
}

/**
 * Renders nothing for public visitors when no real WhatsApp number is configured.
 * In local development, a disabled placeholder is shown instead so the gap is visible to us.
 */
export function WhatsAppButton({ className = "", label = "Chat on WhatsApp" }: WhatsAppButtonProps) {
  const href = buildWhatsappHref();

  if (!href) {
    if (import.meta.env.DEV) {
      return (
        <span
          className={`inline-flex items-center gap-2 rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500 ${className}`}
          title="Development-only placeholder: set VITE config siteConfig.whatsappNumber to show this to visitors."
        >
          <MessageCircle size={18} />
          WhatsApp (not configured)
        </span>
      );
    }
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — opens WhatsApp in a new tab`}
      className={`inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
    >
      <MessageCircle size={18} />
      {label}
    </a>
  );
}
