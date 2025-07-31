import React from "react";
import SplitText from "../SingleFileComponent/SplitText";
import SpotlightCard from "../SingleFileComponent/SpotlightCard";

export const Education = () => {
  return (
    <div className="px-8">
      <div className=" text-[56px] text-start font-bold max-sm:text-[32px] max-sm:text-center">
        <SplitText text="Education" />
      </div>
      <div>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="text-white space-y-2 p-4">
            <h3 className="text-2xl max-sm:text-[18px] font-semibold">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-lg max-sm:text-[16px]">
              Noida Institute of Engineering and Technology (NIET), Greater
              Noida
            </p>
            <p className="text-sm text-gray-400">August 2019 – June 2023</p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
