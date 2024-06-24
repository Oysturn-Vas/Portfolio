"use client";
import HoverImageText from "./HoverImageText";
import { FaBriefcase } from "react-icons/fa";
import { WORK } from "@/DETAILS";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 75
      }}
      whileInView={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.6
      }}
      className="col-span-2 row-span-2 row-start-5 md:row-start-3  bg-pearl-500 rounded-lg flex flex-col px-4"
    >
      <motion.div
        initial={{
          y: -50
        }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 0.7
        }}
      >
        <HoverImageText
          heading={"Experience"}
          imgSrc={"./Skill_Logos/Experience.jpg"}
          icon={<FaBriefcase className="text-3xl text-royalBlue-400" />}
        />
      </motion.div>
      <div className="h-full flex flex-row-reverse p-2 md:py-4 md:px-2 justify-evenly items-center gap-2 overflow-x-scroll overflow-y-hidden">
        {WORK.map((work, index) => (
          <motion.div
            key={index}
            className="flex-none w-52 md:w-44 h-full md:h-3/4 rounded-xl p-1 shadow-2xl bg-gradient-to-r from-blue-800 to-indigo-900"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.2
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5
            }}
          >
            <div className="w-full h-full rounded-lg p-1 flex flex-col items-center justify-center text-center bg-pearl-800">
              <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-lg md:text-base font-bold pb-1">
                {work.title}
              </div>
              <div className="bg-gradient-to-r from-slate-500 to-slate-800 inline-block text-transparent bg-clip-text italic md:text-sm font-semibold p-2">
                {work.location}
              </div>
              <div className="bg-gradient-to-b from-slate-900 via-gray-500 to-slate-400 inline-block text-transparent bg-clip-text text-base md:text-sm font-bold pt-1">
                {work.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
