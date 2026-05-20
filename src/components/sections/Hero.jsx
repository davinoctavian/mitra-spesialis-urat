import { BRAND } from "../../constants/data";
import { COLOR, FONT } from "../../styles/theme";

export default function Hero({ onScroll }) {
  return (
    <section id="beranda" style={s.hero} className="hero">
      {/* ── Left content ── */}
      <div style={s.content}>
        <div style={s.badge} data-id="heroBadge">
          <span style={s.badgeDot} />
          Spesialis Urat & Saraf Terpercaya Sejak {BRAND.since}
        </div>

        <h1 style={s.title}>
          <span style={s.line1}>Sentuhan</span>
          <span style={s.line2}>Tradisi,</span>
          <span style={s.line3}>Rasa Modern</span>
        </h1>

        <p style={s.subtitle}>
          Rasakan keajaiban Terapi Urat & Saraf dengan pendekatan holistik
          modern. Tubuh rileks, pikiran jernih, jiwa tenang.
        </p>

        <div style={s.btns} className="hero-btns">
          <button
            style={s.btnPrimary}
            className="hero-btn-primary"
            onClick={() => onScroll("layanan")}
          >
            Lihat Layanan
          </button>
          <button
            style={s.btnSecondary}
            className="hero-btn-secondary"
            onClick={() => onScroll("kontak")}
          >
            Reservasi →
          </button>
        </div>

        <div style={s.stats} className="hero-stats">
          {[
            ["500+", "Klien Puas"],
            ["20+", "Tahun Pengalaman"],
          ].map(([num, label]) => (
            <div key={label} style={s.stat}>
              <span style={s.statNum}>{num}</span>
              <span style={s.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — logo showcase card ── */}
      <div style={s.visual} className="hero-visual">
        <div style={s.card}>
          {/* Glow ring behind logo */}
          <div style={s.glowRing} />
          <div style={s.glowRing2} />

          {/* Logo image — large */}
          <div style={s.logoCircle}>
            <img src={BRAND.logo} alt="Mitra Urat" style={s.logoImg} />
          </div>

          <div style={s.cardDivider} />
          <div style={s.cardItems}>
            {[
              "Urat Terkilir/Keseleo",
              "Sakit Pinggang",
              "Saraf Kejepit",
              "Leher Kaku",
              "Kaki & Tangan Bengkak",
              "Peredaran Darah Tidak Lancar",
            ].map((item) => (
              <div key={item} style={s.cardItem}>
                <span style={s.cardDot}>◆</span> {item}
              </div>
            ))}
          </div>
          <div style={s.cardBottom}>Buka 09.00 – 19.00 WIB</div>
        </div>

        {/* Floating badges */}
        <div style={s.floatBadge1}>100% Alami</div>
        <div style={s.floatBadge2}>★ 4.9 Rating</div>
      </div>
    </section>
  );
}

const C = COLOR;
const s = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "120px 40px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "60px",
    position: "relative",
    zIndex: 1,
    flexWrap: "wrap",
  },
  content: { flex: "1 1 500px" },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: `${C.gold}15`,
    border: `1px solid ${C.gold}40`,
    padding: "8px 16px",
    fontSize: "12px",
    letterSpacing: "1px",
    color: C.gold,
    marginBottom: "24px",
    textTransform: "uppercase",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: C.gold,
    animation: "pulse 2s infinite",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    fontSize: "clamp(48px, 7vw, 80px)",
    lineHeight: 1.05,
    margin: "0 0 24px",
    fontFamily: FONT.serif,
  },
  line1: { color: C.textLight, fontWeight: "300", fontStyle: "italic" },
  line2: { color: C.dark, fontWeight: "700" },
  line3: {
    color: C.gold,
    fontWeight: "400",
    fontStyle: "italic",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: C.textLight,
    maxWidth: "480px",
    marginBottom: "36px",
    fontFamily: FONT.sans,
    fontWeight: "300",
  },
  btns: {
    display: "flex",
    gap: "16px",
    marginBottom: "48px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: C.dark,
    color: C.cream,
    border: "none",
    cursor: "pointer",
    padding: "16px 36px",
    fontSize: "13px",
    letterSpacing: "2px",
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    transition: "all 0.3s",
  },
  btnSecondary: {
    background: "transparent",
    color: C.gold,
    border: `1.5px solid ${C.gold}`,
    cursor: "pointer",
    padding: "15px 32px",
    fontSize: "14px",
    letterSpacing: "1px",
    fontFamily: FONT.serif,
    transition: "all 0.3s",
  },
  stats: { display: "flex", gap: "40px" },
  stat: { display: "flex", flexDirection: "column" },
  statNum: {
    fontSize: "32px",
    fontWeight: "700",
    color: C.dark,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "12px",
    color: C.textLight,
    letterSpacing: "1px",
    marginTop: "4px",
  },

  // Visual card
  visual: {
    flex: "1 1 340px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "340px",
    background: `linear-gradient(160deg, ${C.dark2} 0%, #0D0A04 100%)`,
    border: `1px solid ${C.gold}30`,
    boxShadow: `0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 ${C.gold}20`,
    padding: "40px 32px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  glowRing: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${C.gold}20 0%, transparent 70%)`,
    pointerEvents: "none",
  },
  glowRing2: {
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    border: `1px solid ${C.gold}15`,
    pointerEvents: "none",
  },

  // Logo in card
  logoCircle: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    overflow: "hidden",
    border: `2px solid ${C.gold}50`,
    boxShadow: `0 0 40px ${C.gold}30, 0 0 80px ${C.gold}15`,
    background: "#000",
    marginBottom: "28px",
    position: "relative",
    zIndex: 1,
    flexShrink: 0,
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 5%",
  },

  cardDivider: {
    width: "60px",
    height: "1px",
    background: `${C.gold}50`,
    marginBottom: "20px",
  },
  cardItems: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    marginBottom: "20px",
  },
  cardItem: {
    fontSize: "14px",
    color: `${C.cream}CC`,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  cardDot: { color: C.gold, fontSize: "8px" },
  cardBottom: {
    fontSize: "11px",
    color: `${C.cream}60`,
    letterSpacing: "1px",
    textAlign: "center",
    borderTop: `1px solid ${C.gold}20`,
    paddingTop: "16px",
    width: "100%",
  },

  // Floating badges
  floatBadge1: {
    position: "absolute",
    top: "16px",
    right: "-16px",
    background: C.gold,
    color: C.white,
    padding: "10px 16px",
    fontSize: "12px",
    letterSpacing: "1px",
    fontWeight: "600",
    boxShadow: `0 8px 24px ${C.gold}50`,
    fontFamily: FONT.serif,
  },
  floatBadge2: {
    position: "absolute",
    bottom: "24px",
    left: "-16px",
    background: C.dark,
    color: C.gold,
    padding: "10px 16px",
    fontSize: "13px",
    letterSpacing: "1px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    border: `1px solid ${C.gold}40`,
    fontFamily: FONT.serif,
  },
};
