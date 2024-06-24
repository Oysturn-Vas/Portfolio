"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function HoverImageText({ heading, imgSrc, icon }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-center md:justify-start border-b-2 border-black transition-colors duration-500 hover:border-royalBlue-700 py-2 md:py-2"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 }
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25
          }}
          className="relative z-10 block text-xl font-bold text-black transition-colors duration-500 group-hover:text-royalBlue-500 md:text-3xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 }
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0
          },
          whileHover: {
            x: "0%",
            opacity: 1
          }
        }}
        transition={{ type: "spring" }}
        className="hidden md:block relative z-10 px-4"
      >
        {icon}
      </motion.div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%"
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" }
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-32 md:w-40"
        alt={`Image representing a heading for ${heading}`}
      />
    </motion.div>
  );
}
