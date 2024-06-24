"use client";
import { SECTION_IDS } from "@/DETAILS";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Menu({ activeSection, handleMenu }) {
  const initialCircle = `circle(1.6% at 91.5% 7.5%)`;
  const menuVars = {
    initial: {
      clipPath: initialCircle
    },
    animate: {
      clipPath: `circle(127.5% at 91% 10%)`,
      transition: {
        duration: 0.7,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      clipPath: initialCircle,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    // left-0 right-0 -top-4
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-screen h-screen bg-royalBlue-600 absolute origin-top left-0 right-0 -top-4"
    >
      <motion.div className="flex flex-col items-center justify-center h-screen">
        {SECTION_IDS.map((section, index) => {
          return (
            <motion.button
              key={section}
              initial={{
                y: "30vh"
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}
              className={clsx("text-3xl font-medium uppercase p-2 m-2", {
                "text-slate-50 border-t-4": activeSection == index
              })}
              onClick={() => {
                handleMenu(index, true);
              }}
            >
              {section}
            </motion.button>
          );
        })}
        {/* <MenuItems
          setMenuAction={setMenuAction}
          activeSectionCss={activeSection == 0 && activeSectionCss}
          href="Hero"
        >
          Home
        </MenuItems>
        <MenuItems
          setMenuAction={setMenuAction}
          activeSectionCss={activeSection == 1 && activeSectionCss}
          href="About"
        >
          About
        </MenuItems>
        <MenuItems
          setMenuAction={setMenuAction}
          activeSectionCss={activeSection == 2 && activeSectionCss}
          href="Skills"
        >
          Skills
        </MenuItems>
        <MenuItems
          setMenuAction={setMenuAction}
          activeSectionCss={activeSection == 3 && activeSectionCss}
          href="Projects"
        >
          Projects
        </MenuItems>
        <MenuItems
          setMenuAction={setMenuAction}
          activeSectionCss={activeSection >= 4 && activeSectionCss}
          href="Contact"
        >
          Contact
        </MenuItems> */}
      </motion.div>
    </motion.div>
  );
}
