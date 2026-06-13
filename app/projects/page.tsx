"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
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

  const featuredProjects = [
    {
      title: "The Neon Ledger",
      tag: "Featured Direction / Editorial World-Building",
      description:
        "A fictional Los Angeles publication built from city observation, noir atmosphere, classifieds, imagined notices, character sketches, and slow-burn editorial world-building.",
      whatItInvolves: [
        "Editorial concept design",
        "Tone development",
        "Publication structure",
        "World-building systems",
        "Visual direction",
        "AI-assisted creative workflow",
      ],
      whyItMatters:
        "It shows how I like to build projects with internal logic, mood, and continuity rather than treating ideas as one-off concepts.",
      href: "/projects/neon-ledger",
    },
    {
      title: "Echo Park After Hours",
      tag: "Creative / Live Format",
      description:
        "A live creative project shaped around AI-assisted music generation, visual identity, streaming structure, overlays, and atmosphere-driven presentation.",
      whatItInvolves: [
        "Creative framing",
        "Live show structure",
        "Visual identity",
        "Workflow design",
        "Streaming presentation",
        "Technical setup",
      ],
      whyItMatters:
        "It reflects the way I combine technical systems, presentation, and visual taste into something more experiential.",
      href: "/projects/echo-park-after-hours",
    },
    {
      title: "Photography Projects",
      tag: "Visual / Ongoing Practice",
      description:
        "An ongoing body of visual work centered on atmosphere, framing, restraint, landscape, urban mood, and cinematic stillness.",
      whatItInvolves: [
        "Image-making",
        "Visual editing",
        "Curation",
        "Sequencing",
        "Style development",
        "Atmosphere-focused work",
      ],
      whyItMatters:
        "It shows the quieter side of my creative instincts and my interest in mood, observation, and visual storytelling.",
      href: "/projects/photography",
    },
  ];

  const categories = [
    {
      title: "Technical Projects",
      text: "Workflow ideas, systems thinking, troubleshooting-oriented builds, and practical problem solving shaped by real technical experience.",
    },
    {
      title: "Creative Projects",
      text: "Writing, publication concepts, world-building, editorial framing, and projects developed through tone and structure.",
    },
    {
      title: "Photography",
      text: "Atmosphere-driven visual work focused on framing, restraint, landscape, and cinematic mood.",
    },
    {
      title: "AI-Assisted Builds",
      text: "Projects shaped through a mix of human direction, AI-supported drafting, iteration, and structured experimentation.",
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
      <section style={{ padding: isMobile ? "20px 0 40px" : "36px 0 56px" }}>
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
          <div style={eyebrowStyle}>Projects</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "860px",
            }}
          >
            Work that shows how I think, what I build, and where I’m headed.
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
            Not all meaningful work begins inside a job title. Some projects start
            as experiments, side paths, or personal ideas that become more serious
            over time. I’m interested in work that combines structure, usefulness,
            mood, originality, and follow-through.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 36px" }}>
        <SectionHeading
          eyebrowText="Project Areas"
          title="The four lanes I’m building through"
        />
        <div style={fourColGrid}>
          {categories.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "28px 0 20px" : "40px 0 24px" }}>
        <SectionHeading
          eyebrowText="Featured Work"
          title="Projects with the clearest point of view"
        />
      </section>

      <section style={{ display: "grid", gap: "20px" }}>
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: isMobile ? "24px" : "32px",
              padding: isMobile ? "22px" : "30px",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 12px 34px rgba(0,0,0,0.14)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isTablet ? "1fr" : "1.15fr 0.85fr",
                gap: "24px",
              }}
            >
              <div>
                <div style={projectTag}>{project.tag}</div>
                <h2
                  style={{
                    fontSize: isMobile ? "28px" : "34px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    margin: "12px 0 14px",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "17px",
                    lineHeight: 1.9,
                    color: "#d4d4d4",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ marginTop: "20px" }}>
                  <div style={miniHeading}>Why it matters</div>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.85,
                      color: "#d4d4d4",
                      margin: "10px 0 0",
                    }}
                  >
                    {project.whyItMatters}
                  </p>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: isMobile ? "18px" : "22px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                }}
              >
                <div style={miniHeading}>What it involves</div>
                <ul
                  style={{
                    margin: "14px 0 0",
                    paddingLeft: "18px",
                    color: "#d4d4d4",
                    lineHeight: 1.9,
                    fontSize: "15px",
                  }}
                >
                  {project.whatItInvolves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div style={{ marginTop: "22px" }}>
                  <Link href={project.href} style={featureLink}>
                    Explore this area →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section style={{ padding: isMobile ? "40px 0 0" : "56px 0 0" }}>
        <div style={ctaPanel}>
          <div style={{ maxWidth: "760px" }}>
            <div style={eyebrowStyle}>What this page is really about</div>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 42px)",
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                margin: "10px 0 14px",
              }}
            >
              I’m building a body of work, not just listing interests.
            </h2>
            <p
              style={{
                fontSize: isMobile ? "17px" : "18px",
                lineHeight: 1.9,
                color: "#d4d4d4",
                margin: 0,
              }}
            >
              Some of these projects are technical. Some are creative. The
              strongest ones sit somewhere in between. What connects them is the
              way I approach them: structure, clarity, mood, and a desire to make
              something feel complete.
            </p>
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
    <div style={{ marginBottom: "24px" }}>
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

const miniHeading = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#8a8f98",
};

const projectTag = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#8a8f98",
};

const featureLink = {
  display: "inline-block",
  fontSize: "14px",
  color: "#f5f5f5",
  fontWeight: 600,
  textDecoration: "none",
};

const cardSoft = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "22px",
  background: "rgba(255,255,255,0.025)",
};

const cardTextLarge = {
  fontSize: "16px",
  lineHeight: 1.9,
  color: "#d4d4d4",
  margin: "12px 0 0",
};

const ctaPanel = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "38px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
};

const fourColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};