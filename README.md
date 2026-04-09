# Mostafa Bahaa — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
  layout.tsx        # Root layout with SEO metadata
  page.tsx          # Home page
  about/page.tsx    # About page
  projects/page.tsx # Projects page
  contact/page.tsx  # Contact page
  sitemap.ts        # Auto-generated sitemap for SEO
  robots.ts         # Robots.txt for SEO
  globals.css       # Design system & global styles

components/
  Navbar.tsx        # Fixed navbar with active link detection
  WhatsAppButton.tsx # Fixed floating WhatsApp button
  HomeClient.tsx    # Home page content
  AboutClient.tsx   # About page content
  ProjectsClient.tsx # Projects page content
  ContactClient.tsx # Contact form (Formspree)
```

## 🌐 Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → Import your GitHub repo → Deploy (zero config needed, `vercel.json` handles everything)

## ✏️ Customization

| What to change | Where |
|---|---|
| Your name / bio | `components/HomeClient.tsx` |
| Skills & experience | `components/AboutClient.tsx` |
| Projects | `components/ProjectsClient.tsx` |
| Contact form endpoint | `components/ContactClient.tsx` (Formspree ID) |
| WhatsApp number | `components/WhatsAppButton.tsx` |
| SEO metadata | `app/layout.tsx` |
| Site URL (canonical) | `app/layout.tsx` → `app/sitemap.ts` |

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Contact Form**: Formspree
- **Fonts**: Syne + DM Sans (Google Fonts)
- **SEO**: Metadata API, Open Graph, JSON-LD, Sitemap, Robots.txt

## 🔍 SEO Features

- ✅ Per-page `<title>` and `<description>` metadata
- ✅ Open Graph tags (for social sharing)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ JSON-LD structured data (Person schema)
- ✅ Auto-generated `/sitemap.xml`
- ✅ Auto-generated `/robots.txt`
- ✅ Security headers via `next.config.ts`
