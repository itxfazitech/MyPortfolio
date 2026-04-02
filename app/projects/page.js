/**
 * Projects page — full case-study layouts for each project.
 */

import ProjectsPageClient from "./projects-client";

export const metadata = {
  title: "Projects | Systems Architect Portfolio",
  description:
    "Explore case studies of enterprise systems, e-commerce platforms, healthcare solutions, and more.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
