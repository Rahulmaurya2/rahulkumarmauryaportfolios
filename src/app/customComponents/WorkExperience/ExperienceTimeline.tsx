"use client";

import { Timeline } from "@/components/ui/timeline";
import React from "react";
import SplitText from "../SingleFileComponent/SplitText";
import { motion, Variants } from "framer-motion";

export function TimelineDemo() {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const data = [
    {
      title: "December 2023 – Joined Oodles Technologies",
      content: (
        <motion.div
          custom={0} // this value is passed to the `visible` function
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-4 text-neutral-800 dark:text-neutral-200 text-sm md:text-base"
        >
          <p>
            Joined as a{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Frontend Intern
            </span>
            Started working on a production-grade mobile app – Stoken , a crypto
            wallet and swap platform.
          </p>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
              Key Responsibilities:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Implemented wallet management features</li>
              <li>
                Integrated <strong>MoonPay</strong> for fiat payments
              </li>
              <li>Enabled token purchase and swap functionality</li>
            </ul>
          </div>
          <p>
            <span className="font-semibold">Tech Stack:</span> React Native,
            Styled Components, Ethereum Blockchain, MoonPay
          </p>
        </motion.div>
      ),
    },
    {
      title: "March 2024 – June 2025 ",
      content: (
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-4 text-neutral-800 dark:text-neutral-200 text-sm md:text-base"
        >
          <p>
            Promoted to{" "}
            <strong className="font-semibold text-blue-600">
              Associate Frontend Developer-L1
            </strong>
            . Taking ownership of complex frontend modules and real-time apps.
          </p>
          <div>
            <p className="font-semibold mb-1">
              Current Focus: CertDigital Platform
            </p>
            <p>
              A complete certificate minting and management solution with 4
              major panels:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Institute Panel</li>
              <li>User Panel</li>
              <li>Admin Panel</li>
              <li>Embedded Template Editor</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">🔧 Key Features:</p>
            <ul className="list-disc ml-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Solana-based certificate minting</li>
              <li>WebSocket real-time updates</li>
              <li>Dynamic Certificate template editor </li>
              <li>Stripe integration for one-time and subscription payments</li>
            </ul>
          </div>
          <p>
            <span className="font-semibold">Tech Stack:</span> React.js, Styled
            Components, Solana Smart Contracts, Redux, Ant Design, Stripe,
            WebSocket
          </p>
        </motion.div>
      ),
    },
    {
      title: "July 2025 – Present",
      content: (
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-4 text-neutral-800 dark:text-neutral-200 text-sm md:text-base"
        >
          <p>
            Promoted to{" "}
            <strong className="font-semibold text-blue-600">
              Associate Frontend Developer-L2
            </strong>
            . Contributes to project architecture, mentors junior developers,
            and ensures adherence to best coding practices and scalable UI
            patterns.
          </p>
          <p className="font-semibold mb-1">
            Current Focus: CertDigital Platform
          </p>
          <p>
            <span className="font-semibold">Core Competencies:</span> React.js
            Development, Frontend Architecture, Component Design , State
            Management, UI/UX Design,Third Party Integration, Performance
            Optimization, REST API Integration, Micro Frontend
          </p>
          <p>
            <span className="font-semibold">Tech Stack:</span> React.js,
            TypeScript, Next.js, Redux Toolkit, Styled Components, Tailwind CSS,
            ShadCN, WebSocket, Ant Design, Stripe, Smart Contracts Integration,
            REST & Web3 APIs
          </p>
        </motion.div>
      ),
    },

    {
      title: "Additional Contributions",
      content: (
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-4 text-neutral-800 dark:text-neutral-200 text-sm md:text-base"
        >
          <div>
            <p className="font-semibold">Growealth</p>
            <p>
              A Web3-based real estate investment platform. Developed investor
              flow and dynamic profit-sharing logic.
            </p>
          </div>
          <div>
            <p className="font-semibold">FlutterBye</p>
            <p>
              A Web3 tool to create, manage, and distribute tokens, rewards, and
              transfers.
            </p>
          </div>
          <p>
            <span className="font-semibold">Tech Stack:</span> React + Vite,
            TypeScript, Redux Toolkit, Tailwind CSS, ShadCN, TanStack
          </p>
        </motion.div>
      ),
    },
  ];

  return (
    <div id="experience" className="relative w-full overflow-clip px-8 ">
      <div className="text-[44px] md:text-[56px] font-bold  text-neutral-900 dark:text-white max-sm:text-[32px] max-sm:text-center mb-[-10px]">
        <SplitText text="Work Experience" />
      </div>
      <Timeline data={data} />
    </div>
  );
}
