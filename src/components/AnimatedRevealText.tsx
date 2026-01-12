"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import classNames from "classnames";

interface AnimatedRevealTextProps {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  animation?: "fade" | "slide-up" | "typewriter";
  delay?: number;
}

export const AnimatedRevealText = ({
  text,
  className,
  el: Wrapper = "p",
  animation = "slide-up",
  delay = 0,
}: AnimatedRevealTextProps) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const childIdx: Variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 20 : 0,
      x: animation === "typewriter" ? -10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={classNames("flex flex-wrap gap-x-[0.25em]", className)}
      >
        {words.map((word, index) => (
          <motion.span variants={childIdx} key={index} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
