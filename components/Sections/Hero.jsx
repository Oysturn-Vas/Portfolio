"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import DottedButton from "../Other/DottedButton";
import RedoAnimText from "../Typing/RedoAnimText";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import NeuButton from "../Other/NeuButton";
export default function Hero({ setChangeSection, ...props }) {
  return (
    <div className="w-full h-full flex flex-col justify-end pb-4 md:pb-0 md:justify-center ">
      <span className="overflow-hidden">
        <motion.div
          className="flex flex-col justify-end items-start md:px-3 md:justify-center"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 2,
            delay: 1
          }}
        >
          <h1 className="h-12 pt-4 mb-2">
            <RedoAnimText
              delay={0.8}
              text={[
                "Hello",
                "你好",
                "नमस्ते",
                "Hello",
                "Halo",
                "Olá",
                "Hello",
                "こんにちは"
              ]}
              classes="text-5xl italic font-semibold tracking-wide text-royalBlue-700"
            />
          </h1>
          <h2 className="my-2 text-3xl font-bold text-royalBlue-500 text-nowrap">
            <span className="text-4xl">I</span>'m{" "}
            <span className="text-5xl">O</span>
            ysturn <span className="text-5xl">V</span>as
          </h2>
          <h3 className="text-royalBlue-400 font-semibold text-xl mb-3">
            Fullstack & 3D Developer
          </h3>
          <div className="flex flex-row flex-wrap gap-4 justify-start sm:justify-center items-center mt-1 mb-3">
            <div className="flex flex-row justify-center items-center gap-3">
              <a target="_blank" href="https://github.com/Oysturn-Vas">
                <NeuButton
                  icon={<FaGithub size={"1.5em"} />}
                  color={"text-black"}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/oysturn-vas">
                <NeuButton
                  icon={<SiLinkedin size={"1.5em"} />}
                  color={"text-black"}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/build.with.ovs/"
              >
                <NeuButton
                  icon={<FaInstagram size={"1.5em"} />}
                  color={"text-black"}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </span>
    </div>
  );
}
