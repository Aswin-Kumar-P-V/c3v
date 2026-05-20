export default function About() {
  const values = [
    { letter: "C", sup: "1", title: "Craft", text: "Every line of code we write is written with intention. We believe in clean architecture, readable patterns, and maintainable systems." },
    { letter: "C", sup: "2", title: "Clarity", text: "No dark patterns. No overcomplicated solutions. We communicate clearly with clients and let simplicity guide our technical decisions." },
    { letter: "C", sup: "3", title: "Commitment", text: "When we take on a project, we own it. Deadlines matter, communication matters, and your vision becomes our obsession." },
    { letter: "V", sup: "", title: "Velocity", text: "We ship fast without cutting corners. Agile by nature, iterative by practice — we get things in front of real users, early." },
  ];

  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header — 2-col on desktop, 1-col on mobile */}
        <div className="grid-2col" style={{ marginBottom: "4rem" }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>
              Who we are
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "0.5rem" }}>
              ABOUT C<sup style={{ fontSize: "0.5em", verticalAlign: "super" }}>3</sup>V
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.85, fontSize: "1rem", fontWeight: 300, marginTop: "0.5rem" }}>
              C<sup style={{ fontSize: "0.7em" }}>3</sup>V is a crew of developers, designers, and problem-solvers who came together with a shared conviction: great software is an art form. We&apos;re not a factory. Every project gets our full attention, from architecture to the last pixel.
            </p>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.85, fontSize: "1rem", fontWeight: 300, marginTop: "1.5rem" }}>
              We&apos;re just getting started — but our standards aren&apos;t. We&apos;re here to build things that last, that perform, and that you&apos;re proud to put your name on.
            </p>
          </div>
        </div>

        {/* Values grid — auto-fit already responsive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: "var(--bg)", padding: "2.5rem", position: "relative" }}>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: "5rem", lineHeight: 1,
                color: "transparent", WebkitTextStroke: "1px var(--border)",
                position: "absolute", top: "1.5rem", right: "1.5rem", userSelect: "none",
              }}>
                {v.letter}
                {v.sup && <sup style={{ fontSize: "2rem", WebkitTextStroke: "1px var(--accent)" }}>{v.sup}</sup>}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.08em", color: "var(--accent)", marginBottom: "1rem" }}>
                {v.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--muted)", lineHeight: 1.7, fontSize: "0.9rem", fontWeight: 300 }}>
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
