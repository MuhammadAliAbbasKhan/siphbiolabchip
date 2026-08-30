// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("burger-menu-open");
    } else {
      document.body.classList.remove("burger-menu-open");
    }
    return () => document.body.classList.remove("burger-menu-open");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/science", label: "Science & Technology" },
    { to: "/company", label: "Company & SiPhBio Platform" },
    { to: "/use-cases", label: "Use Cases & Solutions" },
    { to: "/assays", label: "Assays & Panels Catalog" },
    { to: "/paid-services", label: "Paid Biochip Services" },
    { to: "/pricing", label: "Pricing & Subscriptions" },
    { to: "/news", label: "News & Blog" },
    { to: "/publications", label: "Publications & Whitepapers" },
    { to: "/volunteer", label: "Events & Webinars" },
    { to: "/contact-us", label: "Get SiPhBioLabChip" },
    { to: "/admin", label: "Executive Admin Portal" },
    { to: "/faq", label: "FAQ" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
  ];

  const getPageHeading = () => {
    switch (location.pathname) {
      case "/": return "Home";
      case "/science": return "Science & Technology";
      case "/company": return "Company & Leadership";
      case "/use-cases": return "Use Cases & Solutions";
      case "/assays": return "Assays Catalog";
      case "/paid-services": return "Biochip Services";
      case "/pricing": return "Pricing & Subscriptions";
      case "/news": return "News & Insights";
      case "/publications": return "Publications & Whitepapers";
      case "/volunteer": return "Events & Webinars";
      case "/contact-us": return "Contact Us";
      case "/admin": return "Executive Portal";
      case "/faq": return "FAQ";
      case "/privacy": return "Privacy Policy";
      case "/terms": return "Terms of Service";
      default: return "";
    }
  };

  const currentHeading = getPageHeading();

  return (
    <header
      className={`nav-bar w-nav ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "burger-menu-open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled || isMenuOpen ? "#f1f5f9" : "transparent",
        borderBottom: isScrolled || isMenuOpen ? "1px solid #e9eaf0" : "none",
        transform: "translateY(0px)",
        opacity: 1,
      }}
    >
      <div className="container" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
        <div
          className="nav-bar-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--app-header-height, 75px)",
          }}
        >
          {/* Menu Button (Mobile & Desktop Overlay Trigger) */}
          <div
            className="button-base is-menu burger-menu unselectable"
            onClick={toggleMenu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              padding: "0.5rem 0.8rem",
              borderRadius: "100px",
              background: isScrolled || isMenuOpen ? "transparent" : "rgba(255,255,255,0.1)",
              backdropFilter: isScrolled || isMenuOpen ? "none" : "blur(10px)",
              border: isScrolled || isMenuOpen ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(255,255,255,0.2)",
              color: isScrolled || isMenuOpen ? "#000" : "#fff",
              transition: "all 0.3s ease",
              zIndex: 10001,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "20px" }}>
              <div
                className="burger-line line-1"
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: isScrolled || isMenuOpen ? "#000" : "#fff",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                }}
              />
              <div
                className="burger-line line-3"
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: isScrolled || isMenuOpen ? "#000" : "#fff",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                }}
              />
            </div>
            <span style={{ fontSize: "var(--font-size--medium)", fontWeight: "500" }}>
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </div>

          {/* Fullscreen Whole-Screen Menu Overlay */}
          <div
            className="fullscreen-wrapper"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(241, 245, 249, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 9999,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              overflowY: "auto",
              paddingTop: "clamp(110px, 14vh, 150px)",
            }}
          >
            <div className="fullscreen-menu-wrapper">
              <div className="container mega-menu" style={{ padding: "0 clamp(1.25rem, -0.061rem + 5.594vw, 8.75rem)" }}>
                <div className="fullscreen-menu-container" style={{ padding: "1.5rem 0 3rem 0" }}>
                  <div className="div-block-8">
                    <div className="fullscreen-menu-top">
                      <div
                        className="navbar-menu-wrapper"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "var(--spacing--x-small)",
                        }}
                      >
                        {navLinks.map((link) => (
                          <div key={link.to} className="mega-link-item">
                            <Link
                              to={link.to}
                              className={`nav-link ${location.pathname === link.to ? "w--current" : ""}`}
                              onClick={closeMenu}
                              style={{
                                fontSize: "var(--font-size--heading-3)",
                                fontWeight: "400",
                                color: "#000",
                                textDecoration: "none",
                                padding: "var(--spacing--x-tiny) 0",
                                display: "inline-block",
                                transition: "color 0.2s ease",
                                cursor: "pointer",
                              }}
                              onMouseEnter={(e) => (e.target.style.color = "#3661D6")}
                              onMouseLeave={(e) => (e.target.style.color = "#000")}
                            >
                              {link.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      id="w-node-_6c91adb3-551c-6b7b-61d5-56023040ea81-3040ea75"
                      className="fullscreen-right"
                      style={{
                        marginTop: "var(--spacing--large)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--spacing--small)",
                      }}
                    >
                      <div style={{ fontSize: "var(--font-size--base)", color: "#4b5563" }}>
                        6620 Mesa Ridge Road<br />San Diego, CA 92121<br />United States
                      </div>
                      <a
                        href="mailto:info@SiPhBioLabChip.com?subject=Inquiry%20from%20website"
                        style={{ fontSize: "var(--font-size--base)", color: "#000", textDecoration: "none" }}
                      >
                        info@SiPhBioLabChip.com
                      </a>
                      <div className="w-layout-vflex flex-block-3" style={{ display: "flex", gap: "var(--spacing--x-small)", marginTop: "var(--spacing--x-small)" }}>
                        <a
                          href="https://x.com/SiPhBioLabChip/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-menu-footer-link"
                          style={{ fontSize: "var(--font-size--base)", color: "#000", textDecoration: "none" }}
                        >
                          X
                        </a>
                        <a
                          href="https://www.linkedin.com/company/SiPhBioLabChip-inc/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-menu-footer-link"
                          style={{ fontSize: "var(--font-size--base)", color: "#000", textDecoration: "none" }}
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://www.facebook.com/SiPhBioLabChip/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-menu-footer-link"
                          style={{ fontSize: "var(--font-size--base)", color: "#000", textDecoration: "none" }}
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo & Dynamic Page Heading */}
          <Link
            to="/"
            className="nav-logo-link w-nav-brand"
            aria-label="home"
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
          >
            <div className="top-nav-logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0444 0.00970405C24.4424 0.164778 24.7332 0.548658 25.0295 0.846367C25.1587 0.975713 25.2898 1.10309 25.421 1.23045C25.5023 1.31155 25.5836 1.39265 25.6674 1.47621C25.7424 1.55055 25.8173 1.62488 25.8946 1.70147C26.0472 1.90778 26.0472 1.90778 26.0299 2.07635C25.9481 2.2874 25.8523 2.39668 25.6922 2.55631C25.6347 2.61429 25.5772 2.67226 25.518 2.732C25.4542 2.79497 25.3904 2.85795 25.3246 2.92283C25.2237 3.02402 25.2237 3.02402 25.1207 3.12726C24.8941 3.35414 24.6665 3.58007 24.4389 3.80602C24.2766 3.96811 24.1143 4.13026 23.9521 4.29247C23.6022 4.64224 23.2518 4.99152 22.9011 5.3405C22.3933 5.84577 21.8863 6.35181 21.3795 6.85804C20.5562 7.68027 19.7325 8.50195 18.9083 9.32325C18.1093 10.1195 17.3104 10.9159 16.5118 11.7126C16.4627 11.7616 16.4136 11.8106 16.363 11.8611C15.8262 12.3966 15.2895 12.9321 14.7529 13.4677C14.7057 13.5148 14.6584 13.562 14.6098 13.6105C14.4209 13.7991 14.232 13.9876 14.0432 14.1761C13.4911 14.7272 12.9388 15.2781 12.3862 15.8287C12.0391 16.1745 11.6922 16.5204 11.3454 16.8664C11.1455 17.0658 10.9456 17.2651 10.7454 17.4643C10.528 17.6807 10.3108 17.8974 10.0937 18.1142C10.0311 18.1764 9.96842 18.2386 9.9039 18.3027C6.05365 22.1537 3.87746 27.3308 3.86552 32.7769C3.88069 38.2542 6.07126 43.3282 9.87693 47.2358C10.2265 47.5766 10.5979 47.8858 10.9792 48.1903C11.1365 48.3164 11.292 48.4448 11.4452 48.5759C14.2961 51.0035 18.0022 52.3788 21.6872 52.833C21.7825 52.8454 21.7825 52.8454 21.8798 52.8579C26.9684 53.4482 32.3393 51.8988 36.3587 48.7346C36.4975 48.6192 36.6355 48.5029 36.7729 48.3858C36.8716 48.3032 36.9702 48.2207 37.0689 48.1381C37.9104 47.4303 38.6799 46.701 39.3678 45.8392C39.4939 45.6819 39.6223 45.5264 39.7534 45.3733C43.1342 41.403 44.3739 36.095 44.0801 30.988C43.7903 27.4434 42.4643 24.0164 40.4408 21.1083C40.4034 21.0542 40.366 21.0001 40.3274 20.9444C39.5248 19.8227 38.5587 18.8422 37.5795 17.8764C37.4666 17.7644 37.3537 17.6523 37.2409 17.5402C36.9691 17.2703 36.6968 17.0009 36.4241 16.7319C36.1515 16.853 35.9664 16.9935 35.7561 17.204C35.6941 17.2656 35.6321 17.3272 35.5683 17.3906C35.5012 17.4582 35.4341 17.5258 35.365 17.5954C35.2936 17.6666 35.2223 17.7378 35.1487 17.8112C34.9125 18.0471 34.6769 18.2836 34.4413 18.5202C34.2771 18.6845 34.1129 18.8488 33.9487 19.013C33.604 19.3577 33.2598 19.7027 32.9157 20.0479C32.5194 20.4457 32.1226 20.8429 31.7255 21.24C31.3424 21.623 30.9595 22.0063 30.5768 22.3898C30.4145 22.5523 30.2522 22.7148 30.0898 22.8773C29.8621 23.1051 29.6347 23.3333 29.4074 23.5615C29.3408 23.6281 29.2743 23.6946 29.2057 23.7631C28.8568 24.1141 28.5247 24.4734 28.2016 24.848C27.9534 25.1283 27.6875 25.3899 27.4207 25.6524C27.3608 25.7118 27.3009 25.7712 27.2392 25.8324C27.1103 25.96 26.9814 26.0876 26.8524 26.215C26.6479 26.4172 26.4438 26.6197 26.2398 26.8223C25.6604 27.3981 25.0807 27.9736 24.4995 28.5477C24.143 28.9 23.7874 29.2532 23.4322 29.6069C23.2973 29.741 23.162 29.8748 23.0264 30.0082C22.8367 30.1949 22.6482 30.3827 22.4598 30.5708C22.4041 30.6251 22.3485 30.6794 22.2911 30.7353C21.7153 31.315 21.4154 31.9206 21.3983 32.7442C21.4024 33.304 21.4889 33.694 21.7744 34.1721C21.8265 34.2656 21.8787 34.3591 21.9324 34.4555C22.3905 35.0313 23.006 35.334 23.7347 35.4177C24.7059 35.4524 25.4653 35.0524 26.1769 34.4133C26.4025 34.1944 26.6234 33.9718 26.8429 33.747C26.9174 33.672 26.992 33.597 27.0688 33.5198C27.3805 33.2042 27.6852 32.8871 27.9739 32.5503C28.3313 32.1412 28.7114 31.7579 29.0962 31.3748C29.1719 31.299 29.2477 31.2232 29.3258 31.1451C29.5315 30.9395 29.7375 30.734 29.9435 30.5286C30.1595 30.3131 30.3753 30.0973 30.5911 29.8816C30.9989 29.4741 31.4069 29.0668 31.815 28.6597C32.2799 28.1957 32.7446 27.7314 33.2093 27.2672C34.1644 26.313 35.1197 25.3592 36.0753 24.4056C36.4755 24.5774 36.6287 24.8619 36.8383 25.2285C36.8763 25.2944 36.9142 25.3603 36.9534 25.4282C38.9457 28.9719 39.3384 33.1525 38.2553 37.0497C37.6577 39.0226 36.6583 40.9103 35.2905 42.4561C35.2151 42.5421 35.1396 42.6281 35.0619 42.7167C32.6135 45.4707 29.0673 47.3887 25.3478 47.6115C24.907 47.6294 24.4664 47.6305 24.0252 47.6282C23.9581 47.628 23.8909 47.6279 23.8218 47.6277C22.7995 47.6231 21.8123 47.5834 20.8152 47.3394C20.7441 47.3225 20.6731 47.3057 20.5999 47.2883C16.6138 46.3158 13.3356 43.8462 11.1815 40.3684C9.14239 36.9585 8.65953 32.8484 9.61422 29.02C10.1878 26.8274 11.2237 24.7606 12.7462 23.0718C12.8389 22.9687 12.9306 22.8648 13.0216 22.7603C13.7226 21.9635 14.4799 21.221 15.2291 20.4699C15.3876 20.3107 15.5461 20.1515 15.7046 19.9923C16.1775 19.5173 16.6507 19.0428 17.1241 18.5683C17.2578 18.4342 17.3916 18.3001 17.5253 18.166C18.357 17.3321 19.1889 16.4983 20.0212 15.6649C20.2132 15.4727 20.4052 15.2804 20.5971 15.0882C20.6449 15.0404 20.6926 14.9926 20.7417 14.9434C21.5172 14.1668 22.2918 13.3893 23.066 12.6115C23.8618 11.812 24.6585 11.0133 25.4559 10.2154C25.9033 9.76775 26.3503 9.31971 26.7963 8.87075C27.215 8.44941 27.6348 8.02917 28.0553 7.60969C28.2098 7.45521 28.3639 7.30036 28.5176 7.14512C28.7267 6.9341 28.937 6.72445 29.1477 6.5151C29.209 6.45267 29.2702 6.39025 29.3333 6.32593C29.3897 6.27044 29.4461 6.21496 29.5042 6.1578C29.5769 6.08495 29.5769 6.08495 29.651 6.01063C29.7968 5.91902 29.7968 5.91902 29.9735 5.93368C30.2728 6.05981 30.4794 6.30535 30.7039 6.53336C30.7591 6.58839 30.8143 6.64342 30.8712 6.70011C31.0538 6.8825 31.2355 7.06582 31.4172 7.24917C31.5442 7.37646 31.6713 7.5037 31.7984 7.63089C32.0651 7.89799 32.3314 8.16552 32.5973 8.43339C32.9369 8.77536 32.771 9.11658 33.6177 9.45752C33.9436 9.78389 34.2691 10.1107 34.5946 10.4374C34.6562 10.4992 34.7177 10.5609 34.7812 10.6245C34.9573 10.8012 35.1331 10.9782 35.3088 11.1553C35.3599 11.2065 35.411 11.2577 35.4636 11.3104C35.7773 11.6273 36.0727 11.9558 36.3645 12.2929C36.5752 12.5314 36.7979 12.7559 37.0244 12.9793C37.0717 13.0264 37.119 13.0734 37.1678 13.1219C37.2692 13.2227 37.3707 13.3234 37.4724 13.424C37.634 13.5842 37.7954 13.7446 37.9567 13.9052C38.4148 14.3612 38.8734 14.8167 39.3325 15.2719C39.6146 15.5516 39.8962 15.8318 40.1776 16.1122C40.2839 16.218 40.3903 16.3235 40.4969 16.4289C41.129 17.0538 41.7201 17.686 42.2666 18.3887C42.313 18.4481 42.3594 18.5075 42.4072 18.5687C44.5972 21.3942 46.0714 24.7301 46.7846 28.2261C46.8016 28.3091 46.8186 28.3922 46.8362 28.4777C47.1085 29.8961 47.1827 31.3026 47.1771 32.7442C47.1768 32.8705 47.1768 32.8705 47.1766 32.9994C47.1725 34.279 47.1241 35.5274 46.8882 36.7881C46.8746 36.8663 46.8611 36.9445 46.8471 37.025C46.486 39.0697 45.8044 41.1192 44.8826 42.9793C44.8512 43.044 44.8198 43.1087 44.7875 43.1753C43.8331 45.1276 42.5806 46.9117 41.0948 48.4948C40.8935 48.7108 40.6993 48.931 40.5062 49.1542C40.2419 49.4529 39.9636 49.717 39.6587 49.9738C39.5343 50.0801 39.4126 50.1898 39.2936 50.3022C36.1226 53.2885 31.7118 55.1668 27.4424 55.7978C27.338 55.8133 27.2336 55.8288 27.126 55.8447C26.0947 55.9867 25.0706 56.0035 24.0307 55.9995C23.9441 55.9993 23.8574 55.9992 23.7682 55.999C22.5051 55.9951 21.2726 55.9582 20.0304 55.7106C19.949 55.6952 19.8677 55.6798 19.7839 55.6639C16.6784 55.0672 13.5278 53.9338 10.9615 52.0482C10.8315 51.9558 10.7015 51.8635 10.5715 51.7713C9.81249 51.2277 9.09318 50.6669 8.42006 50.0198C8.18968 49.7988 7.9535 49.5878 7.71326 49.3777C7.27938 48.9879 6.89408 48.5662 6.51425 48.1242C6.44725 48.0474 6.38026 47.9706 6.31123 47.8915C3.04486 44.072 0.85376 38.9594 0.828485 33.8904C0.827873 33.808 0.82726 33.7256 0.82663 33.6406C0.825112 33.3763 0.824551 33.112 0.824397 32.8477C0.824338 32.7575 0.824279 32.6672 0.824219 32.5743C0.825559 31.2833 0.857599 30.0357 1.1078 28.7656C1.12137 28.689 1.13495 28.6125 1.14893 28.5336C1.52596 26.4121 2.24443 24.3286 3.20062 22.4C3.23055 22.3382 3.26047 22.2765 3.29131 22.2129C4.15376 20.4446 5.30433 18.7849 6.63994 17.3413C6.68462 17.293 6.7293 17.2446 6.77534 17.1948C7.32113 16.6089 7.8906 16.0468 8.45991 15.4839C8.67239 15.2737 8.88455 15.0633 9.09655 14.8527C9.14352 14.8064 9.1905 14.7602 9.23889 14.7125C9.48283 14.4701 9.71508 14.2221 9.93926 13.9612C10.2318 13.6256 10.5368 13.3066 10.8514 12.9918C10.9351 12.9075 10.9351 12.9075 11.0205 12.8214C11.2056 12.6352 11.391 12.4493 11.5764 12.2634C11.7099 12.1291 11.8435 11.9948 11.977 11.8606C12.4133 11.422 12.8501 10.9838 13.287 10.5458C13.4375 10.3947 13.5881 10.2437 13.7387 10.0926C14.3646 9.46484 14.9906 8.83722 15.6169 8.20992C16.5142 7.31118 17.4108 6.4117 18.3063 5.5112C18.9366 4.87755 19.5677 4.24473 20.1995 3.61253C20.5767 3.23493 20.9537 2.85696 21.3297 2.47811C21.6827 2.1225 22.0367 1.76794 22.3915 1.41416C22.5218 1.28387 22.6517 1.1532 22.7813 1.02215C22.9575 0.843953 23.135 0.66714 23.3129 0.490622C23.3644 0.437914 23.4159 0.385206 23.469 0.330901C23.8225 -0.0157645 23.8225 -0.0157645 24.0444 0.00970405Z" fill="currentColor" style={{ color: isScrolled || isMenuOpen ? "#000" : "#fff", transition: "color 0.3s ease" }}/>
              </svg>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "var(--font-size--heading-4)",
                    fontWeight: "600",
                    color: isScrolled || isMenuOpen ? "#000" : "#fff",
                    transition: "color 0.3s ease",
                    letterSpacing: "-0.02em",
                  }}
                >
                  SiPhBioLabChip
                </span>
                {!isMenuOpen && currentHeading && currentHeading !== "Home" && (
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "500",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      backgroundColor: isScrolled || isMenuOpen ? "rgba(54, 97, 214, 0.12)" : "rgba(255, 255, 255, 0.2)",
                      color: isScrolled || isMenuOpen ? "#3661D6" : "#ffffff",
                      border: isScrolled || isMenuOpen ? "1px solid rgba(54, 97, 214, 0.3)" : "1px solid rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(4px)",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {currentHeading}
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* Right Side - Get SiPhBioLabChip Button */}
          <div className="nav-bar-right" style={{ display: "flex", alignItems: "center" }}>
            <div className="nav-button-wrapper">
              <Link to="/contact-us" className="w-inline-block" style={{ textDecoration: "none" }}>
                <div
                  className="button-base is-primary"
                  style={{
                    backgroundColor: isScrolled || isMenuOpen ? "#000" : "rgba(255,255,255,0.15)",
                    color: isScrolled || isMenuOpen ? "#fff" : "#fff",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "100px",
                    display: "inline-block",
                    fontWeight: "500",
                    fontSize: "var(--font-size--medium)",
                    cursor: "pointer",
                    border: isScrolled || isMenuOpen ? "none" : "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: isScrolled || isMenuOpen ? "none" : "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (isScrolled || isMenuOpen) {
                      e.target.style.backgroundColor = "#1a1a2e";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isScrolled || isMenuOpen) {
                      e.target.style.backgroundColor = "#000";
                    }
                  }}
                >
                  Get SiPhBioLabChip
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}