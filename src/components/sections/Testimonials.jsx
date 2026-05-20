import { TESTIMONIALS } from "../../constants/data";
import { COLOR, FONT, shared } from "../../styles/theme";

export default function Testimonials({ visible }) {
  return (
    <section id="testimoni" style={shared.section}>
      <div style={shared.sectionHeader} data-id="testiHeader">
        <div style={shared.sectionLabel}>TESTIMONI</div>
        <h2 style={shared.sectionTitle}>
          Kata Mereka
          <br />
          <em style={shared.titleItalic}>Tentang Kami</em>
        </h2>
      </div>

      <div style={s.grid} className="testi-grid">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            data-id={`testi${i}`}
            className="testi-card"
            style={{
              ...s.card,
              transitionDelay: `${i * 120}ms`,
              opacity: visible[`testi${i}`] ? 1 : 0,
              transform: visible[`testi${i}`]
                ? "translateY(0)"
                : "translateY(25px)",
            }}
          >
            <div style={s.stars}>{"★".repeat(t.rating)}</div>
            <p style={s.text}>"{t.text}"</p>
            <div style={s.author}>
              <div style={s.avatar}>{t.initial}</div>
              <div>
                <div style={s.name}>{t.name}</div>
                <div style={s.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const C = COLOR;
const s = {
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },
  card: {
    background: C.white,
    padding: "36px 28px",
    border: `1px solid ${C.gold}20`,
    transition: "all 0.5s ease",
    boxShadow: "0 4px 20px rgba(26,18,8,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  stars: { fontSize: "18px", color: C.gold, marginBottom: "16px" },
  text: {
    fontSize: "14px",
    lineHeight: "1.8",
    color: C.text,
    marginBottom: "24px",
    fontStyle: "italic",
    fontFamily: FONT.serif,
  },
  author: { display: "flex", alignItems: "center", gap: "14px" },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${C.dark2}, ${C.dark3})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: C.gold,
    fontWeight: "600",
    flexShrink: 0,
  },
  name: { fontSize: "15px", fontWeight: "600", color: C.dark },
  role: { fontSize: "12px", color: C.textLight, letterSpacing: "1px" },
};
