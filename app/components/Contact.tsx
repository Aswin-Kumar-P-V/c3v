"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--border)",
    color: "var(--text)", padding: "1rem", fontFamily: "var(--font-body)",
    fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem",
    letterSpacing: "0.2em", textTransform: "uppercase" as const,
    color: "var(--muted)", marginBottom: "0.6rem",
  };

  return (
    <section id="contact" className="section-pad" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="grid-2col-lg">
        {/* Left */}
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>
            Let&apos;s talk
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "0.5rem", marginBottom: "2rem" }}>
            START A PROJECT
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Have an idea? A problem to solve? Or just want to see if we&apos;re a good fit? Drop us a message — we respond within 24 hours.
          </p>

          <div className="contact-info">
            {[
              { label: "Email", value: "hello@c3v.dev" },
              { label: "Based in", value: "Kerala, India" },
              { label: "Availability", value: "Open for new projects" },
            ].map((item) => (
              <div key={item.label}>
                <div style={labelStyle}>{item.label}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text)", letterSpacing: "0.05em" }}>
                  {item.label === "Availability" ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "7px", height: "7px", background: "var(--accent)", borderRadius: "50%", boxShadow: "0 0 8px var(--accent)", display: "inline-block" }} />
                      {item.value}
                    </span>
                  ) : item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {sent ? (
            <div style={{ border: "1px solid var(--accent)", padding: "3rem", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--accent)", marginBottom: "1rem" }}>GOT IT.</div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.1em" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                    placeholder="John Doe" />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                    placeholder="you@company.com" />
                </div>
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}>
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI Integration</option>
                    <option>API & Backend</option>
                    <option>UI/UX Design</option>
                    <option>Cloud & DevOps</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell us about it</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                    placeholder="What are you building? What problem does it solve?" />
                </div>
                <button type="submit"
                  style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.15em",
                    textTransform: "uppercase", padding: "1.1rem 2.5rem", background: "var(--accent)",
                    color: "#000", border: "none", cursor: "pointer", fontWeight: 700,
                    alignSelf: "flex-start", transition: "transform 0.2s, box-shadow 0.2s", width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 var(--accent2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                  Send Message →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
