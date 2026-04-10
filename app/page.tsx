import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Mostafa Bahaa | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Python, Django & Flask. Building modern, scalable web applications.",
  alternates: { canonical: "https://mostafa-s-portfolio.vercel.app/" },
};

export default function Home() {
  return <HomeClient />;
}
