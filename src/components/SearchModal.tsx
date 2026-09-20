import React, { useState } from 'react';
import { ScreenType } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScreen: (screen: ScreenType) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectScreen,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { label: 'Magichromatic Colors & Finishes', screen: 'design' as ScreenType },
    { label: '48MP Dual Fusion Camera Specs', screen: 'camera' as ScreenType },
    { label: 'A19 Chip Benchmarks & Battery', screen: 'performance' as ScreenType },
    { label: 'Apple Intelligence & Live Translation', screen: 'performance' as ScreenType },
    { label: 'Ceramic Shield 2 Durability', screen: 'design' as ScreenType },
    { label: 'Trade-in Estimate & Buy iPhone 17', screen: 'shop' as ScreenType },
  ];

  const filteredLinks = query.trim()
    ? quickLinks.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#1c1c1e] border border-white/10 w-full max-w-xl rounded-3xl p-6 shadow-2xl flex flex-col gap-6">
        {/* Search Input */}
        <div className="flex items-center gap-3 bg-[#2c2c2e] px-4 py-3 rounded-2xl border border-white/10">
          <span className="material-symbols-outlined text-[#86868B]">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search iPhone 17 features, specs, colors..."
            className="w-full bg-transparent text-white placeholder-[#86868B] text-[16px] outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#86868B] hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[14px] text-[#0066CC] font-medium ml-2 cursor-pointer"
          >
            Cancel
          </button>
        </div>

        {/* Results / Quick links */}
        <div className="flex flex-col gap-2">
          <span className="text-[12px] font-semibold text-[#86868B] uppercase tracking-wider px-2">
            {query.trim() ? 'Search Results' : 'Quick Links'}
          </span>
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onSelectScreen(item.screen);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-left text-white text-[15px] group cursor-pointer transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#86868B] group-hover:text-white transition-colors">
                    chevron_right
                  </span>
                </button>
              ))
            ) : (
              <p className="text-[#86868B] text-center py-6 text-[14px]">
                No matching results found for "{query}".
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
