"use client";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Personal Application Tracker",
    url: "https://hazem-elrayan.com/",
    type: "Full Stack Web App",
    emoji: "🌐",
    color: "#6c63ff",
    solo: true,
    desc: "A professional full-stack personal website with an application tracking system. Users can submit applications and monitor their status in real-time.",
    highlights: [
      "Application submission & tracking portal",
      "Self-hosted on a VPS — deployed end to end",
      "PostgreSQL database for persistent data",
      "Server-side rendering with Next.js",
    ],
    tech: ["Next.js", "Django", "PostgreSQL", "VPS", "Python"],
    featured: true,
  },
  {
    title: "Pet Society",
    url: "https://pet-society-silk.vercel.app/",
    type: "Social Platform",
    emoji: "🐾",
    color: "#ff6584",
    solo: false,
    team: "Team of 5",
    desc: "A Facebook-inspired social network for pet owners. Create pet profiles, connect with other owners, arrange meetups — built as a full-stack team project.",
    highlights: [
      "Social feed, profiles, and messaging",
      "Pet matching & meetup coordination",
      "React-powered dynamic frontend",
      "Full team collaboration — 5 developers",
    ],
    tech: ["React", "JavaScript", "REST API", "Team Project"],
    featured: true,
  },
  {
    title: "Movie App",
    url: "https://movie-app-reactjs-beige.vercel.app/",
    type: "API-Powered App",
    emoji: "🎬",
    color: "#f7b731",
    solo: false,
    team: "Team Project",
    desc: "A movie and series discovery platform pulling live data from a public API. Browse ratings, trailers, user reviews, and trending content.",
    highlights: [
      "Live movie data via external API",
      "Ratings, banners & user comments",
      "Clean, responsive React UI",
      "Collaborative team development",
    ],
    tech: ["React", "API Integration", "JavaScript", "CSS"],
  },
  {
    title: "Tasbeeh App",
    url: "https://tasbeeh-app-coral.vercel.app/",
    type: "Islamic Utility App",
    emoji: "📿",
    color: "#43e97b",
    solo: true,
    desc: "A clean digital dhikr counter app for daily Islamic remembrances (Azkar). Minimal, functional, and meaningful.",
    highlights: [
      "Daily Azkar with counters",
      "Minimal, distraction-free UI",
      "Fast solo build with vibe coding",
    ],
    tech: ["React", "JavaScript", "CSS"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export default function ProjectsClient() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80 }}>
      <div className="projects-container">

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-tag">Portfolio</span>
          <h1 className="projects-title">
            Projects I've <span className="accent-text">Built</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Real-world applications — from full-stack platforms deployed to production, to team collaborations and quick solo builds.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp(i * 0.08)}
              className="card proj-card"
            >
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
                borderRadius: "16px 16px 0 0",
              }} />

              {project.featured && (
                <div className="featured-badge">⭐ Featured</div>
              )}

              <div className="proj-inner">
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 32, flexShrink: 0 }}>{project.emoji}</span>
                    <div>
                      <span style={{ fontSize: 11, color: project.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", display: "block" }}>
                        {project.type}
                      </span>
                      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(16px, 3vw, 20px)", lineHeight: 1.2 }}>{project.title}</h2>
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>{project.desc}</p>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {project.solo ? (
                      <span className="skill-pill" style={{ fontSize: 12, color: "#43e97b", borderColor: "rgba(67,233,123,0.3)" }}>✨ Solo Project</span>
                    ) : (
                      <span className="skill-pill" style={{ fontSize: 12, color: "#f7b731", borderColor: "rgba(247,183,49,0.3)" }}>👥 {project.team}</span>
                    )}
                    {project.tech.map(t => (
                      <span key={t} className="skill-pill" style={{ fontSize: 12 }}>{t}</span>
                    ))}
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="btn-primary"
                    style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "10px 20px" }}
                  >
                    <HiExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>

                {/* Right – highlights */}
                <div className="proj-highlights">
                  <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif", fontWeight: 600, marginBottom: 14 }}>
                    Key Features
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {project.highlights.map((h, hi) => (
                      <li key={hi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
                        <span style={{ color: project.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .projects-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .proj-card {
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .featured-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(108,99,255,0.15);
          border: 1px solid rgba(108,99,255,0.3);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .proj-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .proj-highlights {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
        }

        @media (max-width: 767px) {
          .projects-container { padding: 0 16px; }
          .proj-card { padding: 20px 16px; }
          .proj-inner { grid-template-columns: 1fr; gap: 20px; }
          .featured-badge { position: static; display: inline-block; margin-bottom: 12px; }
          .proj-highlights { padding: 16px; }
        }
      `}</style>
    </div>
  );
}
