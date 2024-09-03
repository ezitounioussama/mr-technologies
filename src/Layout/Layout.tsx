import React, { useEffect } from "react";
import Lenis from "lenis";
import Header from "./Header/index";
import Intro from "./Intro";
import Footer from "./Footer/Footer";

const Layout: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <Footer />
    </>
  );
};

export default Layout;
