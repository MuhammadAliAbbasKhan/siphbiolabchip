// src/pages/PublicationsPage.jsx
import React, { useState } from "react";

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const publications = [
    {
      title: "Quantitative, Label-Free Detection of Five Protein Biomarkers Using Multiplexed Arrays of Silicon Photonic Microring Resonators",
      category: "Oncology",
      authors: "Washburn AL, Gunn LC, Bailey RC",
      journal: "Analytical Chemistry, 2009",
      link: "/studies/quantitative-label-free-detection"
    },
    {
      title: "Multiplexed detection and label-free quantitation of microRNAs using arrays of silicon photonic microring resonators",
      category: "Molecular Diagnostic",
      authors: "Qavi AJ, Kindt JT, Bailey RC",
      journal: "Analytical Chemistry, 2010",
      link: "/studies/multiplexed-detection"
    },
    {
      title: "Evaluation of the genalyte maverick SARS-CoV-2 multi-antigen serology panel",
      category: "Infectious Disease",
      authors: "Genalyte Team",
      journal: "Clinical Chemistry, 2020",
      link: "/studies/evaluation"
    },
    {
      title: "Near Patient Detection of anti MDA5 Antibodies Using Photonic Ring Immunoassays 2017",
      category: "Immunology",
      authors: "Wang Y, et al.",
      journal: "Journal of Immunological Methods, 2017",
      link: "/studies/near-patient-detection"
    },
    {
      title: "Sensitive on-chip detection of a protein biomarker in human serum and plasma over an extended dynamic range using silicon photonic microring resonators and sub-micron beads",
      category: "Cardiology",
      authors: "Washburn AL, et al.",
      journal: "Lab on a Chip, 2010",
      link: "/studies/sensitive-on-chip-detection"
    },
    {
      title: "Silicon Photonic Microring Resonators for Quantitative Label-Free Detection",
      category: "Diagnostics",
      authors: "Bailey RC, Washburn AL, Qavi AJ",
      journal: "Annual Review of Analytical Chemistry, 2011",
      link: "/studies/silicon-photonic-microring"
    },
    {
      title: "Development of a Multiplexed Immunoassay Platform Using Silicon Photonic Microring Resonators",
      category: "Immunoassay",
      authors: "Kindt JT, et al.",
      journal: "Analytical Chemistry, 2012",
      link: "/studies/multiplexed-immunoassay"
    },
    {
      title: "Rapid Detection of Influenza A Virus Using Silicon Photonic Microring Resonators",
      category: "Infectious Disease",
      authors: "Qavi AJ, et al.",
      journal: "Biosensors and Bioelectronics, 2013",
      link: "/studies/influenza-detection"
    },
    {
      title: "Label-Free Detection of Cancer Biomarkers Using Silicon Photonic Arrays",
      category: "Oncology",
      authors: "Washburn AL, et al.",
      journal: "Cancer Research, 2014",
      link: "/studies/cancer-biomarkers"
    }
  ];

  const categories = ["All", "Oncology", "Molecular Diagnostic", "Infectious Disease", "Immunology", "Cardiology", "Diagnostics", "Immunoassay"];

  const filteredPublications = activeCategory === "All" 
    ? publications 
    : publications.filter(p => p.category === activeCategory);

  return (
    <div className="publications-page" style={{
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
            <div className="padding-bottom-x-small" style={{ paddingBottom: "var(--spacing--x-small)" }}>
              <div className="eyebrow" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "var(--font-size--small)",
                fontWeight: "500",
                color: "#3661D6",
                justifyContent: "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                </svg>
                <div>Published Research</div>
              </div>
            </div>
            <h1 className="heading-2" style={{
              fontSize: "var(--font-size--heading-2)",
              lineHeight: "var(--line-height--heading-2)",
              letterSpacing: "var(--letter-spacing--heading-2)",
              fontWeight: "400"
            }}>Publications</h1>
            <p className="paragraph-base pretty" style={{
              fontSize: "var(--font-size--base)",
              lineHeight: "var(--line-height--base)",
              letterSpacing: "var(--letter-spacing--base)",
              color: "#4b5563",
              maxWidth: "800px",
              margin: "var(--spacing--small) auto 0"
            }}>Explore peer-reviewed research demonstrating the power of SiPhBioLabChip's Maverick silicon photonic platform.</p>
          </div>
        </div>
      </div>

      <div className="main-wrapper" style={{ opacity: 1 }}>

        {/* ===== CATEGORY FILTER ===== */}
        <div className="section-publications">
          <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="category-filter" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--spacing--x-small)",
                justifyContent: "center",
                marginBottom: "var(--spacing--large)"
              }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{
                      padding: "0.5rem 1.2rem",
                      borderRadius: "100px",
                      border: activeCategory === category ? "2px solid #3661D6" : "1px solid #e5e7eb",
                      backgroundColor: activeCategory === category ? "#3661D6" : "transparent",
                      color: activeCategory === category ? "#fff" : "#1a1a2e",
                      fontSize: "var(--font-size--small)",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      if (activeCategory !== category) {
                        e.target.style.borderColor = "#3661D6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeCategory !== category) {
                        e.target.style.borderColor = "#e5e7eb";
                      }
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* ===== PUBLICATIONS GRID ===== */}
              <div className="publications-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "var(--spacing--medium)",
              }}>
                {filteredPublications.map((pub, index) => (
                  <div
                    key={index}
                    className="publication-card"
                    style={{
                      padding: "var(--spacing--medium)",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#3661D6";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(54, 97, 214, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e5e7eb";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      <div className="publication-category" style={{
                        fontSize: "var(--font-size--small)",
                        color: "#3661D6",
                        fontWeight: "500",
                        marginBottom: "var(--spacing--x-small)",
                      }}>{pub.category}</div>
                      <h3 className="publication-title" style={{
                        fontSize: "var(--font-size--base)",
                        lineHeight: "var(--line-height--base)",
                        fontWeight: "500",
                        margin: "0 0 var(--spacing--x-small) 0",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>{pub.title}</h3>
                      <div className="publication-authors" style={{
                        fontSize: "var(--font-size--small)",
                        color: "#4b5563",
                        marginBottom: "var(--spacing--x-tiny)",
                      }}>{pub.authors}</div>
                      <div className="publication-journal" style={{
                        fontSize: "var(--font-size--small)",
                        color: "#6b7280",
                      }}>{pub.journal}</div>
                    </div>
                    <a
                      href={pub.link}
                      className="publication-link"
                      style={{
                        display: "inline-block",
                        marginTop: "var(--spacing--small)",
                        color: "#3661D6",
                        fontSize: "var(--font-size--small)",
                        fontWeight: "500",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => e.target.style.color = "#1a1a2e"}
                      onMouseLeave={(e) => e.target.style.color = "#3661D6"}
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>

              {filteredPublications.length === 0 && (
                <div style={{
                  textAlign: "center",
                  padding: "var(--spacing--large)",
                  color: "#4b5563",
                  fontSize: "var(--font-size--base)"
                }}>
                  No publications found for this category.
                </div>
              )}

              {/* ===== STATS SECTION ===== */}
              <div className="stats-section" style={{
                marginTop: "var(--spacing--large)",
                paddingTop: "var(--spacing--large)",
                borderTop: "1px solid #e5e7eb",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--spacing--medium)",
                textAlign: "center",
              }}>
                <div>
                  <div className="heading-2" style={{
                    fontSize: "var(--font-size--heading-2)",
                    fontWeight: "400",
                    color: "#3661D6"
                  }}>48</div>
                  <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>Peer-Reviewed Publications</div>
                </div>
                <div>
                  <div className="heading-2" style={{
                    fontSize: "var(--font-size--heading-2)",
                    fontWeight: "400",
                    color: "#3661D6"
                  }}>65+</div>
                  <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>Immunoassays Developed</div>
                </div>
                <div>
                  <div className="heading-2" style={{
                    fontSize: "var(--font-size--heading-2)",
                    fontWeight: "400",
                    color: "#3661D6"
                  }}>31</div>
                  <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>Patents Issued</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div id="get-started-cta" className="section-get-started-cta">
          <div className="padding-bottom-large" style={{ paddingBottom: "var(--spacing--large)" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="card-1-wrapper" style={{
                background: "linear-gradient(91.57deg, #1a1a2e, #16213e)",
                borderRadius: "16px",
                padding: "var(--spacing--large)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div className="card-content-wrapper cta-content" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--spacing--medium)",
                  alignItems: "center"
                }}>
                  <div className="w-layout-vflex flex-block contentcta" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--x-small)" }}>
                    <div className="div-block-11">
                      <div className="eyebrow white" style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "var(--font-size--small)",
                        fontWeight: "500",
                        color: "#fff"
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                          <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#fff"/>
                        </svg>
                        <div>CloudLab platform</div>
                      </div>
                    </div>
                    <p className="cta-headline" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)",
                      color: "#fff"
                    }}>Seamless results delivered to your preferred EMR.</p>
                    <p className="paragraph-base padding-bottom-2x-small" style={{
                      fontSize: "var(--font-size--base)",
                      lineHeight: "var(--line-height--base)",
                      letterSpacing: "var(--letter-spacing--base)",
                      color: "rgba(255,255,255,0.8)",
                      paddingBottom: "var(--spacing--2x-small)"
                    }}>CloudLab integrates directly with your EMR, enabling orders from the provider's existing system and returning results the moment they're ready — no lag, no new software, and no manual uploads. Every result is quality-checked, routed automatically, and instantly available at the point of care, while eliminating labeling errors and reducing mistakes from manual data entry.</p>
                    <a href="/contact-us" className="w-inline-block">
                      <div className="button-base is-white" style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "0.8rem 1.3rem",
                        borderRadius: "100px",
                        display: "inline-block",
                        fontWeight: "500",
                        fontSize: "var(--font-size--medium)",
                        cursor: "pointer"
                      }}>Get SiPhBioLabChip</div>
                    </a>
                  </div>
                  <div style={{ position: "relative" }}>
                    <img
                      src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681bbe613b7a6d4540e05363_cta-bg-2.webp"
                      loading="lazy"
                      alt="CTA Background"
                      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681e20e46b1c711fd1da3c4f_Merlin%202.5.webp"
                      loading="lazy"
                      alt="SiPhBioLabChip Device"
                      style={{
                        position: "absolute",
                        bottom: "-20%",
                        right: "-10%",
                        width: "40%",
                        height: "auto"
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-grid grid-15" style={{
                display: "grid",
                justifyContent: "center",
                marginTop: "var(--spacing--small)"
              }}>
                <div className="text-block-7 text-align-center text-weight-light" style={{
                  textAlign: "center",
                  fontWeight: "300",
                  fontSize: "var(--font-size--small)",
                  color: "#6b7280"
                }}>In development. Not available for commercial sale.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .publications-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
          }
          .stats-section {
            grid-template-columns: 1fr 1fr !important;
          }
          .card-content-wrapper.cta-content {
            grid-template-columns: 1fr !important;
          }
          .category-filter {
            gap: var(--spacing--x-small) !important;
          }
          .category-filter button {
            font-size: var(--font-size--small) !important;
            padding: 0.4rem 1rem !important;
          }
        }

        @media (max-width: 767px) {
          .publications-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-section {
            grid-template-columns: 1fr !important;
          }
          .heading-2 {
            font-size: var(--font-size--heading-2) !important;
          }
          .category-filter {
            gap: var(--spacing--x-tiny) !important;
          }
          .category-filter button {
            font-size: var(--font-size--small) !important;
            padding: 0.3rem 0.8rem !important;
          }
        }

        @media (max-width: 478px) {
          .container {
            padding: 0 20px !important;
          }
          .heading-2 {
            font-size: calc(var(--font-size--heading-2) * 0.8) !important;
          }
          .publication-card {
            padding: var(--spacing--small) !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}