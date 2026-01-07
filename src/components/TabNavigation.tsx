"use client";
import React, { useState } from 'react';
import classNames from 'classnames';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabNavigationProps {
  items: TabItem[];
  variant?: 'history' | 'default';
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ items, variant = 'default' }) => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div className="w-full">
      {/* Tab Header */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={classNames(
              "transition-all duration-300 outline-none",
              variant === 'history' 
                ? "text-3xl md:text-5xl font-bold" 
                : "text-lg md:text-xl font-bold uppercase tracking-wide py-2 border-b-2"
            )}
            style={{
                color: activeTab === item.id ? '#EE0033' : (variant === 'history' ? '#E0E0E0' : '#757575'),
                borderColor: variant === 'default' && activeTab === item.id ? '#EE0033' : 'transparent'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
        {items.find(item => item.id === activeTab)?.content}
      </div>
    </div>
  );
};
