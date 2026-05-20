import { SERVICES } from "../../constants/data";
import { COLOR, FONT, shared } from "../../styles/theme";

export default function Services({ visible, onBook }) {
  return (
    <section id="layanan" style={{ ...shared.section, ...shared.sectionDark }}>
      {/* Header */}
      <div style={shared.sectionHeader} data-id="servHeader">
        <div style={shared.sectionLabel}>LAYANAN KAMI</div>
        <h2 style={shared.sectionTitleLight}>
          Pilih Terapi Urat & Saraf
          <br />
          <em style={shared.titleItalicLight}>Terbaik Untukmu</em>
        </h2>
        <p style={s.desc}>
          Setiap layanan dirancang khusus untuk kebutuhan pemulihan dan
          peremajaan tubuhmu
        </p>
      </div>

      {/* Grid */}
      <div style={s.grid} className="services-grid">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            visible={visible[`serv${service.id}`]}
            onBook={onBook}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index, visible, onBook }) {
  return (
    <div
      data-id={`serv${service.id}`}
      className="service-card"
      style={{
        ...s.card,
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div style={s.icon}>{service.icon}</div>
      <h3 style={s.name}>{service.name}</h3>
      <p style={s.cardDesc}>{service.desc}</p>
      <button
        style={s.btn}
        className="service-btn"
        onClick={() => onBook(service.name)}
      >
        Pilih Layanan →
      </button>
    </div>
  );
}

const C = COLOR;
const s = {
  desc: {
    fontSize: "15px",
    color: `${C.cream}90`,
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.7",
    fontFamily: FONT.sans,
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  card: {
    background: C.dark2,
    border: `1px solid ${C.gold}20`,
    padding: "32px 28px",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.5s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tag: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: C.gold,
    color: C.white,
    padding: "4px 10px",
    fontSize: "10px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  icon: { fontSize: "28px", color: C.goldLight, marginBottom: "16px" },
  name: {
    fontSize: "20px",
    color: C.cream,
    margin: "0 0 12px",
    fontWeight: "600",
  },
  cardDesc: {
    fontSize: "13px",
    color: `${C.cream}70`,
    lineHeight: "1.7",
    marginBottom: "20px",
    fontFamily: FONT.sans,
    fontWeight: "300",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    paddingTop: "16px",
    borderTop: `1px solid ${C.gold}20`,
  },
  btn: {
    background: "transparent",
    color: C.gold,
    border: `1px solid ${C.gold}50`,
    cursor: "pointer",
    padding: "10px 20px",
    fontSize: "12px",
    letterSpacing: "1.5px",
    fontFamily: FONT.serif,
    textTransform: "uppercase",
    width: "100%",
    transition: "all 0.2s",
  },
};
