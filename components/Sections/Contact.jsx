"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import ContactForm from "../Contacts/ContactForm";
import ContactSocials from "../Contacts/ContactSocials";
import Footer from "./Footer";

export default function Contact() {
  const [contactState, setContactState] = useState("Form");
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.3
      }}
      className="w-full h-full flex flex-col items-center md:items-end gap-2 justify-between"
    >
      <div className="bg-pearl-800 w-full md:w-1/2 rounded-2xl p-4 flex flex-col h-full">
        <div className="flex flex-row justify-center mb-4">
          <div className="flex flex-row gap-1 px-3 py-2 rounded-full bg-pearl-500">
            {["Form", "Socials"].map((item) => {
              return (
                <motion.button
                  key={item}
                  className={clsx("relative px-3 py-2", {
                    "text-white font-semibold": contactState === item
                  })}
                  onClick={() => setContactState(item)}
                >
                  <p className="relative z-10">{item}</p>
                  {contactState === item && (
                    <motion.span
                      layoutId="Contact-Tabs"
                      className="bg-royalBlue-500 rounded-full absolute inset-0 z-0"
                    ></motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "bg-white p-2 rounded-xl w-full h-full flex flex-col items-center",
            {
              "justify-center": contactState === "Socials",
              "justify-between": contactState === "Form"
            }
          )}
        >
          <AnimatePresence mode="wait">
            {contactState === "Form" && <ContactForm />}
            {contactState === "Socials" && <ContactSocials />}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
