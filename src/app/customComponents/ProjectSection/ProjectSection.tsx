import React from "react";
import ChromaGrid from "../SingleFileComponent/ChromaGrid";
import SplitText from "../SingleFileComponent/SplitText";
import CertDigitalImage from "../../../../public/assets/certDigital.png"; // Assuming you have an image for CertDigital

const ProjectSection: React.FC<{}> = () => {
  const items = [
    {
      image:
        "https://i.postimg.cc/MpxNS8SC/17bbd4456321f11ae8d9f4320d3cde5441c06d7d-removebg-preview.jpg",
      title: "CertDigital",
      subtitle: "Blockchain-based Certificate Management System",
      handle: "NextGen Certificates Generation Platform",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://certDigital.com/",
    },
    {
      image:
        "https://i.postimg.cc/B65xTR80/dfd11e4f5ff581e47c679f4f12457e9723b1e4af-removebg-preview.jpg",
      title: "Growealth",
      subtitle: "Invest in Real Estate with Confidence",
      handle: "RealState Investment Platform",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://officialgrowealth.com/",
    },

    {
      image:
        "https://i.postimg.cc/Z5bGthPW/e38bfc124b1b41b5dc1993de691d4a245ad3592c-1-removebg-preview.jpg",
      title: "FlutterBye",
      subtitle: "Launch and Distribute Your Own Token",
      handle: "Create Token and Share",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://dev.flutterbye.io/",
    },
  ];

  return (
    <div className="   px-8 mb-20" id="projects">
      <div className=" text-[56px] font-bold max-sm:text-[32px] max-sm:text-center ">
        <SplitText text="Projects" />
      </div>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default ProjectSection;
