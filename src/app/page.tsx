"use client";
import { NavbarNew } from "./customComponents/Navbar/Navbar";
import HeroSection from "./customComponents/HeroSection/HeroSection";
import ProjectSection from "./customComponents/ProjectSection/ProjectSection";
import { TimelineDemo } from "./customComponents/WorkExperience/ExperienceTimeline";
import { Education } from "./customComponents/Education/Education";
import Footer from "./customComponents/Footer/Footer";
import SkillSection from "./customComponents/SkillSection/SkillSection";
import SplashCursor from "./customComponents/SplashCursor/SplashCursor";
export default function Home() {
  return (
    <>
      <div className=" flex gap-5 flex-col px-2">
        <NavbarNew />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <TimelineDemo />
        <Education />
        <Footer />
      </div>

      <SplashCursor />
    </>
  );
}
