"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiDocker } from "react-icons/si";

const techIcons = [
  { icon: FaReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#fff" },
  { icon: FaPython, label: "Python", color: "#3776ab" },
  { icon: SiDjango, label: "Django", color: "#092e20" },
  { icon: SiDocker, label: "Docker", color: "#2496ed" },
];

export default function HomeClient() {
  return (
    <div className="grid-bg" style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(108,99,255,0.12)", top: -200, right: -200 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(255,101,132,0.08)", bottom: -100, left: -100 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", paddingTop: 160, paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="home-grid">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="section-tag">
                <span style={{ width: 6, height: 6, background: "#43e97b", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 24 }}
            >
              Hi, I'm <br />
              <span className="accent-text">Mostafa</span><br />
              Bahaa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}
            >
              Full Stack Developer building modern, scalable web apps with <strong style={{ color: "var(--text)" }}>React</strong>, <strong style={{ color: "var(--text)" }}>Next.js</strong>, <strong style={{ color: "var(--text)" }}>Python</strong> & <strong style={{ color: "var(--text)" }}>Django</strong>. From pixel-perfect UIs to robust backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}
            >
              <Link href="/projects" className="btn-primary" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                View Projects <HiArrowRight />
              </Link>
              <Link href="/contact" className="btn-outline" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                Contact Me
              </Link>
            </motion.div>

            {/* Social + Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 32 }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { icon: FaGithub, href: "https://github.com/mostafaBahaa97" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mostafabahaaeldin-dev/" },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                    width: 40, height: 40, borderRadius: 10, border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)", transition: "all 0.2s", textDecoration: "none",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div style={{ width: 1, height: 32, background: "var(--border)" }} />
              {[["+15", "Projects"], ["+3", "Years Exp"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "var(--accent)" }}>{num}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              {/* Main card */}
              <div className="card glow-box" style={{ padding: 40, position: "relative", zIndex: 1 }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: 100, height: 100, borderRadius: "50%", margin: "0 auto 24px",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 40, fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "white",
                  border: "3px solid rgba(108,99,255,0.3)"
                }}>M</div>

                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Mostafa Bahaa</h3>
                  <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>Full Stack Developer</p>
                  <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>📍 Egypt</p>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>Tech Stack</p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {techIcons.map(({ icon: Icon, label, color }) => (
                      <motion.div key={label} whileHover={{ scale: 1.2, y: -4 }} style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "default"
                      }} title={label}>
                        <Icon size={22} color={color} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ITI Badge */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))",
                  border: "1px solid rgba(108,99,255,0.3)",
                  borderRadius: 12, padding: "12px 16px",
                  display: "flex", alignItems: "center", gap: 12
                }}>
                  <div style={{ fontSize: 24 }}>🎓</div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>ITI Graduate</p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Full Stack React & Python Track</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: -16, right: -16, zIndex: 2,
                  background: "var(--bg-card)", border: "1px solid rgba(67,233,123,0.3)",
                  borderRadius: 12, padding: "10px 16px",
                  display: "flex", alignItems: "center", gap: 8,
                  boxShadow: "0 4px 20px rgba(67,233,123,0.2)"
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b", display: "inline-block" }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: "#43e97b" }}>Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
