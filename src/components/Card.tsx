import React from 'react';
import classNames from 'classnames';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, image, className }) => {
  return (
    <div className={classNames('bg-white p-6 md:p-8 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 group', className)}>
      {image && (
        <div className="mb-6 overflow-hidden h-48 w-full bg-gray-100">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
        </div>
      )}
      {icon && (
        <div className="mb-6 text-viettel-red w-12 h-12">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-viettel-red transition-colors">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow">
          {description}
        </p>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a href="#" className="inline-flex items-center text-viettel-red font-bold text-sm uppercase hover:tracking-wider transition-all">
          Xem chi tiết 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </div>
  );
};
