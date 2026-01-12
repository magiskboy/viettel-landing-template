"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface ViewportRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

export const ViewportReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
}: ViewportRevealProps) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={classNames(className)}
    >
      {children}
    </motion.div>
  );
};
