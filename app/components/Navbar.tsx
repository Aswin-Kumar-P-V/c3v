"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "About", "Process", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 1.5rem", height: "68px", display: "flex",
      alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(8,8,8,0.94)" : "rgba(8,8,8,0.94)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      {/* Logo */}
      <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", letterSpacing: "0.05em", color: "var(--text)", textDecoration: "none", display: "flex", alignItems: "baseline", gap: "1px" }}>
        C<sup style={{ fontSize: "1rem", color: "var(--accent)" }}>3</sup>V
      </a>

      {/* Desktop Links */}
      <div className="nav-links" style={{ gap: "2.5rem", alignItems: "center" }}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--muted)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >{l}</a>
        ))}
        <a href="#contact"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.5rem 1.25rem", border: "1px solid var(--accent)", color: "var(--accent)", textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--accent)"; (e.target as HTMLElement).style.color = "#000"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "var(--accent)"; }}
        >Get in Touch</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-btn"
        style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.3rem", cursor: "pointer", padding: "0.5rem", lineHeight: 1 }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "56px", left: 0, right: 0,
          background: "var(--bg)", borderBottom: "1px solid var(--border)",
          padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--text)", textDecoration: "none", textTransform: "uppercase", padding: "0.5rem 0", borderBottom: "1px solid var(--border)" }}
            >{l}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.85rem 1.5rem", background: "var(--accent)", color: "#000", textDecoration: "none", fontWeight: 700, display: "inline-block", marginTop: "0.5rem" }}
          >Get in Touch</a>
        </div>
      )}
    </nav>
  );
}
