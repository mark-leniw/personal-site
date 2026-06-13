"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
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

  const strengths = [
    {
      title: "Technical Systems",
      text: "Broadcast support, troubleshooting, workflow thinking, and operational reliability.",
    },
    {
      title: "Creative Direction",
      text: "Writing, visual taste, concept building, and original project development.",
    },
    {
      title: "AI-Assisted Process",
      text: "Using modern tools to accelerate research, drafting, planning, and iteration.",
    },
  ];

  const bring = [
    {
      title: "Technical depth",
      text: "Experience supporting production hardware, software, workflows, QC, and operational systems across demanding environments.",
    },
    {
      title: "Problem solving",
      text: "A career shaped by troubleshooting, repair coordination, systems support, and practical solutions under pressure.",
    },
    {
      title: "Communication",
      text: "A blend of technical experience and writing background that helps me explain clearly, work well with people, and shape ideas into something usable.",
    },
    {
      title: "Creative instinct",
      text: "An increasing focus on writing, photography, concept development, and projects with tone, structure, and identity.",
    },
  ];

  const projects = [
    {
      title: "Neon Ledger",
      tag: "Creative / Editorial",
      text: "A fictional publication concept built around real Los Angeles neighborhoods, imagined notices, character sketches, classifieds, and noir editorial world-building.",
      href: "/projects/neon-ledger",
    },
    {
      title: "Echo Park After Hours",
      tag: "Creative / Live Format",
      text: "A live creative project built around AI-assisted music generation, visual identity, streaming structure, and atmosphere-driven presentation.",
      href: "/projects/echo-park-after-hours",
    },
    {
      title: "Photography Projects",
      tag: "Visual / Ongoing",
      text: "A growing body of visual work centered on atmosphere, framing, restraint, and cinematic mood.",
      href: "/projects/photography",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "24px 16px 72px" : "40px 24px 96px",
      }}
    >
      <section
        style={{
          padding: isMobile ? "20px 0 48px" : "44px 0 72px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1.2fr 0.8fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: isMobile ? "24px" : "32px",
              padding: isMobile ? "24px" : isTablet ? "32px" : "44px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#a3a3a3",
                padding: "10px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "22px",
              }}
            >
              Technical Systems / Creative Development
            </div>

            <h1
              style={{
                fontSize: isMobile ? "38px" : isTablet ? "52px" : "68px",
                lineHeight: isMobile ? 1.08 : 1.02,
                letterSpacing: "-0.04em",
                margin: "0 0 22px",
                maxWidth: "760px",
              }}
            >
              I build, troubleshoot, and shape technical and creative projects.
            </h1>

            <p
              style={{
                fontSize: isMobile ? "17px" : isTablet ? "19px" : "21px",
                lineHeight: 1.8,
                color: "#d4d4d4",
                margin: 0,
                maxWidth: "760px",
              }}
            >
              I come from a background in broadcast systems, technical support,
              and live production workflows. Over time, that same
              problem-solving mindset has expanded into writing, concept
              development, photography, and AI-assisted project building.
            </p>

            <p
              style={{
                marginTop: "18px",
                fontSize: isMobile ? "15px" : "16px",
                color: "#a3a3a3",
                lineHeight: 1.7,
              }}
            >
              Based in Southern California. Open to relocation for the right
              life-changing opportunity.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <a href="/experience" style={buttonPrimary}>
                View Experience
              </a>
              <a href="/projects" style={buttonSecondary}>
                See Projects
              </a>
              <a href="/contact" style={buttonSecondary}>
                Contact Me
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <div
              style={{
                ...glassCard,
                minHeight: isTablet ? "unset" : "220px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={eyebrowStyle}>Featured Direction</div>
                <h2
                  style={{
                    ...sideTitle,
                    fontSize: isMobile ? "24px" : "28px",
                  }}
                >
                  The Neon Ledger
                </h2>
              </div>
              <p style={sideText}>
                A fictional Los Angeles publication blending city observation,
                noir atmosphere, structured world-building, and editorial
                design.
              </p>
              <a href="/projects/neon-ledger" style={featureLink}>
                Explore project →
              </a>
            </div>

            <div
              style={{
                ...glassCard,
                minHeight: isTablet ? "unset" : "220px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={eyebrowStyle}>How I Work</div>
                <h2
                  style={{
                    ...sideTitle,
                    fontSize: isMobile ? "24px" : "28px",
                  }}
                >
                  Structure, taste, and follow-through
                </h2>
              </div>
              <p style={sideText}>
                I like taking rough ideas and turning them into something usable,
                whether that means solving a technical problem or building a
                concept with clarity and shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 44px" }}>
        <div style={threeColGrid}>
          {strengths.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "40px 0 20px" : "56px 0 24px" }}>
        <SectionHeading
          eyebrowText="About"
          title="A technical background with room for something more creative"
        />
        <div
          style={{
            maxWidth: "860px",
            color: "#d4d4d4",
            fontSize: isMobile ? "17px" : "19px",
            lineHeight: 1.95,
          }}
        >
          <p>
            My background is rooted in technical systems support, broadcast
            operations, hardware and software troubleshooting, and client-facing
            problem solving. I’ve spent years working in environments where
            reliability, clarity, and calm thinking matter.
          </p>
          <p>
            At the same time, I’m increasingly drawn to work that involves
            ideas, tone, storytelling, visual atmosphere, and building
            something original from the ground up.
          </p>
          <p>
            This site brings those two sides together: the technical experience
            I’ve built professionally, and the creative direction I’m growing
            more intentionally.
          </p>
        </div>
      </section>

      <section style={{ padding: isMobile ? "28px 0 28px" : "36px 0 36px" }}>
        <SectionHeading
          eyebrowText="What I Bring"
          title="Experience, structure, and creative instinct"
        />
        <div style={fourColGrid}>
          {bring.map((item) => (
            <div key={item.title} style={card}>
              <h3
                style={{
                  ...cardTitle,
                  fontSize: isMobile ? "21px" : "24px",
                }}
              >
                {item.title}
              </h3>
              <p style={cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "40px 0 28px" : "56px 0 36px" }}>
        <SectionHeading
          eyebrowText="Selected Projects"
          title="Work that shows how I think"
        />
        <div style={threeColGrid}>
          {projects.map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{
                ...card,
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.2s ease",
              }}
            >
              <div style={projectTag}>{item.tag}</div>
              <h3
                style={{
                  ...cardTitle,
                  marginTop: "12px",
                  fontSize: isMobile ? "21px" : "24px",
                }}
              >
                {item.title}
              </h3>
              <p style={cardText}>{item.text}</p>
              <div style={projectLink}>View project →</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "40px 0 28px" : "56px 0 36px" }}>
        <div
          style={{
            ...featurePanel,
            padding: isMobile ? "26px" : "36px",
          }}
        >
          <div style={{ maxWidth: "740px" }}>
            <div style={eyebrowStyle}>Process</div>
            <h2
              style={{
                fontSize: isMobile ? "30px" : "42px",
                lineHeight: 1.15,
                margin: "10px 0 18px",
                letterSpacing: "-0.03em",
              }}
            >
              I use AI as part of the process, not as a substitute for thinking.
            </h2>
            <p
              style={{
                fontSize: isMobile ? "17px" : "18px",
                lineHeight: 1.95,
                color: "#d4d4d4",
                margin: "0 0 16px",
              }}
            >
              I use AI as a practical working tool for research, drafting,
              ideation, troubleshooting, and rapid iteration. The value, for
              me, is not in replacing judgment. It’s in moving faster from rough
              idea to usable form while keeping direction and final decisions
              human.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "40px 0 0" : "56px 0 0" }}>
        <div
          style={{
            ...ctaPanel,
            padding: isMobile ? "28px" : "38px",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <div style={eyebrowStyle}>Contact</div>
            <h2
              style={{
                fontSize: isMobile ? "30px" : "40px",
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                margin: "10px 0 14px",
              }}
            >
              Interested in working together or learning more?
            </h2>
            <p
              style={{
                fontSize: isMobile ? "17px" : "18px",
                lineHeight: 1.9,
                color: "#d4d4d4",
                margin: 0,
              }}
            >
              I’m interested in thoughtful work with substance behind it,
              whether technical, creative, or somewhere in between.
            </p>

            <div style={{ marginTop: "26px" }}>
              <a href="/contact" style={buttonPrimary}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrowText,
  title,
}: {
  eyebrowText: string;
  title: string;
}) {
  return (
    <div style={{ marginBottom: "26px" }}>
      <div style={eyebrowStyle}>{eyebrowText}</div>
      <h2
        style={{
          fontSize: "clamp(30px, 5vw, 42px)",
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          margin: "10px 0 0",
          maxWidth: "760px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

const eyebrowStyle = {
  fontSize: "11px",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#a3a3a3",
};

const buttonPrimary = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "999px",
  background: "#f5f5f5",
  color: "#0a0a0a",
  fontWeight: 700,
  textDecoration: "none",
};

const buttonSecondary = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#f5f5f5",
  fontWeight: 600,
  textDecoration: "none",
};

const featureLink = {
  marginTop: "18px",
  fontSize: "14px",
  color: "#f5f5f5",
  fontWeight: 600,
  textDecoration: "none",
};

const glassCard = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  display: "flex",
  flexDirection: "column" as const,
};

const card = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "26px",
  background: "rgba(255,255,255,0.03)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
};

const cardSoft = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "22px",
  background: "rgba(255,255,255,0.025)",
};

const featurePanel = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "36px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
};

const ctaPanel = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "38px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
};

const sideTitle = {
  fontSize: "28px",
  lineHeight: 1.2,
  margin: "10px 0 0",
  letterSpacing: "-0.03em",
};

const sideText = {
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#d4d4d4",
  margin: 0,
};

const cardTitle = {
  fontSize: "24px",
  lineHeight: 1.25,
  margin: "0 0 12px",
  letterSpacing: "-0.02em",
};

const cardText = {
  fontSize: "15px",
  lineHeight: 1.9,
  color: "#d4d4d4",
  margin: 0,
};

const cardTextLarge = {
  fontSize: "16px",
  lineHeight: 1.9,
  color: "#d4d4d4",
  margin: "12px 0 0",
};

const projectTag = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#8a8f98",
};

const projectLink = {
  marginTop: "18px",
  fontSize: "14px",
  color: "#f5f5f5",
  fontWeight: 600,
};

const threeColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

const fourColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};