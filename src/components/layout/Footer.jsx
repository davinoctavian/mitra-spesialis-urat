import { NAV_LINKS, BRAND } from "../../constants/data";
import { COLOR, FONT } from "../../styles/theme";

export default function Footer({ onSectionScroll }) {
  return (
    <footer style={s.footer}>
      <div style={s.inner} className="footer-inner">
        {/* Logo + brand */}
        <div style={s.logoRow}>
          <div style={s.logoImgBox}>
            <img src={BRAND.logo} alt="Mitra Urat Logo" style={s.logoImg} />
          </div>
          <div style={s.logoText}>
            <div style={s.brandName}>MITRA URAT</div>
            <div style={s.brandSub}>Spesialis Urat & Saraf</div>
          </div>
        </div>

        <p style={s.tagline}>
          Sentuhan yang menyembuhkan, tradisi yang menginspirasi.
        </p>

        {/* Nav links */}
        <div style={s.links} className="footer-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              style={s.link}
              onClick={() => onSectionScroll(link.toLowerCase())}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Contact row */}
        <div style={s.contactRow}>
          <span style={s.contactItem}>📍 {BRAND.address}</span>
          <span style={s.separator}>·</span>
          <span style={s.contactItem}>📞 {BRAND.phone}</span>
          <span style={s.separator}>·</span>
          <span style={s.contactItem}>
            📱 <span dangerouslySetInnerHTML={{ __html: BRAND.instagram }} />,{" "}
            <span dangerouslySetInnerHTML={{ __html: BRAND.facebook }} />
          </span>
        </div>

        <div style={s.divider} />

        <p style={s.copy}>
          © {new Date().getFullYear()} Mitra Urat — Spesialis Urat & Saraf.
          Dibuat dengan ♡ di Cikarang.
        </p>
      </div>
    </footer>
  );
}

const C = COLOR;
const s = {
  footer: {
    background: C.dark,
    borderTop: `1px solid ${C.gold}25`,
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "64px 40px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  },
  logoImgBox: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    border: `2px solid ${C.gold}50`,
    boxShadow: `0 0 24px ${C.gold}25`,
    background: "#000",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 10%",
  },
  logoText: { textAlign: "left" },
  brandName: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "4px",
    color: C.gold,
    fontFamily: FONT.serif,
    lineHeight: 1.1,
  },
  brandSub: {
    fontSize: "10px",
    letterSpacing: "2.5px",
    color: `${C.cream}70`,
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    marginTop: "3px",
  },
  tagline: {
    fontSize: "14px",
    color: `${C.cream}55`,
    fontStyle: "italic",
    marginBottom: "32px",
    textAlign: "center",
    fontFamily: FONT.serif,
  },
  links: {
    display: "flex",
    gap: "4px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "28px",
  },
  link: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "11px",
    color: `${C.cream}55`,
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: FONT.serif,
    padding: "6px 12px",
    transition: "color 0.2s",
  },
  contactRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "28px",
    alignItems: "center",
  },
  contactItem: {
    fontSize: "12px",
    color: `${C.cream}55`,
    fontFamily: FONT.sans,
  },
  separator: {
    color: `${C.gold}40`,
    fontSize: "16px",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: `${C.gold}20`,
    marginBottom: "24px",
  },
  copy: {
    fontSize: "11px",
    color: `${C.cream}35`,
    letterSpacing: "1px",
    textAlign: "center",
    fontFamily: FONT.sans,
  },
};
