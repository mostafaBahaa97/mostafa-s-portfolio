import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafa-s-portfolio.vercel.app/"),
  title: {
    default: "Mostafa Bahaa | Full Stack Developer",
    template: "%s | Mostafa Bahaa"
  },
  description: "Full Stack Developer specializing in React, Next.js, Python, Django & Flask. Building modern, scalable web applications with clean code and great user experience.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Python", "Django", "Flask", "Web Developer", "Mostafa Bahaa", "Frontend", "Backend"],
  authors: [{ name: "Mostafa Bahaa" }],
  creator: "Mostafa Bahaa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostafa-s-portfolio.vercel.app/",
    title: "Mostafa Bahaa | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Python, Django & Flask.",
    siteName: "Mostafa Bahaa Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mostafa Bahaa - Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Bahaa | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Python, Django & Flask.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mostafa-s-portfolio.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mostafa Bahaa",
              "jobTitle": "Full Stack Developer",
              "url": "https://mostafa-s-portfolio.vercel.app/",
              "sameAs": [
                "https://github.com/mostafaBahaa97",
                "https://linkedin.com/in/mostafabahaaeldin-dev/"
              ],
              "knowsAbout": ["React", "Next.js", "Python", "Django", "Flask", "JavaScript", "TypeScript", "Docker", "AWS"]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
