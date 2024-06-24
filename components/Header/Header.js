"use client";
import { SECTION_IDS } from "@/DETAILS";
import {
  AnimatePresence,
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import {
  currentSectionAtom,
  hiddenNav,
  mobileMenu,
  navClick
} from "@/actions/GlobalState";
import { useAtom } from "jotai";
import Menu from "./Menu";
import clsx from "clsx";
import MenuButton from "./MenuButton";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useAtom(currentSectionAtom);
  const [currNavClick, setNavClick] = useAtom(navClick);
  const [currMobileMenu, setMobileMenu] = useAtom(mobileMenu);
  const [hiddenNavValue, setHiddenNavValue] = useAtom(hiddenNav);

  function handleSectionChange(index, mobile = false) {
    console.log("Handle Section Change Triggered");
    if (activeSection != index) {
      setNavClick(true);
    }
    if (mobile) {
      setMobileMenu((pv) => !pv);
    }
    setTimeout(() => {
      setActiveSection(index);
    }, 250);
  }

  return (
    <>
      <header className="mx-auto my-0 fixed top-0 left-0 right-0 bg-transparent py-4 md:max-w-2xl sm:max-w-full z-10">
        <motion.nav
          variants={{
            hidden: {
              opacity: 0,
              y: -100
            },
            visible: {
              opacity: 100,
              y: 0
            }
          }}
          initial="hidden"
          animate={hiddenNavValue ? "hidden" : "visible"}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="rounded-full shadow-lg bg-royalBlue-600/80 backdrop-blur-lg mobile-blur"
          aria-label="Global"
        >
          <div className="flex flex-row items-center justify-center h-12">
            <motion.div
              initial={{
                y: "-10vw"
              }}
              animate={{ y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.3,
                rotate: "180deg",
                transition: {
                  duration: 0.5
                }
              }}
              className="flex justify-start m-4 flex-auto md:flex-none"
            >
              <Image
                src="/Assets/ov.png"
                alt={"Logo"}
                width={40}
                height={50}
                className="h-4"
              />
            </motion.div>
            <div className="flex flex-row justify-end m-4 items-center md:justify-evenly md:basis-5/6">
              <div className="hidden md:flex flex-row flex-auto justify-evenly items-center">
                {SECTION_IDS.map((section, index) => {
                  return (
                    <motion.button
                      key={section}
                      className={clsx(
                        "relative flex items-center p-1 rounded-full text-base font-medium",
                        {
                          "text-richBlack": activeSection == index,
                          "text-seashell": activeSection != index
                        }
                      )}
                      initial={{
                        opacity: 0
                      }}
                      animate={{
                        opacity: 100
                      }}
                      transition={{
                        duration: 1,
                        delay: 1
                      }}
                      whileHover={{
                        scale: 1.2
                      }}
                      onClick={() => {
                        handleSectionChange(index);
                      }}
                    >
                      <p className="relative z-10 mx-2">{section}</p>
                      {activeSection === index && (
                        <motion.span
                          layoutId="Header-Tabs"
                          className="bg-royalBlue-800 shadow-md shadow-slate-600 rounded-full absolute inset-0 z-0"
                        ></motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
              <div className="flex items-center md:hidden">
                <MenuButton />
                <AnimatePresence>
                  {currMobileMenu && (
                    <Menu
                      activeSection={activeSection}
                      handleMenu={handleSectionChange}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
}
