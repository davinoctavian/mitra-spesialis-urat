import { Link } from "react-router-dom";
import { BRAND } from "../constants/data";
import { COLOR, FONT } from "../styles/theme";

export default function NotFound() {
  return (
    <div style={s.wrapper}>
      {/* Logo */}
      <div style={s.logoBox}>
        <img src={BRAND.logo} alt="Mitra Urat" style={s.logoImg} />
      </div>

      <h1 style={s.code}>404</h1>
      <p style={s.title}>Halaman Tidak Ditemukan</p>
      <p style={s.desc}>
        Maaf, halaman yang Anda cari tidak tersedia.
        <br />
        Mungkin sudah dipindahkan atau salah alamat.
      </p>
      <Link to="/" style={s.btn}>
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}

const C = COLOR;
const s = {
  wrapper: {
    minHeight: "100vh",
    background: C.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "40px",
    fontFamily: FONT.serif,
  },
  logoBox: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    border: `2px solid ${C.gold}50`,
    boxShadow: `0 0 40px ${C.gold}30`,
    background: "#000",
    marginBottom: "32px",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 10%",
  },
  code: {
    fontSize: "120px",
    fontWeight: "700",
    color: C.gold,
    lineHeight: 1,
    margin: "0 0 16px",
  },
  title: {
    fontSize: "28px",
    color: C.cream,
    fontWeight: "300",
    fontStyle: "italic",
    marginBottom: "16px",
  },
  desc: {
    fontSize: "15px",
    color: `${C.cream}70`,
    lineHeight: "1.8",
    marginBottom: "40px",
    fontFamily: FONT.sans,
    fontWeight: "300",
  },
  btn: {
    display: "inline-block",
    background: C.gold,
    color: C.white,
    textDecoration: "none",
    padding: "14px 36px",
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    transition: "background 0.2s",
  },
};
