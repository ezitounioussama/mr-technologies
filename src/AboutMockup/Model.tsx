/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: RaflyNaHa (https://sketchfab.com/RaflyNaHa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asus-rog-strix-scar-17-2023-g733-gaming-laptop-51eca7b2e5884c4087f3499e523d5184
Title: Asus ROG Strix Scar 17 (2023) G733 Gaming Laptop
*/

import { useEffect, useMemo, useRef, useState } from "react";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";
import { animate } from "framer-motion";

import { noise } from "./Noise";
import { useStore } from "./store";
import { colors } from "./data";

import laptopModel from "./assets/models/asus_rog_strix_scar_17_2023_g733_gaming_laptop.glb?url";

export function Model(props) {
  const { nodes, materials } = useGLTF(laptopModel);
  const modelRef = useRef<ThreeElements>(null);
  const {
    viewport: { width, height },
  } = useThree();
  const [current, setCurrent] = useState(0);
  const play = useStore((s) => s.play);
  const setPlay = useStore((s) => s.setPlay);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_color1: { value: new Color(colors[0]) },
      u_color2: { value: new Color(colors[1]) },
      u_color3: { value: new Color(colors[2]) },
      u_progress: { value: 0.5 },
      u_width: { value: 0.8 },
      u_scaleX: { value: 50 },
      u_scaleY: { value: 50 },
    }),
    []
  );

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    uniforms.u_time.value = time;
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(time) * 0.12; // Laptop floating effect
    }
  });

  const handleClick = () => {
    const len = colors.length;
    const nextTexture = new Color(colors[(current + 1) % len]);
    uniforms.u_color2.value = nextTexture;

    if (play) {
      animate(0.5, 5, {
        onUpdate(v) {
          setPlay(false);
          uniforms.u_progress.value = v;
        },
        onComplete() {
          setCurrent((current + 1) % len);
          uniforms.u_color1.value = nextTexture;
          uniforms.u_progress.value = 0.5;
          setPlay(true);
        },
        duration: 1,
      });
    }
  };

  useEffect(() => {
    materials.Metal_1.metalness = 0.8;
    materials.Metal_1.roughness = 0.2;
    materials.Metal_1.onBeforeCompile = (shader) => {
      shader.uniforms = Object.assign(shader.uniforms, uniforms);
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <common>`,
        `
                  #include <common>
        
                  uniform float u_time;
                  uniform vec3 u_color1;
                  uniform vec3 u_color2;
                  uniform float u_progress;
                  uniform float u_width;
                  uniform float u_scaleX;
                  uniform float u_scaleY;
                  uniform vec2 u_textureSize;
        
                  varying vec2 vUv;
        
                  ${noise}
        
                  float parabola( float x, float k ) {
                    return pow( 4. * x * ( 1. - x ), k );
                  }
        
              `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <color_fragment>`,
        `
          #include <color_fragment>

            float aspect = u_textureSize.x/u_textureSize.y;

            float dt = parabola(u_progress,1.);
            float border = 1.;

            float noise = 0.5*(cnoise(vec4(vUv.x*u_scaleX  + 0.5*u_time/3., vUv.y*u_scaleY,0.5*u_time/3.,0.)) + 1.);

            float w = u_width*dt;

            float maskValue = smoothstep(1. - w,1.,vUv.y + mix(-w/2., 1. - w/2., u_progress));

            maskValue += maskValue * noise;

            float mask = smoothstep(border,border+0.01,maskValue);

            diffuseColor.rgb += mix(u_color1,u_color2,mask);

        `
      );
    };
  }, [uniforms]);

  return (
    <>
      {/* Plane helper for click event */}
      <mesh visible={false} onClick={() => handleClick()}>
        <planeGeometry args={[width, height]} />
      </mesh>

      <group ref={modelRef} {...props} dispose={null} position={[0, 0, 10]}>
        <group position={[0, 1.395, -1.325]} scale={4}>
          <group
            position={[0.368, -0.441, -0.295]}
            rotation={[0, -0.747, 0]}
            scale={0.06}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Merah}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Lightbar}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Lightbar}
            />
          </group>
          <group
            position={[0.765, -0.447, -0.486]}
            rotation={[-0.175, 0, 0]}
            scale={[0.435, 0.668, 0.435]}
          >
            <group
              position={[-1.76, 0.892, -0.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 1, 0.651]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.Layar}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials.Touchpad}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials.Metal_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials.Logo}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_23.geometry}
                material={materials.Web_Cam}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Metal_1}
              position={[-3.381, 0.111, 0.016]}
              scale={[1.035, 0.68, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.Logo_Text}
              position={[-3.042, 0.158, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.057, 0.057, 0.037]}
            />
          </group>
          <group position={[0, -0.446, -0.009]} scale={0.435}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.Metal_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.Touchpad}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.Metal_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.Lightbar}
            />
          </group>
          <group position={[0.6, -0.441, -0.091]} scale={0.032}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_82.geometry}
              material={materials.Keyboard}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_83.geometry}
              material={materials.Bawah}
            />
          </group>
          <group
            position={[0, -0.517, -0.003]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.435}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_101.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_102.geometry}
              material={materials.Metal_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_103.geometry}
              material={materials.Hole}
            />
          </group>
          <group position={[-0.62, -0.499, 0.44]} scale={0.435}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_105.geometry}
              material={materials.Metal_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_106.geometry}
              material={materials.Bawah}
            />
          </group>
          <group
            position={[0.872, -0.443, 0.49]}
            rotation={[-Math.PI, 0.684, 0]}
            scale={[0.765, 0.435, 0.001]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_108.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_109.geometry}
              material={materials.material_0}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Logo_AMD}
            position={[-0.636, -0.445, 0.153]}
            scale={0.045}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.material}
            position={[0.612, -0.441, -0.357]}
            scale={0.008}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Teks_Bawah}
            position={[-0.653, -0.524, -0.441]}
            rotation={[0, 0, Math.PI]}
            scale={0.105}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.Keyboard}
            position={[-0.476, -0.441, -0.019]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.Keyboard}
            position={[-0.512, -0.441, -0.092]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.Keyboard}
            position={[-0.531, -0.441, -0.164]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.Keyboard}
            position={[-0.642, -0.441, -0.237]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.Keyboard}
            position={[-0.642, -0.441, -0.164]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.Keyboard}
            position={[-0.642, -0.441, -0.091]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.Keyboard}
            position={[-0.596, -0.441, -0.019]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.Keyboard}
            position={[-0.642, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.Keyboard}
            position={[-0.549, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.Keyboard}
            position={[-0.328, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.Keyboard}
            position={[0.044, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_54.geometry}
            material={materials.Keyboard}
            position={[0.119, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.Keyboard}
            position={[0.343, -0.441, -0.091]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.Keyboard}
            position={[0.288, -0.441, -0.019]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.Keyboard}
            position={[0.305, -0.441, -0.164]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.Keyboard}
            position={[0.352, -0.441, -0.237]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.Keyboard}
            position={[-0.642, -0.441, -0.31]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials.Keyboard}
            position={[-0.494, -0.441, -0.31]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.Keyboard}
            position={[-0.174, -0.441, -0.31]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.Keyboard}
            position={[0.146, -0.441, -0.31]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials.Keyboard}
            position={[0.381, -0.441, 0.093]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials.Keyboard}
            position={[0.303, -0.441, 0.044]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.Keyboard}
            position={[0.478, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.Keyboard}
            position={[0.6, -0.441, 0.055]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials.Keyboard}
            position={[0.6, -0.441, -0.019]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_85.geometry}
            material={materials.Keyboard}
            position={[0.6, -0.441, -0.164]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.Keyboard}
            position={[0.6, -0.441, -0.237]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.Keyboard}
            position={[0.442, -0.441, -0.31]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials.Keyboard}
            position={[0.661, -0.441, -0.237]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials.Keyboard}
            position={[0.661, -0.441, -0.164]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials.Keyboard}
            position={[0.661, -0.441, -0.019]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials.Keyboard}
            position={[-0.494, -0.441, -0.372]}
            scale={0.032}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials.Keyboard}
            position={[0.612, -0.441, -0.357]}
            scale={0.034}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.Logo_RTX}
            position={[-0.51, -0.445, 0.153]}
            scale={0.045}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.Logo_ROG}
            position={[-0.423, -0.43, -0.538]}
            rotation={[2.918, 0, Math.PI]}
            scale={0.435}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials.Merah}
            position={[0.621, -0.441, -0.387]}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.Indikator}
            position={[0.148, -0.441, -0.412]}
            scale={0.025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_119.geometry}
            material={materials.Teks_Bawah}
            position={[0.686, -0.524, -0.468]}
            scale={[-0.021, 0.021, 0.021]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload(laptopModel);
export default Model;