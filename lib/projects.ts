// ─────────────────────────────────────────────────────────────────────────────
// كل بيانات المشاريع في مكان واحد. لإضافة مشروع جديد: انسخ أي object وعدّله.
// ⚠️ حط لينك اللايف ديمو في `url` لكل مشروع (لو فاضي الزرار بيختفي تلقائيًا).
// ─────────────────────────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  url: string;
  type: string;
  category: "Client Work" | "Team Project" | "Personal Project";
  emoji: string;
  color: string;
  solo: boolean;
  team?: string;
  featured?: boolean;
  tagline: string;
  desc: string;
  role: string;
  highlights: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    slug: "gallery-republic",
    title: "Gallery Republic",
    url: "https://demo-gallery-republic.vercel.app/", // TODO: حط لينك اللايف ديمو
    type: "E-Commerce + Admin Dashboard",
    category: "Client Work",
    emoji: "🏺",
    color: "#d4af37",
    solo: true,
    featured: true,
    tagline: "Online store for Pharaonic copper & silver-plated pieces, with a full order-management dashboard.",
    desc: "A complete e-commerce experience for an Egyptian brand selling Pharaonic-themed pieces (11 designs, each in pure copper or silver-plated finish). Customers build a cart, add optional laser engraving, and place an order in a few taps — while the owner manages orders, stock, discounts and promotions from a private dashboard. Google Sheets works as the database through a Google Apps Script API, so the client can see and edit everything in a tool they already know.",
    role: "Designed and built end to end: storefront, admin dashboard, Apps Script backend and deployment.",
    highlights: [
      "Cart with smart bundle discounts (rules are loaded live from the sheet, no redeploy needed)",
      "Laser-engraving option per piece — custom text or logo upload with live line editor",
      "Checkout with Egyptian phone validation, governorate/area picker and Google Maps location link",
      "Admin dashboard: login, orders & status flow, inventory, discounts, promo banner, analytics, printable shipping labels",
      "Anti-abuse protection: honeypot, per-device rate limit, request queue with automatic retry, server-side write lock",
      "Switchable themes (Pharaonic campaign / Classic) from a single config flag",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Google Apps Script", "Google Sheets"],
  },
  {
    slug: "erp-system",
    title: "ERP System",
    url: "https://demo-erp-lilac.vercel.app/", // TODO: حط لينك اللايف ديمو
    type: "Business Management (PWA)",
    category: "Client Work",
    emoji: "📊",
    color: "#3b82f6",
    solo: true,
    featured: true,
    tagline: "Arabic RTL ERP for small trading businesses — purchases, sales, stock, invoices and account statements.",
    desc: "An installable business-management app that replaces paper notebooks and scattered spreadsheets. It tracks suppliers, customers and products, records purchase and sales transactions, calculates real stock and actual profit (using average cost), prints invoices and produces full account statements. It keeps working on weak internet: anything saved while offline is queued on the device and synced automatically, with duplicate protection on the server.",
    role: "Full solo build: data model, UI modules, offline sync logic and Apps Script backend.",
    highlights: [
      "Dashboard with live KPIs: total purchases, sales, actual profit and low-stock alerts",
      "Six modules: dashboard, definitions, transactions, invoices, statements, finance",
      "Sales & purchase invoices with archive, reprint and cascade delete",
      "Supplier / customer / product statements including payments and old debts",
      "Installable PWA with service worker, dark mode, login and splash screen",
      "Offline-safe writes: local sync queue + unique request IDs + server write lock = no lost or duplicated records",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA", "Google Apps Script", "Google Sheets"],
  },
  {
    slug: "alexander-menu",
    title: "Alexander Restaurant Menu",
    url: "https://alexander-menu-silk.vercel.app/", // TODO: حط لينك اللايف ديمو
    type: "Digital Menu Website",
    category: "Client Work",
    emoji: "🍽️",
    color: "#D4AF37",
    solo: true,
    tagline: "Luxury dark-mode Arabic menu for an Alexandria restaurant — food, drinks, desserts and shisha.",
    desc: "A fast, mobile-first digital menu that customers open by scanning a QR code. The full RTL Arabic layout, black-and-gold branding and smooth animations give it the feel of a premium venue, while the whole menu lives in one data file so prices and items can be updated in minutes.",
    role: "UI design, front-end development, menu data entry and deployment.",
    highlights: [
      "Four sections (food, drinks, desserts, shisha) with 30+ categories and hundreds of items",
      "Sticky category tabs with smooth scroll and active-section tracking",
      "Item cards open animated modals with photos; “Top” and “New” badges",
      "Support for dual pricing (e.g. portion / kilo) and items without images",
      "Floating WhatsApp button, SEO metadata and Vercel Analytics",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "RTL / Arabic"],
  },
  {
    slug: "wedding-invitation",
    title: "Digital Wedding Invitation",
    url: "https://rana-wedding.vercel.app/", // TODO: حط لينك اللايف ديمو
    type: "Interactive Invitation",
    category: "Client Work",
    emoji: "💍",
    color: "#ff6584",
    solo: true,
    tagline: "A romantic Arabic wedding invitation with countdown, venue map and a private guest-wishes inbox.",
    desc: "A shareable invitation link guests open on their phones. It starts with an animated intro and a “tap to open” screen that starts the wedding music, then shows the calendar, a live countdown, venue details with a map link, and a form where guests leave a congratulation message. The messages are stored in Google Sheets and read by the couple on a password-protected page.",
    role: "Design, front-end, secure API route and Google Sheets integration.",
    highlights: [
      "Animated loading screen, tap-to-open gate with background music, floating hearts",
      "Live countdown to the ceremony and an auto-built month calendar",
      "One-tap “open location” button for the venue",
      "Guest wishes form → server API route → Google Sheet (secret key never exposed to the browser)",
      "Password-protected /messages page where the couple read all wishes",
    ],
    tech: ["Next.js 14", "React", "CSS Animations", "API Routes", "Google Apps Script"],
  },
  
  
  {
    slug: "tasbeeh-app",
    title: "Tasbeeh App",
    url: "https://tasbeeh-app-coral.vercel.app/",
    type: "Islamic Utility App",
    category: "Personal Project",
    emoji: "📿",
    color: "#43e97b",
    solo: true,
    tagline: "A minimal digital dhikr counter for daily Azkar.",
    desc: "A distraction-free counter for daily remembrances. Built solo as a fast, focused project with a calm interface that makes counting Azkar simple on a phone.",
    role: "Solo build: idea, UI and deployment.",
    highlights: ["Daily Azkar with counters", "Minimal, distraction-free UI", "Fast solo build with vibe coding"],
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    slug: "application-tracker",
    title: "Personal Application Tracker",
    url: "https://hazem-elrayan.com/",
    type: "Full Stack Web App",
    category: "Personal Project",
    emoji: "🌐",
    color: "#6c63ff",
    solo: true,
    featured: true,
    tagline: "Personal website with an application submission and real-time status tracking portal.",
    desc: "A full-stack website where users submit applications and follow their status in real time. Self-hosted on a VPS with a Django backend, PostgreSQL database and a server-rendered Next.js front end.",
    role: "Full stack: front end, API, database and VPS deployment.",
    highlights: [
      "Application submission & tracking portal",
      "Self-hosted on a VPS, deployed end to end",
      "PostgreSQL for persistent data",
      "Server-side rendering with Next.js",
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "VPS", "Python"],
  },
];
