/**
 * About page — developer story, skills, and engineering philosophy.
 */

import AboutPageClient from "./about-client";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: "About Faizan Arif — Full Stack Developer Skills & Experience",
  description:
    "Learn about Faizan Arif — Full Stack Developer in Pakistan with 8+ years of experience in SaaS, ERP, LMS, web, mobile & desktop app development.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: `${BASE_URL}/about`,
    title: "About Faizan Arif — Full Stack Developer Skills & Experience (Pakistan)",
    description:
      "8+ years building SaaS platforms, ERP, LMS, web, mobile & desktop apps in Pakistan. React, Next.js, Laravel, .NET, n8n.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About Faizan Arif — Full Stack Developer",
  url: `${BASE_URL}/about`,
  description:
    "Faizan Arif is a Full Stack Developer based in Lahore & Gujranwala, Pakistan, with 8+ years of experience in SaaS, ERP, LMS, web, mobile & desktop development.",
  mainEntity: {
    "@type": "Person",
    name: "Faizan Arif",
    jobTitle: "Full Stack Developer",
    url: BASE_URL,
    image: `${BASE_URL}/dp/dp.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
