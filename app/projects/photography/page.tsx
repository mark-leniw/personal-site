export default function PhotographyPage() {
  const pillars = [
    {
      title: "Atmosphere",
      text: "I’m drawn to images that carry mood, quiet tension, light, weather, and a sense of place rather than just obvious subject matter.",
    },
    {
      title: "Restraint",
      text: "The work leans toward simplicity, framing, and patience rather than visual noise or over-explaining the image.",
    },
    {
      title: "Observation",
      text: "Photography gives me a way to slow down, notice more, and shape visual moments that feel grounded, cinematic, and emotionally true.",
    },
  ];

  const involved = [
    "Image-making",
    "Visual curation",
    "Editing and sequencing",
    "Landscape and urban observation",
    "Mood and light studies",
    "Style development",
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
            Photography
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
            Photography is one of the clearest ways I explore atmosphere, mood,
            framing, and visual restraint. It gives me a way to pay closer
            attention to light, weather, distance, texture, and the quieter
            emotional qualities of a place.
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
            <h2 style={sectionTitle}>An ongoing visual practice shaped by mood and observation</h2>
            <p style={bodyText}>
              My photography is less about collecting subjects and more about
              building a way of seeing. I’m interested in atmosphere, cinematic
              stillness, landscape, urban quiet, and the small visual details
              that make an image feel like more than documentation.
            </p>
            <p style={bodyText}>
              It’s also part of the broader creative direction I’m moving
              toward. Photography sharpens my sense of composition, restraint,
              color, tone, and presence — all of which carry into other kinds of
              creative work.
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>What it involved</div>
            <h2 style={sectionTitle}>Visual taste, patience, and editing</h2>
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
          title="What shapes the work"
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
            Photography shows the quieter side of how I think. It reflects my
            attention to mood, structure, framing, and the emotional texture of
            a place.
          </p>
          <p style={bodyText}>
            It also reinforces that my creative interests are not random. They
            share the same underlying instincts: observation, tone, restraint,
            follow-through, and the desire to shape something into a clearer
            form.
          </p>
          <p style={bodyText}>
            More than anything, it shows that I’m serious about building a body
            of work, not just listing interests.
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
            This is part of the broader visual and creative direction I’m building.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
            }}
          >
            The projects page shows how photography sits alongside concept
            development, technical systems, and other creative work.
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