"use client";
export default function Works() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>Our work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "0.5rem" }}>PORTFOLIO</h2>
        </div>

        <div style={{ border: "1px dashed var(--border)", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {["top-left","top-right","bottom-left","bottom-right"].map((pos) => (
            <div key={pos} style={{
              position: "absolute", width: "20px", height: "20px", borderColor: "var(--accent)", borderStyle: "solid",
              borderWidth: pos === "top-left" ? "2px 0 0 2px" : pos === "top-right" ? "2px 2px 0 0" : pos === "bottom-left" ? "0 0 2px 2px" : "0 2px 2px 0",
              top: pos.includes("top") ? "16px" : "auto", bottom: pos.includes("bottom") ? "16px" : "auto",
              left: pos.includes("left") ? "16px" : "auto", right: pos.includes("right") ? "16px" : "auto",
            }} />
          ))}
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 8vw, 7rem)", color: "transparent", WebkitTextStroke: "1px var(--border)", lineHeight: 1, marginBottom: "1.5rem", userSelect: "none" }}>
            COMING SOON
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", maxWidth: "400px", margin: "0 auto", lineHeight: 1.8 }}>
            We&apos;re just getting started. Our first projects are in the works. Check back soon — or better yet, be the first.
          </p>
          <a
            href="#contact"
            style={{ display: "inline-block", marginTop: "2.5rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none", border: "1px solid var(--accent)", padding: "0.75rem 1.75rem", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "#000"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
          >Work with us →</a>
        </div>
      </div>
    </section>
  );
}
