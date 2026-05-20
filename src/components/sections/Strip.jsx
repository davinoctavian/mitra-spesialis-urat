import { STRIP_ITEMS } from "../../constants/data";
import { COLOR } from "../../styles/theme";

export default function Strip() {
  // Duplicate items for seamless infinite scroll
  const items = [...STRIP_ITEMS, ...STRIP_ITEMS];

  return (
    <div style={s.wrapper}>
      <div className="strip-track">
        {items.map((item, i) => (
          <span key={i} style={s.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const s = {
  wrapper: {
    background: COLOR.dark,
    padding: "16px 0",
    overflow: "hidden",
    display: "flex",
    whiteSpace: "nowrap",
    position: "relative",
    zIndex: 1,
  },
  item: {
    fontSize: "13px",
    letterSpacing: "3px",
    color: COLOR.goldLight,
    textTransform: "uppercase",
    marginRight: "60px",
  },
};
