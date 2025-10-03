"use client";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

export default function About() {
  const aboutVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="w-full h-full flex flex-col items-end justify-end pb-4 md:justify-center">
      <div className="w-fit md:h-full md:w-1/2 p-4 bg-pearl-800 rounded-3xl flex flex-col items-end justify-center">
        <motion.span
          variants={aboutVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full flex flex-row items-start justify-center">
            <h1 className="text-2xl md:text-3xl text-royalBlue-200 font-bold italic text-center md:text-left">
              Software Engineer by <span className="text-yellow-400">day,</span>
              <br />
              3D Web and AI Enthusiast by{" "}
              <span className="text-richBlack-400">night.</span>
            </h1>
          </div>
          <p className="w-fit py-4 text-sm md:text-base text-center font-semibold text-outerSpace-500">
            With <span className="md:text-2xl md:mx-1 italic">3</span> years in
            tech, I blend code and creativity to craft interactive apllications.
            When not coding, I'm lost in{" "}
            <a
              data-tooltip-id="currently-reading-book"
              className="md:underline"
            >
              non-fiction books
            </a>
            ,{" "}
            <a data-tooltip-id="blender-models" className="md:underline">
              modeling in Blender
            </a>
            , or immersed in the high-speed world of{" "}
            <a data-tooltip-id="formula-one" className="md:underline">
              Formula One
            </a>
            .
          </p>
          <Tooltip id="currently-reading-book">
            <div className="flex flex-col items-center justify-center">
              <p className="italic font-medium">Currently Reading</p>
              <p className="italic font-medium">
                Don't Believe Everything You Think
              </p>
              <p className="italic font-medium">- Joseph Nguyen</p>
            </div>
          </Tooltip>
          <Tooltip id="blender-models" place="left">
            <div className="flex flex-row items-center justify-center">
              <p className="italic font-medium">
                Blender Creations - Coming Soon!
              </p>
            </div>
          </Tooltip>
          <Tooltip id="formula-one" place="bottom">
            <p className="italic font-medium">
              Mclaren Racing <br /> 81 Oscar Piastri
            </p>
          </Tooltip>
          <div className="flex flex-row items-center justify-center w-full mt-2">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg text-sm font-medium bg-outerSpace text-white hover:bg-seashell-500 hover:text-royalBlue-500 hover:border-outerSpace hover:border-2 flex flex-row items-center justify-center"
              onClick={() => {
                const link = document.createElement("a");
                link.download = "OYSTURN_VAS_Resume.pdf";
                link.href = "/Documents/OYSTURN_VAS_CV.pdf";
                link.click();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              My Resume
            </motion.button>
          </div>
        </motion.span>
      </div>
    </div>
  );
}
