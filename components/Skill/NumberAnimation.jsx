"use client";

import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

export default function NumberAnimation({
  from = 0,
  to = 100,
  animationOptions
}) {
  const ref = useRef(null);
  const inView = useInView(ref);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      }
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
}
