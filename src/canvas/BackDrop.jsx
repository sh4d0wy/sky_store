import React, { useRef } from "react";
import { easing } from "maath";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BackDrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0, 0, -0.14]}
      temporal
      frames={10}
      alphaTest={0.85}
      scale={1}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={6}
        intensity={3}
        ambient={0.25}
        position={[5,2,-10]}
        // shadowBias={-0.001}
      />
      <RandomizedLight
        amount={4}
        radius={6}
        intensity={3}
        ambient={0.25}
        position={[-5,2,-9]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
