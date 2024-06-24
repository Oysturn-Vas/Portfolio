"use client";
import { AnimatePresence, motion } from "framer-motion";
export default function ScrollFooter({ activeSection, ...props }) {
  return (
    <AnimatePresence>
      {activeSection < 4 && (
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 2,
            delay: 4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              delay: 0.5
            }
          }}
          className="w-screen fixed flex flex-row items-center justify-center mx-auto bottom-2 md:bottom-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
          <p className="px-2 text-base md:text-lg font-semibold italic">
            Scroll to see the magic!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
