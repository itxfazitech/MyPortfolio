import HeroSection from "@/components/home/hero-section";
import ExpertiseSection from "@/components/home/expertise-section";
import SolutionsSection from "@/components/home/solutions-section";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import ProcessSection from "@/components/home/process-section";
import TechStackSection from "@/components/home/tech-stack-section";
import MetricsSection from "@/components/home/metrics-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CTASection from "@/components/home/cta-section";

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
      <CTASection />
    </>
  );
}

