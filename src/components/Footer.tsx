import React from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  onSelectScreen: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectScreen }) => {
  return (
    <footer className="w-full py-16 px-6 bg-[#0e0e0e] border-t border-white/5 flex flex-col gap-8 pb-28 md:pb-16 text-left">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:justify-between gap-10">
        {/* Navigation Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Explore iPhone
            </h4>
            <button
              onClick={() => onSelectScreen('overview')}
              className="text-[#86868B] text-[14px] hover:text-white transition-colors text-left cursor-pointer"
            >
              iPhone 17 Overview
            </button>
            <button
              onClick={() => onSelectScreen('design')}
              className="text-[#86868B] text-[14px] hover:text-white transition-colors text-left cursor-pointer"
            >
              Design & Colors
            </button>
            <button
              onClick={() => onSelectScreen('performance')}
              className="text-[#86868B] text-[14px] hover:text-white transition-colors text-left cursor-pointer"
            >
              A19 Chip & Battery
            </button>
            <button
              onClick={() => onSelectScreen('camera')}
              className="text-[#86868B] text-[14px] hover:text-white transition-colors text-left cursor-pointer"
            >
              48MP Dual Fusion Camera
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Shop & Learn
            </h4>
            <button
              onClick={() => onSelectScreen('shop')}
              className="text-[#86868B] text-[14px] hover:text-white transition-colors text-left cursor-pointer"
            >
              Buy iPhone 17
            </button>
            <a href="#store" className="text-[#86868B] text-[14px] hover:text-white transition-colors">
              Store
            </a>
            <a href="#mac" className="text-[#86868B] text-[14px] hover:text-white transition-colors">
              Mac
            </a>
            <a href="#ipad" className="text-[#86868B] text-[14px] hover:text-white transition-colors">
              iPad
            </a>
            <a href="#watch" className="text-[#86868B] text-[14px] hover:text-white transition-colors">
              Watch
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Apple Wallet
            </h4>
            <span className="text-[#86868B] text-[14px]">Apple Pay</span>
            <span className="text-[#86868B] text-[14px]">Apple Card</span>
            <span className="text-[#86868B] text-[14px]">Monthly Installments</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Account
            </h4>
            <span className="text-[#86868B] text-[14px]">Manage Your Apple ID</span>
            <span className="text-[#86868B] text-[14px]">Apple Store Account</span>
            <span className="text-[#86868B] text-[14px]">iCloud.com</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Entertainment
            </h4>
            <span className="text-[#86868B] text-[14px]">Apple TV+</span>
            <span className="text-[#86868B] text-[14px]">Apple Music</span>
            <span className="text-[#86868B] text-[14px]">Apple Arcade</span>
            <span className="text-[#86868B] text-[14px]">Apple Podcasts</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-white uppercase tracking-wider">
              Support
            </h4>
            <span className="text-[#86868B] text-[14px]">iPhone Support</span>
            <span className="text-[#86868B] text-[14px]">AppleCare+</span>
            <span className="text-[#86868B] text-[14px]">Contact Apple</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868B] text-[12px]">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Use</span>
          <span className="hover:text-white transition-colors cursor-pointer">Sales Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Legal</span>
          <span className="hover:text-white transition-colors cursor-pointer">Site Map</span>
        </div>
      </div>
    </footer>
  );
};
