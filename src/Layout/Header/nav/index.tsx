"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

interface LinkProps {
  title: string;
  href: string;
  src: string;
}

const links: LinkProps[] = [
  {
    title: "Home",
    href: "/",
    src: "/MrTechnologies/laptops2.webp",
  },
  {
    title: "Shop",
    href: "/shop",
    src: "/MrTechnologies/laptops1.jpg",
  },
  {
    title: "About Us",
    href: "/about",
    src: "home.png",
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

const Index: React.FC<{ setIsActive: (isActive: boolean) => void }> = ({
  setIsActive,
}) => {
  const [selectedLink, setSelectedLink] = useState<{
    isActive: boolean;
    index: number;
  }>({
    isActive: false,
    index: 0,
  });

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12 mb-20 lg:mb-0 lg:justify-between">
        <div className="flex flex-col justify-between">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            onLinkClick={handleLinkClick}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default Index;
