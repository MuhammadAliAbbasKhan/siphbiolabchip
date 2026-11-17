// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header({ onOpenQuiz, onStartTesting }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (target) => {
    closeMenu();
    if (target === "quiz") {
      if (onOpenQuiz) {
        onOpenQuiz();
      }
      return;
    }
    if (target.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + target);
      } else {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(target);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "1280px",
        zIndex: 10000,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Floating Header Capsule */}
      <div
        style={{
          background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "9999px",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)"
            : "0 4px 20px rgba(0, 0, 0, 0.04)",
          padding: "0.65rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO AREA: SiPhBio LABCHIP layout */}
        <Link
          to="/"
          onClick={closeMenu}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "#0f172a",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              SiPho
            </span>
            
            {/* Colorful crossed X icon matching image */}
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 5L23 23"
                stroke="#2bbdb9"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M5 23L23 5"
                stroke="#f97316"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <circle cx="14" cy="14" r="3.2" fill="#2bbdb9" />
            </svg>

            {/* HEALTH text with cyan underline */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  color: "#0f172a",
                  fontFamily: "Inter, system-ui, sans-serif",
                  textTransform: "uppercase",
                  lineHeight: "1.1",
                }}
              >
                HEALTH
              </span>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#2bbdb9",
                  marginTop: "1px",
                  borderRadius: "1px",
                }}
              />
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (Centered) */}
        <nav
          className="desktop-nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <button
            onClick={() => handleNavClick("#how-it-works")}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#334155",
              cursor: "pointer",
              transition: "color 0.2s ease",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2bbdb9")}
            onMouseLeave={(e) => (e.target.style.color = "#334155")}
          >
            How It Works
          </button>

          <button
            onClick={() => handleNavClick("#what-we-test")}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#334155",
              cursor: "pointer",
              transition: "color 0.2s ease",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2bbdb9")}
            onMouseLeave={(e) => (e.target.style.color = "#334155")}
          >
            What We Test
          </button>

          <button
            onClick={() => handleNavClick("quiz")}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#334155",
              cursor: "pointer",
              transition: "color 0.2s ease",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2bbdb9")}
            onMouseLeave={(e) => (e.target.style.color = "#334155")}
          >
            Quiz
          </button>

          <button
            onClick={() => handleNavClick("/faq")}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#334155",
              cursor: "pointer",
              transition: "color 0.2s ease",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2bbdb9")}
            onMouseLeave={(e) => (e.target.style.color = "#334155")}
          >
            FAQ
          </button>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          {/* Start Testing Pill Button */}
          <button
            onClick={onStartTesting || (() => handleNavClick("/pricing"))}
            style={{
              background: "linear-gradient(135deg, #2bbdb9 0%, #1ea5a1 100%)",
              color: "#ffffff",
              border: "none",
              padding: "0.65rem 1.4rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(43, 189, 185, 0.35)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(43, 189, 185, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(43, 189, 185, 0.35)";
            }}
          >
            Start Testing
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            style={{
              background: "transparent",
              border: "none",
              padding: "0.4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1e293b",
              borderRadius: "50%",
              transition: "background 0.2s ease",
            }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* FULLSCREEN OVERLAY MENU */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            width: "100vw",
            height: "calc(100vh - 80px)",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2.5rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
                  Main Navigation
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <button onClick={() => handleNavClick("/")} style={menuLinkStyle}>Home</button>
                  <button onClick={() => handleNavClick("#how-it-works")} style={menuLinkStyle}>How It Works</button>
                  <button onClick={() => handleNavClick("#what-we-test")} style={menuLinkStyle}>What We Test</button>
                  <button onClick={() => handleNavClick("quiz")} style={menuLinkStyle}>Biomarker Quiz</button>
                  <button onClick={() => handleNavClick("/faq")} style={menuLinkStyle}>Frequently Asked Questions</button>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
                  Platform & Services
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <button onClick={() => handleNavClick("/science")} style={menuLinkStyle}>Silicon Photonics Tech</button>
                  <button onClick={() => handleNavClick("/company")} style={menuLinkStyle}>SiPhBio Home Device</button>
                  <button onClick={() => handleNavClick("/assays")} style={menuLinkStyle}>Biomarker Panels Catalog</button>
                  <button onClick={() => handleNavClick("/pricing")} style={menuLinkStyle}>Pricing & Subscriptions</button>
                  <button onClick={() => handleNavClick("/contact-us")} style={menuLinkStyle}>Contact Support</button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: "800px",
              margin: "2rem auto 0",
              width: "100%",
              borderTop: "1px solid #e2e8f0",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#64748b",
              fontSize: "0.88rem",
            }}
          >
            <span>SiPhBioLabChip, Inc.</span>
            <button
              onClick={onStartTesting || (() => handleNavClick("/pricing"))}
              style={{
                background: "#2bbdb9",
                color: "#fff",
                border: "none",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Start Testing Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

const menuLinkStyle = {
  background: "none",
  border: "none",
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#0f172a",
  textAlign: "left",
  cursor: "pointer",
  padding: 0,
  transition: "color 0.2s",
  fontFamily: "Inter, system-ui, sans-serif",
};