"use client";

import React from "react";
import DecayCard from "../SingleFileComponent/DecayCard";
import SplitText from "../SingleFileComponent/SplitText";

const HeroSection: React.FC = () => {
  return (
    <div className=" flex justify-between gap-50 flex-wrap sm:items-center sm:justify-center">
      <div className="flex items-start  sm:items-center flex-col max-sm:justify-center not-last:space-y-2.5 ">
        <div className="mt-10 text-[56px] max-sm:text-[32px] font-bold max-sm:text-center ">
          <SplitText text="Hi, I’m Rahul" />
        </div>
        <p className="text-[18px] md:text-[20px]  text-gray-200 leading-relaxed max-w-xl">
          Experienced Frontend Developer with a strong focus on building
          scalable, high-performance web applications using modern frameworks
          and libraries. At the L2 level, actively contributes to project
          architecture decisions, leads critical feature development, and
          mentors junior developers. Proven expertise in delivering complex
          real-time systems, integrating blockchain and payment solutions, and
          maintaining code quality through best practices. Passionate about
          crafting clean, maintainable UI with an eye for performance and user
          experience.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="mailto:rahulmaurya9927@gmail.com"
            className="border border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-500 px-6 py-2 rounded-md transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className=" max-sm:hidden">
        <DecayCard
          // width={600}
          // height={300}
          image="/assets/newImage2.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
