import React from 'react';
import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'red';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  bg = 'white',
  id 
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-viettel-bg', // #F8F6F6
    red: 'bg-viettel-red text-white',
  };

  return (
    <section id={id} className={classNames('py-16 md:py-24', bgColors[bg], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};
