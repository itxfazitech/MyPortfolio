import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/client-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Faizan Arif | Full Stack Developer & SaaS Expert — Pakistan",
    template: "%s | Faizan Arif",
  },
  description:
    "Faizan Arif is a Full Stack Developer in Lahore & Gujranwala, Pakistan, specialising in SaaS platforms, ERP, LMS, web, mobile & desktop apps using React, Next.js, Node.js, Laravel, .NET, and n8n automation.",
  keywords: [
    "Faizan Arif",
    "Full Stack Developer Pakistan",
    "React Developer Pakistan",
    "Next.js Developer Pakistan",
    "Laravel Developer Pakistan",
    "ASP.NET Developer Pakistan",
    "Hire Developer Pakistan",
    "Freelance Developer Lahore",
    "Freelance Developer Gujranwala",
    "SaaS Developer Pakistan",
    "ERP Developer Pakistan",
    "n8n Developer Pakistan",
    "Automation Developer Pakistan",
    "Electron.js Developer",
    ".NET MAUI Developer Pakistan",
    "CodeIgniter Developer Pakistan",
    "Web Developer Lahore",
    "Web Developer Gujranwala",
    "Node.js Developer Pakistan",
    "React Native Developer Pakistan",
    ".NET Developer Pakistan",
    "Mobile App Developer Pakistan",
    "ERP Developer Lahore",
    "LMS Developer Pakistan",
  ],
  authors: [{ name: "Faizan Arif", url: BASE_URL }],
  creator: "Faizan Arif",
  publisher: "Faizan Arif",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Faizan Arif — Full Stack Developer",
    title: "Faizan Arif | Full Stack Developer & SaaS Expert (Pakistan)",
    description:
      "Full Stack Developer in Lahore & Gujranwala, Pakistan — SaaS, ERP, LMS, web, mobile & desktop apps using React, Next.js, Node.js, Laravel, .NET.",
    images: [
      {
        url: `${BASE_URL}/dp/dp.png`,
        width: 1200,
        height: 630,
        alt: "Faizan Arif — Full Stack Developer Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itxfazitech",
    creator: "@itxfazitech",
    title: "Faizan Arif | Full Stack Developer & SaaS Expert (Pakistan)",
    description:
      "Full Stack Developer in Lahore & Gujranwala, Pakistan — SaaS, ERP, LMS, web, mobile & desktop apps.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/dp/dp.png", type: "image/png" },
    ],
    apple: [
      { url: "/dp/dp.png", type: "image/png" },
    ],
    shortcut: "/dp/dp.png",
  },
  category: "technology",
  verification: {
    google: "xDIKqUN-3zSz1CkA4zROEJi-_0_djXfn9RvjCptp",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faizan Arif",
  givenName: "Faizan",
  familyName: "Arif",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer in Pakistan specialising in SaaS platforms, ERP, LMS, web, mobile & desktop apps using React, Next.js, Node.js, Laravel, .NET, and n8n automation.",
  url: BASE_URL,
  email: "itxfazitech@gmail.com",
  telephone: "+923054258257",
  image: `${BASE_URL}/dp/dp.png`,
  sameAs: ["https://github.com/itxfazitech"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  homeLocation: {
    "@type": "Place",
    name: "Gujranwala, Punjab, Pakistan",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "ASP.NET",
    "Blazor",
    ".NET MAUI",
    "Electron.js",
    "Python",
    "n8n",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "MongoDB",
    "Firebase",
    "Redis",
    "Docker",
    "AWS",
    "Azure",
    "React Native",
    "SaaS Architecture",
    "ERP Development",
    "LMS Platforms",
    "HRMS",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: [
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Gujranwala" },
    ],
    skills:
      "React, Next.js, Node.js, Laravel, ASP.NET, PHP, Python, n8n, Electron.js, .NET MAUI",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
    description: "Self-employed full stack developer providing services globally.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Faizan Arif — Full Stack Developer",
  url: BASE_URL,
  description:
    "Portfolio of Faizan Arif, Full Stack Developer in Pakistan. SaaS, ERP, LMS, web, mobile & desktop development.",
  author: {
    "@type": "Person",
    name: "Faizan Arif",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Faizan Arif — Full Stack Developer & SaaS Expert",
  description:
    "Freelance Full Stack Developer in Lahore & Gujranwala, Pakistan. Specialising in SaaS platforms, ERP, LMS, web, mobile, desktop, and automation services.",
  url: BASE_URL,
  telephone: "+923054258257",
  email: "itxfazitech@gmail.com",
  image: `${BASE_URL}/dp/dp.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "Country", "name": "Pakistan" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Applications" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Systems — ERP, LMS, HMS, HRMS" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API & Backend Engineering" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desktop Applications" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation & n8n Workflows" } },
    ],
  },
  sameAs: ["https://github.com/itxfazitech"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Favicon — PNG fallback for all browsers */}
        <link rel="icon" type="image/png" href="/dp/dp.png" />
        <link rel="apple-touch-icon" href="/dp/dp.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className="relative min-h-full flex flex-col">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
