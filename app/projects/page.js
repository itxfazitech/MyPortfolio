/**
 * Projects page — full case-study layouts for each project.
 */

import ProjectsPageClient from "./projects-client";
import { PROJECTS } from "@/lib/data";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: "Projects — Web, SaaS, ERP & Enterprise Systems",
  description:
    "Explore real projects by Faizan Arif: SaaS platforms, ERP systems, LMS, healthcare management, e-commerce, and fintech dashboards built with React, Next.js, Laravel, .NET.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: `${BASE_URL}/projects`,
    title: "Projects — Web, SaaS, ERP & Enterprise Systems | Faizan Arif",
    description:
      "Real-world projects: SaaS, ERP, LMS, HMS, e-commerce & fintech by Full Stack Developer Faizan Arif (Pakistan).",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects` },
  ],
};

const projectsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Faizan Arif",
  description:
    "Real-world development projects completed by Faizan Arif — Full Stack Developer Pakistan.",
  url: `${BASE_URL}/projects`,
  numberOfItems: PROJECTS.length,
  itemListElement: PROJECTS.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "BusinessApplication",
      description: project.summary,
      keywords: project.technologies.join(", "),
      operatingSystem: "Web",
      author: {
        "@type": "Person",
        name: "Faizan Arif",
        url: BASE_URL,
      },
    },
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      />
      <ProjectsPageClient />
    </>
  );
}
