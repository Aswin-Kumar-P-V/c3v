"use client";
import { useState } from "react";

const services = [
  { num: "01", title: "Web Development", description: "Full-stack web applications built with modern frameworks. From landing pages to complex platforms — fast, accessible, and scalable.", tags: ["Next.js", "React", "Node.js", "PostgreSQL"] },
  { num: "02", title: "Mobile Applications", description: "Cross-platform mobile apps that feel native. We build iOS and Android experiences with React Native and Expo.", tags: ["React Native", "Expo", "Swift", "Kotlin"] },
  { num: "03", title: "AI Integration", description: "Embed intelligence into your product. LLM-powered features, chatbots, automation pipelines, and custom ML solutions.", tags: ["OpenAI", "LangChain", "Python", "Vector DBs"] },
  { num: "04", title: "Whatsapp Automations", description: "Automate customer interactions, lead generation, appointment scheduling, follow-ups, and support through intelligent WhatsApp workflows.", tags: ["REST", "GraphQL", "gRPC", "Docker"] },
  { num: "05", title: "UI / UX Design", description: "Design systems and user experiences that convert. We bridge the gap between aesthetics and function.", tags: ["Figma", "Prototyping", "Design Systems", "Research"] },
  { num: "06", title: "Cloud & DevOps", description: "Infrastructure that sleeps so you don't have to. CI/CD pipelines, cloud deployments, and monitoring.", tags: ["AWS", "GCP", "Vercel", "GitHub Actions"] },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="section-pad" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>
            What we do
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "0.5rem" }}>
            SERVICES
          </h2>
        </div>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", maxWidth: "300px", lineHeight: 1.7, fontWeight: 300, fontSize: "0.95rem" }}>
          We cover the full spectrum of software development — from pixel to production.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
        {services.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              background: active === i ? "var(--surface2)" : "var(--bg)",
              padding: "2.5rem", transition: "background 0.2s",
              cursor: "default", position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: active === i ? "100%" : "0%", height: "2px",
              background: "var(--accent)", transition: "width 0.3s ease",
            }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.15em" }}>{s.num}</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", letterSpacing: "0.05em", marginTop: "1rem", marginBottom: "1rem" }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1.5rem", fontWeight: 300 }}>{s.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {s.tags.map((tag, j) => (
                <span key={j} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.6rem", border: "1px solid var(--border)", color: "var(--muted)" }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
