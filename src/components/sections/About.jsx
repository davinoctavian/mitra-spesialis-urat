import { COLOR, FONT, shared } from "../../styles/theme";

const FEATURES = [
  "Pijat Terapi",
  "Tanpa Rasa Sakit",
  "Nyaman & Langsung Terasa Manfaatnya",
  "PROFESIONAL",
];

export default function About() {
  return (
    <section id="tentang" style={shared.section}>
      <div style={s.grid} className="about-grid">
        {/* Left — decorative image block */}
        <div data-id="aboutLeft">
          <div style={s.imgBox} className="about-img-box">
            <div style={s.imgInner}>
              <div style={s.pattern}>
                {Array(25)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} style={s.dot} />
                  ))}
              </div>
              <div style={s.imgMain}>
                <div style={s.bigIcon}>✦</div>
                <div style={s.imgText}>
                  Warisan
                  <br />
                  Leluhur
                </div>
              </div>
            </div>
            <div style={s.floatCard}>
              <div style={s.floatNum}>5</div>
              <div style={s.floatLabel}>Jenis Pijat</div>
            </div>
          </div>
        </div>

        {/* Right — text content */}
        <div data-id="aboutRight">
          <div style={shared.sectionLabel}>TENTANG KAMI</div>
          <h2 style={shared.sectionTitle}>
            Warisan Teknik Pijat
            <br />
            <em style={shared.titleItalic}>Urat & Saraf</em>
          </h2>
          <p style={s.text}>
            Mitra Spesialis Terapi Urat & Saraf hadir sebagai ruang pemulihan
            yang menggabungkan kearifan lokal dengan standar kenyamanan modern.
            Kami percaya bahwa penyembuhan sejati berasal dari keseimbangan
            tubuh, pikiran, dan jiwa.
          </p>
          <p style={s.text}>
            Tukang urut kami berpengalaman puluhan tahun dan terlatih secara
            khusus dalam teknik urut teknik yang tepat, aman, dan efektif.
          </p>
          <div style={s.features} className="about-features">
            {FEATURES.map((f) => (
              <div key={f} style={s.feature}>
                <span style={s.check}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const C = COLOR;
const s = {
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "center",
  },
  imgBox: { position: "relative", paddingBottom: "40px" },
  imgInner: {
    width: "100%",
    aspectRatio: "4/5",
    background: `linear-gradient(135deg, ${C.dark2} 0%, ${C.dark3} 100%)`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pattern: {
    position: "absolute",
    inset: 0,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    padding: "20px",
    gap: "20px",
  },
  dot: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: `${C.gold}30`,
    margin: "auto",
  },
  imgMain: { textAlign: "center", zIndex: 1 },
  bigIcon: {
    fontSize: "60px",
    color: C.gold,
    opacity: 0.6,
    marginBottom: "16px",
  },
  imgText: {
    fontSize: "28px",
    color: C.cream,
    lineHeight: 1.2,
    fontStyle: "italic",
    fontWeight: "300",
  },
  floatCard: {
    position: "absolute",
    bottom: "0",
    right: "20px",
    background: C.gold,
    padding: "20px 28px",
    textAlign: "center",
    boxShadow: "0 12px 40px rgba(200,150,62,0.3)",
  },
  floatNum: {
    fontSize: "36px",
    fontWeight: "700",
    color: C.white,
    lineHeight: 1,
  },
  floatLabel: {
    fontSize: "12px",
    color: `${C.white}CC`,
    letterSpacing: "1px",
    marginTop: "4px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.9",
    color: C.text,
    marginBottom: "20px",
    fontFamily: FONT.sans,
    fontWeight: "300",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "28px",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: C.text,
  },
  check: { color: C.gold, fontWeight: "700", fontSize: "16px" },
};
