import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

interface Products {
  Mark: string;
  title: string;
  src: string;
}

export default function ProductsFeautureSection({
  products,
}: {
  products: Products;
}) {
  const [isActive, setIsActive] = useState(false);

  const { Mark, title, src } = products;
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className="border-t-2 text-black dark:text-white border-black dark:border-white py-[0.8vw] w-full flex justify-center items-center cursor-pointer last:border-b-2"
    >
      <p className="text-[5vw] mr-[0.75vw]">{Mark}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className="overflow-hidden flex justify-center w-0"
      >
        <img src={`${src}`} className="w-[10vw]" />
      </motion.div>
      <p className="text-[5vw] ml-[0.75vw]">{title}</p>
    </div>
  );
}
