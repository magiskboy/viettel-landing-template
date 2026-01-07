import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string; // URL
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Tìm hiểu thêm',
  backgroundImage,
}) => {
  return (
    <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-start bg-gray-100 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundImage ? 'transparent' : '#F8F6F6'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <span className="block text-viettel-red font-bold uppercase tracking-widest mb-4">
            Viettel - Theo cách của bạn
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Button size="lg">{ctaText}</Button>
            <Button variant="outline" size="lg">Liên hệ ngay</Button>
          </div>
        </div>
      </div>

      {/* Decorative Red Curve (Simplified Viettel branding element) */}
      <div className="absolute -bottom-10 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         {/* Abstract SVG shape if needed */}
      </div>
    </div>
  );
};
