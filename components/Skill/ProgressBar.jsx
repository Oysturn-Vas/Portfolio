"use client";
import { motion } from "framer-motion";
import NumberAnimation from "./NumberAnimation";
export default function ProgressBar({ language, percentage, index }) {
  return (
    <motion.div
      className="w-full flex flex-row items-center"
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
        delay: 0.7 + index * 0.2
      }}
    >
      <div className="w-1/3 md:w-1/4 text-lg font-semibold">{language}</div>
      <div className="w-2/3 md:w-3/4 bg-purple-500/20 h-4 rounded-full overflow-hidden">
        <motion.div
          initial={{
            width: 0
          }}
          whileInView={{
            width: `${percentage}%`
          }}
          transition={{
            duration: 1.3,
            delay: 1.2 + index * 0.4
          }}
          // style={{ width: `${percentage}%` }}
          className="bg-royalBlue-500 flex justify-center items-center h-full text-xs text-white font-bold"
        >
          <NumberAnimation from={0} to={percentage} />%
        </motion.div>
      </div>
    </motion.div>
  );
}
