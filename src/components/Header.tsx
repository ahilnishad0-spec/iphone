import React from 'react';
import { ScreenType } from '../types';
import { IMAGES } from '../data/productData';

interface HeaderProps {
  activeScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onSelectScreen,
  onOpenMenu,
  onOpenSearch,
  cartCount,
}) => {
  const navTabs: { id: ScreenType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'design', label: 'Design' },
    { id: 'performance', label: 'Performance' },
    { id: 'camera', label: 'Camera' },
    { id: 'shop', label: 'Buy' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-[#131313]/80 backdrop-blur-2xl border-b border-white/5 transition-all">
      {/* Top Primary Bar */}
      <div className="h-14 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Menu Toggle */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="w-10 h-10 flex items-center justify-start text-[#c4c7c8] hover:text-white transition-opacity active:opacity-50 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        {/* Center Brand / Model */}
        <button
          onClick={() => onSelectScreen('overview')}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <img
            alt="Profile / Apple Icon"
            className="w-7 h-7 rounded-full object-cover grayscale brightness-125 group-hover:scale-105 transition-transform"
            src={IMAGES.profileAvatar}
          />
          <span className="font-['Hanken_Grotesk'] text-[14px] font-semibold tracking-widest uppercase text-[#e2e2e2] group-hover:text-white transition-colors">
            iPhone 17 Pro
          </span>
        </button>

        {/* Right Actions: Search & Cart / Buy */}
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="w-10 h-10 flex items-center justify-center text-[#c4c7c8] hover:text-white transition-opacity active:opacity-50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          
          <button
            onClick={() => onSelectScreen('shop')}
            aria-label="Shopping Bag"
            className="relative w-10 h-10 flex items-center justify-center text-[#c4c7c8] hover:text-white transition-opacity active:opacity-50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-2 right-2 w-4 h-4 bg-[#0066CC] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Subnav Screen Switcher */}
      <div className="border-t border-white/5 bg-[#161617]/90 px-4 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-1 sm:gap-2">
          {navTabs.map((tab) => {
            const isActive = activeScreen === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectScreen(tab.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#131313] font-semibold shadow-md shadow-white/10 scale-100'
                    : 'text-[#86868B] hover:text-[#e2e2e2] hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
