import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useCallback } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { COLOR } from "./styles/theme";

function Layout() {
  const location = useLocation();

  const scrollToSection = useCallback((id) => {
    // Slight delay lets React finish any pending renders first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  const is404 = location.pathname !== "/";

  return (
    <div style={styles.app}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />

      {!is404 && <Navbar onSectionScroll={scrollToSection} />}

      <Routes>
        <Route path="/" element={<Home onScroll={scrollToSection} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!is404 && <Footer onSectionScroll={scrollToSection} />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

const C = COLOR;
const styles = {
  app: {
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
    background: C.cream,
    color: C.dark,
    overflowX: "hidden",
    minHeight: "100vh",
    position: "relative",
  },
  blob1: {
    position: "fixed",
    top: "-200px",
    right: "-200px",
    width: "600px",
    height: "600px",
    background: `radial-gradient(circle, ${C.gold}18 0%, transparent 70%)`,
    pointerEvents: "none",
    zIndex: 0,
  },
  blob2: {
    position: "fixed",
    bottom: "-200px",
    left: "-200px",
    width: "500px",
    height: "500px",
    background: `radial-gradient(circle, ${C.gold}12 0%, transparent 70%)`,
    pointerEvents: "none",
    zIndex: 0,
  },
};
