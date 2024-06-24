"use client";
import { TECH_STACK, SKILLS } from "@/DETAILS";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import HoverImageText from "../Skill/HoverImageText";
import { FaCode } from "react-icons/fa";
import ProgressBar from "../Skill/ProgressBar";

export default function TechStack() {
  const marqueeSpeed = 35;
  const marqueeSize = isMobile ? 30 : 40;

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: -50
      }}
      whileInView={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.6
      }}
      className="col-span-2 row-span-3 row-start-2 md:row-span-2 bg-pearl-500 rounded-lg flex flex-col px-4"
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
          heading={"Tech-Stack"}
          imgSrc={"./Skill_Logos/TechStack.jpg"}
          icon={<FaCode className="text-3xl text-royalBlue-400" />}
        />
      </motion.div>
      <div className="p-2 h-full flex flex-col place-content-around">
        {SKILLS.map((skill, index) => (
          <ProgressBar
            key={index}
            language={skill.title}
            percentage={skill.progress}
            index={index}
          />
        ))}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.3
          }}
        >
          <Marquee
            autoFill={true}
            pauseOnHover={false}
            speed={marqueeSpeed}
            loop={0}
            direction="right"
          >
            {TECH_STACK.map((tech) => {
              return (
                <Image
                  key={tech.name}
                  src={`/Skill_Logos/${tech.image}`}
                  alt={tech.name}
                  width={marqueeSize}
                  height={marqueeSize}
                  className="mx-2"
                />
              );
            })}
          </Marquee>
        </motion.div>
      </div>
    </motion.div>
  );
}
