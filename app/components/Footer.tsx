"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "3rem 2rem", background: "var(--bg)" }}>
      <div className="footer-inner">
        <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--text)", textDecoration: "none", letterSpacing: "0.05em" }}>
          C<sup style={{ fontSize: "0.6em", color: "var(--accent)" }}>3</sup>V
        </a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          © {year} C³V Agency. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a key={s} href="#"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
