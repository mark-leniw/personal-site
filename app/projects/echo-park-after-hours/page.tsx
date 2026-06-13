export default function EchoParkAfterHoursPage() {
  const pillars = [
    {
      title: "Atmosphere-First Design",
      text: "Built around mood, pacing, visual identity, and a late-night tone rather than just utility or feature lists.",
    },
    {
      title: "Creative Systems Thinking",
      text: "Not just a loose stream idea, but a structured concept with overlays, workflows, programming logic, and recurring visual language.",
    },
    {
      title: "AI-Assisted Experimentation",
      text: "Uses AI as part of the process for music generation, idea development, branding, layout direction, and iterative refinement.",
    },
  ];

  const involved = [
    "Creative direction",
    "Visual identity",
    "Show framing",
    "Overlay design",
    "Workflow planning",
    "AI-assisted music experimentation",
    "Streaming structure",
    "Atmosphere-driven presentation",
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
            Echo Park After Hours
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
            Echo Park After Hours is a late-night creative project built around
            AI-assisted music, visual atmosphere, streaming presentation, and a
            strong sense of tone. It explores how technical setup, branding,
            overlays, and mood can come together to create something immersive
            rather than generic.
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
            <h2 style={sectionTitle}>A live-format concept driven by mood and structure</h2>
            <p style={bodyText}>
              This project began as a creative exploration of AI-generated
              music and evolved into something broader: a themed late-night
              channel concept with its own visual identity, pacing, framing,
              and atmosphere.
            </p>
            <p style={bodyText}>
              The real interest for me was not just the music itself, but the
              system around it — how visuals, overlays, technical workflows,
              branding, and mood could shape the experience into something more
              complete.
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>What it involved</div>
            <h2 style={sectionTitle}>Identity, presentation, and technical workflow</h2>
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
          title="What gives the project its identity"
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
            Echo Park After Hours shows that I’m interested in more than just
            technical functionality. I care about how something feels, how it is
            framed, and how a loose idea becomes more compelling through clear
            identity and presentation.
          </p>
          <p style={bodyText}>
            It also reflects the overlap I’m increasingly drawn to: technical
            structure supporting creative work. The project required workflow
            thinking, visual taste, concept direction, and iterative refinement.
          </p>
          <p style={bodyText}>
            More broadly, it shows my interest in building projects that live
            somewhere between systems design, creative direction, and audience
            experience.
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
            This project is one piece of a larger creative direction.
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