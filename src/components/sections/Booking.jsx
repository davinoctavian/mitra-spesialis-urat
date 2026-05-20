import { useState } from "react";
import { SERVICES, CONTACT_INFO } from "../../constants/data";
import { COLOR, FONT, shared } from "../../styles/theme";

const WA_NUMBER = "6289602463033";

// Format datetime-local value → human-readable Indonesian string
function formatDateTime(raw) {
  if (!raw) return "-";
  const d = new Date(raw);
  return d.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Build the WhatsApp URL with a pre-filled message
function buildWaUrl(form) {
  const service = SERVICES.find((s) => s.name === form.service);

  const msg = [
    "*RESERVASI MITRA URAT*",
    "━━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Nama*      : ${form.name}`,
    `📞 *Telepon*   : ${form.phone}`,
    `📅 *Jadwal*    : ${formatDateTime(form.date)}`,
    "━━━━━━━━━━━━━━━━━━━━━━",
    "Mohon konfirmasi ketersediaan jadwal. Terima kasih! 🙏",
  ].join("\n");

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open WhatsApp in new tab
    const url = buildWaUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");

    // Show success banner
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    // Reset form
    setForm({ name: "", phone: "", date: "" });
  };

  return (
    <section id="kontak" style={{ ...shared.section, ...shared.sectionDark }}>
      <div style={s.wrapper} className="booking-wrapper">
        {/* ── Left — info ── */}
        <div data-id="bookLeft">
          <div style={shared.sectionLabel}>RESERVASI</div>
          <h2 style={shared.sectionTitleLight}>
            Booking
            <br />
            <em style={shared.titleItalicLight}>Sesi Anda</em>
          </h2>
          <p style={s.desc}>
            Isi form di samping dan klik{" "}
            <strong style={{ color: "#25D366" }}>Kirim ke WhatsApp</strong>.
            Pesan Anda akan langsung terkirim ke kami dan tim akan konfirmasi.
          </p>

          <div style={s.contactList}>
            {CONTACT_INFO.map(([icon, text]) => (
              <div key={text} style={s.contactRow}>
                <span style={s.contactIcon}>{icon}</span>
                <span
                  style={s.contactText}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></span>
              </div>
            ))}
          </div>

          {/* Direct WA button */}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={s.waDirectBtn}
          >
            <span style={s.waIcon}>
              {/* WhatsApp SVG icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            Chat Langsung via WhatsApp
          </a>
        </div>

        {/* ── Right — form ── */}
        <div data-id="bookRight">
          <div style={s.formBox} className="booking-form">
            <h3 style={s.formTitle}>Form Reservasi</h3>

            {submitted && (
              <div style={s.successMsg}>
                <span style={s.successIcon}>✓</span>
                <div>
                  <div style={s.successTitle}>
                    Berhasil dikirim ke WhatsApp!
                  </div>
                  <div style={s.successSub}>
                    Jika tab WhatsApp tidak terbuka, pastikan browser
                    mengizinkan pop-up.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={s.form}>
              <Field label="Nama Lengkap">
                <input
                  style={s.input}
                  placeholder="Masukkan nama Anda"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
              </Field>

              <Field label="No. Telepon Anda">
                <input
                  style={s.input}
                  placeholder="+62 xxx-xxxx-xxxx"
                  value={form.phone}
                  onChange={set("phone")}
                  required
                />
              </Field>

              <Field label="Tanggal & Waktu">
                <input
                  style={s.input}
                  type="datetime-local"
                  value={form.date}
                  onChange={set("date")}
                  required
                />
              </Field>

              {/* Preview pesan */}
              {form.name && form.service && form.date && (
                <div style={s.preview}>
                  <div style={s.previewLabel}>Preview pesan WhatsApp:</div>
                  <pre style={s.previewText}>
                    {`RESERVASI MITRA URAT
👤 Nama    : ${form.name}
📞 Telp    : ${form.phone || "-"}
📅 Jadwal  : ${formatDateTime(form.date)}`}
                  </pre>
                </div>
              )}

              <button type="submit" style={s.submitBtn} className="submit-btn">
                <span style={s.waBtnIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                Kirim ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable field wrapper
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={s.label}>{label}</label>
      {children}
    </div>
  );
}

const C = COLOR;
const WA_GREEN = "#25D366";

const s = {
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "start",
  },
  desc: {
    fontSize: "14px",
    color: `${C.cream}80`,
    lineHeight: "1.8",
    marginBottom: "28px",
    fontFamily: FONT.sans,
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "28px",
  },
  contactRow: { display: "flex", alignItems: "flex-start", gap: "14px" },
  contactIcon: { fontSize: "16px", flexShrink: 0, marginTop: "2px" },
  contactText: { fontSize: "14px", color: `${C.cream}90`, lineHeight: "1.5" },

  // Direct WA button (left side)
  waDirectBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: WA_GREEN,
    color: "#fff",
    textDecoration: "none",
    padding: "13px 24px",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily: FONT.serif,
    fontWeight: "600",
    transition: "background 0.2s",
    boxShadow: `0 8px 24px ${WA_GREEN}40`,
  },
  waIcon: { display: "flex", alignItems: "center", flexShrink: 0 },

  // Form box
  formBox: {
    background: C.dark2,
    border: `1px solid ${C.gold}25`,
    padding: "40px 36px",
  },
  formTitle: {
    fontSize: "20px",
    color: C.cream,
    margin: "0 0 28px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    borderBottom: `1px solid ${C.gold}30`,
    paddingBottom: "16px",
  },
  form: { display: "flex", flexDirection: "column", gap: "18px" },
  label: {
    fontSize: "11px",
    color: `${C.cream}70`,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  input: {
    background: C.dark3,
    border: `1px solid ${C.gold}25`,
    color: C.cream,
    padding: "12px 16px",
    fontSize: "14px",
    fontFamily: FONT.serif,
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },

  // Message preview
  preview: {
    background: `${C.dark3}`,
    border: `1px solid ${C.gold}20`,
    padding: "14px 16px",
    marginTop: "4px",
  },
  previewLabel: {
    fontSize: "10px",
    letterSpacing: "2px",
    color: `${C.cream}50`,
    textTransform: "uppercase",
    marginBottom: "8px",
  },
  previewText: {
    fontSize: "12px",
    color: `${C.cream}80`,
    lineHeight: "1.7",
    fontFamily: FONT.sans,
    margin: 0,
    whiteSpace: "pre-wrap",
  },

  // Submit button (WA green)
  submitBtn: {
    background: WA_GREEN,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "16px",
    fontSize: "15px",
    letterSpacing: "1px",
    fontFamily: FONT.serif,
    fontWeight: "700",
    marginTop: "4px",
    transition: "background 0.2s",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: `0 8px 24px ${WA_GREEN}40`,
  },
  waBtnIcon: { display: "flex", alignItems: "center" },

  // Success message
  successMsg: {
    background: `${WA_GREEN}15`,
    border: `1px solid ${WA_GREEN}50`,
    color: WA_GREEN,
    padding: "14px 16px",
    fontSize: "13px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  successIcon: {
    fontSize: "20px",
    fontWeight: "700",
    flexShrink: 0,
    lineHeight: 1.2,
  },
  successTitle: { fontWeight: "700", marginBottom: "4px" },
  successSub: { fontSize: "12px", color: `${WA_GREEN}CC`, lineHeight: "1.5" },
};
