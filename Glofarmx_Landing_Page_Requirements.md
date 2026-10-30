# Glofarmx — Premium Agricultural Export Landing Page Requirements

## 1. Project Overview

**Brand:** Glofarmx  
**Business:** Indian agricultural products export  
**Target audience:** International B2B buyers, importers, wholesalers, distributors, and food businesses  
**Initial target market:** Dubai and the UAE  
**Primary goal:** Build trust and encourage potential buyers to enquire about products or request a quotation.

Create a premium, modern landing page that feels like an established international agricultural export brand—not a grocery shop or a generic corporate template.

## 2. Required Tech Stack

- **React** — UI
- **Vite** — Development and build tooling
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling and responsive layouts
- **Framer Motion** — Subtle animations
- **Lucide React** — Icons

Use the existing project structure if a project already exists. Inspect it before making changes. Avoid unnecessary dependencies.

### Out of scope for this version

- No backend
- No database
- No authentication
- No admin dashboard
- No payment system
- No complex CMS

This is a frontend-only landing page. Contact and enquiry buttons should work using configured links. Do not pretend that a form has been submitted to a server when no backend exists.

## 3. Brand and Visual Direction

### Brand personality
- Premium
- Trustworthy
- Fresh
- International
- Quality-focused
- Modern and professional

### Colour palette
- Forest Green: `#174D35`
- Fresh Green: `#70A845`
- White: `#FFFFFF`
- Warm Gold: `#D9AC54`
- Dark Slate: `#26352D`
- Light Background: `#F7F9F6`

Use green and white as the primary colours. Use gold sparingly for small highlights and accents.

### Typography
- Headings: Manrope
- Body: Inter

Use clear visual hierarchy, refined spacing, readable font sizes, and strong contrast.

### Avoid
- A generic template appearance
- Excessive gradients or decorative effects
- Purple or neon colour schemes
- Cartoon vegetables or illustrations as the main imagery
- Excessively rounded cards everywhere
- Too many animations
- Fake certifications, awards, testimonials, statistics, or client logos
- Unsupported claims about export experience, capacity, or delivery guarantees

## 4. Premium Image Quality Requirements

**Image quality is a top priority.** Images should remain crisp at their intended display size on large desktop monitors, laptops, tablets, and mobile devices.

### Source image quality
- Prefer professional, realistic, high-resolution agricultural photography.
- For hero and large banner images, prefer source images around **2560 px or wider** when suitable images are available.
- Use appropriately high-resolution product images; do not enlarge small thumbnails to fill large areas.
- Choose images with clear details, natural colours, realistic produce, and professional lighting.
- Prefer original high-quality source assets over heavily compressed copies.
- Use legally usable images and follow the asset provider's licence terms.
- Do not use watermarked images.
- Do not invent image URLs or assume external image URLs will remain available.
- If an image is blurry or too small, replace it with a better source instead of artificially enlarging it.

### Responsive image delivery
- Use responsive images with `srcset` and `sizes` where appropriate.
- Use AVIF or WebP when supported by the build/image pipeline, with a suitable fallback when needed.
- Preserve the original aspect ratio and prevent image distortion.
- Use `object-fit: cover` only when intentional cropping is desired.
- Use `object-position` to keep the important subject visible.
- Reserve image dimensions or use aspect-ratio containers to prevent layout shifts.
- Lazy-load below-the-fold images.
- Avoid lazy-loading the main hero image if it is the page's primary Largest Contentful Paint (LCP) element.
- Provide meaningful alt text for informative images and empty alt text for purely decorative images.
- Test image loading and rendering at common viewport sizes and on high-density displays.

### Important zoom limitation
Do not claim that images can be zoomed infinitely without quality loss. Sharpness depends on the source image's resolution and the amount of zoom. Do not add a click-to-zoom gallery unless it is useful; if added, show a sufficiently high-resolution source image.

## 5. Landing Page Structure

Build the page as a polished single-page experience with these sections.

### A. Header / Navigation
- Glofarmx text logo or a simple clean typographic wordmark.
- Navigation links: Home, Products, Why Glofarmx, Export Process, Contact.
- Primary CTA: **Request a Quote**.
- Responsive mobile navigation menu.
- Sticky header only if it improves usability.
- Smooth-scroll navigation to relevant sections.

