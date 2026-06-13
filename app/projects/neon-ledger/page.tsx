export default function NeonLedgerPage() {
  const pillars = [
    {
      title: "Editorial World-Building",
      text: "A fictional publication framework built around sections, recurring voices, internal continuity, and a consistent point of view.",
    },
    {
      title: "Los Angeles Atmosphere",
      text: "Grounded in real neighborhoods and emotional city texture, but translated into a deadpan, noir, fictional publication world.",
    },
    {
      title: "Structured Creativity",
      text: "Not just a loose concept, but a system with sections, mythology threads, recurring motifs, product ideas, and future expansion.",
    },
  ];

  const involved = [
    "Concept development",
    "Editorial framing",
    "Section architecture",
    "Tone design",
    "World-building systems",
    "Continuity planning",
    "Visual direction",
    "AI-assisted creative workflow",
  ];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 24px 96px",
      }}
    >
      <section style={{ padding: "28px 0 56px" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "40px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          }}
        >
          <div style={eyebrowStyle}>Featured Project</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "820px",
            }}
          >
            The Neon Ledger
          </h1>
          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
              maxWidth: "850px",
            }}
          >
            The Neon Ledger is a fictional Los Angeles publication built from
            city observation, noir atmosphere, imagined notices, classifieds,
            character sketches, and slow-burn editorial world-building. It sits
            somewhere between a newspaper, a civic artifact, and a living city
            myth.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "20px",
          }}
        >
          <div style={card}>
            <div style={eyebrowStyle}>What it is</div>
            <h2 style={sectionTitle}>A publication concept with structure and mood</h2>
            <p style={bodyText}>
              This project began as a creative idea and evolved into a much more
              complete system: a fictional publication with recurring sections,
              editorial voice, world logic, product direction, and a slow-burn
              mythology threaded through future issues.
            </p>
            <p style={bodyText}>
              It draws from real Los Angeles neighborhoods, but translates them
              into a stylized, emotionally true publication world built on dry
              humor, city observation, restraint, and noir undertones.
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>What it involved</div>
            <h2 style={sectionTitle}>Creative direction, systems thinking, and continuity</h2>
            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: "18px",
                color: "#d4d4d4",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            >
              {involved.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="Core Pillars"
          title="What makes the project work"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {pillars.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="Why it matters"
          title="What this project says about me"
        />
        <div style={card}>
          <p style={bodyText}>
            The Neon Ledger shows that I’m drawn to projects with internal
            structure, distinct tone, and long-term coherence. I like building
            things that feel complete, not just clever in the moment.
          </p>
          <p style={bodyText}>
            It also reflects the intersection I’m most interested in:
            technical structure supporting creative work. The project required
            systems thinking, editorial planning, concept development, visual
            direction, and disciplined continuity rather than pure improvisation.
          </p>
          <p style={bodyText}>
            More than anything, it shows the kind of work I want to keep moving
            toward: thoughtful, original, concept-driven work with a real point
            of view.
          </p>
        </div>
      </section>

      <section style={{ padding: "16px 0 0" }}>
        <div style={ctaPanel}>
          <div style={eyebrowStyle}>Back to Projects</div>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 42px)",
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              margin: "10px 0 14px",
            }}
          >
            This is one part of a larger body of work.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
            }}
          >
            The rest of the projects page shows the broader mix of technical,
            creative, and visual work I’m building through.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a href="/projects" style={buttonPrimary}>
              Return to Projects
            </a>
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
  margin: "0 0 14px",
};

const card = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  padding: "28px",
  background: "rgba(255,255,255,0.03)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
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

const buttonPrimary = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "999px",
  background: "#f5f5f5",
  color: "#0a0a0a",
  fontWeight: 700,
  textDecoration: "none",
};