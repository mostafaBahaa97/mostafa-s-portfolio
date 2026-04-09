import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hazem Elrayan — a Full Stack Developer with experience in React, Next.js, Python, Django, Flask, Docker and AWS. ITI graduate with real-world project experience.",
  alternates: { canonical: "https://hazemelrayan.dev/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
