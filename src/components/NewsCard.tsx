import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
  category?: string;
  title: string;
  description: string;
  date: string;
  link?: string;
  image?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  category = 'TIN TỨC',
  title,
  description,
  date,
  link = '#',
  image
}) => {
  return (
    <div className="bg-white flex flex-col h-full group">
        {image && (
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 mb-6">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
        )}
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">
          {category}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-viettel-red transition-colors">
          <Link href={link}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-xs text-gray-400 font-medium">{date}</span>
            <Link 
                href={link} 
                className="text-xs font-bold text-viettel-red border border-viettel-red rounded-full px-4 py-1.5 hover:bg-viettel-red hover:text-white transition-all uppercase"
                style={{ borderRadius: '9999px' }} // Explicit override for button style in news card specifically
            >
                Xem thêm
            </Link>
        </div>
      </div>
    </div>
  );
};
