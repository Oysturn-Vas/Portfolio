"use client";
import { MAIN_PROJECTS } from "@/DETAILS";
import Link from "next/link";
import ProjectCards from "../Project/ProjectCards";
import ProjectCardMobile from "../Project/ProjectCardMobile";
import DottedButton from "../Other/DottedButton";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full md:w-1/2 h-full rounded-lg">
      <div className="rounded-xl h-full flex flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -500
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.3,
            delay: 0.3
          }}
          // viewport={{ once: true }}
          className="hidden w-full h-full sm:flex flex-wrap"
        >
          {MAIN_PROJECTS.slice(0, 4).map((project) => (
            <div key={project.id} className="w-1/2 h-1/2 p-2">
              <ProjectCards title={project.title} image={project.image} />
            </div>
          ))}
        </motion.div>
        <div className="w-full h-full p-1 flex flex-col justify-end md:justify-start sm:hidden">
          {MAIN_PROJECTS.slice(0, 3).map((project) => (
            <ProjectCardMobile
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          // viewport={{ once: true }}
          className="m-1"
        >
          <Link href={"/projects"}>
            <DottedButton>View All</DottedButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
