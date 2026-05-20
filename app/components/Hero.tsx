"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const grid = gridRef.current;
  //   if (!grid) return;
  //   const onMove = (e: MouseEvent) => {
  //     const x = (e.clientX / window.innerWidth) * 100;
  //     const y = (e.clientY / window.innerHeight) * 100;
  //     grid.style.backgroundPosition = `${x * 0.3}px ${y * 0.3}px`;
  //   };
  //   window.addEventListener("mousemove", onMove);
  //   return () => window.removeEventListener("mousemove", onMove);
  // }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Animated grid background */}
      <div
        ref={gridRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.4,
          transition: "background-position 0.1s ease",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,136,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
        className="animate-float"
      />
      <div
        style={{
          position: "absolute", bottom: "15%", left: "5%",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(255,61,0,0.06) 0%, transparent 70%)",
          borderRadius: "50%", animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div className="hero-content">
        {/* Tag line */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <div style={{
            width: "8px", height: "8px",
            background: "var(--accent)", borderRadius: "50%",
            boxShadow: "0 0 12px var(--accent)",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            letterSpacing: "0.25em", color: "var(--muted)", textTransform: "uppercase",
          }}>
            Software Agency — Est. 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 12vw, 11rem)",
          lineHeight: 0.9, letterSpacing: "0.02em",
          color: "var(--text)", marginBottom: "0.2rem",
        }}>WE BUILD</h1>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 12vw, 11rem)",
          lineHeight: 0.9, letterSpacing: "0.02em",
          color: "transparent", WebkitTextStroke: "1px var(--accent)",
          marginBottom: "0.2rem",
        }}>SOFTWARE</h1>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 12vw, 11rem)",
          lineHeight: 0.9, letterSpacing: "0.02em",
          color: "var(--text)",
        }}>THAT MOVES.</h1>

        {/* Sub-content row */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "2rem",
          marginTop: "3rem", alignItems: "flex-end",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem",
            color: "var(--muted)", maxWidth: "380px",
            lineHeight: 1.7, fontWeight: 300,
          }}>
            C<sup style={{ fontSize: "0.65em" }}>3</sup>V is a collective of
            engineers and designers who obsess over software craft — from web apps to AI integrations.
          </p>

          <div className="cta-row">
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "1rem 2rem", background: "var(--accent)",
                color: "#000", textDecoration: "none", fontWeight: 700,
                transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 var(--accent2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >Start a Project</a>
            <a
              href="#services"
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                padding: "1rem 2rem", border: "1px solid var(--border)",
                color: "var(--muted)", textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s", display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >Our Services</a>
          </div>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          {/* {[
            { num: "5+", label: "Core Technologies" },
            { num: "∞", label: "Ideas Per Day" },
            { num: "1", label: "Focus: Your Product" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1", minWidth: "120px",
                paddingRight: "2rem",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                paddingLeft: i > 0 ? "2rem" : "0",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)", fontSize: "2.5rem",
                color: "var(--accent)", lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                color: "var(--muted)", letterSpacing: "0.15em",
                textTransform: "uppercase", marginTop: "0.4rem",
              }}>{s.label}</div>
            </div>
          ))} */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "0.6rem",
          letterSpacing: "0.2em", color: "var(--muted)",
          textTransform: "uppercase", writingMode: "vertical-rl",
        }}>Scroll</span>
        <div style={{
          width: "1px", height: "60px",
          background: "linear-gradient(var(--accent), transparent)",
        }} />
      </div>
    </section>
  );
}
