import type { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Hazem Elrayan's full stack projects — from Next.js + Django web apps to React-based social platforms. Real-world projects built and deployed.",
  alternates: { canonical: "https://mostafa-s-portfolio.vercel.app/projects" },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
