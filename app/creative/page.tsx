export default function CreativePage() {
  const areas = [
    {
      title: "Writing",
      text: "Writing is one of the clearest ways I work through ideas. I’m drawn to pieces that feel observant, restrained, and shaped by a real point of view rather than noise.",
    },
    {
      title: "Concept Development",
      text: "Some of the work I’m most interested in starts as a mood, a question, or a loose idea and becomes stronger through structure, tone, and internal logic.",
    },
    {
      title: "Visual Direction",
      text: "Photography, presentation, atmosphere, and image selection all let me explore tone in a different way. I’m especially interested in work that feels cinematic, grounded, and quietly expressive.",
    },
    {
      title: "AI as Part of the Process",
      text: "I use AI as a practical working tool for ideation, drafting, iteration, and structure, while keeping judgment, direction, and final decisions human.",
    },
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
          <div style={eyebrowStyle}>Creative Work</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "860px",
            }}
          >
            Writing, concept development, photography, and projects shaped by tone and point of view.
          </h1>
          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
              maxWidth: "860px",
            }}
          >
            I’m drawn to work that feels thoughtful rather than generic. Even
            when a project begins casually, I tend to shape the tone,
            structure, and internal logic until it becomes something more
            complete.
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
            <div style={eyebrowStyle}>Creative Direction</div>
            <h2 style={sectionTitle}>The work I’m pulled toward has shape, mood, and internal logic</h2>
            <p style={bodyText}>
              What interests me most creatively is not just expression for its
              own sake. I’m drawn to projects that feel coherent — work with a
              clear identity, a distinct tone, and enough structure to feel like
              more than a loose idea.
            </p>
            <p style={bodyText}>
              That can take the form of writing, visual work, editorial worlds,
              photography, or project concepts that grow stronger through
              systems, repetition, and refinement.
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>Why It Matters</div>
            <h2 style={sectionTitle}>Creative work is not separate from how I think</h2>
            <p style={bodyText}>
              My interest in creative work is not random or ornamental. It comes
              from the same underlying instincts that shape the rest of my work:
              observation, clarity, restraint, taste, and follow-through.
            </p>
            <p style={bodyText}>
              What changes is the medium. The impulse to shape something into a
              clearer, stronger form stays the same.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="Creative Areas"
          title="The main lanes I keep returning to"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {areas.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="How I Use AI"
          title="A tool for structure, iteration, and momentum"
        />
        <div style={card}>
          <p style={bodyText}>
            I use AI as a practical working tool for concept development,
            drafting, ideation, troubleshooting, and rapid iteration across
            both technical and creative work.
          </p>
          <p style={bodyText}>
            What matters to me is direction. The value is not in handing
            judgment away, but in moving faster from rough idea to usable form
            while keeping the point of view, editing, and final choices human.
          </p>
          <p style={bodyText}>
            Used well, it becomes part of a larger process: something that helps
            me think more broadly, refine more deliberately, and build more
            quickly without losing authorship.
          </p>
        </div>
      </section>

      <section style={{ padding: "16px 0 0" }}>
        <div style={ctaPanel}>
          <div style={eyebrowStyle}>Creative Direction</div>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 42px)",
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              margin: "10px 0 14px",
            }}
          >
            I’m building toward work that feels more aligned with how I naturally think.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
            }}
          >
            That means writing, project framing, visual work, concepts with
            continuity, and creative systems that have both structure and point
            of view.
          </p>
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