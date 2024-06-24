"use client";
import { TECH_STACK, SKILLS } from "@/DETAILS";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";
import HoverImageText from "../Skill/HoverImageText";
import { FaBriefcase, FaCode, FaFileContract } from "react-icons/fa";
import ProgressBar from "../Skill/ProgressBar";
import TechStack from "../Skill/TechStack";
import WorkExperience from "../Skill/WorkExperience";
import Publications from "../Skill/Publications";

export default function Skills() {
  const marqueeSpeed = 35;
  const marqueeSize = isMobile ? 30 : 40;

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-6 md:grid-cols-4 md:grid-rows-4 gap-4 p-4">
      <TechStack />
      <WorkExperience />
    </div>
  );
}
