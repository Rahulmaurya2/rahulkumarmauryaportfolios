"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";

export const MovingBorder = ({
  duration = 3000,
  rx,
  ry,
  className,
  ...otherProps
}: {
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`absolute h-full w-full pointer-events-none ${className}`}
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          stroke="#313136" // change color as needed
          strokeWidth="2"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
          zIndex: 0,
        }}
      >
        <div className="w-1 h-1 bg-primary rounded-full" />
      </motion.div>
    </>
  );
};
