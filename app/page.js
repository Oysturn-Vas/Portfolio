import dynamic from "next/dynamic";
import { Suspense } from "react";

import Header from "@/components/Header/Header";

const CanvasWrapper = dynamic(() => import("@/components/CanvasWrapper"), {
  ssr: false
});

const MainPage = dynamic(() => import("@/components/MainPage"), {
  ssr: false
});

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Header />
      <CanvasWrapper>
        <MainPage />
      </CanvasWrapper>
    </Suspense>
  );
}
