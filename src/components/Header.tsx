import React from 'react';
import { Button } from './Button';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="Viettel Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Về Viettel', 'Dịch vụ', 'Khách hàng', 'Tin tức', 'Liên hệ'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-gray-600 hover:text-viettel-red font-medium text-sm uppercase transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA / Utilities */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">Đăng nhập</Button>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
