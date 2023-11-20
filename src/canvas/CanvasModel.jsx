import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Model } from "./Shirt_baked";
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import { useSnapshot } from "valtio";
import state from "../store";

const CanvasModel = () => {
  const snap = useSnapshot(state);
  console.log(snap.login);
  return (
    <>
      {!snap.login && (
        <Canvas
          shadows
          camera={{ position: [0, 0, 0], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          className="w-full max-w-full h-full transition-all ease-in"
        >
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <CameraRig>
            <BackDrop />
            <Center>
              <Model />
            </Center>
          </CameraRig>
        </Canvas>
      )}
    </>
  );
};

export default CanvasModel;
