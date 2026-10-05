import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Mostafa Bahaa's projects — e-commerce with admin dashboard, Arabic ERP system, restaurant digital menu, wedding invitation, and React team projects. Built and deployed.",
  alternates: { canonical: "https://mostafa-s-portfolio.vercel.app/projects" },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
