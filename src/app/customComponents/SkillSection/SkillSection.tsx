// components/skills/SkillSection.tsx
"use client";

import React from "react";
import { SkillTooltipGrid } from "./SkillTooltipGrid";
import SplitText from "../SingleFileComponent/SplitText";

const SkillSection: React.FC = () => {
  return (
    <section className=" w-full py-20 px-8">
      <div className=" text-[56px] font-bold max-sm:text-[32px] max-sm:text-center">
        <SplitText text="Technical Skills" />
      </div>
      <SkillTooltipGrid />
    </section>
  );
};

export default SkillSection;
