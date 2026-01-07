import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-viettel-red text-white hover:bg-red-700 border border-transparent',
    outline: 'bg-transparent text-viettel-red border border-viettel-red hover:bg-red-50',
    white: 'bg-white text-viettel-red hover:bg-gray-100 border border-transparent',
    ghost: 'bg-transparent text-gray-700 hover:text-viettel-red hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
