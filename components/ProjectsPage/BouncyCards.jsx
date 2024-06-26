import React from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ALL_PROJECTS } from "@/DETAILS";
import Image from "next/image";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Coded with
          <span className="text-royalBlue"> Love. </span>
        </h2>
        <Link
          href="https://github.com/Oysturn-Vas"
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700 flex flex-row gap-2 items-center"
          >
            <FaGithub />
            Github
          </motion.button>
        </Link>
      </div>
      <div className="mb-4 flex flex-row flex-wrap justify-evenly">
        {ALL_PROJECTS.map((project, index) => {
          return (
            <Link
              key={index}
              href={`${project.href}`}
              className="w-full md:w-1/2 lg:w-1/3 px-2 py-2"
            >
              <BounceCard stack={project.stack}>
                <h3 className="mx-auto text-center text-3xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-center pt-2">{project.description}</p>
                <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-gradient-to-br from-teal-200 to-teal-500 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                  <Image
                    src={`/Projects/${project.image}`}
                    width={700}
                    height={700}
                    className="object-fill rounded-lg"
                  />
                </div>
              </BounceCard>
            </Link>
          );
        })}
      </div>
      <div className="text-center text-xl font-bold">More on the Way.</div>
      <div className="text-center text-xl font-semibold">Stay Tuned....</div>
    </section>
  );
};

const BounceCard = ({ className, children, stack }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-4 md:p-8 ${className}`}
    >
      {children}
      <div className="absolute h-full w-full px-2 py-4 md:p-4 bg-slate-600/95 md:bg-slate-600/85 place-content-center top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="w-full h-fit flex flex-row flex-wrap justify-center items-center">
          {stack.map((lang, index) => (
            <TechStack key={index} lang={lang} delayTime={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = ({ lang }) => {
  return (
    <div className="w-fit h-fit m-2 px-4 py-2 rounded-full bg-white text-center text-black text-sm font-semibold">
      {lang}
    </div>
  );
};
