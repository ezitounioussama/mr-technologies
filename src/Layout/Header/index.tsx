"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import { Link } from "react-router-dom";
import Nav from "./nav";
import { ModeToggle } from "../../Theme/mode-toggle";
import { FaGripLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../Theme/theme-provider";

import { Cart } from "../../components/Cart/Cart";

const Index: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`fixed w-full px-5 py-10 box-border dark:bg-black bg-white dark:text-white text-black z-[1000]`}
    >
      <div className="relative flex justify-center items-center uppercase text-xs font-normal">
        <Link
          className="absolute left-0 text-white dark:text-black no-underline"
          to="/"
        >
          <img
            src={
              theme === "dark"
                ? "/MrTechnologies/logo-dark.webp"
                : "/MrTechnologies/logo-white.webp"
            }
            alt="mr-technologies-logo"
            className="w-16"
          />
        </Link>

        {/* Menu Toggle */}
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          {isActive ? <IoClose size={20} /> : <FaGripLines size={20} />}
          <div className="relative flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="m-0"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="m-0 absolute opacity-0"
            >
              Close
            </motion.p>
          </div>
        </div>

        {/* Right Section (Cart & Mode Toggle) */}
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className="absolute right-0 flex gap-7"
        >
          <Cart />
          <ModeToggle />
        </motion.div>
      </div>

      {/* Nav Menu Overlay */}
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="absolute left-0 top-full bg-black opacity-50 h-full w-full"
      ></motion.div>

      {/* Render Nav Component */}
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
