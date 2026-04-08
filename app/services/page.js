/**
 * Services page — what I build, types of systems, business value.
 */

import ServicesPageClient from "./services-client";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: "Services — Web, Mobile & Enterprise Development",
  description:
    "Hire Faizan Arif for custom web apps, SaaS platforms, mobile development, ERP/LMS/HMS enterprise systems, API engineering, desktop apps, and automation with n8n.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: `${BASE_URL}/services`,
    title: "Services — Web, Mobile & Enterprise Development | Faizan Arif",
    description:
      "Custom web apps, SaaS, mobile apps, ERP, LMS, API engineering & n8n automation. Freelance Full Stack Developer — Pakistan.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Development Services by Faizan Arif",
  description: "Full Stack Development services offered by Faizan Arif, Pakistan.",
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: { "@type": "Service", name: "Custom Web Applications", description: "SaaS platforms, admin dashboards, customer portals built with React, Next.js, Laravel, ASP.NET.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
    {
      "@type": "ListItem", position: 2,
      item: { "@type": "Service", name: "Mobile App Development", description: "Cross-platform iOS & Android apps using React Native with API-driven architecture.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
    {
      "@type": "ListItem", position: 3,
      item: { "@type": "Service", name: "Enterprise Systems — ERP, LMS, HMS, HRMS", description: "Large-scale ERP, LMS, HMS, HRMS and financial platforms designed for growth.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
    {
      "@type": "ListItem", position: 4,
      item: { "@type": "Service", name: "API & Backend Engineering", description: "RESTful APIs, microservices, payment integrations and third-party connectors.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
    {
      "@type": "ListItem", position: 5,
      item: { "@type": "Service", name: "Desktop Applications", description: "Windows & cross-platform desktop tools using C# .NET and Electron.js.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
    {
      "@type": "ListItem", position: 6,
      item: { "@type": "Service", name: "Automation & n8n Workflows", description: "Intelligent workflow automation using n8n to connect systems and eliminate manual processes.", provider: { "@type": "Person", name: "Faizan Arif" } },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
