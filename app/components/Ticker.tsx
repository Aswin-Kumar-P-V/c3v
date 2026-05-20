export default function Ticker() {
  const items = [
    "Web Development",
    "Mobile Apps",
    "API Design",
    "AI Integration",
    "Cloud Architecture",
    "UI / UX Design",
    "DevOps",
    "Custom Software",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
        overflow: "hidden",
        background: "var(--surface)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          gap: "0",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              color: i % 4 === 1 ? "var(--accent)" : "var(--muted)",
              padding: "0 2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {item}
            <span style={{ color: "var(--border)", fontSize: "0.8rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
