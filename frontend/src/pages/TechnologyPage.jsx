// src/pages/SciencePage.jsx
import React, { useEffect, useRef } from "react";

export default function SciencePage() {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Blaze Slider for publications
    if (typeof window !== "undefined" && window.BlazeSlider) {
      try {
        new window.BlazeSlider(sliderRef.current, {
          all: {
            slidesToShow: 2.2,
            slideGap: "20px",
            enablePagination: false,
            enableAutoplay: false,
            transitionDuration: 300,
          },
        });
      } catch (e) {
        console.log("Slider init error:", e);
      }
    }
  }, []);

  const publications = [
    {
      title: "Quantitative, Label-Free Detection of Five Protein Biomarkers Using Multiplexed Arrays of Silicon Photonic Microring Resonators",
      category: "Oncology",
      link: "/studies/quantitative-label-free-detection"
    },
    {
      title: "Multiplexed detection and label-free quantitation of microRNAs using arrays of silicon photonic microring resonators",
      category: "Molecular Diagnostic",
      link: "/studies/multiplexed-detection"
    },
    {
      title: "Evaluation of the genalyte maverick SARS-CoV-2 multi-antigen serology panel",
      category: "Infectious Disease",
      link: "/studies/evaluation"
    },
    {
      title: "Near Patient Detection of anti MDA5 Antibodies Using Photonic Ring Immunoassays 2017",
      category: "Immunology",
      link: "/studies/near-patient-detection"
    },
    {
      title: "Sensitive on-chip detection of a protein biomarker in human serum and plasma over an extended dynamic range using silicon photonic microring resonators and sub-micron beads",
      category: "Cardiology",
      link: "/studies/sensitive-on-chip-detection"
    }
  ];

  return (
    <div className="science-page" style={{ 
      fontFamily: "'Fira Code', monospace",
      backgroundColor: "#ffffff",
      color: "#1a1a2e"
    }}>

      {/* ===== HERO SECTION ===== */}
      <div className="section-hero" style={{ 
        position: "relative",
        paddingTop: "var(--app-header-height, 75px)",
        backgroundColor: "#f1f5f9",
        overflow: "hidden",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <div></div>
        <div className="hero-container sub">
          <div className="container" style={{ 
            padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)",
            position: "relative",
            zIndex: 2
          }}>
            <div className="padding-bottom-x-small" style={{ paddingBottom: "var(--spacing--x-small)" }}>
              <div className="eyebrow" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "var(--font-size--small)",
                fontWeight: "500",
                color: "#3661D6",
                marginBottom: "var(--spacing--x-small)",
                justifyContent: "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                </svg>
                <div>The Science Behind SiPhBioLabChip</div>
              </div>
            </div>
            <h1 className="heading-jumbo pretty" style={{
              fontSize: "var(--font-size--jumbo)",
              lineHeight: "var(--line-height--jumbo)",
              letterSpacing: "var(--letter-spacing--jumbo)",
              textAlign: "center",
              fontWeight: "400"
            }}>
              <div className="overflow-hidden">
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>Clinical-Lab Diagnostics.</div>
              </div>
              <div className="overflow-hidden">
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>Real-Time. Anywhere</div>
              </div>
            </h1>
            <div id="sub-lines" className="max-width-medium padding-top-small" style={{
              maxWidth: "min(100%, 840px)",
              margin: "0 auto",
              paddingTop: "var(--spacing--small)"
            }}>
              <div className="paragraph-base pretty" style={{
                fontSize: "var(--font-size--base)",
                lineHeight: "var(--line-height--base)",
                letterSpacing: "var(--letter-spacing--base)",
                textAlign: "center",
                color: "#4b5563"
              }}>
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>SiPhBioLabChip delivers lab test results in under 30 minutes - powered by a chemistry analyzer, hematology analyzer,</div>
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>and by SiPhBioLabChip's proprietary Maverick immunoassay platform.</div>
              </div>
            </div>
          </div>
        </div>
        <a id="scrollDown" href="#maverick-intro" className="link-block-3" style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          textDecoration: "none",
          color: "#4b5563"
        }}>
          <div className="scroll-down-container" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px"
          }}>
            <div className="paragraph-small uppercase" style={{
              fontSize: "var(--font-size--small)",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            }}>scroll down</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
              <path d="M0.544034 4.16121L1.29972 3.39558L4.4517 6.54757V0.384216L5.54545 0.384216V6.54757L8.6875 3.39558L9.45312 4.16121L4.99858 8.61575L0.544034 4.16121Z" fill="currentColor"/>
            </svg>
          </div>
        </a>
        <div className="hero-background-wrapper" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
          <div className="top-fade" style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom, #f1f5f9 0%, rgba(241,245,249,0) 100%)"
          }}></div>
        </div>
      </div>

      <div className="main-wrapper" style={{ opacity: 1 }}>

        {/* ===== MAVERICK INTRO SECTION ===== */}
        <div id="maverick-intro" className="three-js-waves">
          <div className="html_embed">
            <canvas></canvas>
          </div>
        </div>

        <div id="science-introduction" className="section-science-intro">
          <div className="padding-y-huge" style={{ padding: "var(--spacing--huge) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="center padding-bottom-small" style={{ textAlign: "center", paddingBottom: "var(--spacing--small)" }}>
                <div className="eyebrow" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "var(--font-size--small)",
                  fontWeight: "500",
                  color: "#3661D6",
                  justifyContent: "center",
                  marginBottom: "var(--spacing--x-small)"
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                  </svg>
                  <div>Maverick Silicon Photonics</div>
                </div>
              </div>
              <div className="center" style={{ textAlign: "center" }}>
                <h2 className="heading-3 pretty" style={{
                  fontSize: "var(--font-size--heading-3)",
                  lineHeight: "var(--line-height--heading-3)",
                  letterSpacing: "var(--letter-spacing--heading-3)",
                  fontWeight: "400",
                  maxWidth: "800px",
                  margin: "0 auto"
                }}>Maverick is SiPhBioLabChip's proprietary biosensor platform built on silicon photonic microring resonators. Each chip supports dozens of label-free immunoassays, with over 100 micro-scale rings - each functionalized to detect a specific analyte.</h2>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SCIENCE BEHIND SECTION ===== */}
        <div className="section-science-behind--second">
          <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="grid-12" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                alignItems: "center"
              }}>
                <div className="grid-image-1 chip" style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68254bd4c8cdf01f7f8b0d67_cropped%20for%20science%20page.png"
                    loading="lazy"
                    width="870"
                    alt="Silicon Photonics Chip"
                    className="image-in-col chip"
                    style={{ width: "100%", height: "auto", borderRadius: "8px", maxWidth: "600px" }}
                  />
                </div>
                <div className="column-right-wrapper gap-medium align-center">
                  <p className="text-color-3 paragraph-base balance" style={{
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "#4b5563"
                  }}>
                    As a patient sample flows across the chip, light is coupled through each ring. When a target molecule binds, the ring's resonance shifts — a change instantly captured and converted into a signal.<br /><br />
                    No enzymes. No fluorescent labels. This breakthrough enables high-speed, multiplexed immunoassay testing in a compact, reusable format — bringing traditional-lab diagnostics directly to point of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SCIENTIFIC ADVANTAGES SECTION ===== */}
        <div id="introduction" className="section-advantages">
          <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="padding-bottom-x-small">
                <div className="div-block-14">
                  <div className="eyebrow" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "var(--font-size--small)",
                    fontWeight: "500",
                    color: "#3661D6",
                    marginBottom: "var(--spacing--x-small)"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                    </svg>
                    <div>Scientific Advantages</div>
                  </div>
                </div>
              </div>
              <div className="max-width-800 padding-bottom-medium-large" style={{ maxWidth: "800px", paddingBottom: "var(--spacing--medium-large)" }}>
                <div className="heading-2 balance" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)"
                }}>Scientific Advantages of Maverick</div>
              </div>
              <div className="grid-12 grid-numbers" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--large)"
              }}>
                {/* Advantage 1 */}
                <div className="why-item numbers">
                  <div className="paragraph-base" style={{ fontSize: "var(--font-size--base)", color: "#3661D6" }}>01</div>
                  <div className="divider space-medium" style={{ height: "1px", backgroundColor: "#e5e7eb", margin: "var(--spacing--medium) 0" }}></div>
                  <div className="w-layout-vflex value-content-wrapper balance padding-right-medium">
                    <div className="paragraph-large padding-bottom-x-small" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      paddingBottom: "var(--spacing--x-small)",
                      fontWeight: "500"
                    }}>Label-free photonic ring detection</div>
                    <div className="paragraph-large text-color-3" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      color: "#4b5563"
                    }}>Maverick uses silicon photonic ring resonators to detect binding events through changes in refractive index — eliminating the need for fluorescent or enzymatic labels.</div>
                  </div>
                </div>

                {/* Advantage 2 */}
                <div className="why-item numbers">
                  <div className="paragraph-base" style={{ fontSize: "var(--font-size--base)", color: "#3661D6" }}>02</div>
                  <div className="divider space-medium" style={{ height: "1px", backgroundColor: "#e5e7eb", margin: "var(--spacing--medium) 0" }}></div>
                  <div className="w-layout-vflex value-content-wrapper balance padding-right-medium">
                    <div className="paragraph-large padding-bottom-x-small" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      paddingBottom: "var(--spacing--x-small)",
                      fontWeight: "500"
                    }}>No signal cross-talk from multiplexing</div>
                    <div className="paragraph-large text-color-3" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      color: "#4b5563"
                    }}>Each analyte is measured on four distinct photonic rings, enabling robust signal confirmation and minimizing false positives from ring variability.</div>
                  </div>
                </div>

                {/* Advantage 3 */}
                <div className="why-item numbers">
                  <div className="paragraph-base" style={{ fontSize: "var(--font-size--base)", color: "#3661D6" }}>03</div>
                  <div className="divider space-medium" style={{ height: "1px", backgroundColor: "#e5e7eb", margin: "var(--spacing--medium) 0" }}></div>
                  <div className="w-layout-vflex value-content-wrapper balance padding-right-medium">
                    <div className="paragraph-large padding-bottom-x-small" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      paddingBottom: "var(--spacing--x-small)",
                      fontWeight: "500"
                    }}>Multiplex immunoassays on a single microfluidic chip</div>
                    <div className="paragraph-large text-color-3" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      color: "#4b5563"
                    }}>Compatible immunoassays run in parallel within shared flow paths, allowing up to 26 tests from one small sample — without cross-reactivity.</div>
                  </div>
                </div>

                {/* Advantage 4 */}
                <div className="why-item numbers">
                  <div className="paragraph-base" style={{ fontSize: "var(--font-size--base)", color: "#3661D6" }}>04</div>
                  <div className="divider space-medium" style={{ height: "1px", backgroundColor: "#e5e7eb", margin: "var(--spacing--medium) 0" }}></div>
                  <div className="w-layout-vflex value-content-wrapper balance padding-right-medium">
                    <div className="paragraph-large padding-bottom-x-small" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      paddingBottom: "var(--spacing--x-small)",
                      fontWeight: "500"
                    }}>Real-time kinetic binding measurements</div>
                    <div className="paragraph-large text-color-3" style={{
                      fontSize: "var(--font-size--large)",
                      lineHeight: "var(--line-height--large)",
                      letterSpacing: "var(--letter-spacing--large)",
                      color: "#4b5563"
                    }}>Maverick captures the full binding curve in real time, allowing for more precise differentiation of true binding events from background noise.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== STUDIES & RESEARCH SECTION ===== */}
        <div id="introduction" className="section-studies">
          <div className="padding-y-huge" style={{ padding: "var(--spacing--huge) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="padding-bottom-x-small">
                <div className="div-block-14">
                  <div className="eyebrow" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "var(--font-size--small)",
                    fontWeight: "500",
                    color: "#3661D6",
                    marginBottom: "var(--spacing--x-small)"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                    </svg>
                    <div>studies and research</div>
                  </div>
                </div>
              </div>
              <div className="grid-12">
                <div className="padding-bottom-medium-large">
                  <div className="heading-2 balance" style={{
                    fontSize: "var(--font-size--heading-2)",
                    lineHeight: "var(--line-height--heading-2)",
                    letterSpacing: "var(--letter-spacing--heading-2)"
                  }}>48 Studies and over 65 Immunoassays developed on the Maverick.</div>
                </div>
              </div>
            </div>

            <div className="container right-0" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div ref={sliderRef} className="blaze-slider slider-1">
                <div className="blaze-container publications">
                  <div className="grid-12 publications" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="div-block-15" style={{ display: "flex", justifyContent: "flex-end", marginBottom: "var(--spacing--medium)" }}>
                      <div id="carousel-nav-2" className="carousel-nav" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <div className="blaze-prev cursor-pointer">
                          <div className="button-base is-slider" style={{
                            padding: "0.5rem 0.8rem",
                            borderRadius: "100px",
                            border: "1px solid #e5e7eb",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M3.32753 7.56678H14.9492L14.9492 5.85249H3.32753L7.06072 2.17762L5.85812 0.955933L0.0131273 6.70963L5.85812 12.4634L7.06072 11.2416L3.32753 7.56678Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        <div className="blaze-next cursor-pointer">
                          <div className="button-base is-slider" style={{
                            padding: "0.5rem 0.8rem",
                            borderRadius: "100px",
                            border: "1px solid #e5e7eb",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M3.32753 7.56678H14.9492L14.9492 5.85249H3.32753L7.06072 2.17762L5.85812 0.955933L0.0131273 6.70963L5.85812 12.4634L7.06072 11.2416L3.32753 7.56678Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                        <a href="/publications" className="w-inline-block">
                          <div className="see-all cursor-pointer">
                            <div className="button-base is-slider see-all" style={{
                              padding: "0.5rem 0.8rem",
                              borderRadius: "100px",
                              border: "1px solid #e5e7eb",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontWeight: "500"
                            }}>See all</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="div-block-18">
                      <div className="blaze-track-container">
                        <div className="blaze-track" style={{
                          display: "flex",
                          gap: "20px",
                          overflowX: "auto",
                          paddingBottom: "10px"
                        }}>
                          {publications.map((pub, index) => (
                            <div key={index} role="listitem" className="study-wrapper" style={{ flex: "0 0 calc(50% - 10px)", minWidth: "280px" }}>
                              <a href={pub.link} className="study-block w-inline-block" style={{
                                display: "block",
                                padding: "var(--spacing--medium)",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "8px",
                                border: "1px solid #e5e7eb",
                                textDecoration: "none",
                                color: "inherit",
                                transition: "all 0.3s ease",
                                minHeight: "160px"
                              }}>
                                <div className="text-style-3lines" style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  fontSize: "var(--font-size--base)",
                                  lineHeight: "var(--line-height--base)",
                                  letterSpacing: "var(--letter-spacing--base)"
                                }}>{pub.title}</div>
                                <div className="opacity-70" style={{
                                  opacity: 0.7,
                                  marginTop: "var(--spacing--x-small)",
                                  fontSize: "var(--font-size--small)",
                                  color: "#6b7280"
                                }}>{pub.category}</div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== STATS SECTION ===== */}
        <div className="section-stats">
          <div className="padding-y-medium" style={{ padding: "var(--spacing--medium-large) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="introduction-wrapper">
                <div className="_4-grid stats" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "var(--spacing--medium)",
                  textAlign: "center"
                }}>
                  <div className="usp-item-wrapper balance usp">
                    <div className="heading-2" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)"
                    }}>31</div>
                    <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>patents issued</div>
                  </div>
                  <div className="usp-item-wrapper balance usp">
                    <div className="heading-2" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)"
                    }}>48</div>
                    <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>peer-reviewed publications</div>
                  </div>
                  <div className="usp-item-wrapper balance usp">
                    <div className="heading-2" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)"
                    }}>200k+</div>
                    <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>clinical tests performed</div>
                  </div>
                  <div className="usp-item-wrapper balance usp">
                    <div className="heading-2" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)"
                    }}>10+</div>
                    <div className="text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--base)" }}>major clinical institutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FDA CLEARANCE SECTION ===== */}
        <div className="section-difference">
          <div className="padding-y-huge" style={{ padding: "var(--spacing--huge) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="grid-12" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                alignItems: "center"
              }}>
                <div className="grid-image-1 fda" style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823dc3ede7ff77a267e1ef3_fda%20cleared.png"
                    loading="lazy"
                    sizes="(max-width: 931px) 89vw, 829px"
                    srcSet="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823dc3ede7ff77a267e1ef3_fda%20cleared-p-500.png 500w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823dc3ede7ff77a267e1ef3_fda%20cleared-p-800.png 800w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823dc3ede7ff77a267e1ef3_fda%20cleared.png 829w"
                    alt="FDA Cleared"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="column-right-wrapper gap-medium align-center">
                  <div className="div-block-14">
                    <div className="eyebrow" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "var(--font-size--small)",
                      fontWeight: "500",
                      color: "#3661D6",
                      marginBottom: "var(--spacing--x-small)"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                      </svg>
                      <div>Science that Holds Up</div>
                    </div>
                  </div>
                  <h2 className="heading-2" style={{
                    fontSize: "var(--font-size--heading-2)",
                    lineHeight: "var(--line-height--heading-2)",
                    letterSpacing: "var(--letter-spacing--heading-2)"
                  }}>Two FDA Clearances. One EUA. <span className="gradient" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>Zero Doubts.</span></h2>
                  <div className="w-layout-vflex flex-block-6" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--small)" }}>
                    <div className="w-layout-hflex check-wrapper top" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ flexShrink: 0 }}>
                        <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="2" width="30" height="29">
                          <rect x="1.59985" y="2.1001" width="28.8" height="28.8" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0)">
                          <path d="M13.2704 22.8904L7.45044 17.1004L8.98044 15.5404L13.2704 19.8304L23.0204 10.1104L24.5504 11.6404L13.2704 22.8904Z" fill="#3661D6"/>
                        </g>
                      </svg>
                      <p className="paragraph-large text-color-3 balance" style={{
                        fontSize: "var(--font-size--large)",
                        lineHeight: "var(--line-height--large)",
                        letterSpacing: "var(--letter-spacing--large)",
                        color: "#4b5563"
                      }}>TSH — First-ever quantitative test cleared on a silicon chip</p>
                    </div>
                    <div className="w-layout-hflex check-wrapper top" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ flexShrink: 0 }}>
                        <mask id="mask1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="2" width="30" height="29">
                          <rect x="1.59985" y="2.1001" width="28.8" height="28.8" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask1)">
                          <path d="M13.2704 22.8904L7.45044 17.1004L8.98044 15.5404L13.2704 19.8304L23.0204 10.1104L24.5504 11.6404L13.2704 22.8904Z" fill="#3661D6"/>
                        </g>
                      </svg>
                      <p className="paragraph-large text-color-3 balance" style={{
                        fontSize: "var(--font-size--large)",
                        lineHeight: "var(--line-height--large)",
                        letterSpacing: "var(--letter-spacing--large)",
                        color: "#4b5563"
                      }}>RNP — First-ever diagnostic immunoassay cleared on a silicon chip</p>
                    </div>
                    <div className="w-layout-hflex check-wrapper top" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" style={{ flexShrink: 0 }}>
                        <mask id="mask2" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="1" y="2" width="30" height="29">
                          <rect x="1.59985" y="2.1001" width="28.8" height="28.8" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask2)">
                          <path d="M13.2704 22.8904L7.45044 17.1004L8.98044 15.5404L13.2704 19.8304L23.0204 10.1104L24.5504 11.6404L13.2704 22.8904Z" fill="#3661D6"/>
                        </g>
                      </svg>
                      <p className="paragraph-large text-color-3 balance" style={{
                        fontSize: "var(--font-size--large)",
                        lineHeight: "var(--line-height--large)",
                        letterSpacing: "var(--letter-spacing--large)",
                        color: "#4b5563"
                      }}>SARS-CoV-2— EUA granted with leading performance in peer-reviewed studies (Mayo Clinic &amp; NorthShore)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== QUOTE SECTION ===== */}
        <div id="science-introduction" className="section-quote">
          <div className="container" style={{ padding: "var(--spacing--large) clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="center padding-bottom-small" style={{ textAlign: "center", paddingBottom: "var(--spacing--small)" }}>
              <div className="eyebrow" style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "var(--font-size--small)",
                fontWeight: "500",
                color: "#3661D6",
                justifyContent: "center",
                marginBottom: "var(--spacing--x-small)"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                </svg>
                <div>Beyond the Analysers</div>
              </div>
            </div>
            <div className="center align-center balance" style={{ textAlign: "center" }}>
              <div className="max-width-middle quote" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 className="siphbio-quote-headline" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)",
                  fontWeight: "400"
                }}>SiPhBioLabChip brings cutting-edge testing to the point of care.</h2>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CTA SECTION 1 ===== */}
        <div id="get-started-cta" className="section-get-started-cta">
          <div className="padding-y-2x-large" style={{ padding: "var(--spacing--2x-large) 0" }}>
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
            </div>
          </div>
        </div>

        {/* ===== PERFORMANCE TABLE SECTION ===== */}
        <div className="section-performance">
          <div className="padding-y-huge" style={{ padding: "var(--spacing--huge) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="grid-12 padding-bottom-large" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                paddingBottom: "var(--spacing--large)"
              }}>
                <div className="div-block-16">
                  <div className="eyebrow" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "var(--font-size--small)",
                    fontWeight: "500",
                    color: "#3661D6",
                    marginBottom: "var(--spacing--x-small)"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                    </svg>
                    <div>Performance that speaks for itself</div>
                  </div>
                  <h3 style={{
                    fontSize: "var(--font-size--heading-3)",
                    lineHeight: "var(--line-height--heading-3)",
                    letterSpacing: "var(--letter-spacing--heading-3)",
                    fontWeight: "400"
                  }}>Advanced robotics enable higher precision</h3>
                </div>
                <div>
                  <div className="balance text-color-3" style={{
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "#4b5563"
                  }}>To validate clinical performance, SiPhBioLabChip underwent 20-day precision studies across key diagnostic panels. The results show consistently lower coefficient of variation (%CV) compared to industry-standard predicate devices.</div>
                </div>
              </div>

              {/* Performance Table */}
              <div className="grid-12 no-gap" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                overflow: "hidden"
              }}>
                {/* Header */}
                <div className="table-grid" style={{ padding: "var(--spacing--small)", backgroundColor: "#f8f9fa", fontWeight: "500" }}></div>
                <div className="table-grid center" style={{ padding: "var(--spacing--small)", backgroundColor: "#f8f9fa", fontWeight: "500", textAlign: "center" }}>
                  <div className="text-color-3 align-center" style={{ color: "#4b5563" }}>Predicate Repeatability</div>
                  <div className="text-block" style={{ fontWeight: "500" }}>%CV</div>
                </div>
                <div className="table-grid center" style={{ padding: "var(--spacing--small)", backgroundColor: "#f8f9fa", fontWeight: "500", textAlign: "center" }}>
                  <div className="gradient align-center center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>SiPhBioLabChip Repeatability</div>
                  <div className="text-block" style={{ fontWeight: "500" }}>%CV</div>
                </div>

                {/* Row: CHOL */}
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb" }}>CHOL</div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="text-block-2" style={{ fontWeight: "500" }}>2.9%</div>
                </div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="gradient align-center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "500"
                  }}>0.8%</div>
                </div>

                {/* Row: ALT */}
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb" }}>ALT</div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="text-block-3" style={{ fontWeight: "500" }}>5.2%</div>
                </div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="gradient align-center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "500"
                  }}>3.5%</div>
                </div>

                {/* Row: CRE */}
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb" }}>CRE</div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="text-block-4" style={{ fontWeight: "500" }}>5%</div>
                </div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="gradient align-center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "500"
                  }}>4.2%</div>
                </div>

                {/* Row: K+ */}
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb" }}>K+</div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="text-block-5" style={{ fontWeight: "500" }}>3.3%</div>
                </div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="gradient align-center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "500"
                  }}>2.3%</div>
                </div>

                {/* Row: WBC */}
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb" }}>WBC</div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="text-block-6" style={{ fontWeight: "500" }}>3.5%</div>
                </div>
                <div className="table-grid bottom-border" style={{ padding: "var(--spacing--small)", borderBottom: "1px solid #e5e7eb", textAlign: "center" }}>
                  <div className="gradient align-center" style={{
                    background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "500"
                  }}>2.7%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PARALLAX IMAGES SECTION ===== */}
        <div className="section-test-menu-wrapper">
          <div className="section-test-menu">
            <div id="adventures" className="section-parallax">
              <div className="test-wrapper" style={{ padding: "var(--spacing--large) 0" }}>
                <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
                  <div className="floating-images" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    marginBottom: "var(--spacing--large)"
                  }}>
                    <div className="float-image-1">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6815611c09a128932d82e57a_paralax%2001.webp"
                        loading="lazy"
                        alt="Parallax 1"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-2">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236f5707976c9fe4158908_Screenshot%202025-05-13%20at%209.03.53%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 2"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-3">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236fe3325f6ed9fbbdb826_Screenshot%202025-05-13%20at%209.14.23%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 3"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-4">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236f5675647ce80d525f42_Screenshot%202025-05-13%20at%209.04.24%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 4"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-5">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236f56a6e0d93a0880f459_Screenshot%202025-05-13%20at%209.00.02%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 5"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-6">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236f571413f482cf82126c_Screenshot%202025-05-13%20at%209.04.51%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 6"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-7">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68236f576d81266b523ec5f7_Screenshot%202025-05-13%20at%208.58.45%E2%80%AFAM.png"
                        loading="lazy"
                        alt="Parallax 7"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                    <div className="float-image-8">
                      <img
                        src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681562366893a0459edd3a86_paralax%2004.webp"
                        loading="lazy"
                        alt="Parallax 8"
                        style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                      />
                    </div>
                  </div>

                  <div className="max-width-middle" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <div className="float-header-wrapper">
                      <h2 className="heading-1 center balance" style={{
                        fontSize: "var(--font-size--heading-1)",
                        lineHeight: "var(--line-height--heading-1)",
                        letterSpacing: "var(--letter-spacing--heading-1)",
                        textAlign: "center"
                      }}><span className="gradient" style={{
                        background: "linear-gradient(91.57deg, #698FF7, #3661D6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>Maverick</span> is the Future of Diagnostics</h2>
                      <div className="padding-top-small" style={{ paddingTop: "var(--spacing--small)" }}>
                        <div className="center" style={{ textAlign: "center" }}>From cancer to preeclampsia to Alzheimer's, a new generation of specialty tests is emerging, but most still require sending out to labs and long wait times. Maverick unlocks the potential to bring these complex assays on-site, delivering results in minutes rather than days, all within the fully automated SiPhBioLabChip platform.</div>
                      </div>
                      <div className="float-button" style={{ marginTop: "var(--spacing--medium)" }}>
                        <a href="/publications" className="w-inline-block">
                          <div className="button-base is-ghost" style={{
                            backgroundColor: "transparent",
                            color: "#1a1a2e",
                            padding: "0.8rem 1.3rem",
                            borderRadius: "100px",
                            display: "inline-block",
                            fontWeight: "500",
                            fontSize: "var(--font-size--medium)",
                            cursor: "pointer",
                            border: "1px solid #1a1a2e"
                          }}>See the Assays Already Developed</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FINAL CTA ===== */}
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
                        <div>title</div>
                      </div>
                    </div>
                    <p className="cta-headline" style={{
                      fontSize: "var(--font-size--heading-2)",
                      lineHeight: "var(--line-height--heading-2)",
                      letterSpacing: "var(--letter-spacing--heading-2)",
                      color: "#fff"
                    }}>Ready to see SiPhBioLabChip in action?</p>
                    <p className="paragraph-base padding-bottom-2x-small" style={{
                      fontSize: "var(--font-size--base)",
                      lineHeight: "var(--line-height--base)",
                      letterSpacing: "var(--letter-spacing--base)",
                      color: "rgba(255,255,255,0.8)",
                      paddingBottom: "var(--spacing--2x-small)"
                    }}>The power of a full-scale lab into a single, self-running device— designed to fit seamlessly into your existing workflow.</p>
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
                      }}>Get in touch</div>
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
          .grid-12 {
            grid-template-columns: 1fr !important;
          }
          ._4-grid.stats {
            grid-template-columns: 1fr 1fr !important;
          }
          .grid-12.grid-numbers {
            grid-template-columns: 1fr !important;
          }
          .floating-images {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .card-content-wrapper.cta-content {
            grid-template-columns: 1fr !important;
          }
          .grid-12.no-gap {
            grid-template-columns: 1fr 1fr 1fr !important;
            font-size: var(--font-size--small) !important;
          }
          .grid-12.padding-bottom-large {
            grid-template-columns: 1fr !important;
          }
          [style*="flex: 0 0 calc(50% - 10px)"] {
            flex: 0 0 calc(100% - 10px) !important;
          }
        }

        @media (max-width: 767px) {
          ._4-grid.stats {
            grid-template-columns: 1fr !important;
          }
          .floating-images {
            grid-template-columns: 1fr 1fr !important;
          }
          .grid-12.no-gap {
            grid-template-columns: 1fr 1fr 1fr !important;
            font-size: var(--font-size--small) !important;
          }
          .grid-12.no-gap > div {
            padding: var(--spacing--x-small) !important;
          }
          .heading-jumbo {
            font-size: var(--font-size--jumbo) !important;
          }
          .heading-1 {
            font-size: var(--font-size--heading-1) !important;
          }
          .heading-2 {
            font-size: var(--font-size--heading-2) !important;
          }
        }

        @media (max-width: 478px) {
          .floating-images {
            grid-template-columns: 1fr !important;
          }
          .grid-12.no-gap {
            grid-template-columns: 1fr 1fr 1fr !important;
            font-size: var(--font-size--small) !important;
          }
          .heading-jumbo {
            font-size: var(--font-size--jumbo) !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}