// src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";

export default function HomePage() {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Blaze Slider for the stats carousel
    if (typeof window !== "undefined" && window.BlazeSlider) {
      try {
        new window.BlazeSlider(sliderRef.current, {
          all: {
            slidesToShow: 1,
            slideGap: "20px",
            enablePagination: false,
            enableAutoplay: true,
            autoplayInterval: 5000,
            transitionDuration: 500,
          },
        });
      } catch (e) {
        console.log("Slider init error:", e);
      }
    }
  }, []);

  return (
    <div className="homepage" style={{ fontFamily: "Fira Code, monospace" }}>
      {/* ===== HERO SECTION ===== */}
      <section className="section-siphbiolab padding-top-2x-large" style={{ paddingTop: "var(--spacing--2x-large)" }}>
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="padding-bottom-medium-large" style={{ paddingBottom: "var(--spacing--medium-large)" }}>
              <div className="max-width-medium hero" style={{ maxWidth: "min(100%, 840px)", margin: "0 auto", textAlign: "center" }}>
                <div className="overflow heading-space">
                  <h1 className="heading-huge center" style={{
                    fontSize: "var(--font-size--huge)",
                    lineHeight: "var(--line-height--huge)",
                    letterSpacing: "var(--letter-spacing--huge)",
                    textAlign: "center",
                    fontWeight: "400",
                  }}>Meet SiPhBio Lab</h1>
                </div>
                <div className="hero-subline-wrapper padding-top-small" style={{ paddingTop: "var(--spacing--small)" }}>
                  <div className="heading-4" style={{
                    fontSize: "var(--font-size--heading-4)",
                    lineHeight: "var(--line-height--heading-4)",
                    letterSpacing: "var(--letter-spacing--heading-4)",
                  }}>Lab results in minutes.</div>
                </div>
              </div>
            </div>
            <div className="container medium">
              <div className="grid-12">
                <img
                  src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823bc0fb920229535735b34_Merlin_2.5.webp"
                  loading="eager"
                  sizes="(max-width: 479px) 79vw, (max-width: 1656px) 78vw, 1292px"
                  srcSet="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823bc0fb920229535735b34_Merlin_2.5-p-500.webp 500w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823bc0fb920229535735b34_Merlin_2.5-p-800.webp 800w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823bc0fb920229535735b34_Merlin_2.5-p-1080.webp 1080w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823bc0fb920229535735b34_Merlin_2.5.webp 1292w"
                  alt="SiPhBio Lab Analyzer"
                  className="siphbio-landing-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY SIPHBIO LAB (USP) SECTION ===== */}
      <div id="introduction" className="section-why-siphbiolab">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="introduction-wrapper">
              <div className="usp-headline">
                <h2 className="heading-2 section-padding-bottom-x-small center" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)",
                  textAlign: "center",
                  paddingBottom: "var(--spacing--x-small)",
                }}>The future of diagnostics: SiPhBio Lab</h2>
              </div>
              <div className="_4-grid usp" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--spacing--medium)",
              }}>
                {/* USP 1: Results in minutes */}
                <div className="usp-item-wrapper balance usp" style={{ textAlign: "center" }}>
                  <div className="usp-icon" style={{ marginBottom: "var(--spacing--x-small)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M26.3441 8.88506C29.0218 10.7185 37.1693 16.9298 37.1693 24.625C37.1693 31.2755 31.9459 36.6666 25.5026 36.6666C19.0593 36.6666 13.8359 31.2755 13.8359 24.625C13.8359 16.9298 21.9834 10.7185 24.6611 8.88506C25.1741 8.53376 25.8311 8.53376 26.3441 8.88506Z" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.83594 24.1666C5.70265 22.7733 3.83594 19.5325 3.83594 15.7916C3.83594 10.0611 9.90687 5.40671 12.1676 3.87216C12.6746 3.52801 13.3285 3.531 13.8303 3.88265C14.7763 4.54553 16.4014 5.78811 18.0026 7.49996" stroke="url(#paint1_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M31.3359 25.8334C31.3359 29.5152 28.8359 30.8334 26.3359 30.8334" stroke="url(#paint2_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="14.7693" y1="9.18248" x2="40.8898" y2="31.8394" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="4.4026" y1="4.02746" x2="22.7278" y2="17.1978" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="26.5359" y1="25.9334" x2="31.2359" y2="30.8334" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>Results in minutes</div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Actionable results while patient is in the waiting room.</div>
                </div>

                {/* USP 2: Drop and Go */}
                <div className="usp-item-wrapper balance usp" style={{ textAlign: "center" }}>
                  <div className="usp-icon" style={{ marginBottom: "var(--spacing--x-small)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.0003 1.83337C21.6288 1.83337 20.6448 2.52589 20.0646 3.10605C19.9049 3.26576 19.7679 3.42429 19.6528 3.57061C19.5949 3.57891 19.5347 3.58819 19.4724 3.59857C18.9054 3.69307 18.1265 3.88486 17.3294 4.2834C16.5265 4.68487 15.6779 5.31064 15.0334 6.27737C14.6126 6.90854 14.304 7.64758 14.1385 8.5H10.5003C9.67183 8.5 9.00025 9.17157 9.00025 10C9.00025 10.7571 9.56117 11.3832 10.2901 11.4854V13.315C10.2901 15.7245 10.2775 16.6506 10.0332 17.5264C9.78733 18.4078 9.30658 19.239 8.04227 21.3624L8.04225 21.3625L6.38468 24.1463L6.31318 24.2663L6.31317 24.2664C4.8153 26.7818 3.59706 28.8276 2.9335 30.4893C2.25027 32.2004 1.97704 33.9433 3.02392 35.532L3.0239 35.532L3.02812 35.5383L3.04789 35.568L3.05124 35.573C4.07333 37.0939 5.78652 37.6563 7.70877 37.9123C9.62027 38.1667 12.1764 38.1667 15.3758 38.1667H15.495H15.6142C18.8137 38.1667 21.3698 38.1667 23.2813 37.9123C25.2036 37.6563 26.9167 37.0939 27.9388 35.573L27.9409 35.57L27.9607 35.5403L27.9608 35.5403L27.9662 35.532C29.0131 33.9432 28.7399 32.2003 28.0566 30.4893C27.3931 28.8277 26.1749 26.782 24.6771 24.2668L24.6771 24.2667L24.6054 24.1463L24.6054 24.1462L22.9479 21.3624L22.9479 21.3624C21.6834 19.2389 21.2027 18.4078 20.9569 17.5265C20.9521 17.5094 20.9474 17.4923 20.9428 17.4751C22.0229 18.5279 23.4585 19.4636 24.9533 19.7601C25.656 22.7338 28.5104 24.8334 31.7276 24.8334C35.4386 24.8334 38.6669 22.0398 38.6669 18.3334C38.6669 16.6594 38.1599 15.0191 37.0203 13.7817C36.1374 12.8231 34.9551 12.1939 33.5476 11.9489C33.0226 8.87824 30.796 5.94406 27.5017 5.298C27.3023 4.33472 26.8729 3.52386 26.1892 2.91522C25.2352 2.06593 24.0323 1.83337 23.0003 1.83337ZM21.1354 11.3593C21.1561 11.4585 21.1669 11.5613 21.1669 11.6667C21.1669 12.7867 21.8671 14.1799 23.0213 15.3116C24.2135 16.4806 25.4289 16.9336 26.0924 16.8462C26.5207 16.7898 26.9525 16.9208 27.2772 17.2056C27.602 17.4904 27.7883 17.9014 27.7883 18.3334C27.7883 20.15 29.4306 21.8334 31.7276 21.8334C34.0246 21.8334 35.6669 20.15 35.6669 18.3334C35.6669 17.246 35.3406 16.3862 34.8136 15.814C34.3052 15.262 33.4788 14.8334 32.1669 14.8334C31.3385 14.8334 30.6669 14.1618 30.6669 13.3334C30.6669 10.5965 28.6242 8.16671 26.1334 8.16671C25.305 8.16671 24.6334 7.49513 24.6334 6.66671C24.6334 5.66699 24.3572 5.3008 24.1944 5.15595C23.9985 4.98155 23.6349 4.83337 23.0003 4.83337C22.7051 4.83337 22.4391 4.9742 22.1859 5.22737C22.0634 5.34989 21.9681 5.47641 21.9046 5.57167C21.8737 5.61804 21.8526 5.65353 21.8417 5.67263L21.8356 5.68346L21.8345 5.6855C21.5792 6.18243 21.0686 6.49655 20.5096 6.50001L20.4941 6.50043C20.4751 6.50106 20.4404 6.50255 20.3923 6.50599C20.2954 6.51291 20.1473 6.52747 19.9656 6.55776C19.5951 6.61951 19.124 6.74022 18.6711 6.96668C18.224 7.19021 17.8226 7.50194 17.5296 7.94147C17.4254 8.09767 17.3271 8.28168 17.2441 8.5H20.5003C21.3287 8.5 22.0003 9.17157 22.0003 10C22.0003 10.6014 21.6463 11.1201 21.1354 11.3593ZM15.4892 11.5C15.4929 11.5 15.4966 11.5 15.5003 11.5C15.5039 11.5 15.5076 11.5 15.5113 11.5H17.7V13.315L17.7 13.5246C17.6996 15.6548 17.6994 17.0138 18.0672 18.3325C18.3539 19.3604 18.85 20.3121 19.5883 21.5774C19.4149 21.6461 19.2058 21.7095 18.9646 21.7561C18.2039 21.903 17.1924 21.8699 16.0941 21.3964L16.094 21.3964C14.9778 20.9152 13.6688 20.462 12.4417 20.2676C12.3481 20.2528 12.2514 20.2389 12.1522 20.2264C12.4928 19.5639 12.7471 18.9626 12.9229 18.3326C13.2908 17.0138 13.2905 15.6548 13.2901 13.5246L13.2901 13.315V11.5H15.4892ZM8.96234 25.6811L10.2526 23.5141C10.3933 23.4541 10.527 23.3714 10.6486 23.2657C10.6538 23.2621 10.7258 23.2126 10.9416 23.1845C11.1869 23.1526 11.5306 23.1607 11.9723 23.2307C12.8575 23.3709 13.9109 23.7221 14.9064 24.1513C16.5858 24.8753 18.212 24.9568 19.5333 24.7017C20.1202 24.5884 20.6611 24.4059 21.1293 24.1721L22.0277 25.681L22.0277 25.6811C23.6143 28.3456 24.7057 30.1874 25.2705 31.6019C25.8244 32.989 25.6938 33.5261 25.4634 33.8779L25.4489 33.8996L25.448 33.9011C25.1723 34.3101 24.586 34.7121 22.8854 34.9385C21.1957 35.1634 18.8408 35.1667 15.495 35.1667C12.1492 35.1667 9.79434 35.1634 8.10467 34.9385C6.40502 34.7122 5.81839 34.3105 5.54261 33.9018L5.54119 33.8997L5.52897 33.8813L5.52719 33.8786C5.29651 33.5268 5.16533 32.9899 5.71959 31.6019C6.28442 30.1874 7.37577 28.3456 8.96234 25.6811Z" fill="url(#paint0_linear_3175_5293)"/>
                      <defs>
                        <linearGradient id="paint0_linear_3175_5293" x1="3.78168" y1="2.56004" x2="37.9348" y2="38.1718" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>Drop and Go</div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Fully automated: drop as many as 20 vials and let SiPhBio Lab do the rest.</div>
                </div>

                {/* USP 3: EMR Connected */}
                <div className="usp-item-wrapper balance usp" style={{ textAlign: "center" }}>
                  <div className="usp-icon" style={{ marginBottom: "var(--spacing--x-small)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M15.5 21.6667C15.5 21.6667 17.1667 21.6667 18.8333 25C18.8333 25 24.1275 16.6667 28.8333 15" stroke="url(#paint0_linear_3175_5303)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M35.5 18.6389V13.8005C35.5 11.0672 35.5 9.70051 34.8265 8.80886C34.153 7.91719 32.6302 7.48431 29.5845 6.61854C27.5037 6.02704 25.6693 5.31442 24.2038 4.66386C22.2057 3.77687 21.2067 3.33337 20.5 3.33337C19.7933 3.33337 18.7943 3.77687 16.7962 4.66386C15.3306 5.31442 13.4964 6.02702 11.4156 6.61854C8.36988 7.48431 6.84703 7.91719 6.17352 8.80886C5.5 9.70051 5.5 11.0672 5.5 13.8005V18.6389C5.5 28.0142 13.9379 33.6392 18.1567 35.8657C19.1685 36.3997 19.6743 36.6667 20.5 36.6667C21.3257 36.6667 21.8315 36.3997 22.8433 35.8657C27.062 33.6392 35.5 28.0142 35.5 18.6389Z" stroke="url(#paint1_linear_3175_5303)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_3175_5303" x1="16.0333" y1="15.2" x2="24.9533" y2="27.5994" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_3175_5303" x1="6.7" y1="4.00004" x2="37.997" y2="33.366" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#698FF7"/>
                          <stop offset="1" stopColor="#3661D6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>EMR Connected</div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Results are automatically uploaded to your specific EMR.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SIPHBIO LAB INTRO SECTION ===== */}
      <div className="section-siphbiolab-intro">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="grid-12" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--spacing--medium)",
              alignItems: "center",
            }}>
              <div className="grid-image-1 ratio-1">
                <img
                  src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681ea6e11ccb5540ea6cccbb_concierge%20clinic.png"
                  loading="lazy"
                  width="870"
                  alt="Concierge Clinic"
                  className="grid-image-item"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
              <div className="column-right-wrapper gap-medium align-center">
                <h2 className="heading-2" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)",
                }}>
                  It's not just a device.<br /><span className="gradient" style={{ background: "linear-gradient(91.57deg, #698FF7, #3661D6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>It's a lab.</span><br />And it runs itself.
                </h2>
                <p className="paragraph-large text-color-3 balance" style={{
                  fontSize: "var(--font-size--large)",
                  lineHeight: "var(--line-height--large)",
                  letterSpacing: "var(--letter-spacing--large)",
                  color: "#6b7280",
                }}>
                  SiPhBio Lab brings the <span className="text-color-1" style={{ color: "#1a1a2e" }}>power of a full-scale traditional lab</span> into a single, self-running device — designed to fit seamlessly into your existing workflow.<br /><br />No delays. No special setup requirements.<br />Just 30-minute results.
                </p>
                <a href="/contact-us" className="w-inline-block">
                  <div className="button-base is-primary" style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "0.8rem 1.3rem",
                    borderRadius: "100px",
                    display: "inline-block",
                    fontWeight: "500",
                    fontSize: "var(--font-size--medium)",
                    cursor: "pointer",
                  }}>Get SiPhBio Lab</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCIENCE BEHIND SECTION ===== */}
      <div className="section-science-behind">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="grid-12" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--spacing--medium)",
              alignItems: "center",
            }}>
              <div className="column-right-wrapper gap-medium align-center">
                <div className="eyebrow" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "var(--font-size--small)",
                  fontWeight: "500",
                  color: "#3661D6",
                  marginBottom: "var(--spacing--x-small)",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#3661D6"/>
                  </svg>
                  <div>The Tech Inside</div>
                </div>
                <h2 className="heading-2 balance" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)",
                }}>Powering a new era of diagnostics.</h2>
                <p className="paragraph-large text-color-3 balance padding-bottom-2x-small" style={{
                  fontSize: "var(--font-size--large)",
                  lineHeight: "var(--line-height--large)",
                  letterSpacing: "var(--letter-spacing--large)",
                  color: "#6b7280",
                  paddingBottom: "var(--spacing--2x-small)",
                }}>Discover the technology inside SiPhBio Lab — where rapid chemistry, hematology, and the proprietary Maverick Immunoassay Analyser come together to deliver results in under 30 minutes.</p>
                <a href="/science" className="w-inline-block">
                  <div className="button-base is-primary" style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "0.8rem 1.3rem",
                    borderRadius: "100px",
                    display: "inline-block",
                    fontWeight: "500",
                    fontSize: "var(--font-size--medium)",
                    cursor: "pointer",
                  }}>The science behind SiPhBio Lab</div>
                </a>
              </div>
              <div className="grid-image-1 ratio-1">
                <img
                  src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/68254b9b99afe78cc53b3f05_edited%20for%20home%20page%201.png"
                  loading="lazy"
                  width="870"
                  alt="Science Behind SiPhBio Lab"
                  className="image-in-col"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS TABLE SECTION ===== */}
      <div className="section-table">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container medium" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)", maxWidth: "min(100%, 840px)", margin: "0 auto" }}>
            <h2 className="heading-2 center section-padding-bottom-small" style={{
              fontSize: "var(--font-size--heading-2)",
              lineHeight: "var(--line-height--heading-2)",
              letterSpacing: "var(--letter-spacing--heading-2)",
              textAlign: "center",
              paddingBottom: "var(--spacing--small)",
            }}>Fixing the Inefficiency of Traditional Labs</h2>

            <div ref={sliderRef} className="blaze-slider slider-3">
              <div className="blaze-container center">
                <div className="blaze-track-container">
                  <div className="blaze-track" style={{ display: "flex" }}>
                    {/* Stat 1 */}
                    <div className="stat-wrapper" style={{ flex: "0 0 100%", padding: "0 10px" }}>
                      <div className="stat-container" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--spacing--medium)",
                        background: "#f8f9fa",
                        padding: "var(--spacing--medium)",
                        borderRadius: "12px",
                      }}>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance" style={{ fontSize: "var(--font-size--large)", color: "#6b7280" }}>Traditional Labs</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>68%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>of all lab mistakes occur before analysis (pre-analytical)</p>
                        </div>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance gradient" style={{ fontSize: "var(--font-size--large)", color: "#3661D6" }}>With SiPhBio Lab</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>0%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Elimination of logistics and electronic data handling eliminate preanalytical errors.</p>
                        </div>
                      </div>
                      <div className="padding-top-x-small" style={{ paddingTop: "var(--spacing--x-small)", textAlign: "center" }}>
                        <div className="paragraph-small text-color-3 center" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Source: Meyer and et al., JAMA Netw Open. 2021</div>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="stat-wrapper" style={{ flex: "0 0 100%", padding: "0 10px" }}>
                      <div className="stat-container" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--spacing--medium)",
                        background: "#f8f9fa",
                        padding: "var(--spacing--medium)",
                        borderRadius: "12px",
                      }}>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance" style={{ fontSize: "var(--font-size--large)", color: "#6b7280" }}>Traditional Labs</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>2 Hours</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>staff time each day chasing results</p>
                        </div>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance gradient" style={{ fontSize: "var(--font-size--large)", color: "#3661D6" }}>With SiPhBio Lab</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>0 Hours</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>manual follow-up — SiPhBio Lab auto-feeds the EMR</p>
                        </div>
                      </div>
                      <div className="padding-top-x-small" style={{ paddingTop: "var(--spacing--x-small)", textAlign: "center" }}>
                        <div className="paragraph-small text-color-3 center" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Source: Crocker JB et al., Am J Clin Pathol. 2014</div>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="stat-wrapper" style={{ flex: "0 0 100%", padding: "0 10px" }}>
                      <div className="stat-container" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--spacing--medium)",
                        background: "#f8f9fa",
                        padding: "var(--spacing--medium)",
                        borderRadius: "12px",
                      }}>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance" style={{ fontSize: "var(--font-size--large)", color: "#6b7280" }}>Traditional Labs</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>25-42%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>of primary care patients skip labs when requested</p>
                        </div>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance gradient" style={{ fontSize: "var(--font-size--large)", color: "#3661D6" }}>With SiPhBio Lab</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>0%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>missed patients with same-visit testing</p>
                        </div>
                      </div>
                      <div className="padding-top-x-small" style={{ paddingTop: "var(--spacing--x-small)", textAlign: "center" }}>
                        <div className="paragraph-small text-color-3 center" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Source: Zhu JM et al., JAMA Netw Open. 2023; and Genalyte 2026 study.</div>
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="stat-wrapper" style={{ flex: "0 0 100%", padding: "0 10px" }}>
                      <div className="stat-container" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--spacing--medium)",
                        background: "#f8f9fa",
                        padding: "var(--spacing--medium)",
                        borderRadius: "12px",
                      }}>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance" style={{ fontSize: "var(--font-size--large)", color: "#6b7280" }}>Traditional Labs</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>7%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>of critical results never reach the patient</p>
                        </div>
                        <div className="slide-col">
                          <p className="paragraph-large text-color-3 balance gradient" style={{ fontSize: "var(--font-size--large)", color: "#3661D6" }}>With SiPhBio Lab</p>
                          <h2 className="heading-1" style={{ fontSize: "var(--font-size--heading-1)", fontWeight: "400" }}>0%</h2>
                          <p className="paragraph-small text-color-3" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>communication failures — results delivered in-visit</p>
                        </div>
                      </div>
                      <div className="padding-top-x-small" style={{ paddingTop: "var(--spacing--x-small)", textAlign: "center" }}>
                        <div className="paragraph-small text-color-3 center" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Source: Casalino LP et al., Arch Intern Med. 2009</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <div id="introduction" className="section-how-it-works">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="introduction-wrapper">
              <h2 className="heading-2 section-padding-bottom-x-small" style={{
                fontSize: "var(--font-size--heading-2)",
                lineHeight: "var(--line-height--heading-2)",
                letterSpacing: "var(--letter-spacing--heading-2)",
                paddingBottom: "var(--spacing--x-small)",
                textAlign: "center",
              }}>Draw. Drop. Done.</h2>
              <div className="grid-12 gap-medium-large" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--spacing--medium-large)",
              }}>
                {/* Step 1 */}
                <div className="usp-item-wrapper balance steps" style={{ textAlign: "center" }}>
                  <div className="how-it-works-wrapper" style={{ marginBottom: "var(--spacing--small)" }}>
                    <div className="background_video _1" style={{
                      position: "relative",
                      paddingBottom: "100%",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F681546d7c8fd52cf04d65f66_blood-sample_1-transcode.mp4" />
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F681546d7c8fd52cf04d65f66_blood-sample_1-transcode.webm" />
                      </video>
                    </div>
                  </div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>1</div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>Collect the Sample</div>
                  <div className="w-layout-vflex max-width-70" style={{ maxWidth: "70%", margin: "0 auto" }}>
                    <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Same draw process as today.</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="usp-item-wrapper balance steps" style={{ textAlign: "center" }}>
                  <div className="how-it-works-wrapper" style={{ marginBottom: "var(--spacing--small)" }}>
                    <div className="background_video" style={{
                      position: "relative",
                      paddingBottom: "100%",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F682b9660fe3e0d9d875cb5a4_genalyte-merlin-two-drop-tubes-transcode.mp4" />
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F682b9660fe3e0d9d875cb5a4_genalyte-merlin-two-drop-tubes-transcode.webm" />
                      </video>
                    </div>
                  </div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>2</div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>Insert in SiPhBio Lab</div>
                  <div className="w-layout-vflex max-width-70" style={{ maxWidth: "70%", margin: "0 auto" }}>
                    <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Drop the sample in. SiPhBio Lab handles the rest.</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="usp-item-wrapper balance steps" style={{ textAlign: "center" }}>
                  <div className="how-it-works-wrapper" style={{ marginBottom: "var(--spacing--small)" }}>
                    <div className="background_video" style={{
                      position: "relative",
                      paddingBottom: "100%",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F68154b4db5cb9a21de098af9_genalyte-ipad-vid-transcode.mp4" />
                        <source src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de%2F68154b4db5cb9a21de098af9_genalyte-ipad-vid-transcode.webm" />
                      </video>
                    </div>
                  </div>
                  <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>3</div>
                  <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>Get results in the EMR</div>
                  <div className="w-layout-vflex max-width-70" style={{ maxWidth: "70%", margin: "0 auto" }}>
                    <div className="text-color-3" style={{ color: "#6b7280", fontSize: "var(--font-size--small)" }}>Seamless results delivered to your preferred EMR.</div>
                  </div>
                </div>
              </div>
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
              overflow: "hidden",
            }}>
              <div className="card-content-wrapper cta-content" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                alignItems: "center",
              }}>
                <div className="w-layout-vflex flex-block contentcta" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--x-small)" }}>
                  <div className="div-block-11">
                    <div className="eyebrow white" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "var(--font-size--small)",
                      fontWeight: "500",
                      color: "#fff",
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
                    color: "#fff",
                  }}>Seamless results delivered to your preferred EMR.</p>
                  <p className="paragraph-base padding-bottom-2x-small" style={{
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "rgba(255,255,255,0.8)",
                    paddingBottom: "var(--spacing--2x-small)",
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
                      cursor: "pointer",
                    }}>Get SiPhBio Lab</div>
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
                    alt="SiPhBio Lab Analyzer"
                    style={{
                      position: "absolute",
                      bottom: "-20%",
                      right: "-10%",
                      width: "40%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TEST MENU SECTION ===== */}
      <div className="section-test-menu-scroll">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container medium balance" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)", maxWidth: "min(100%, 840px)", margin: "0 auto" }}>
            <h2 className="heading-2 center padding-bottom-medium-large" style={{
              fontSize: "var(--font-size--heading-2)",
              lineHeight: "var(--line-height--heading-2)",
              letterSpacing: "var(--letter-spacing--heading-2)",
              textAlign: "center",
              paddingBottom: "var(--spacing--medium-large)",
            }}>SiPhBio Lab covers a comprehensive diagnostic menu</h2>
          </div>
          <div className="w-layout-vflex flex-block-7" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--small)" }}>
            {/* Row 1: MXD, WBC, RBC, Hemoglobin, Hematocrit, Platelets, MCHC */}
            <div className="testmenu-slider-wraper" style={{ display: "flex", justifyContent: "center", gap: "var(--spacing--small)", flexWrap: "wrap" }}>
              {["MXD", "WBC", "RBC", "Hemoglobin", "Hematocrit", "Platelets", "Mean Corpuscular Hemoglobin Concentration"].map((label) => (
                <div key={label} className="testmenu-wrapper" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#f8f9fa",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}>
                  <div className="testmenu-icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681a97a3a6acb5f5b494db62_icon-1.png" loading="lazy" alt="" style={{ width: "24px", height: "24px" }} />
                  </div>
                  <div className="testmenu-content">
                    <div className="testmenu-label" style={{ fontWeight: "500", fontSize: "var(--font-size--small)" }}>{label}</div>
                    <div className="testmenu-tag" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Complete Blood Count</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: nHDLc, HDL, Triglycerides, LDL, Total Cholesterol, VLDL */}
            <div className="testmenu-slider-wraper" style={{ display: "flex", justifyContent: "center", gap: "var(--spacing--small)", flexWrap: "wrap" }}>
              {["nHDLc", "High-Density Lipoprotein", "Triglycerides", "Low-Density Lipoprotein", "Total Cholesterol", "Very Low Density Lipoprotein Cholesterol"].map((label) => (
                <div key={label} className="testmenu-wrapper" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#f8f9fa",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}>
                  <div className="testmenu-icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681a9aa072ce8da0fd959ac6_icon-2.png" loading="lazy" alt="" style={{ width: "24px", height: "24px" }} />
                  </div>
                  <div className="testmenu-content">
                    <div className="testmenu-label" style={{ fontWeight: "500", fontSize: "var(--font-size--small)" }}>{label}</div>
                    <div className="testmenu-tag" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>Lipid Panel</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: BUN, Total Protein, Calcium, ALT, AST, Sodium, Total Bilirubin, Glucose, Creatinine */}
            <div className="testmenu-slider-wraper" style={{ display: "flex", justifyContent: "center", gap: "var(--spacing--small)", flexWrap: "wrap" }}>
              {["Blood Urea Nitrogen", "Total Protein", "Calcium", "ALT", "AST", "Sodium", "Total Bilirubin", "Glucose", "Creatinine"].map((label) => (
                <div key={label} className="testmenu-wrapper" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#f8f9fa",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}>
                  <div className="testmenu-icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681a9ade6814911e72ee3302_icon-3.png" loading="lazy" alt="" style={{ width: "24px", height: "24px" }} />
                  </div>
                  <div className="testmenu-content">
                    <div className="testmenu-label" style={{ fontWeight: "500", fontSize: "var(--font-size--small)" }}>{label}</div>
                    <div className="testmenu-tag" style={{ fontSize: "var(--font-size--small)", color: "#6b7280" }}>CMP</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container center" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)", textAlign: "center", marginTop: "var(--spacing--medium)" }}>
            <a href="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/682b885b65ef3cfff53ff150_Genalyte%20-%20Test%20Menu.pdf" target="_blank" className="w-inline-block">
              <div className="button-base is-primary" style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "0.8rem 1.3rem",
                borderRadius: "100px",
                display: "inline-block",
                fontWeight: "500",
                fontSize: "var(--font-size--medium)",
                cursor: "pointer",
              }}>See the full menu</div>
            </a>
          </div>
        </div>
      </div>

      {/* ===== PATIENT TESTIMONIALS ===== */}
      <div className="section-graphs">
        <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
          <div className="grid-12" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--spacing--medium)",
            alignItems: "center",
          }}>
            <div className="grid-image-1 ratio-1 align-center bg-soft">
              <div className="padding-bottom-x-small" style={{ paddingBottom: "var(--spacing--x-small)", textAlign: "center" }}>Satisfaction Rate</div>
              <div className="code-embed" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681bbe613b7a6d4540e05363_cta-bg-2.webp"
                  alt="Satisfaction Chart"
                  style={{ width: "100%", maxWidth: "468px", height: "auto" }}
                />
              </div>
            </div>
            <div className="column-right-wrapper gap-medium align-center">
              <h2 className="heading-2 balance" style={{
                fontSize: "var(--font-size--heading-2)",
                lineHeight: "var(--line-height--heading-2)",
                letterSpacing: "var(--letter-spacing--heading-2)",
              }}>Patients prefer same-visit results.</h2>
              <div className="testimonial-wrapper small" style={{
                background: "#f8f9fa",
                padding: "var(--spacing--medium)",
                borderRadius: "12px",
              }}>
                <div className="paragraph-small balance" style={{
                  fontSize: "var(--font-size--small)",
                  lineHeight: "var(--line-height--small)",
                  letterSpacing: "var(--letter-spacing--small)",
                }}>"I really wish my doctor provided on-site testing. Last month I got a call in the middle of the night three days after I had seen my doctor and had blood drawn. He said my results were finally back and potassium was sky high and to head to the ER immediately. I was terrified but after three hours in the ER, I was told my potassium was fine and so was I. If I had my tests results while I was in the office, my doctor would have known I was fine and saved me a lot of misery."</div>
                <div className="w-layout-vflex testimonial-details" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--x-tiny)", marginTop: "var(--spacing--small)" }}>
                  <img
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823b9068c14eab618f3b07d_AI-genererade%20avatarer-p-500.jpg 500w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823b9068c14eab618f3b07d_AI-genererade%20avatarer-p-800.jpg 800w, https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823b9068c14eab618f3b07d_AI-genererade%20avatarer.jpg 1024w"
                    alt="Bill"
                    src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/6823b9068c14eab618f3b07d_AI-genererade%20avatarer.jpg"
                    loading="lazy"
                    style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                  />
                  <div className="paragraph-small text-weight-medium" style={{ fontSize: "var(--font-size--small)", fontWeight: "500" }}>Bill, Patient</div>
                </div>
              </div>
              <a href="/contact-us" className="w-inline-block">
                <div className="button-base is-primary" style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "0.8rem 1.3rem",
                  borderRadius: "100px",
                  display: "inline-block",
                  fontWeight: "500",
                  fontSize: "var(--font-size--medium)",
                  cursor: "pointer",
                }}>Get SiPhBio Lab</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INFINITE SCROLL SECTION ===== */}
      <div className="section-loop-scroll">
        <div className="padding-y-large" style={{ padding: "var(--spacing--large) 0" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="grid-12 infinite" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--spacing--medium)",
              alignItems: "center",
            }}>
              <div className="column-right-wrapper gap-medium stoll">
                <h2 className="heading-infinite" style={{
                  fontSize: "var(--font-size--heading-2)",
                  lineHeight: "var(--line-height--heading-2)",
                  letterSpacing: "var(--letter-spacing--heading-2)",
                }}>SiPhBio Lab is for</h2>
              </div>
              <div className="column-right-wrapper gap-medium">
                <div className="scroll-container" style={{ position: "relative", overflow: "hidden", height: "300px" }}>
                  <div className="text-fade-effect" style={{ position: "relative" }}>
                    <div id="scrollContent" className="scroll-content" style={{ animation: "scroll 10s linear infinite" }}>
                      {[
                        "Primary Care & Outpatient Clinics",
                        "Private & Concierge Clinics",
                        "Hospitals & Health Systems",
                        "Surgery Centers & Specialists",
                        "Government, Military & VA",
                      ].map((item, index) => (
                        <div key={index} className={`scroll-item ${index === 4 ? "active" : ""}`} style={{
                          padding: "var(--spacing--small)",
                          borderBottom: "1px solid #e5e7eb",
                          fontSize: "var(--font-size--heading-3)",
                          lineHeight: "var(--line-height--heading-3)",
                          letterSpacing: "var(--letter-spacing--heading-3)",
                          transition: "all 0.3s ease",
                        }}>
                          <a href={`/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`} className="w-inline-block">
                            <div className="heading-infinite" style={{ fontSize: "var(--font-size--heading-3)" }}>{item}</div>
                          </a>
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {[
                        "Primary Care & Outpatient Clinics",
                        "Private & Concierge Clinics",
                        "Hospitals & Health Systems",
                        "Surgery Centers & Specialists",
                        "Government, Military & VA",
                      ].map((item, index) => (
                        <div key={`dup-${index}`} className={`scroll-item ${index === 4 ? "active" : ""}`} style={{
                          padding: "var(--spacing--small)",
                          borderBottom: "1px solid #e5e7eb",
                          fontSize: "var(--font-size--heading-3)",
                          lineHeight: "var(--line-height--heading-3)",
                          letterSpacing: "var(--letter-spacing--heading-3)",
                        }}>
                          <a href={`/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`} className="w-inline-block">
                            <div className="heading-infinite" style={{ fontSize: "var(--font-size--heading-3)" }}>{item}</div>
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

      {/* ===== FINAL CTA ===== */}
      <div id="get-started-cta" className="section-get-started-cta">
        <div className="padding-bottom-large" style={{ paddingBottom: "var(--spacing--large)" }}>
          <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
            <div className="card-1-wrapper" style={{
              background: "linear-gradient(91.57deg, #1a1a2e, #16213e)",
              borderRadius: "16px",
              padding: "var(--spacing--large)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div className="card-content-wrapper cta-content" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                alignItems: "center",
              }}>
                <div className="w-layout-vflex flex-block contentcta" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing--x-small)" }}>
                  <div className="div-block-11">
                    <div className="eyebrow white" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "var(--font-size--small)",
                      fontWeight: "500",
                      color: "#fff",
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M4 0.701368C4 0.701368 2.7141e-07 5.69223 1.74846e-07 7.90137C7.8281e-08 10.1105 1.79086 11.9014 4 11.9014C6.20914 11.9014 8 10.1105 8 7.90137C8 5.69223 4 0.701368 4 0.701368Z" fill="#fff"/>
                      </svg>
                      <div></div>
                    </div>
                  </div>
                  <p className="cta-headline" style={{
                    fontSize: "var(--font-size--heading-2)",
                    lineHeight: "var(--line-height--heading-2)",
                    letterSpacing: "var(--letter-spacing--heading-2)",
                    color: "#fff",
                  }}>Ready to see SiPhBio Lab in action?</p>
                  <p className="paragraph-base padding-bottom-2x-small" style={{
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "rgba(255,255,255,0.8)",
                    paddingBottom: "var(--spacing--2x-small)",
                  }}>The power of a full-scale lab into a single, self-running device—designed to fit seamlessly into your existing workflow.</p>
                  <a href="/contact-us" className="w-inline-block">
                    <div className="button-base is-white" style={{
                      backgroundColor: "#fff",
                      color: "#000",
                      padding: "0.8rem 1.3rem",
                      borderRadius: "100px",
                      display: "inline-block",
                      fontWeight: "500",
                      fontSize: "var(--font-size--medium)",
                      cursor: "pointer",
                    }}>Get SiPhBio Lab</div>
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
                    alt="SiPhBio Lab Analyzer"
                    style={{
                      position: "absolute",
                      bottom: "-20%",
                      right: "-10%",
                      width: "40%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-layout-grid grid-14" style={{
              display: "grid",
              justifyContent: "center",
              marginTop: "var(--spacing--small)",
            }}>
              <div className="text-block-7 text-align-center text-weight-light disclaimer" style={{
                textAlign: "center",
                fontWeight: "300",
                fontSize: "var(--font-size--small)",
                color: "#6b7280",
              }}>In development. Not available for commercial sale.</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .scroll-item.active {
          color: #3661D6;
          border-left: 3px solid #3661D6;
          padding-left: var(--spacing--small);
        }

        @media (max-width: 991px) {
          .grid-12 {
            grid-template-columns: 1fr !important;
          }
          ._4-grid.usp {
            grid-template-columns: 1fr 1fr !important;
          }
          .card-content-wrapper.cta-content {
            grid-template-columns: 1fr !important;
          }
          .grid-12.infinite {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          ._4-grid.usp {
            grid-template-columns: 1fr !important;
          }
          .stat-container {
            grid-template-columns: 1fr !important;
          }
          .grid-12.gap-medium-large {
            grid-template-columns: 1fr !important;
          }
          .testmenu-slider-wraper {
            flex-direction: column !important;
            align-items: center !important;
          }
        }

        /* Import fonts */
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}