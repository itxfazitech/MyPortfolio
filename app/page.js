import HeroSection from "@/components/home/hero-section";
import ExpertiseSection from "@/components/home/expertise-section";
import SolutionsSection from "@/components/home/solutions-section";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import ProcessSection from "@/components/home/process-section";
import TechStackSection from "@/components/home/tech-stack-section";
import MetricsSection from "@/components/home/metrics-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import FaqSection from "@/components/home/faq-section";
import CTASection from "@/components/home/cta-section";

const BASE_URL = "https://itxfazitech.vercel.app";

export const metadata = {
  title: {
    absolute: "Faizan Arif | Full Stack Developer & SaaS Expert — Pakistan",
  },
  description:
    "Faizan Arif is a Full Stack Developer in Lahore & Gujranwala, Pakistan, specialising in SaaS platforms, ERP, LMS, web, mobile & desktop apps using React, Next.js, Node.js, Laravel, .NET, and n8n automation.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Faizan Arif — Full Stack Developer",
    url: BASE_URL,
    title: "Faizan Arif | Full Stack Developer & SaaS Expert (Pakistan)",
    description:
      "Full Stack Developer in Lahore & Gujranwala, Pakistan — SaaS, ERP, LMS, web, mobile & desktop apps.",
    images: [{ url: `${BASE_URL}/dp/dp.png`, width: 1200, height: 630, alt: "Faizan Arif — Full Stack Developer Pakistan" }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <SolutionsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <MetricsSection />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
    </>
  );
}

