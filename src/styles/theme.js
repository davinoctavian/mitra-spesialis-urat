// ─── Color Tokens ──────────────────────────────────────────────────────────────
export const COLOR = {
  cream: "#F5ECD7",
  gold: "#C8963E",
  goldLight: "#E8B86D",
  dark: "#1A1208",
  dark2: "#2C1F0A",
  dark3: "#3D2B10",
  text: "#5C3D1E",
  textLight: "#8B6E4E",
  white: "#FFFDF8",
};

// ─── Typography ────────────────────────────────────────────────────────────────
export const FONT = {
  serif: "'Cormorant Garamond', 'Georgia', serif",
  sans: "'Lato', sans-serif",
};

// ─── Shared style snippets ──────────────────────────────────────────────────────
export const shared = {
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: COLOR.gold,
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "clamp(36px, 5vw, 52px)",
    lineHeight: 1.1,
    margin: "0 0 20px",
    fontWeight: "400",
  },
  sectionTitleLight: {
    fontSize: "clamp(36px, 5vw, 52px)",
    lineHeight: 1.1,
    margin: "0 0 20px",
    fontWeight: "400",
    color: COLOR.cream,
  },
  titleItalic: {
    fontStyle: "italic",
    color: COLOR.gold,
    fontWeight: "300",
  },
  titleItalicLight: {
    fontStyle: "italic",
    color: COLOR.goldLight,
    fontWeight: "300",
  },
  section: {
    padding: "100px 40px",
    position: "relative",
    zIndex: 1,
  },
  sectionDark: {
    background: COLOR.dark,
  },
  sectionHeader: {
    maxWidth: "1200px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
};
