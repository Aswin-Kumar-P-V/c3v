type ContactPayload = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export const ContactUsEmail = ({
  name,
  email,
  project,
  message,
}: ContactPayload) => {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#111111",
          border: "1px solid #222",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "30px",
            borderBottom: "1px solid #222",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            NEW CONTACT REQUEST
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#999",
              fontSize: "14px",
            }}
          >
            Someone submitted the contact form.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "30px" }}>
          {/* Name */}
          <div style={{ marginBottom: "24px" }}>
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Name
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {name}
            </p>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "24px" }}>
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Email
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
              }}
            >
              {email}
            </p>
          </div>

          {/* Project */}
          <div style={{ marginBottom: "24px" }}>
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Project Type
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
              }}
            >
              {project || "Not specified"}
            </p>
          </div>

          {/* Message */}
          <div>
            <p
              style={{
                margin: "0 0 12px 0",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Message
            </p>

            <div
              style={{
                backgroundColor: "#181818",
                border: "1px solid #2a2a2a",
                borderRadius: "12px",
                padding: "20px",
                lineHeight: 1.7,
                color: "#ddd",
                fontSize: "15px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #222",
            padding: "20px 30px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#666",
              letterSpacing: "1px",
            }}
          >
            © C3V SOLUTIONS — CONTACT FORM NOTIFICATION
          </p>
        </div>
      </div>
    </div>
  );
};