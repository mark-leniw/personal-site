"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 700);
      setIsTablet(window.innerWidth <= 980);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: isMobile ? "24px 16px 72px" : "40px 24px 96px",
      }}
    >
      <section style={{ padding: isMobile ? "20px 0 40px" : "28px 0 56px" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: isMobile ? "24px" : "32px",
            padding: isMobile ? "24px" : "40px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          }}
        >
          <div style={eyebrowStyle}>Contact</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "860px",
            }}
          >
            For roles, collaborations, creative opportunities, or general inquiries.
          </h1>
          <p
            style={{
              fontSize: isMobile ? "17px" : "19px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
              maxWidth: "860px",
            }}
          >
            If you’d like to connect about technical work, creative work,
            project collaboration, or future opportunities, feel free to reach
            out.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          <div style={card}>
            <div style={eyebrowStyle}>Email</div>
            <h2
              style={{
                ...sectionTitle,
                fontSize: isMobile ? "24px" : "30px",
              }}
            >
              Direct contact
            </h2>
            <p style={bodyText}>mark@markleniw.com</p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>LinkedIn</div>
            <h2
              style={{
                ...sectionTitle,
                fontSize: isMobile ? "24px" : "30px",
              }}
            >
              Professional profile
            </h2>
            <p style={bodyText}>linkedin.com/in/msleniw</p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>Location</div>
            <h2
              style={{
                ...sectionTitle,
                fontSize: isMobile ? "24px" : "30px",
              }}
            >
              Based in Southern California
            </h2>
            <p style={bodyText}>
              Open to relocation for the right life-changing opportunity.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 0" }}>
        <div
          style={{
            ...ctaPanel,
            padding: isMobile ? "28px" : "38px",
          }}
        >
          <div style={eyebrowStyle}>Working Direction</div>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 42px)",
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              margin: "10px 0 14px",
            }}
          >
            I’m especially interested in work that combines structure, clarity, and creative point of view.
          </h2>
          <p
            style={{
              fontSize: isMobile ? "17px" : "18px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
            }}
          >
            That can mean technical systems, creative development, project
            building, or roles that sit somewhere in between.
          </p>
        </div>
      </section>
    </main>
  );
}

const eyebrowStyle = {
  fontSize: "11px",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#a3a3a3",
};

const sectionTitle = {
  fontSize: "30px",
  lineHeight: 1.18,
  letterSpacing: "-0.03em",
  margin: "10px 0 14px",
};

const bodyText = {
  fontSize: "17px",
  lineHeight: 1.9,
  color: "#d4d4d4",
  margin: 0,
};

const card = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
  background: "rgba(255,255,255,0.03)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
};

const ctaPanel = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "38px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
};
