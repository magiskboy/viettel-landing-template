import React from 'react';

import classNames from 'classnames';

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
  // Abstract grid pattern based on Viettel's design style
  // Using pure CSS grid to create the red/white block layout
  return (
    <div className={classNames(
      "relative w-full flex flex-wrap bg-viettel-red",
      fullHeight ? "min-h-[calc(100vh-4rem)]" : "min-h-[600px]",
      className
    )}>
      
      {/* LEFT CONTENT AREA */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
        <div className="inline-block">
            <span 
                className="text-white text-sm font-bold uppercase border-b-2 border-white pb-1 cursor-pointer hover:opacity-80 transition-opacity tracking-widest"
                onClick={onCtaClick}
            >
                {ctaText}
            </span>
        </div>
      </div>

      {/* RIGHT GRID PATTERN AREA */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
        {/* CSS GRID LAYOUT for Abstract Blocks */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0">
             
             {/* Block 1: Red Darker Overlay */}
             <div className="col-span-2 row-span-2 bg-[#D1002C]"></div>
             
             {/* Block 2: White/Transparent with Border */}
             <div className="col-span-2 row-span-1 bg-white/10 backdrop-blur-sm border-l border-white/20"></div>
             
             {/* Block 3: Pure Viettel Red (invisible usually but fills gap) */}
             <div className="col-span-1 row-span-1 bg-viettel-red"></div>
             
             {/* Block 4: White Box (Accent) */}
             <div className="col-span-1 row-span-1 bg-white"></div>
             
             {/* Block 5: Large Red Area */}
             <div className="col-span-2 row-span-2 bg-[#C40029]"></div>
             
             {/* Block 6: Light Red */}
             <div className="col-span-2 row-span-1 bg-[#FF3355]"></div>
             
             {/* Block 7-8: Bottom Row */}
             <div className="col-span-1 row-span-1 bg-white/5"></div>
             <div className="col-span-3 row-span-1 bg-[#B30026]"></div>
        </div>

        {/* Optional: Overlay graphic lines if needed for more texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>
    </div>
  );
};
