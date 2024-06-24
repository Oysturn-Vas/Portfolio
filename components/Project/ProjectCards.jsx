"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function ProjectCards({ title, image }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/projects`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform
        }}
        className="relative h-full w-full rounded-xl bg-gradient-to-br from-pearl-700 to-royalBlue-600"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg flex flex-wrap justify-center"
        >
          <Image
            src={`/Projects/${image}`}
            alt={`${title}`}
            width={500}
            height={500}
            className="p-2 rounded-2xl h-full object-fill"
            style={{
              transform: "translateZ(50px)"
            }}
          />
          {/* <p
            style={{
              transform: "translateZ(50px)"
            }}
            className="text-center text-sm md:text-base font-bold p-2"
          >
            {title}
          </p> */}
        </div>
      </motion.div>
    </Link>
  );
}
