"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "white", height: "100%!important" }}>
      <Model />
      <directionalLight intensity={0} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
