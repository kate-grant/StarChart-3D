import React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const StarChart = () => {
  const nightsky = new THREE.Color(0x071b2b);
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <color attach="background" args={[nightsky]} />
      {/* <ambientLight intensity={0.2} color={`#ffffff`} /> */}
      {/* <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial />
      </mesh> */}
    </Canvas>
  );
};

export default StarChart;
