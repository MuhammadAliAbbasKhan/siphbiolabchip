// src/pages/AboutPage.jsx
import React, { useState } from "react";

export default function AboutPage() {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Kevan Samiee, PhD",
      role: "President",
      image: "https://cdn.prod.website-files.com/6655c864b30886d6e6253257/681bd30b5a6829fd11b1ff6a_Kevan%201.webp",
      bio: "Kevan brings nearly 25 years experience in life sciences technology research, development and commercialization. He started his career at Pacific Biosciences, a small, venture backed genomics startup and grew with the company through its first customer shipment and IPO. While there his work included basic research, manufacturing process development, enterprise IT system implementation and program management of multiple new product development programs. After PacBio, Kevan spent more than a decade in a variety of leadership roles at Illumina where he led multiple new product development programs and supervised research and engineering teams across the life sciences disciplines. Most recently, Kevan was responsible for a custom products, application development and partnerships team driving more than $300M in annual revenue.\n\nKevan holds a PhD in Applied and Engineering Physics from Cornell University and an MBA from The Wharton School, and was an undergrad at the University of Illinois at Urbana where he earned a BS in Physics and a BS in Computer Science and Mathematics."
    },
    {
      name: "Sam Rutten",
      role: "VP of Finance and Operations",
      image: "https://cdn.prod.website-files.com/6655c864b30886d6e6253257/6a0367510e807de367e03380_Headshot%20May%202026.png",
      bio: "Sam Rutten oversees all aspects of financial operations at SiPhBioLabChip. He brings more than 15 years of finance and accounting experience with public and private companies in the life science and technology industries. Sam also leads administration operations and plays a major leadership role in the Company's business strategy.\n\nSam has extensive operational leadership experience raising venture capital and developing strategic financial plans. He most recently served as Head of Finance and Controller at Roswell Biotechnologies where he led financial operations and was responsible for the IPO and commercialization readiness planning. Prior to that, Sam was with Fate Therapeutics where he led SEC reporting and SOX 404b implementation during the company's rapid growth.\n\nBefore transitioning in-house, Sam worked as a senior business assurance associate at Moss Adams and Baker Tilly, where he worked with private and public life science clients. He holds a certified public accounting license and received a B.S. degree in corporate finance and accounting from the University of Wisconsin, La Crosse."
    },
    {
      name: "David McGrath",
      role: "VP of Quality and Regulatory Functions",
      image: "https://cdn.prod.website-files.com/6655c864b30886d6e6253257/681bd325ef403cda459cad56_David%201.webp",
      bio: "David joined SiPhBioLabChip from Lucira Health, a diagnostic test developer, where he served as their Vice President of Regulatory and Clinical Affairs where successfully obtained the FDA's first emergency use authorization for an at-home COVID-19 & Flu test, as well securing the first approval for their combination COVID & Flu Test by Health Canada and TGA (Australia).\n\nPrior to joining Lucira Health, David spent the last 15 years in the Medical Device industry leading the Quality & Regulatory teams at companies such as Philips, DJO Global, Alphatec Spine and Henry Schein Orthodontics. Prior to his medical industry experience, David spent 16 years in the automotive and aerospace industries at Ford Motor Company, General Dynamics and Northup Grumman.\n\nDavid received a B.S. from San Diego State University in Electrical Engineering, a Masters of Science in Reliability Engineering from the University of Maryland, and is a Certified Six Sigma Black Belt."
    },
    {
      name: "Chris Kunard",
      role: "VP of Software Engineering",
      image: "https://cdn.prod.website-files.com/6655c864b30886d6e6253257/69d3cfc2cc22008a43ad928c_Chris-small.jpg",
      bio: "Chris has over 30 years of experience building and leading software and R&D organizations in the biotech, telecommunications, and defense industries. He joined SiPhBioLabChip after 10 years at Illumina, where he initially led the instrument software organization that launched multiple ground-breaking genome sequencers. Later, he helped form a collaboration and innovation team that interfaced with hundreds of customers around the world. A notable collaboration was the Alliance for Genomic Discovery, one of the fastest large-scale genomic sequencing projects in history, that is now delivering powerful insights for drug discovery.\n\nPrior to joining Illumina, Chris spent nearly 15 years in the telecommunications space, primarily at Nokia, where he led development teams across multiple layers of the phone software stack, powering hundreds of millions of handsets and enabling the mobile phone revolution.\n\nHis early career was spent in the defense industry at Texas Instruments and Raytheon where he used advanced image processing techniques to develop target tracking algorithms for the fire-and-forget Javelin missile system.\n\nChris holds a Master of Science in Electrical Engineering from the University of Illinois at Urbana-Champaign and Bachelor of Science degrees in both Computer Science and Electrical Engineering from Washington University in St. Louis."
    }
  ];

  const boardMembers = [
    {
      name: "Jeff Huber",
      role: "Chairman, Board of Directors",
      bio: "Jeff Huber is the Founding CEO and Vice Chairman of GRAIL (2016-present). GRAIL's mission is to detect cancer early, when it can be cured.\n\nPrior to GRAIL, Jeff was a Senior Vice President at Google. Over 13 years at Google, Jeff co-founded Google's life sciences efforts in Google[x] (2013-2016), and led development and scaling for Google Maps (2011-2013), Google Apps (2005-2010), and Google Ads (2003-2011). During his tenure as an executive at Google, Jeff oversaw 50x growth in revenues (from $1 billion to >$50 billion) and organization (1,000 to >50,000 employees), and managed a $5 billion P&L and large distributed teams (5,000+ direct-line employees). Earlier, Jeff was vice president of architecture and systems development at eBay and senior vice president of engineering at Excite@Home, where he led consumer product and infrastructure development.\n\nJeff was recognized as one of the '100 Most Intriguing Entrepreneurs' (2017), and is an active early-stage investor/advisor in breakthrough life sciences and technology, including Openwater, Mammoth Biosciences, Vir, Sana, Zymergen, Atomwise, SiPhBioLabChip, Pinterest, Honor, OpenDoor, and AngelList.\n\nJeff holds a bachelor's degree in computer engineering from the University of Illinois, where he was Commencement Speaker (2016) and received a 'Distinguished Alumni Award' from the College of Electrical & Computer Engineering (2018) for 'challenging the status quo through innovation'. He also holds a master's degree in business from Harvard University. Jeff is a board member of GRAIL (Vice Chairman), SiPhBioLabChip (Chairman), Electronic Arts (EA), Openwater, and The Exploratorium, and a former board member of Illumina (ILMN; 2014-2016)."
    },
    {
      name: "Saeid Akhtari",
      role: "Member, Board of Directors",
      bio: "Saeid is the Managing Director at HBM Genomics investing in world-class entrepreneurs in life sciences companies.\n\nHe has more than 25 years of experience as an entrepreneur building successful biotech companies from scratch. Saeid is an active investor/advisor in leading life sciences companies, including SiPhBioLabChip, Clear Labs, Convergent Genomics, Encoded Therapeutics, Haystack Biosciences, Seer Biosciences, Trace Genomics, and Xcell Biosciences.\n\nPrior to HBM Genomics, Saeid was the founder, President & CEO of NextBio which was acquired by Illumina in 2013. Prior to founding NextBio, he was the President & CEO of Silicon Genetics which was acquired by Agilent in 2004. Mr. Akhtari has also held executive management positions at several other life sciences companies."
    },
    {
      name: "Rami El Assal",
      role: "Member, Board of Directors",
      bio: "Dr. El Assal is a scientist-clinician turned venture capitalist investing in healthcare and life sciences. He is the Managing General Partner & Co-founder of Boutique Venture Partners, a venture capital firm that specializes in early-stage investments in Biotech, Medtech, Digital Health, Health Economics, and Health Edtech startups. Rami and his partners launched the Early Disease Detection and Early Treatment Fund, which is recognized in the industry as one of the earliest vehicles focusing on early detection and treatment, and is dedicated to translating the most promising innovations originating from esteemed research labs. In 2022, he was selected to be amongst the Top Healthcare Investors by GrowthCap Advisory.\n\nPrior to founding Boutique, Rami was a Research Scientist (Academic Staff) at the Canary Center for Cancer Early Detection at Stanford University School of Medicine, and is currently affiliated with the Precision Health and Integrated Diagnostic Center at Stanford University. Previously, he completed two Postdoctoral Research Fellowships at Stanford and Harvard Medical Schools. He has been recognized by several entities, such as the Center of Nanoscale Systems (CNS) at Harvard University, and published in the field of Early Detection & Early Treatment, including a two-volume book published in Springer Nature."
    },
    {
      name: "Richard Marini",
      role: "Member, Board of Directors",
      bio: "Rick is a serial entrepreneur with 25 years of operating and investing experience in the technology space. He is an active angel investor in more than 60 tech start-ups including 15 unicorns. Rick is the Co-founder & Managing Partner of Catapult Capital - a private equity firm that focuses on consumer technology transactions. In May 2020, Catapult acquired the dating app Grindr for $600 million. Rick became the Chief Operating Officer of Grindr. Catapult rebuilt the team and virtually every system and process within the company and grew both revenue and EBITDA by over 80% in 2.5 years. In Nov 2022, Grindr went public on the NYSE with a market capitalization of more than $2 billion.\n\nIn 2023, Rick co-founded Rails, a self-custodial crypto perpetuals exchange. Rails raised $20 million in funding from Slow Ventures, CMCC, and Kraken. In 2010, Rick founded BranchOut, the largest professional network leveraging the social graph with more than 800 million professional profiles. BranchOut raised $49 million in funding from Accel, Redpoint, Mayfield, Norwest and Floodgate. In 2014, BranchOut was acquired by Hearst Corporation. Rick ran the Digital Innovation Group at Hearst from 2014-2016. In 1999, Rick co-founded Tickle.com, one of the largest social media sites on the Internet. In 2002, Tickle won the 'Rising Star' Webby Award as the fastest growing site on the Internet. Tickle grew to more than 200 million registered users and was a top 20 website. In 2004, Monster Worldwide acquired Tickle for $100 million.\n\nRick received his MBA from Harvard Business School. He holds a B.S. in Business Administration from the University of New Hampshire where he graduated magna cum laude. Rick was inducted into the University of New Hampshire Entrepreneur Hall of Fame in 2021."
    },
    {
      name: "Joe Markee",
      role: "Member, Board of Directors",
      bio: "Joe Markee Managing Director at Express Ventures\n\nJoe brings extensive experience in early stage company formation, capital raising, corporate management, and public and private corporate governance. Joe's startup experience encompasses Primary Access as a founder and senior manager, Copper Mountain Networks as founding CEO, CTO and Chairman, Figure 8 Wireless as CEO and StackIQ as CEO and Chairman.\n\nJoe was also a founder and served as President of the San Diego Telecommunications Council (renamed CommNexus). He has been honored with awards for his contributions to San Diego's high-tech business community, including Master Entrepreneur."
    },
    {
      name: "Cary Gunn",
      role: "Member, Board of Directors",
      bio: "Dr. Cary Gunn has been blazing trails in the technology community for almost 30 years.\n\nPrior to founding SiPhBioLabChip, Cary served as co-founder and Chief Technical Officer of Luxtera, a developer of innovative optical solutions; his military career includes almost 10 years in the United States Air Force, where he was responsible for launching GPS satellites. Holding 81 (and counting) issued U.S. patents, Cary has been recognized in publications including the MIT Technology Review, which named him a Top Young Innovator in 2003. Five years later, Cary's achievements in silicon photonics were awarded with the Optical Society of America Adolph Lomb Medal and the Berthold-Leibinger Foundation Innovation Prize. He received his bachelor's degree in Applied Physics and Organic Chemistry from the United States Air Force Academy and his PhD in Electrical Engineering from the California Institute of Technology (Caltech)."
    }
  ];

  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div className="about-page" style={{ 
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
                <div>the team behind SiPhBioLabChip</div>
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
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>At SiPhBioLabChip, we're redefining</div>
              </div>
              <div className="overflow-hidden">
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>diagnostics.</div>
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
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>Our mission is to make lab testing accessible and immediate. We are solving today's challenges of lab testing</div>
                <div style={{ display: "block", textAlign: "center", width: "100%" }}>at the point of care by eliminating delays, reducing errors, and addressing critical staffing shortages.</div>
              </div>
            </div>
          </div>
        </div>
        <a id="scrollDown" href="#" className="link-block-3" style={{
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

        {/* ===== MISSION / REIMAGINED SECTION ===== */}
        <div id="introduction" className="section-mission"></div>
        <div className="section-reimagined">
          <div className="padding-top-x-large" style={{ paddingTop: "var(--spacing--x-large)" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <div className="grid-12" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing--medium)",
                alignItems: "center"
              }}>
                <div id="w-node-_355084ea-2fbe-b074-56e2-b03481df01ce-899d6663">
                  <h3 className="heading-3 balance" style={{
                    fontSize: "var(--font-size--heading-3)",
                    lineHeight: "var(--line-height--heading-3)",
                    letterSpacing: "var(--letter-spacing--heading-3)",
                    fontWeight: "400"
                  }}>We've reimagined the entire experience.</h3>
                </div>
                <div id="w-node-_256fc165-9a1b-021e-2677-664252297363-899d6663">
                  <div className="padding-bottom-medium balance" style={{
                    paddingBottom: "var(--spacing--medium)",
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "#4b5563"
                  }}>For decades, getting a blood test meant leaving the clinic, heading to a lab, and waiting days for results. Along the way, errors happen. Patients drop off. Diagnoses get delayed. At SiPhBioLabChip, we bring the lab to the patient — replacing days of waiting with real-time answers.</div>
                  <div className="heading-5 padding-bottom-2x-small" style={{
                    fontSize: "var(--font-size--heading-5)",
                    lineHeight: "var(--line-height--heading-5)",
                    letterSpacing: "var(--letter-spacing--heading-5)",
                    paddingBottom: "var(--spacing--2x-small)",
                    fontWeight: "500"
                  }}>What we've built</div>
                  <div className="balance" style={{
                    fontSize: "var(--font-size--base)",
                    lineHeight: "var(--line-height--base)",
                    letterSpacing: "var(--letter-spacing--base)",
                    color: "#4b5563"
                  }}>We created SiPhBioLabChip to bring the lab to the patient — not the other way around.<br /><br />It's the world's first real-time, all-in-one diagnostic system that fits right into your clinic.<br /><br />Behind the scenes, our cloud system double-checks the results and sends them straight to your electronic records. No delays. No missed follow-ups. Just fast, reliable answers — when they matter most.</div>
                </div>
              </div>
            </div>
            <div className="padding-top-large" style={{ paddingTop: "var(--spacing--large)" }}>
              <img
                src="https://cdn.prod.website-files.com/6655c863b30886d6e62530de/681bd18ec5459700093085ab_vial-green.webp"
                loading="eager"
                alt="Vial Green"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* ===== LEADERSHIP SECTION ===== */}
        <div className="section-members">
          <div className="padding-top-large" style={{ paddingTop: "var(--spacing--large)" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <h2 className="heading-2 padding-bottom-x-small" style={{
                fontSize: "var(--font-size--heading-2)",
                lineHeight: "var(--line-height--heading-2)",
                letterSpacing: "var(--letter-spacing--heading-2)",
                paddingBottom: "var(--spacing--x-small)"
              }}>Leadership</h2>
              <div className="team-wrapper">
                <div className="team-list-wrapper" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "var(--spacing--medium)"
                }}>
                  {leadershipTeam.map((member, index) => (
                    <div key={index} className="collection-item" style={{ cursor: "pointer" }} onClick={() => setSelectedLeader(member)}>
                      <div className="sidebar-item-component">
                        <div className="sidebar-button">
                          <div className="team-image-wrapper" style={{ position: "relative", overflow: "hidden", borderRadius: "8px", aspectRatio: "1/1" }}>
                            <img
                              src={member.image}
                              loading="eager"
                              alt={member.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                                transform: "scale(1.1)"
                              }}
                              onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                              onMouseLeave={(e) => e.target.style.transform = "scale(1.1)"}
                            />
                            <div style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: "var(--spacing--small)",
                              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                              color: "#fff"
                            }}>
                              <div style={{ fontWeight: "500", fontSize: "var(--font-size--base)" }}>{member.name}</div>
                              <div style={{ fontSize: "var(--font-size--small)", color: "rgba(255,255,255,0.8)" }}>{member.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOARD OF DIRECTORS SECTION ===== */}
        <div className="section-members">
          <div className="section-padding-large" style={{ padding: "var(--spacing--large) 0" }}>
            <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
              <h2 className="heading-2 padding-bottom-x-small" style={{
                fontSize: "var(--font-size--heading-2)",
                lineHeight: "var(--line-height--heading-2)",
                letterSpacing: "var(--letter-spacing--heading-2)",
                paddingBottom: "var(--spacing--x-small)"
              }}>Board of Directors</h2>
              <div className="team-wrapper">
                <div className="grid-12 gap-big teams" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "var(--spacing--medium)"
                }}>
                  {boardMembers.map((member, index) => (
                    <div key={index} className="collection-item second" style={{ cursor: "pointer" }} onClick={() => setSelectedBoard(member)}>
                      <div className="sidebar-item-component">
                        <div className="sidebar-button">
                          <div className="team-image-wrapper" style={{
                            padding: "var(--spacing--medium)",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.borderColor = "#3661D6"}
                          onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e5e7eb"}>
                            <div className="w-layout-hflex flex-block-4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="div-block-5">
                                <div className="paragraph-base" style={{ fontWeight: "500" }}>{member.name}</div>
                                <div className="paragraph-base text-color-3" style={{ color: "#4b5563", fontSize: "var(--font-size--small)" }}>{member.role}</div>
                              </div>
                              <div className="div-block-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                  <path d="M5 0V10" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M10 5L2.38419e-07 5" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== LEADER MODAL ===== */}
        {selectedLeader && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }} onClick={() => setSelectedLeader(null)}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              padding: "var(--spacing--large)",
              position: "relative"
            }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedLeader(null)} style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#4b5563"
              }}>×</button>
              <div style={{ display: "flex", gap: "var(--spacing--medium)", alignItems: "flex-start", marginBottom: "var(--spacing--medium)" }}>
                <img src={selectedLeader.image} alt={selectedLeader.name} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: "var(--font-size--heading-3)", fontWeight: "500", margin: 0 }}>{selectedLeader.name}</h3>
                  <p style={{ color: "#4b5563", fontSize: "var(--font-size--base)", margin: "var(--spacing--x-small) 0 0 0" }}>{selectedLeader.role}</p>
                </div>
              </div>
              <div style={{
                fontSize: "var(--font-size--base)",
                lineHeight: "var(--line-height--base)",
                color: "#4b5563",
                whiteSpace: "pre-line"
              }}>{selectedLeader.bio}</div>
            </div>
          </div>
        )}

        {/* ===== BOARD MODAL ===== */}
        {selectedBoard && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }} onClick={() => setSelectedBoard(null)}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              padding: "var(--spacing--large)",
              position: "relative"
            }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedBoard(null)} style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#4b5563"
              }}>×</button>
              <div style={{ marginBottom: "var(--spacing--medium)" }}>
                <h3 style={{ fontSize: "var(--font-size--heading-3)", fontWeight: "500", margin: 0 }}>{selectedBoard.name}</h3>
                <p style={{ color: "#4b5563", fontSize: "var(--font-size--base)", margin: "var(--spacing--x-small) 0 0 0" }}>{selectedBoard.role}</p>
              </div>
              <div style={{
                fontSize: "var(--font-size--base)",
                lineHeight: "var(--line-height--base)",
                color: "#4b5563",
                whiteSpace: "pre-line"
              }}>{selectedBoard.bio}</div>
            </div>
          </div>
        )}

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
          .team-list-wrapper {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .grid-12.gap-big.teams {
            grid-template-columns: 1fr 1fr !important;
          }
          .card-content-wrapper.cta-content {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .team-list-wrapper {
            grid-template-columns: 1fr !important;
          }
          .grid-12.gap-big.teams {
            grid-template-columns: 1fr !important;
          }
          .heading-jumbo {
            font-size: var(--font-size--jumbo) !important;
          }
        }

        @media (max-width: 478px) {
          .heading-jumbo {
            font-size: var(--font-size--jumbo) !important;
          }
          [style*="display: flex; gap: var(--spacing--medium); align-items: flex-start;"] {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}