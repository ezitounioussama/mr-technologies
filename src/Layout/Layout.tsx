import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "./Header/index";
import Intro from "./Intro";
import Footer from "./Footer/Footer";
import Preloader from "../Layout/Preloader";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Intro />
      <Footer />
    </>
  );
};

export default Layout;
