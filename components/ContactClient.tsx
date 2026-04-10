"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiArrowRight, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function ContactClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const myForm = event.target as HTMLFormElement;
    const formData = {
      name: (myForm.elements.namedItem("name") as HTMLInputElement).value,
      email: (myForm.elements.namedItem("email") as HTMLInputElement).value,
      subject: (myForm.elements.namedItem("subject") as HTMLInputElement).value,
      message: (myForm.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const response = await fetch("https://formspree.io/f/xpwyywvn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) { setStatus("success"); myForm.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
    finally { setIsLoading(false); }
  };

  const contacts = [
    { icon: HiMail,          label: "Email",     value: "mostafabahaa899@gmail.com",    href: "mailto:mostafabahaa899@gmail.com",           color: "#6c63ff" },
    { icon: FaWhatsapp,      label: "WhatsApp",  value: "+20 100 780 9902",  href: "https://wa.me/201007809902",      color: "#25D366" },
    { icon: HiLocationMarker, label: "Location", value: "Alexandria, Egypt",             href: "#",                               color: "#ff6584" },
  ];

  const socials = [
    { icon: FaGithub,   href: "https://github.com/mostafaBahaa97",   label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mostafabahaaeldin-dev/", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/201007809902",        label: "WhatsApp" },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "rgba(108,99,255,0.08)", top: -100, right: -150 }} />

      <div className="contact-container">
        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-tag">Get in Touch</span>
          <h1 className="contact-title">
            Let's <span className="accent-text">Connect</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 460, margin: "0 auto", lineHeight: 1.8 }}>
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left – Contact info */}
          <div>
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Contact Info</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {contacts.map(({ icon: Icon, label, value, href, color }) => (
                  <a key={label} href={href} style={{ textDecoration: "none" }}>
                    <motion.div whileHover={{ x: 4 }} className="card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 42, height: 42, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color={color} />
                      </div>
                      <div>
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2, fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>{label}</p>
                        <p style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>{value}</p>
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.2)} style={{ marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, marginBottom: 14, color: "var(--text-muted)" }}>Find me on</h3>
              <div style={{ display: "flex", gap: 12 }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    style={{ width: 46, height: 46, borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none" }}
                    title={label}
                  >
                    <Icon size={19} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div {...fadeUp(0.3)} className="card" style={{ padding: 20, background: "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(67,233,123,0.05))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b", display: "inline-block", boxShadow: "0 0 8px #43e97b" }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#43e97b", fontSize: 13 }}>Available for Work</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                Open to freelance projects, full-time positions, and exciting collaborations. Let's build something great!
              </p>
            </motion.div>
          </div>

          {/* Right – Form */}
          <motion.div {...fadeUp(0.15)} className="card" style={{ padding: "32px 28px" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send a Message</h2>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "32px 16px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>Thank you! I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus("idle")} className="btn-primary">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="form-row">
                  <div>
                    <label className="form-label">NAME</label>
                    <input name="name" type="text" placeholder="Your name" className="input" required disabled={isLoading} />
                  </div>
                  <div>
                    <label className="form-label">EMAIL</label>
                    <input name="email" type="email" placeholder="your@email.com" className="input" required disabled={isLoading} />
                  </div>
                </div>
                <div>
                  <label className="form-label">SUBJECT</label>
                  <input name="subject" type="text" placeholder="What's this about?" className="input" required disabled={isLoading} />
                </div>
                <div>
                  <label className="form-label">MESSAGE</label>
                  <textarea name="message" placeholder="Tell me about your project or idea..." className="input" required disabled={isLoading} style={{ minHeight: 130, resize: "vertical" }} />
                </div>

                {status === "error" && (
                  <p style={{ color: "#ff6584", fontSize: 13 }}>⚠️ Something went wrong. Please try again.</p>
                )}

                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 28px", fontSize: 15 }}
                >
                  {isLoading ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                      Sending...
                    </span>
                  ) : (
                    <><span>Send Message</span><HiArrowRight size={18} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 32px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .form-label {
          font-size: 11px;
          color: var(--text-muted);
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          letter-spacing: 0.07em;
          display: block;
          margin-bottom: 7px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 767px) {
          .contact-container { padding: 0 16px; }
          .contact-grid { grid-template-columns: 1fr; gap: 24px; }
          .form-row { grid-template-columns: 1fr; gap: 14px; }
        }
      `}</style>
    </div>
  );
}
