import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Framer({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      (ref.current as HTMLDivElement | null)?.getBoundingClientRect() || {};
    const middleX = clientX - ((left ?? 0) + (width ?? 0) / 2);
    const middleY = clientY - ((top ?? 0) + (height ?? 0) / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
