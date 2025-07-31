"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { skills } from "../data/skills";

export const SkillTooltipGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 8 };

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-30, 30]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const halfWidth = (e.currentTarget as HTMLElement).offsetWidth / 2;
    x.set(e.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="w-full">
      {/* Scrollable container only on max-sm screens */}
      <div className="hidden  h-[125px] max-sm:flex overflow-x-auto scroll-smooth gap-4 p-4 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-800 rounded-xl">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex-shrink-0 group relative flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900 p-3 shadow-md transition-transform hover:scale-[1.02] min-w-[160px]"
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <AnimatePresence mode="wait">
              {hoveredId === skill.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.75 }}
                  animate={{
                    opacity: 1,
                    y: -10,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 12 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.75 }}
                  style={{ translateX, rotate }}
                  className="absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[240px] -translate-x-1/2 rounded-md bg-gray-900 px-4 py-2 text-sm text-white shadow-xl"
                >
                  <div className="font-semibold text-emerald-400">
                    {skill.name}
                  </div>
                  <div className="text-xs text-white opacity-80">
                    {skill.usedIn}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {typeof skill.image === "string" ? (
              <img
                src={skill.image}
                alt={skill.name}
                onMouseMove={handleMouseMove}
                className="h-10 w-10 rounded-md object-contain transition-transform group-hover:scale-110"
              />
            ) : (
              <span onMouseMove={handleMouseMove} className="h-10 w-10">
                {React.createElement(skill.image, {
                  className: "h-10 w-full",
                })}
              </span>
            )}

            <p className="text-sm font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Regular grid for larger screens */}
      <div className="hidden sm:flex flex-wrap items-center justify-evenly gap-4 rounded-4xl border border-gray-700 p-5">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group relative flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900 p-3 shadow-md hover:scale-[1.02] transition-transform"
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <AnimatePresence mode="wait">
              {hoveredId === skill.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.75 }}
                  animate={{
                    opacity: 1,
                    y: -10,
                    scale: 1,
                    transition: { type: "spring", stiffness: 200, damping: 12 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.75 }}
                  style={{ translateX, rotate }}
                  className="absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[240px] -translate-x-1/2 rounded-md bg-gray-900 px-4 py-2 text-sm text-white shadow-xl"
                >
                  <div className="font-semibold text-emerald-400">
                    {skill.name}
                  </div>
                  <div className="text-xs text-white opacity-80">
                    {skill.usedIn}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {typeof skill.image === "string" ? (
              <img
                src={skill.image}
                alt={skill.name}
                onMouseMove={handleMouseMove}
                className="h-10 w-10 rounded-md object-contain transition-transform group-hover:scale-110"
              />
            ) : (
              <span onMouseMove={handleMouseMove} className="h-10 w-10">
                {React.createElement(skill.image, {
                  className: "h-10 w-full",
                })}
              </span>
            )}

            <p className="text-base font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
