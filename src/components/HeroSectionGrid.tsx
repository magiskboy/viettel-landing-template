"use client";

import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { AnimatedRevealText } from './AnimatedRevealText';

interface HeroSectionGridProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  fullHeight?: boolean;
}

export const HeroSectionGrid: React.FC<HeroSectionGridProps> = ({
  title,
  subtitle,
  ctaText = 'TÌM HIỂU THÊM',
  onCtaClick,
  className,
  fullHeight = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const blockVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: 'spring' as const, 
        damping: 15 
      } 
    },
  };

  return (
    <div className={classNames(
      "relative w-full flex flex-wrap bg-[#ee0033] overflow-hidden",
      fullHeight ? "min-h-[calc(100vh-4rem)]" : "min-h-[600px]",
      className
    )}>
      
      {/* LEFT CONTENT AREA */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-20"
      >
        <div className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase leading-tight">
          <AnimatedRevealText text={title} animation="slide-up" />
        </div>
        
        {subtitle && (
          <motion.p 
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 0.9, y: 0, transition: { delay: 0.8 } }
            }}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 1.2 } }
            }}
            className="inline-block"
        >
            <span 
                className="text-white text-sm font-bold uppercase border-b-2 border-white pb-1 cursor-pointer hover:opacity-80 transition-opacity tracking-widest"
                onClick={onCtaClick}
            >
                {ctaText}
            </span>
        </motion.div>
      </motion.div>

      {/* RIGHT GRID PATTERN AREA */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0"
        >
             {/* Block 1: Red Darker Overlay */}
             <motion.div 
                variants={blockVariants} 
                animate={{ 
                    y: [0, -10, 0],
                    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="col-span-2 row-span-2 bg-[#D1002C] hover:bg-[#b00025] transition-colors duration-500"
             ></motion.div>
             
             {/* Block 2: White/Transparent with Border */}
             <motion.div 
                variants={blockVariants} 
                animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    transition: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
                className="col-span-2 row-span-1 bg-white/10 backdrop-blur-sm border-l border-white/20"
             ></motion.div>
             
             {/* Block 3: Pure Viettel Red */}
             <motion.div 
                variants={blockVariants} 
                className="col-span-1 row-span-1 bg-[#ee0033]"
             ></motion.div>
             
             {/* Block 4: White Box (Accent) - Persistent Pulse */}
             <motion.div 
                variants={blockVariants} 
                whileHover={{ scale: 1.05, zIndex: 10 }}
                animate={{ 
                    scale: [1, 1.03, 1],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="col-span-1 row-span-1 bg-white"
             ></motion.div>
             
             {/* Block 5: Large Red Area */}
             <motion.div 
                variants={blockVariants} 
                animate={{ 
                    x: [0, 5, 0],
                    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="col-span-2 row-span-2 bg-[#C40029] hover:bg-[#a30022] transition-colors duration-500"
             ></motion.div>
             
             {/* Block 6: Light Red - Constant Flow */}
             <motion.div 
                variants={blockVariants} 
                animate={{ 
                    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="col-span-2 row-span-1 bg-[#FF3355]"
             ></motion.div>
             
             {/* Block 7-8: Bottom Row */}
             <motion.div variants={blockVariants} className="col-span-1 row-span-1 bg-white/5"></motion.div>
             <motion.div 
                variants={blockVariants} 
                animate={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="col-span-3 row-span-1 bg-[#B30026]"
             ></motion.div>
        </motion.div>

        {/* Optional: Overlay graphic lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>
    </div>
  );
};

