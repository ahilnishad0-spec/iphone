import React from 'react';
import { ScreenType } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScreen: (screen: ScreenType) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectScreen,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'iPhone 17 Overview', screen: 'overview' as ScreenType },
    { label: 'Design & Craftsmanship', screen: 'design' as ScreenType },
    { label: 'A19 Chip & Performance', screen: 'performance' as ScreenType },
    { label: '48MP Dual Fusion Camera', screen: 'camera' as ScreenType },
    { label: 'Buy iPhone 17 & 17 Pro', screen: 'shop' as ScreenType },
  ];

  const generalItems = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support',
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#131313]/95 backdrop-blur-3xl animate-in fade-in duration-300">
      {/* Header Bar */}
      <div className="h-14 px-6 flex items-center justify-between border-b border-white/10">
        <span className="font-['Hanken_Grotesk'] text-white font-bold tracking-wider">
          MENU
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-end text-white hover:text-[#86868B] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[28px]">close</span>
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8 max-w-lg mx-auto w-full">
        {/* iPhone 17 Dedicated Section */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0066CC]">
            Featured Experience
          </span>
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onSelectScreen(item.screen);
                  onClose();
                }}
                className="text-left font-['Hanken_Grotesk'] text-[24px] font-semibold text-white hover:text-[#0066CC] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[#86868B] group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10 my-2"></div>

        {/* Global Apple Navigation */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868B]">
            Apple Ecosystem
          </span>
          <div className="grid grid-cols-2 gap-3">
            {generalItems.map((item) => (
              <div
                key={item}
                onClick={onClose}
                className="text-[#c4c7c8] hover:text-white text-[16px] py-1 cursor-pointer transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
