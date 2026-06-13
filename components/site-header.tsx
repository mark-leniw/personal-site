import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/photography", label: "Photography" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        background: "rgba(10,10,10,0.78)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: "220px" }}>
          <Link
            href="/"
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#f5f5f5",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Mark Leniw
          </Link>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a3a3a3",
              marginTop: "4px",
            }}
          >
            Technical Systems / Creative Development
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "14px",
                color: "#d4d4d4",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/resume/Leniw_Mark_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#f5f5f5",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Résumé PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
