import React, { useRef } from "react";
import { easing } from "maath";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import state from "../store";
import { useSnapshot } from "valtio";
import { useEffect } from "react";

export function Model(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked-transformed.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state,delta)=> easing.dampC(materials.lambert1.color,snap.color,0.25,delta))
 
  const stateString = JSON.stringify(snap)
 
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        // scale={1}
      >
      {snap.isFullTexture &&(
        <Decal
        position={[0,0,0]}
        rotation={[0,0,0]}
        scale={1}
        map={fullTexture}

        />
      )}
      {snap.isLogoTexture && (
        <Decal
        position={[0,0,0]}
        rotation={[0,0,0]}
        scale={0.3}
        map={logoTexture}
        // map-anisotropy={16}
        depthTest={false}
        depthWrite={true}
        />
      )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/shirt_baked-transformed.glb");
