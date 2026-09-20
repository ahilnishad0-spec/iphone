import React from 'react';
import { ScreenType } from '../types';

interface BottomNavProps {
  activeScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeScreen,
  onSelectScreen,
  cartCount,
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#131313]/85 backdrop-blur-2xl border-t border-white/5 md:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        {/* Home */}
        <button
          onClick={() => onSelectScreen('overview')}
          className={`flex flex-col items-center justify-center gap-0.5 transition-all w-16 h-14 cursor-pointer ${
            activeScreen === 'overview'
              ? 'text-white'
              : 'text-[#86868B] hover:text-[#c4c7c8]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{
              fontVariationSettings:
                activeScreen === 'overview' ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            home_app_logo
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-tighter">
            Home
          </span>
        </button>

        {/* iPhone (Screens selector) */}
        <button
          onClick={() => {
            if (activeScreen === 'design') onSelectScreen('performance');
            else if (activeScreen === 'performance') onSelectScreen('camera');
            else if (activeScreen === 'camera') onSelectScreen('design');
            else onSelectScreen('design');
          }}
          className={`flex flex-col items-center justify-center gap-0.5 transition-all w-16 h-14 cursor-pointer ${
            ['design', 'performance', 'camera'].includes(activeScreen)
              ? 'text-white'
              : 'text-[#86868B] hover:text-[#c4c7c8]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{
              fontVariationSettings: ['design', 'performance', 'camera'].includes(
                activeScreen
              )
                ? "'FILL' 1"
                : "'FILL' 0",
            }}
          >
            smartphone
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-tighter">
            iPhone
          </span>
        </button>

        {/* Shop / Buy */}
        <button
          onClick={() => onSelectScreen('shop')}
          className={`relative flex flex-col items-center justify-center gap-0.5 transition-all w-16 h-14 cursor-pointer ${
            activeScreen === 'shop'
              ? 'text-white'
              : 'text-[#86868B] hover:text-[#c4c7c8]'
          }`}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{
              fontVariationSettings:
                activeScreen === 'shop' ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            shopping_bag
          </span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-3 w-4 h-4 bg-[#0066CC] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-semibold uppercase tracking-tighter">
            Shop
          </span>
        </button>
      </div>
    </nav>
  );
};
