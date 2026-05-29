"use client";

import Link from "next/link";

export default function Works() {
  
  const projects = [
    {
      title: "Sales Insights Coach",
      category: "AI Analytics Platform",
      description:
        "An AI-powered sales intelligence platform that analyzes customer conversations, extracts actionable insights, and helps teams improve conversion performance through smart recommendations.",
      stack: ["AI", "Analytics", "Automation"],
      link: "https://sales-insights-coach.onrender.com/",
    },
    {
      title: "Contact Scraper AI",
      category: "Lead Generation Tool",
      description:
        "A smart contact extraction and lead generation system designed to automate business outreach by collecting and organizing publicly available business contact information efficiently.",
      stack: ["Web Scraping", "AI", "Lead Gen"],
      link: "https://contact-scraper-ai.onrender.com/",
    },
  ];

  return (
    <section
      className="section-pad"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            Our work
          </span>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              marginTop: "0.5rem",
            }}
          >
            PORTFOLIO
          </h2>
        </div>

        {/* Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <Link href={project.link} target="_blank" key={index}>
            <div
              style={{
                border: "1px solid var(--border)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                background: "rgba(255,255,255,0.01)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(0,136,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "140px",
                  height: "140px",
                  background:
                    "radial-gradient(circle, rgba(0,136,255,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Category */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </p>

              {/* Footer */}
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Visit
                </span>

                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "1.2rem",
                  }}
                >
                  →
                </span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}