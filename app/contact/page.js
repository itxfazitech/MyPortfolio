/**
 * Contact page — form + CTA + availability status.
 */

import ContactPageClient from "./contact-client";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: "Contact — Hire a Full Stack Developer from Pakistan",
  description:
    "Hire Faizan Arif — Freelance Full Stack Developer in Lahore & Gujranwala, Pakistan. Available for SaaS, web, mobile, desktop, ERP, LMS projects and consulting.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: `${BASE_URL}/contact`,
    title: "Contact — Hire a Full Stack Developer from Pakistan | Faizan Arif",
    description:
      "Hire Faizan Arif for freelance projects, consulting, or long-term partnerships. Lahore & Gujranwala, Pakistan.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Hire Faizan Arif — Full Stack Developer",
  url: `${BASE_URL}/contact`,
  description:
    "Contact Faizan Arif to hire a Full Stack Developer from Lahore & Gujranwala, Pakistan for SaaS, ERP, LMS, web, mobile or desktop projects.",
  mainEntity: {
    "@type": "Person",
    name: "Faizan Arif",
    jobTitle: "Full Stack Developer",
    url: BASE_URL,
    email: "itxfazitech@gmail.com",
    telephone: "+923054258257",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "itxfazitech@gmail.com",
      telephone: "+923054258257",
      areaServed: ["PK", "GB", "US", "AE", "SA"],
      availableLanguage: ["English", "Urdu"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
