"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

export const MagneticButton = ({ children, className, onClick, variant = "primary" }: MagneticButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classNames(
        "relative px-8 py-3 font-medium uppercase tracking-wider overflow-hidden group",
        {
          "bg-[var(--viettel-red)] text-white hover:bg-red-700": variant === "primary",
          "border-2 border-[var(--viettel-red)] text-[var(--viettel-red)] hover:bg-[var(--viettel-red)] hover:text-white": variant === "outline",
        },
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Ripple/Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ borderRadius: "50%", originX: 0.5, originY: 0.5 }}
      />
    </motion.button>
  );
};