Do not invent an official logo asset. A temporary typographic wordmark is acceptable.

### B. Hero Section
Headline:

**Fresh From India. Delivered to Global Markets.**

Supporting copy:

“Your sourcing partner for fresh Indian agricultural produce, connecting quality growers with international importers and distributors.”

Primary CTA: **Explore Our Products**  
Secondary CTA: **Request a Quote**

Visual requirements:
- Use a premium, high-resolution photograph of fresh agricultural produce and/or export-ready produce packaging.
- The image must feel realistic, clean, and suitable for an international B2B brand.
- Ensure text remains readable over the image; use a restrained overlay only if needed.
- Use a strong desktop layout and a carefully adapted mobile layout.
- Do not crop out the main subject on smaller screens.
- Avoid excessive animation that delays content or affects performance.

### C. Business Highlights
Present three concise highlights:
- Quality-Focused Sourcing
- Export-Ready Packaging
- Reliable Supply Coordination

Use subtle icons and clean typography. These are intended as service principles, not verified certifications or guarantees.

### D. Featured Products
Display a premium selection of agricultural products with high-quality photographs.

Suggested initial products:
- Onion
- Potato
- Carrot
- Tomato
- Okra
- Brinjal
- Green Chilli
- Green Beans
- Drumstick
- Spinach

Each product card should include:
- Product image
- Product name
- Short, factual description
- CTA such as **Enquire About This Product**

Requirements:
- Use consistent image ratios and balanced card layouts.
- Product images must be sharp at their actual rendered size.
- Add subtle hover effects without excessive zoom or image distortion.
- Keep product data in a separate data file so products can be edited easily.
- Do not show invented prices, stock levels, minimum order quantities, or specifications.
- Do not imply every product is currently available; availability should be confirmed with the business.

### E. Why Choose Glofarmx
Explain the intended business approach using concise content:
- Buyer-focused sourcing
- Clear communication
- Product and packaging coordination
- Understanding of buyer requirements
- Long-term supplier and buyer relationships

Keep all claims factual and appropriate for the actual stage of the business. Do not invent years of experience, farmer networks, export volumes, client names, certifications, or guarantees.

### F. Export Process
Show a simple, attractive process timeline:
1. Submit Your Enquiry
2. Confirm Product Requirements
3. Review Quotation and Specifications
4. Finalize Order and Shipping Terms
5. Coordinate Documentation and Shipment

Explain that requirements and timelines depend on the product, destination, applicable regulations, and agreed terms. Do not claim that the business already has every required certification or export capability.

### G. International Buyer CTA
Headline:

**Looking for an Agricultural Sourcing Partner?**

Supporting text:

“Tell us what products you need, the required quantity, and your destination market. Get in touch to discuss your requirements.”

Buttons:
- Request a Quote
- Contact Us

### H. Contact / Enquiry Section
Create a clear contact section with:
- Name
- Company name (optional)
- Business email
- Country
- Product of interest
- Message / requirements

Requirements:
- Client-side validation for required fields and email format.
- Accessible labels and useful error messages.
- Clear success and error states.
- If no backend or form service is configured, use a mailto-based enquiry flow or clearly explain that the form is a demo. Never display a false “sent successfully” message.
- Keep email and WhatsApp details in a central configuration file.
- Do not invent contact details.

### I. WhatsApp CTA
- Add a clear WhatsApp enquiry button if a real business number is configured.
- Use a configurable phone number rather than hard-coding a fabricated number.
- Prefill a message such as:

  “Hello Glofarmx, I am interested in sourcing agricultural products. Please contact me regarding availability, packaging, and export quotations.”

- If no number is configured, hide the live WhatsApp action or display a development-only placeholder that is not visible to public visitors.

### J. Footer
Include:
- Glofarmx wordmark
- A concise business description
- Navigation links
- Product section link
- Contact CTA
- Privacy Policy placeholder/link if a policy page is actually provided
- Copyright notice with the current year generated dynamically

Do not invent a street address, official email, phone number, or social media profile.

## 6. UX and Responsive Behaviour

