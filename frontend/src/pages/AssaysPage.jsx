// src/pages/UseCasesPage.jsx
import React from "react";

export default function UseCasesPage() {
  const useCases = [
    {
      id: "primary-care",
      title: "Primary Care & Outpatient Clinics",
      description:
        "Primary care and outpatient clinics rely on quick diagnostics to manage daily patient flow. On-site testing speeds up visits, supports timely treatment, and enhances patient satisfaction with fewer follow-ups.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823df4f9778599a9f47a3da_20250513_2000_Clinic%20Room%20with%20Device_remix_01jv61e6jreewrxfm97mzed68y.png",
      link: "/primary-care-outpatient-clinics",
    },
    {
      id: "concierge",
      title: "Private & Concierge Clinics",
      description:
        "Private and concierge clinics prioritize speed, service, and personalized care. On-site testing enables immediate results, faster treatment decisions, and a seamless, high-touch experience for every patient.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681ea6e11ccb5540ea6cccbb_concierge%20clinic.png",
      link: "/private-concierge-clinics",
    },
    {
      id: "hospitals",
      title: "Hospitals & Health Systems",
      description:
        "Hospitals and health systems need scalable, efficient diagnostics to manage high patient volumes. On-site testing reduces lab bottlenecks, shortens time to treatment, and improves care coordination across departments.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681ea7167665b19a3479ab42_hospitals.png",
      link: "/hospitals-health-systems",
    },
    {
      id: "surgery",
      title: "Surgery Centers & Specialists",
      description:
        "Surgery centers and specialists need fast, accurate diagnostics to keep procedures on schedule. On-site testing reduces delays, streamlines pre-op workflows, and supports better decision-making in real time.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681ea7613792d0c4c8209920_Surgery%20Centers%20%26%20Specialists.png",
      link: "/surgery-centers-specialists",
    },
    {
      id: "government",
      title: "Government, Military & VA",
      description:
        "Government, Military, and VA facilities often operate in remote or resource-limited settings. On-site testing ensures fast, reliable results without relying on external labs—supporting readiness, continuity of care, and operational efficiency.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823e444edbb9986cd48543d_20250513_2028_Medical%20Device%20Integration_remix_01jv630jx2ew5bydn5kvnbyt8p.png",
      link: "/government-military-va",
    },
    {
      id: "veterinary",
      title: "Veterinary Clinics",
      description:
        "Veterinary clinics need fast, reliable diagnostics without sending samples out. Real-time results improve care, boost efficiency, and support clear communication with pet owners.",
      image:
        "https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681ea7830658d583731e8035_veterinary.png",
      link: "/veterinary",
    },
  ];

  return (
    <div className="use-cases-page" style={{
      fontFamily: "'Fira Code', monospace",
      backgroundColor: "#ffffff",
      color: "#1a1a2e"
    }}>

      {/* ===== HERO SECTION ===== */}
      <div className="section-hero sub" style={{
        paddingTop: "calc(var(--app-header-height, 75px) + var(--spacing--large))",
        paddingBottom: "var(--spacing--large)",
        backgroundColor: "#f1f5f9",
        textAlign: "center"
      }}>
        <div className="hero-container sub">
          <div className="container center" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <h1 className="heading-2" style={{
              fontSize: "var(--font-size--heading-2)",
              lineHeight: "var(--line-height--heading-2)",
              letterSpacing: "var(--letter-spacing--heading-2)",
              fontWeight: "400"
            }}>Use Cases</h1>
          </div>
        </div>
      </div>

      <div className="main-wrapper" style={{ opacity: 1 }}>

        {/* ===== USE CASES GRID ===== */}
        <div className="section-siphbiolab-intro">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`padding-y-large ${useCase.id === "veterinary" ? "vets" : ""}`}
              style={{
                padding: "var(--spacing--large) 0",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8f9fa",
                borderBottom: index < useCases.length - 1 ? "1px solid #e5e7eb" : "none",
              }}
            >
              <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
                <div className="grid-12" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--spacing--medium)",
                  alignItems: "center",
                  direction: index % 2 === 1 ? "rtl" : "ltr",
                }}>
                  <div
                    className="grid-image-1 ratio-1"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      direction: "ltr",
                    }}
                  >
                    <img
                      src={useCase.image}
                      loading="lazy"
                      width="870"
                      alt={useCase.title}
                      className="grid-image-item"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        maxWidth: "600px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="column-right-wrapper gap-medium align-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing--medium)",
                      alignItems: "flex-start",
                      direction: "ltr",
                    }}
                  >
                    <h2 className="heading-2" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)",
                      fontWeight: "400"
                    }}>{useCase.title}</h2>
                    <p className="paragraph-large text-color-3 balance" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      color: "#4b5563",
                      maxWidth: "600px",
                    }}>{useCase.description}</p>
                    <a href={useCase.link} className="w-inline-block" style={{ textDecoration: "none" }}>
                      <div className="button-base is-primary" style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "0.8rem 1.3rem",
                        borderRadius: "100px",
                        display: "inline-block",
                        fontWeight: "500",
                        fontSize: "var(--font-size--medium)",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = "#1a1a2e"}
                      onMouseLeave={(e) => e.target.style.backgroundColor = "#000"}
                      >Learn more</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== FOOTER (already handled by Layout) ===== */}
      </div>

      <style>{`
        @media (max-width: 991px) {
          .grid-12 {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .column-right-wrapper {
            align-items: center !important;
            text-align: center !important;
          }
          .grid-image-1 {
            direction: ltr !important;
          }
        }

        @media (max-width: 767px) {
          .heading-2 {
            font-size: var(--font-size--heading-2) !important;
          }
          .paragraph-large {
            font-size: var(--font-size--base) !important;
          }
          .padding-y-large {
            padding: var(--spacing--medium) 0 !important;
          }
        }

        @media (max-width: 478px) {
          .heading-2 {
            font-size: calc(var(--font-size--heading-2) * 0.8) !important;
          }
          .container {
            padding: 0 20px !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}