"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./loader";
import Island from "./Island";

const Scene = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen relative"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Scene;
