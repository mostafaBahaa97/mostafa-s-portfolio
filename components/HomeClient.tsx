"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiDocker } from "react-icons/si";

const techIcons = [
  { icon: FaReact,     label: "React",   color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#fff" },
  { icon: FaPython,    label: "Python",  color: "#3776ab" },
  { icon: SiDjango,    label: "Django",  color: "#44b78b" },
  { icon: SiDocker,    label: "Docker",  color: "#2496ed" },
];

export default function HomeClient() {
  return (
    <div className="grid-bg" style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(108,99,255,0.12)", top: -200, right: -200 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(255,101,132,0.08)", bottom: -100, left: -100 }} />

      <div className="hero-container">
        <div className="hero-grid">

          {/* ── Left ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="section-tag">
                <span style={{ width: 6, height: 6, background: "#43e97b", borderRadius: "50%", display: "inline-block" }} />
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              Hi, I'm <br />
              <span className="accent-text">Mostafa</span><br />
              Bahaa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-desc"
            >
              Full Stack Developer building modern, scalable web apps with{" "}
              <strong style={{ color: "var(--text)" }}>React</strong>,{" "}
              <strong style={{ color: "var(--text)" }}>Next.js</strong>,{" "}
              <strong style={{ color: "var(--text)" }}>Python</strong> &{" "}
              <strong style={{ color: "var(--text)" }}>Django</strong>.
              From pixel-perfect UIs to robust backends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-btns"
            >
              <Link href="/projects" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                View Projects <HiArrowRight />
              </Link>
              <Link href="/contact" className="btn-outline" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Contact Me
              </Link>
            </motion.div>

            {/* Socials + Stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-socials"
            >
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: FaGithub,   href: "https://github.com/mostafaBahaa97" },
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
              <div style={{ width: 1, height: 32, background: "var(--border)", flexShrink: 0 }} />
              {[["15+", "Projects"], ["3+", "Years Exp"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "var(--accent)" }}>{num}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
              <div className="card glow-box" style={{ padding: "32px 28px", position: "relative", zIndex: 1 }}>
                {/* Avatar */}
                <div style={{
                  width: 88, height: 88, borderRadius: "50%", margin: "0 auto 20px",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 36, fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "white",
                  border: "3px solid rgba(108,99,255,0.3)",
                  overflow: "hidden",
                }}>
                  <img
                  src="/mostafa.jpeg"
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

                <div style={{ textAlign: "center", marginBottom: 24 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Mostafa Bahaa</h3>
                  <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>Full Stack Developer</p>
                  <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>📍Alexanderia , Egypt</p>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>Tech Stack</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {techIcons.map(({ icon: Icon, label, color }) => (
                      <motion.div key={label} whileHover={{ scale: 1.2, y: -4 }} style={{
                        width: 42, height: 42, borderRadius: 10,
                        background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "default",
                      }} title={label}>
                        <Icon size={20} color={color} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ITI Badge */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))",
                  border: "1px solid rgba(108,99,255,0.3)",
                  borderRadius: 12, padding: "12px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  marginBottom: 12,
                }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>🎓</div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>ITI Graduate</p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Full Stack React & Python Track</p>
                  </div>
                </div>

                {/* CV Badge */}
                <a
                  href="https://cv-kappa-khaki-64.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(135deg, rgba(67,233,123,0.15), rgba(108,99,255,0.1))",
                    border: "1px solid rgba(67,233,123,0.3)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(67,233,123,0.6)";
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(67,233,123,0.25), rgba(108,99,255,0.15))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(67,233,123,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(67,233,123,0.15), rgba(108,99,255,0.1))";
                  }}
                >
                  <div style={{ fontSize: 22, flexShrink: 0 }}>📄</div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>View My CV</p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Download & view profile</p>
                  </div>
                </a>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge"
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b", display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: "#43e97b", whiteSpace: "nowrap" }}>Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          padding-top: 130px;
          padding-bottom: 80px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .hero-desc {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 480px;
        }
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .floating-badge {
          position: absolute;
          top: -14px;
          right: -14px;
          z-index: 2;
          background: var(--bg-card);
          border: 1px solid rgba(67,233,123,0.3);
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(67,233,123,0.2);
        }

        @media (max-width: 767px) {
          .hero-container {
            padding-top: 100px;
            padding-bottom: 60px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-title {
            font-size: clamp(36px, 10vw, 52px);
            margin-bottom: 16px;
          }
          .hero-desc {
            font-size: 15px;
            margin-bottom: 28px;
          }
          .hero-btns {
            gap: 12px;
            margin-bottom: 32px;
          }
          .hero-socials {
            gap: 16px;
          }
          .floating-badge {
            top: -10px;
            right: -6px;
            padding: 6px 10px;
          }
        }
      `}</style>
    </div>
  );
}
