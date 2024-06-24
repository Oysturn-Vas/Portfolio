"use client";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Model/Scene";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";

import desktopScroll from "./TheatreScroll/desktopScroll.json";
import mobileScroll from "./TheatreScroll/mobileScroll.json";

import { isMobile } from "react-device-detect";
import { Suspense } from "react";
import LoadingScreen from "./Loader/LoadingScreen";
// studio.initialize();
// studio.extend(extension);

export default function CanvasWrapper({ children }) {
  const sheet = getProject("Portfolio", {
    state: isMobile ? mobileScroll : desktopScroll
  }).sheet("Scene");

  // const sheet = getProject("Portfolio").sheet("Scene");

  return (
    <Suspense fallback={<LoadingScreen background={"black"} />}>
      <Canvas>
        <SheetProvider sheet={sheet}>
          <ScrollControls pages={5} damping={0.2}>
            <Scene />
            <Scroll html>{children}</Scroll>
          </ScrollControls>
        </SheetProvider>
      </Canvas>
    </Suspense>
  );
}
