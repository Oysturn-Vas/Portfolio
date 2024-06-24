"use client";
import { isMobile } from "react-device-detect";

export default function LoadingScreen({ background }) {
  const imgUrl = isMobile ? "/Loader/loaderMobile.jpg" : "/Loader/loader.jpg";
  let { innerHeight: height } = window;
  height = `${height}px`;
  return (
    <div className="relative w-dvw" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse-slow z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height
        }}
      >
        Loading...
      </span>
    </div>
  );
}
