import FaqPageClient from "./faq-client";
import { FAQS } from "@/lib/data";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: "FAQ — Hire a Full Stack Developer from Pakistan | Faizan Arif",
  description:
    "Frequently asked questions about hiring Faizan Arif — Full Stack Developer in Lahore & Gujranwala, Pakistan. Services, tech stack, pricing, timeline, and more.",
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: `${BASE_URL}/faq`,
    title: "FAQ — Hire a Full Stack Developer from Pakistan | Faizan Arif",
    description:
      "Answers to common questions about working with Faizan Arif — SaaS, ERP, mobile, and enterprise development from Pakistan.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: `${BASE_URL}/faq`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageClient />
    </>
  );
}
