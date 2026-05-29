"use client";
import { useState } from "react";

const steps = [
  {
    num: "01", title: "Discovery", duration: "Week 1",
    description: "We start by deeply understanding your goals, users, and constraints. No assumptions — we ask the hard questions first.",
    details: ["Requirements workshop", "Technical feasibility audit", "Competitor & market analysis", "Scope definition & timeline"],
  },
  {
    num: "02", title: "Design & Architecture", duration: "Week 1–2",
    description: "We map the system architecture, plan the data models, and design the user experience before touching code.",
    details: ["System design document", "UX wireframes & prototypes", "Database schema design", "Tech stack finalisation"],
  },
  {
    num: "03", title: "Build", duration: "Week 2–N",
    description: "Iterative development with weekly demos. You always know where we are. No big-bang surprises at the end.",
    details: ["Agile sprints (1 week)", "Weekly client demos", "Code review & QA", "Continuous deployment"],
  },
  {
    num: "04", title: "Launch & Handoff", duration: "Final Week",
    description: "We don't just hand over a ZIP file. We deploy, document, and make sure your team can own the product confidently.",
    details: ["Production deployment", "Documentation & runbooks", "Team knowledge transfer", "30-day post-launch support"],
  },
];

export default function Process() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="process" className="section-pad" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "4rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>
          How we work
        </span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "0.5rem" }}>
          THE PROCESS
        </h2>
      </div>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="process-step-header"
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", minWidth: "2.5rem" }}>
                {step.num}
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 3vw, 2.5rem)", letterSpacing: "0.05em", color: "var(--text)", flex: 1 }}>
                {step.title}
              </span>
              {/* <span className="process-step-duration" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", marginRight: "1rem" }}>
                {step.duration}
              </span> */}
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "1.5rem",
                color: open === i ? "var(--accent)" : "var(--muted)",
                transform: open === i ? "rotate(45deg)" : "none",
                transition: "transform 0.2s, color 0.2s", display: "inline-block",
              }}>+</span>
            </button>

            <div style={{ maxHeight: open === i ? "500px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
              <div className="process-inner" style={{ padding: "0 0 2.5rem 0" }}>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.8, fontWeight: 300, fontSize: "0.95rem" }}>
                  {step.description}
                </p>
                <ul style={{ listStyle: "none" }}>
                  {step.details.map((d, j) => (
                    <li key={j} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)",
                      letterSpacing: "0.1em", padding: "0.5rem 0", borderBottom: "1px solid var(--border)",
                      display: "flex", alignItems: "center", gap: "0.75rem",
                    }}>
                      <span style={{ color: "var(--accent)" }}>→</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
