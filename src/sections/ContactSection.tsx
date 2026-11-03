import { AlertCircle, CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { buildMailtoHref, siteConfig } from "../config/site";
import { products } from "../data/products";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface FormState {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  country: "",
  product: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "unavailable">(
    "idle",
  );

  const hasWeb3Forms = Boolean(siteConfig.web3formsAccessKey);
  const hasMailChannel = hasWeb3Forms || Boolean(siteConfig.contactEmail);

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your business email.";
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.country.trim()) next.country = "Please enter your country.";
    if (!values.message.trim()) next.message = "Please describe your requirements.";
    return next;
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    if (!hasMailChannel) {
      setStatus("unavailable");
      return;
    }

    const subject = `Sourcing enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;

    if (hasWeb3Forms) {
      setStatus("submitting");
      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: siteConfig.web3formsAccessKey,
            subject,
            from_name: form.name,
            name: form.name,
            company: form.company || undefined,
            email: form.email,
            country: form.country,
            product_of_interest: form.product || undefined,
            message: form.message,
          }),
        });
        const result = await response.json();
        if (response.ok && result.success) {
          setForm(initialState);
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = [
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      form.product ? `Product of interest: ${form.product}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = buildMailtoHref(subject, body);
    setStatus("success");
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your sourcing requirements"
          titleId="contact-heading"
          description="Share a few details and we'll get back to you about availability, packaging, and quotations."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                required
                error={errors.name}
                input={
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass(Boolean(errors.name))}
                  />
                }
              />
              <Field
                label="Company name"
                input={
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={inputClass(false)}
                  />
                }
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Business email"
                required
                error={errors.email}
                input={
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass(Boolean(errors.email))}
                  />
                }
              />
              <Field
                label="Country"
                required
                error={errors.country}
                input={
                  <input
                    id="country"
                    type="text"
                    autoComplete="country-name"
                    value={form.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={errors.country ? "country-error" : undefined}
                    className={inputClass(Boolean(errors.country))}
                  />
                }
              />
            </div>

            <Field
              label="Product of interest"
              input={
                <select
                  id="product"
                  value={form.product}
                  onChange={(e) => handleChange("product", e.target.value)}
                  className={inputClass(false)}
                >
                  <option value="">Select a product (optional)</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              }
            />

            <Field
              label="Message / requirements"
              required
              error={errors.message}
              input={
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={inputClass(Boolean(errors.message))}
                />
              }
            />

            <div aria-live="polite">
              {status === "success" && hasWeb3Forms && (
                <p className="flex items-center gap-2 rounded-md bg-fresh/10 px-4 py-3 text-sm font-medium text-forest-dark">
                  <CheckCircle2 size={18} className="shrink-0 text-fresh" />
                  Thanks — your enquiry has been sent. We'll get back to you shortly.
                </p>
              )}
              {status === "success" && !hasWeb3Forms && (
                <p className="flex items-center gap-2 rounded-md bg-fresh/10 px-4 py-3 text-sm font-medium text-forest-dark">
                  <CheckCircle2 size={18} className="shrink-0 text-fresh" />
                  Your email app should now open with these details pre-filled — please press
                  send there to reach us. This form does not submit directly to a server.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <AlertCircle size={18} className="shrink-0" />
                  Something went wrong sending your enquiry. Please try again or reach us on
                  WhatsApp.
                </p>
              )}
              {status === "unavailable" && (
                <p className="flex items-center gap-2 rounded-md bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                  <AlertCircle size={18} className="shrink-0" />
                  This is a demo form — a contact email hasn't been configured yet, so nothing
                  can be sent. Please check back soon or use WhatsApp if available.
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Submit Enquiry"}
            </Button>
          </form>

          <div className="flex flex-col gap-4 rounded-xl bg-bg-light p-7">
            <h3 className="font-heading text-lg font-bold text-forest-dark">
              Prefer a direct message?
            </h3>
            <p className="text-sm leading-relaxed text-slate/75">
              Reach out directly and we'll respond as soon as possible.
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <WhatsAppButton />
              {!hasMailChannel && (
                <p className="text-xs text-slate/60">
                  Email contact will be added here once configured.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border px-4 py-2.5 text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-fresh/40 ${
    hasError ? "border-red-400" : "border-forest/15"
  }`;
}

function Field({
  label,
  required,
  error,
  input,
}: {
  label: string;
  required?: boolean;
  error?: string;
  input: React.ReactElement<{ id?: string }>;
}) {
  const id = input.props.id;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-forest-dark">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {input}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
