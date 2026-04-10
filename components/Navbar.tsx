"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled || open ? "rgba(10,10,15,0.96)" : "transparent",
          backdropFilter: scrolled || open ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(108,99,255,0.1)" : "1px solid transparent",
        }}
      >
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          height: 68, padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #6c63ff, #ff6584)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "white",
                flexShrink: 0,
              }}>
                 <img
                  src="/favicon.ico"
                  alt="Avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  />
                  <span style={{
                  position: "absolute",
                  display: "none",
                  }} id="fallback-avatar">M</span>
                  <script dangerouslySetInnerHTML={{__html: `
                  const img = document.querySelector('img[alt="Avatar"]');
                  if (img && img.complete && img.naturalHeight === 0) {
                    img.style.display = 'none';
                    document.getElementById('fallback-avatar').style.display = 'block';
                  }
                  `}} />

              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>
                Mostafa<span style={{ color: "var(--accent)" }}>.</span>dev
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav — hidden below 768px */}
          <nav style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
            {navLinks.map(link => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{
                  textDecoration: "none",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "0.03em",
                  color: active ? "var(--accent)" : "var(--text-muted)",
                  background: active ? "rgba(108,99,255,0.1)" : "transparent",
                  border: active ? "1px solid rgba(108,99,255,0.2)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" style={{
              background: "linear-gradient(135deg, #6c63ff, #8b5cf6)",
              color: "white", textDecoration: "none",
              padding: "8px 20px", borderRadius: 8,
              fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 13,
              transition: "all 0.2s ease",
            }}>
              Hire Me
            </Link>
          </nav>

          {/* Burger — hidden above 768px */}
          <button
            onClick={() => setOpen(!open)}
            className="burger-btn"
            aria-label="Toggle menu"
            style={{
              background: "none", border: "1px solid var(--border)",
              color: "var(--text)", cursor: "pointer",
              width: 40, height: 40, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0,
              transition: "border-color 0.2s",
            }}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div style={{ padding: "12px 24px 20px" }}>
                {navLinks.map(link => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      style={{
                        display: "flex", alignItems: "center",
                        padding: "14px 0",
                        fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16,
                        color: active ? "var(--accent)" : "var(--text)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--border)",
                        gap: 8,
                      }}
                    >
                      {active && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />}
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block", marginTop: 16, textAlign: "center",
                    background: "linear-gradient(135deg, #6c63ff, #8b5cf6)",
                    color: "white", textDecoration: "none",
                    padding: "12px", borderRadius: 10,
                    fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15,
                  }}
                >
                  Hire Me 🚀
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style jsx global>{`
        /* Desktop nav: visible on md+ */
        .desktop-nav { display: flex !important; }
        .burger-btn  { display: none !important; }

        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .burger-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
