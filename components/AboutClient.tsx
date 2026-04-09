"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker, FaGit, FaAws, FaWordpress, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiFlask, SiJavascript, SiTypescript, SiMysql, SiPostgresql, SiSqlite, SiFigma, SiGithub } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

const skillGroups = [
  {
    label: "Frontend",
    emoji: "🎨",
    color: "#61dafb",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "#e34f26" },
      { icon: FaCss3, name: "CSS3", color: "#1572b6" },
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: FaReact, name: "React", color: "#61dafb" },
      { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
      { icon: FaWordpress, name: "WordPress", color: "#21759b" },
    ]
  },
  {
    label: "Backend",
    emoji: "⚙️",
    color: "#3776ab",
    skills: [
      { icon: FaPython, name: "Python", color: "#3776ab" },
      { icon: SiDjango, name: "Django", color: "#44b78b" },
      { icon: SiFlask, name: "Flask", color: "#fff" },
    ]
  },
  {
    label: "Databases",
    emoji: "🗄️",
    color: "#336791",
    skills: [
      { icon: SiMysql, name: "MySQL", color: "#4479a1" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiSqlite, name: "SQLite", color: "#003b57" },
    ]
  },
  {
    label: "DevOps & Tools",
    emoji: "🚀",
    color: "#2496ed",
    skills: [
      { icon: FaDocker, name: "Docker", color: "#2496ed" },
      { icon: FaGit, name: "Git", color: "#f05032" },
      { icon: SiGithub, name: "GitHub", color: "#fff" },
      { icon: FaAws, name: "AWS", color: "#ff9900" },
    ]
  },
  {
    label: "UI/UX Design",
    emoji: "✏️",
    color: "#a259ff",
    skills: [
      { icon: SiFigma, name: "Figma", color: "#a259ff" },
    ]
  },
];

const certs = [
  { title: "Front-End Development", issuer: "Route Academy", icon: "🎓", color: "#6c63ff" },
  { title: "Database Fundamentals", issuer: "Mahara-Tech", icon: "🗄️", color: "#ff6584" },
  { title: "Ubuntu Linux Essentials", issuer: "Mahara-Tech", icon: "🐧", color: "#43e97b" },
  { title: "Freelancing Basics", issuer: "Mahara-Tech", icon: "💼", color: "#f7b731" },
];

const timeline = [
  {
    period: "Jun 2024 – Jun 2025",
    role: "WordPress Developer",
    company: "Freelance / Agency",
    type: "work",
    desc: "Built and maintained WordPress websites for clients. Developed custom themes, plugins, and handled SEO optimization for improved search rankings.",
    color: "#6c63ff",
  },
  {
    period: "2023 – 2024",
    role: "Full Stack React & Python Track",
    company: "ITI — Information Technology Institute",
    type: "education",
    desc: "Intensive full-stack program covering React, Next.js, Python, Django, Flask, databases, and deployment. Built real-world capstone projects.",
    color: "#43e97b",
    badge: true,
  },
];

export default function AboutClient() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="section-tag">About Me</span>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, marginBottom: 20 }}>
            The Developer <span className="accent-text">Behind the Code</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
            I'm Mostafa Bahaa, a passionate Full Stack Developer from Egypt. I love building things that live on the internet — from beautifully crafted UIs to solid, scalable backends.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>
            Skills & Technologies
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                className="card"
                {...fadeUp(gi * 0.05)}
                style={{ padding: 24 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 20 }}>{group.emoji}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: group.color }}>{group.label}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {group.skills.map(({ icon: Icon, name, color }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                        borderRadius: 100, padding: "6px 14px", cursor: "default"
                      }}
                    >
                      <Icon size={16} color={color} />
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>
            Experience & Education
          </h2>
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "var(--border)" }} />
            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} style={{ paddingLeft: 56, marginBottom: 40, position: "relative" }}>
                <div style={{
                  position: "absolute", left: 11, top: 4, width: 20, height: 20,
                  borderRadius: "50%", background: item.color,
                  boxShadow: `0 0 12px ${item.color}66`
                }} />
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
                        {item.role}
                        {item.badge && (
                          <span style={{
                            marginLeft: 10, background: "linear-gradient(135deg, #6c63ff, #43e97b)",
                            borderRadius: 6, padding: "2px 10px", fontSize: 11, fontWeight: 700,
                            color: "white", verticalAlign: "middle"
                          }}>🎓 ITI Graduate</span>
                        )}
                      </h3>
                      <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>{item.company}</p>
                    </div>
                    <span style={{
                      fontSize: 12, color: "var(--text-muted)", background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)", borderRadius: 6, padding: "4px 10px", whiteSpace: "nowrap"
                    }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{item.desc}</p>
                  {item.type === "work" && (
                    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                      <span className="skill-pill" style={{ fontSize: 12 }}>WordPress</span>
                      <span className="skill-pill" style={{ fontSize: 12 }}>SEO</span>
                      <span className="skill-pill" style={{ fontSize: 12 }}>1 Year</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div {...fadeUp(0.1)}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>
            Certificates
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {certs.map((cert, i) => (
              <motion.div key={i} className="card" {...fadeUp(i * 0.08)} style={{ padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{cert.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{cert.title}</h3>
                <p style={{ fontSize: 13, color: cert.color, fontWeight: 600 }}>{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
