"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

export default function Index() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  useEffect(() => {
    const manageMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    };

    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, [mouse.x, mouse.y]);

  return (
    <Canvas
      style={{ background: "#e0e0e0", height: "100% !important" }}
      orthographic
      camera={{ position: [0, 0, 200], zoom: 10 }}
    >
      <Model mouse={smoothMouse} />
      <Environment preset="studio" />
    </Canvas>
  );
}
