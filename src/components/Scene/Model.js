import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/Bordeaux.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.y += 0.02;
  });

  return (
    <>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, 0]}
        fontSize={1.5}
        anchorX="center"
        anchorY="middle"
        color="black"
        // fillOpacity={0.5}
      >
        Mr Technologies
      </Text>
      <group ref={torus} dispose={null}>
        <group scale={0.1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SurfaceLaptop1.geometry}
            material={nodes.SurfaceLaptop1.material}
            position={[-0.338, 8, -10.84]}
            rotation={[-Math.PI / 3, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.KeyboardFabric2.geometry}
            material={nodes.KeyboardFabric2.material}
            position={[-0.338, -8, 0]}
            rotation={[-Math.PI / 3, 0, 0]}
          />
        </group>
      </group>
    </>
  );
}
