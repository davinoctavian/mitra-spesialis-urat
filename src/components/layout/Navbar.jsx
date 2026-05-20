import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, BRAND } from "../../constants/data";
import { COLOR, FONT } from "../../styles/theme";

export default function Navbar({ onSectionScroll }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Beranda");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setActiveNav(link);
    setMenuOpen(false);
    if (location.pathname === "/") onSectionScroll(link.toLowerCase());
  };

  return (
    <nav style={{ ...s.nav, ...(scrolled ? s.navScrolled : {}) }}>
      <div style={s.navInner}>
        {/* ── Logo ── */}
        <Link to="/" style={s.logoWrap} onClick={() => setActiveNav("Beranda")}>
          <div style={s.logoImgBox}>
            <img src={BRAND.logo} alt="Mitra Urat Logo" style={s.logoImg} />
          </div>
          <div style={s.logoText}>
            <span style={s.brandName}>MITRA URAT</span>
            <span style={s.brandSub}>Spesialis URAT & SARAF</span>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <div style={s.navLinks} className="nav-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              style={{
                ...s.navLink,
                ...(activeNav === link ? s.navLinkActive : {}),
              }}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          ))}
          <button style={s.navCta} onClick={() => handleNavClick("Kontak")}>
            Booking Sekarang
          </button>
        </div>

        {/* ── Hamburger ── */}
        <button
          style={s.hamburger}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ ...s.hLine, ...(menuOpen ? s.hLine1Open : {}) }} />
          <span style={{ ...s.hLine, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...s.hLine, ...(menuOpen ? s.hLine3Open : {}) }} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div style={s.mobileMenu}>
          {/* mini logo row inside mobile menu */}
          <div style={s.mobileLogo}>
            <img src={BRAND.logo} alt="Mitra Urat" style={s.mobileLogoImg} />
            <span style={s.mobileBrandName}>MITRA URAT</span>
          </div>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              style={s.mobileNavLink}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          ))}
          <button style={s.mobileCta} onClick={() => handleNavClick("Kontak")}>
            Booking Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}

const C = COLOR;
const s = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "12px 40px",
    transition: "all 0.4s ease",
    background: "transparent",
  },
  navScrolled: {
    background: `rgba(26,18,8,0.92)`,
    backdropFilter: "blur(20px)",
    boxShadow: `0 2px 40px rgba(0,0,0,0.4)`,
    padding: "8px 40px",
    borderBottom: `1px solid ${C.gold}40`,
  },
  navInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Logo
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    cursor: "pointer",
  },
  logoImgBox: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    border: `2px solid ${C.gold}60`,
    boxShadow: `0 0 16px ${C.gold}30`,
    background: "#000",
    transition: "box-shadow 0.3s",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 10%",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
  },
  brandName: {
    fontSize: "17px",
    fontWeight: "700",
    letterSpacing: "3px",
    color: C.gold,
    fontFamily: FONT.serif,
    lineHeight: 1.1,
  },
  brandSub: {
    fontSize: "9px",
    letterSpacing: "2px",
    color: `${C.cream}80`,
    fontFamily: FONT.serif,
    marginTop: "2px",
    textTransform: "uppercase",
  },

  // Nav links
  navLinks: { display: "flex", alignItems: "center", gap: "4px" },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    letterSpacing: "1.5px",
    color: `${C.textLight}`,
    padding: "8px 12px",
    fontFamily: FONT.serif,
    transition: "color 0.2s",
    textTransform: "uppercase",
  },
  navLinkActive: { color: C.gold },
  navCta: {
    background: C.gold,
    color: C.white,
    border: "none",
    cursor: "pointer",
    padding: "10px 22px",
    fontSize: "11px",
    letterSpacing: "1.5px",
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    transition: "background 0.2s",
    marginLeft: "8px",
  },

  // Hamburger
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
  },
  hLine: {
    display: "block",
    width: "24px",
    height: "2px",
    background: C.gold,
    transition: "all 0.3s",
  },
  hLine1Open: { transform: "rotate(45deg) translate(5px, 5px)" },
  hLine3Open: { transform: "rotate(-45deg) translate(5px, -5px)" },

  // Mobile menu
  mobileMenu: {
    background: "rgba(26,18,8,0.97)",
    backdropFilter: "blur(20px)",
    padding: "20px 24px 24px",
    borderTop: `1px solid ${C.gold}30`,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  mobileLogo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 0 16px",
    borderBottom: `1px solid ${C.gold}20`,
    marginBottom: "8px",
  },
  mobileLogoImg: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 10%",
    border: `1.5px solid ${C.gold}60`,
  },
  mobileBrandName: {
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "3px",
    color: C.gold,
    fontFamily: FONT.serif,
  },
  mobileNavLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "2px",
    color: `${C.cream}CC`,
    padding: "12px 0",
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    textAlign: "left",
    borderBottom: `1px solid ${C.gold}15`,
  },
  mobileCta: {
    background: C.gold,
    color: C.white,
    border: "none",
    cursor: "pointer",
    padding: "13px",
    fontSize: "12px",
    letterSpacing: "2px",
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    marginTop: "12px",
    width: "100%",
  },
};
