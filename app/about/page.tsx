export default function AboutPage() {
  const values = [
    {
      title: "Clarity",
      text: "I value work that is understandable, well-shaped, and grounded in something real.",
    },
    {
      title: "Taste",
      text: "I’m drawn to projects with mood, restraint, and a clear point of view.",
    },
    {
      title: "Follow-through",
      text: "I like taking ideas beyond the vague stage and turning them into something usable.",
    },
    {
      title: "Range",
      text: "I’m interested in the overlap between systems, storytelling, visual thinking, and emerging tools.",
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
          <div style={eyebrowStyle}>About</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "860px",
            }}
          >
            Technical background. Creative pull. A growing interest in work that combines both.
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
            My background is in technical systems support, broadcast workflows,
            hardware and software troubleshooting, and client-facing operational
            work. Over time, that foundation has pulled me toward writing,
            concept development, photography, and more creative, point-of-view
            driven work.
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
            <div style={eyebrowStyle}>Background</div>
            <h2 style={sectionTitle}>A technical foundation shaped by real environments</h2>
            <p style={bodyText}>
              My professional background is rooted in technical systems support,
              broadcast operations, troubleshooting, and client-facing work. I’ve
              spent years in roles that required calm problem solving, attention
              to detail, and the ability to support complex systems in real
              environments where reliability matters.
            </p>
            <p style={bodyText}>
              That experience taught me to think clearly, stay steady under
              pressure, and work in a way that values clarity, practicality, and
              follow-through.
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>Direction</div>
            <h2 style={sectionTitle}>Moving toward work with more creative shape</h2>
            <p style={bodyText}>
              At the same time, I’ve always been drawn to creative work.
              Writing, visual atmosphere, concept development, and original
              project building have become increasingly important to how I think
              and what I want to keep growing toward.
            </p>
            <p style={bodyText}>
              What interests me most now is the space where technical structure
              and creative instinct meet.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="What Matters to Me"
          title="The values underneath the work"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {values.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="Where I’m Headed"
          title="The kind of opportunities I’m increasingly aligned with"
        />
        <div style={card}>
          <p style={bodyText}>
            Professionally, I bring a strong technical foundation. Creatively,
            I’m building toward work that feels more aligned with my natural
            interests: writing, concepts, visual projects, and thoughtful
            creative development.
          </p>
          <p style={bodyText}>
            I’m especially interested in opportunities that value both
            structure and imagination, and in work that allows me to contribute
            not only technical ability, but also point of view.
          </p>
          <p style={bodyText}>
            Based in Southern California, I’m open to relocation for the right
            life-changing opportunity, especially one that aligns technical
            depth with creative growth.
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