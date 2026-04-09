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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108,99,255,0.1)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #6c63ff, #ff6584)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "white"
            }}>M</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>
              Mostafa<span style={{ color: "var(--accent)" }}>.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center" }} className="hidden md:flex">
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
          <Link href="/contact" className="btn-primary" style={{ padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 13 }}>
            Hire Me
          </Link>
        </nav>

        {/* Mobile menu */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", fontSize: 24 }}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(10,10,15,0.98)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px" }}
          >
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                display: "block", padding: "12px 0",
                fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 16,
                color: pathname === link.href ? "var(--accent)" : "var(--text)",
                textDecoration: "none", borderBottom: "1px solid var(--border)"
              }}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
