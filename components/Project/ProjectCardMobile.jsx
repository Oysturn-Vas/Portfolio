"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCardMobile({ title, description }) {
  return (
    <Link className="w-full h-1/4" href={`/projects`}>
      <motion.div
        initial={{
          opacity: 0,
          x: -100
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          delay: 0.5,
          duration: 1
        }}
        className="bg-seashell-900 rounded-xl p-1 mb-4 flex flex-col items-center justify-evenly text-wrap border-2 border-black divide-y-2 divide-slate-300"
      >
        <p className="basis-1/4 text-base px-2 font-bold text-royalBlue-200 text-center">
          {title}
        </p>
        <p className="basis-1/3 text-sm px-1 text-royalBlue-200 text-center pt-1">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
