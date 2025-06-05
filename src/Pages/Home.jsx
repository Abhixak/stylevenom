import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import AdSlides from "../Components/AdSlides";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      const isSmallScreen = window.innerWidth < 768; // Tailwind 'md' breakpoint
      setShowNavbar(isScrolled && isSmallScreen);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recheck on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      {showNavbar && <Navbar />}
      <AdSlides />
      <br /><br /><br />
    </div>
  );
};

export default Home;
