import { useState, useEffect, useCallback } from "react";
import Hero from "../components/sections/Hero";
import Strip from "../components/sections/Strip";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Booking from "../components/sections/Booking";

export default function Home({ onScroll }) {
  const [visible, setVisible] = useState({});

  // Intersection observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll("[data-id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Called from Services card — pre-fills the booking form & scrolls to it
  const handleBookService = useCallback(() => {
    onScroll("kontak");
  }, [onScroll]);

  return (
    <main>
      <Hero onScroll={onScroll} />
      <Strip />
      <About />
      <Services visible={visible} onBook={handleBookService} />
      <Testimonials visible={visible} />
      <Booking />
    </main>
  );
}
