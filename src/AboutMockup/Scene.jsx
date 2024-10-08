import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";

import Model from "./Model";
import Background from "./Background";

import envMap from "./assets/envMap/potsdamer_platz_0.256k.hdr?url";

const Scene = () => {
  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0, 25], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <Environment files={envMap} />
        <Background />
        <PresentationControls
          config={{ mass: 1, tension: 300 }}
          snap={{ mass: 3, tension: 300 }}
          polar={[-Math.PI / 2, Math.PI / 2]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Model />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Scene;
