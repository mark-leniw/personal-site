export default function ExperiencePage() {
  const roles = [
    {
      title: "System Engineer",
      company: "Production Resource Group / VER",
      meta: "Los Angeles, CA | September 2016 – Present",
      bullets: [
        "Provide onsite technical support for major live broadcast and production environments.",
        "Support hardware, software, quality control, and system configuration for broadcast production equipment.",
        "Troubleshoot and configure systems used in live, near-live, and post-production workflows.",
        "Deliver remote technical support for clients and internal teams as needed.",
        "Help maintain operational reliability across setup, support, and issue resolution.",
      ],
    },
    {
      title: "Maintenance Engineer",
      company: "EVS Broadcast Equipment",
      meta: "New Jersey / Los Angeles, CA | May 2013 – September 2016",
      bullets: [
        "Delivered scheduled and emergency onsite technical support across client locations.",
        "Supported major broadcast clients and mobile production environments.",
        "Coordinated repair-related workflow and service support.",
        "Assisted with quotes and purchase order preparation for repair activity.",
      ],
    },
    {
      title: "Computer Technician",
      company: "Micro Center",
      meta: "New Jersey | December 2010 – May 2013",
      bullets: [
        "Diagnosed and resolved computer hardware and software issues.",
        "Guided customers toward practical technical solutions.",
        "Built custom computer systems based on user requirements.",
      ],
    },
  ];

  const coreSkills = [
    {
      title: "Technical Support & Troubleshooting",
      text: "Diagnostics, repair coordination, hardware and software support, system configuration, and issue resolution across real-world environments.",
    },
    {
      title: "Production & Broadcast Systems",
      text: "Live support, near-live and post-production workflows, onsite support, remote support, equipment handling, and operational reliability.",
    },
    {
      title: "Communication & Process",
      text: "Client-facing support, clear communication, workflow thinking, and steady problem solving under pressure.",
    },
    {
      title: "General Technical Foundation",
      text: "Computer systems, assembly, setup, configuration, and practical cross-functional support.",
    },
  ];

  const certifications = [
    "CompTIA A+",
    "CompTIA Network+",
    "Microsoft MCP",
    "Microsoft MTA",
    "CIW Web Professional",
    "OSHA General Industry",
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
          <div style={eyebrowStyle}>Experience</div>
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              margin: "10px 0 18px",
              maxWidth: "860px",
            }}
          >
            Technical support, systems troubleshooting, production workflows, and calm problem solving.
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
            My professional background is rooted in technical systems,
            broadcast support, troubleshooting, production environments, and
            practical problem solving. The common thread has always been clear
            thinking, reliability, and helping complex work hold together.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 40px" }}>
        <SectionHeading
          eyebrowText="Professional Roles"
          title="The work that built the foundation"
        />
        <div style={{ display: "grid", gap: "18px" }}>
          {roles.map((role) => (
            <article key={role.title} style={card}>
              <div style={eyebrowStyle}>{role.company}</div>
              <h2 style={sectionTitle}>{role.title}</h2>
              <div
                style={{
                  fontSize: "14px",
                  color: "#a3a3a3",
                  marginBottom: "14px",
                  lineHeight: 1.7,
                }}
              >
                {role.meta}
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "18px",
                  color: "#d4d4d4",
                  lineHeight: 1.9,
                  fontSize: "15px",
                }}
              >
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <SectionHeading
          eyebrowText="Core Skills"
          title="The capabilities that show up across the work"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {coreSkills.map((item) => (
            <div key={item.title} style={cardSoft}>
              <div style={eyebrowStyle}>{item.title}</div>
              <p style={cardTextLarge}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div style={card}>
            <div style={eyebrowStyle}>Education</div>
            <h2 style={sectionTitle}>Academic background</h2>
            <p style={bodyText}>
              <strong>Montclair State University</strong>
              <br />
              B.A. in English
              <br />
              Concentration in Creative Writing
            </p>
          </div>

          <div style={card}>
            <div style={eyebrowStyle}>Certifications</div>
            <h2 style={sectionTitle}>Professional credentials</h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                color: "#d4d4d4",
                lineHeight: 1.9,
                fontSize: "15px",
              }}
            >
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 0" }}>
        <div style={ctaPanel}>
          <div style={eyebrowStyle}>Résumé</div>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 42px)",
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              margin: "10px 0 14px",
            }}
          >
            Want the full résumé?
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#d4d4d4",
              margin: 0,
            }}
          >
            The résumé download includes the same foundation in a cleaner,
            application-ready format.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a href="/resume/Leniw_Mark_Resume.pdf" style={buttonPrimary}>
              Download Résumé PDF
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