- Mobile-first, responsive design.
- Test at approximately 360 px, 390 px, 768 px, 1024 px, 1440 px, and larger desktop widths.
- No horizontal overflow.
- Navigation and buttons must be usable with touch and keyboard.
- CTA buttons must have visible hover, focus, and active states.
- Maintain adequate contrast and readable body text.
- Respect reduced-motion preferences.
- Use semantic HTML landmarks and accessible form labels.
- Make the primary CTA easy to find without overwhelming the page.
- Ensure mobile hero imagery is composed intentionally, not simply cropped from desktop.

## 7. Motion and Interaction

Use Framer Motion sparingly for:
- Subtle section reveal
- Small hover transitions
- Gentle button feedback
- Limited entrance effects

Requirements:
- Keep animations smooth and short.
- Avoid excessive parallax, constant movement, or distracting effects.
- Respect `prefers-reduced-motion`.
- Do not delay content visibility for animation.
- Ensure animations do not cause layout shifts or reduce usability.

## 8. SEO and Performance

- Add a descriptive page title and meta description.
- Add Open Graph metadata.
- Use semantic headings in a logical order.
- Use descriptive alt text for meaningful product images.
- Use clean, meaningful section IDs and links.
- Optimize images without noticeably degrading their visual quality.
- Lazy-load below-the-fold imagery.
- Prioritize the hero image's loading performance.
- Avoid unnecessary packages and heavy scripts.
- Aim for strong Lighthouse performance and accessibility results; do not promise a specific score without testing.

Suggested search themes:
- Indian agricultural products supplier
- Fresh vegetable exporter India
- Agricultural produce supplier for importers
- Fresh vegetables export to UAE

Do not promise search rankings.

## 9. Suggested Project Structure

Keep the implementation clean and maintainable. A suggested structure:

```text
src/
  assets/
  components/
    Header.tsx
    Footer.tsx
    Button.tsx
    SectionHeading.tsx
    ProductCard.tsx
    WhatsAppButton.tsx
  sections/
    HeroSection.tsx
    HighlightsSection.tsx
    ProductsSection.tsx
    WhyGlofarmxSection.tsx
    ExportProcessSection.tsx
    ContactSection.tsx
  data/
    products.ts
  config/
    site.ts
  App.tsx
  main.tsx
  index.css
```

Adapt the structure if the existing project already has a sensible setup. Avoid creating unnecessary abstractions.

## 10. Deployment

Prepare the frontend for deployment on Vercel.

- Ensure the production build works.
- Keep configurable contact details in one place.
- Do not put secrets in frontend environment variables.
- Document the build and deployment steps.
- Do not claim deployment is complete unless it has actually been performed.

## 11. Acceptance Checklist

Before declaring the work complete, verify:

- [ ] The landing page looks premium and consistent with the Glofarmx brand.
- [ ] All required sections are present.
- [ ] Header links scroll or navigate to the correct sections.
- [ ] Product cards render correctly.
- [ ] Product images are high-resolution and not visibly pixelated at their intended display size.
- [ ] Images preserve their aspect ratio without distortion.
- [ ] Responsive image sizes are used where appropriate.
- [ ] No small image is stretched to fill a large hero or banner.
- [ ] Images load correctly and have no broken URLs.
- [ ] Mobile, tablet, and desktop layouts work.
- [ ] No horizontal overflow exists.
- [ ] CTA buttons lead to the correct sections or configured contact methods.
- [ ] The enquiry form validates input and does not falsely report a successful submission.
- [ ] No fabricated contact details, certifications, statistics, testimonials, or guarantees appear.
- [ ] Animations are subtle and respect reduced-motion preferences.
- [ ] SEO metadata and accessibility basics are in place.
- [ ] The project passes the available type-check, lint, and production build commands.
- [ ] Setup and deployment instructions are provided.

## 12. Instructions for Claude

First inspect the current project files and identify the existing framework, dependencies, and entry points.

Then:
1. Provide a short implementation plan.
2. Build the complete landing page in the project.
3. Use high-quality image assets and verify that their URLs or local paths work.
4. Do not stop after creating a mockup or describing the design.
5. Run the available checks and fix errors.
6. Summarize what was implemented and list any details that require my real business information, such as contact email and WhatsApp number.

The final result should be a visually impressive, fast, responsive, premium agricultural export landing page—not a full web application.
