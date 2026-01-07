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
    <div className="bg-white flex flex-col h-full group hover:shadow-lg transition-shadow duration-300">
        <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src={image || "https://placehold.co/600x400/eeeeee/cccccc?text=Viettel+News"} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
        </div>
      <div className="flex flex-col flex-grow p-6">
        <span className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-viettel-red transition-colors line-clamp-2">
          <Link href={link}>
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
            <span className="text-xs text-gray-400 font-medium">{date}</span>
            <Link 
                href={link} 
                className="text-xs font-bold text-viettel-red border border-viettel-red px-5 py-2 hover:bg-viettel-red hover:text-white transition-all uppercase tracking-wide"
            >
                Xem thêm
            </Link>
        </div>
      </div>
    </div>
  );
};
