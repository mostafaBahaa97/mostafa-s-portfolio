import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hazem Elrayan — Full Stack Developer. Available for freelance projects, job opportunities, and collaborations.",
  alternates: { canonical: "https://mostafa-s-portfolio.vercel.app/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
