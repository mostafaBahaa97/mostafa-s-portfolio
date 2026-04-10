"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker, FaGit, FaAws, FaWordpress, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiFlask, SiJavascript, SiMysql, SiPostgresql, SiSqlite, SiFigma, SiGithub } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

const skillGroups = [
  {
    label: "Frontend", emoji: "🎨", color: "#61dafb",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "#e34f26" },
      { icon: FaCss3, name: "CSS3", color: "#1572b6" },
      { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { icon: FaReact, name: "React", color: "#61dafb" },
      { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
      { icon: FaWordpress, name: "WordPress", color: "#21759b" },
    ],
  },
  {
    label: "Backend", emoji: "⚙️", color: "#3776ab",
    skills: [
      { icon: FaPython, name: "Python", color: "#3776ab" },
      { icon: SiDjango, name: "Django", color: "#44b78b" },
      { icon: SiFlask, name: "Flask", color: "#fff" },
    ],
  },
  {
    label: "Databases", emoji: "🗄️", color: "#336791",
    skills: [
      { icon: SiMysql, name: "MySQL", color: "#4479a1" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiSqlite, name: "SQLite", color: "#a3d0e4" },
    ],
  },
  {
    label: "DevOps & Tools", emoji: "🚀", color: "#2496ed",
    skills: [
      { icon: FaDocker, name: "Docker", color: "#2496ed" },
      { icon: FaGit, name: "Git", color: "#f05032" },
      { icon: SiGithub, name: "GitHub", color: "#fff" },
      { icon: FaAws, name: "AWS", color: "#ff9900" },
    ],
  },
  {
    label: "UI/UX Design", emoji: "✏️", color: "#a259ff",
    skills: [
      { icon: SiFigma, name: "Figma", color: "#a259ff" },
    ],
  },
];

const certs = [
  { title: "Front-End Development", issuer: "Route Academy",  icon: "🎓", color: "#6c63ff" },
  { title: "Database Fundamentals", issuer: "Mahara-Tech",    icon: "🗄️", color: "#ff6584" },
  { title: "Ubuntu Linux Essentials", issuer: "Mahara-Tech",  icon: "🐧", color: "#43e97b" },
  { title: "Freelancing Basics",    issuer: "Mahara-Tech",    icon: "💼", color: "#f7b731" },
];

const timeline = [
  {
    period: "Jun 2024 – Jun 2025",
    role: "WordPress Developer",
    company: "Freelance / Agency",
    type: "work",
    desc: "Built and maintained WordPress websites for clients. Developed custom themes, plugins, and handled SEO optimization for improved search rankings.",
    color: "#6c63ff",
    pills: ["WordPress", "SEO", "1 Year"],
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
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80 }}>
      <div className="about-container">

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-tag">About Me</span>
          <h1 className="about-title">
            The Developer <span className="accent-text">Behind the Code</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 580, margin: "0 auto", lineHeight: 1.8 }}>
            I'm Mostafa Bahaa, a passionate Full Stack Developer from Egypt. I love building things that live on the internet — from beautifully crafted UIs to solid, scalable backends.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 72 }}>
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="skills-grid">
            {skillGroups.map((group, gi) => (
              <motion.div key={group.label} className="card" {...fadeUp(gi * 0.05)} style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <span style={{ fontSize: 18 }}>{group.emoji}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: group.color }}>{group.label}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.skills.map(({ icon: Icon, name, color }) => (
                    <motion.div key={name} whileHover={{ scale: 1.05 }} style={{
                      display: "flex", alignItems: "center", gap: 7,
                      background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                      borderRadius: 100, padding: "5px 12px", cursor: "default",
                    }}>
                      <Icon size={15} color={color} />
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 72 }}>
          <h2 className="section-heading">Experience & Education</h2>
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "var(--border)" }} />
            {timeline.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} style={{ paddingLeft: 52, marginBottom: 32, position: "relative" }}>
                <div style={{
                  position: "absolute", left: 11, top: 6, width: 20, height: 20,
                  borderRadius: "50%", background: item.color,
                  boxShadow: `0 0 12px ${item.color}66`,
                }} />
                <div className="card" style={{ padding: "20px 20px" }}>
                  <div className="timeline-header">
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>
                        {item.role}
                        {item.badge && (
                          <span style={{
                            marginLeft: 8, background: "linear-gradient(135deg, #6c63ff, #43e97b)",
                            borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 700,
                            color: "white", verticalAlign: "middle", display: "inline-block",
                          }}>🎓 ITI</span>
                        )}
                      </h3>
                      <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 600 }}>{item.company}</p>
                    </div>
                    <span style={{
                      fontSize: 11, color: "var(--text-muted)", background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)", borderRadius: 6, padding: "4px 10px",
                      whiteSpace: "nowrap", alignSelf: "flex-start", flexShrink: 0,
                    }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginTop: 10 }}>{item.desc}</p>
                  {item.pills && (
                    <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {item.pills.map(p => (
                        <span key={p} className="skill-pill" style={{ fontSize: 11 }}>{p}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div {...fadeUp(0.1)}>
          <h2 className="section-heading">Certificates</h2>
          <div className="certs-grid">
            {certs.map((cert, i) => (
              <motion.div key={i} className="card" {...fadeUp(i * 0.08)} style={{ padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{cert.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 6, lineHeight: 1.4 }}>{cert.title}</h3>
                <p style={{ fontSize: 13, color: cert.color, fontWeight: 600 }}>{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        .about-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 54px);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .section-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 700;
          margin-bottom: 28px;
          text-align: center;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .timeline-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 767px) {
          .about-container { padding: 0 16px; }
          .skills-grid { grid-template-columns: 1fr; }
          .certs-grid  { grid-template-columns: 1fr 1fr; }
          .timeline-header { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 400px) {
          .certs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
