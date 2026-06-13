import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "72px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "34px 24px 42px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#f5f5f5",
              marginBottom: "8px",
              letterSpacing: "-0.01em",
            }}
          >
            Mark Leniw
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#a3a3a3",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Technical systems professional with a growing creative direction in
            writing, concept development, photography, and AI-assisted project
            building.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "10px",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8a8f98",
              marginBottom: "4px",
            }}
          >
            Navigation
          </div>

          <Link href="/" style={footerLink}>
            Home
          </Link>
          <Link href="/about" style={footerLink}>
            About
          </Link>
          <Link href="/experience" style={footerLink}>
            Experience
          </Link>
          <Link href="/projects" style={footerLink}>
            Projects
          </Link>
          <Link href="/creative" style={footerLink}>
            Creative
          </Link>
          <Link href="/contact" style={footerLink}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

const footerLink = {
  color: "#d4d4d4",
  fontSize: "14px",
  textDecoration: "none",
};