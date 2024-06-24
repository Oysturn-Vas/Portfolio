"use client";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

const Section = ({ children, idProp, ...props }) => {
  let defaultClass = `h-dvh w-dvw p-8 md:px-10 max-w-screen-2xl mx-auto`;
  if (idProp == "Skills") {
    defaultClass = `h-dvh w-dvw max-w-screen-2xl mx-auto`;
  }
  if (idProp == "Contact") {
    defaultClass = `h-dvh w-dvw pt-8 px-8 md:px-10 max-w-screen-2xl mx-auto`;
  }
  return (
    <section id={idProp} className={defaultClass}>
      {children}
    </section>
  );
};

export default function Interface({ setChangeSection, ...props }) {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section idProp={"Hero"}>
        <Hero setChangeSection={setChangeSection} />
      </Section>
      <Section idProp={"About"}>
        <About />
      </Section>
      <Section idProp={"Skills"}>
        <Skills />
      </Section>
      <Section idProp={"Projects"}>
        <Projects />
      </Section>
      <Section idProp={"Contact"}>
        <Contact />
      </Section>
    </div>
  );
}
