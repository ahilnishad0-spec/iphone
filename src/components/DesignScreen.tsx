import React, { useState } from 'react';
import { ScreenType } from '../types';
import { IMAGES, DEVICE_COLORS } from '../data/productData';

interface DesignScreenProps {
  onSelectScreen: (screen: ScreenType) => void;
}

export const DesignScreen: React.FC<DesignScreenProps> = ({ onSelectScreen }) => {
  const [selectedColor, setSelectedColor] = useState(DEVICE_COLORS[0]);

  return (
    <div className="flex flex-col w-full min-h-screen text-[#e2e2e2] animate-in fade-in duration-500 pb-20">
      {/* Intro Header */}
      <section className="flex flex-col px-6 pt-10 pb-6 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-['Hanken_Grotesk'] text-display-xl text-white">
            Design.
          </h1>
          <h2 className="text-[22px] sm:text-[26px] text-[#86868B] max-w-sm leading-tight">
            Even more delightful.<br />Even more durable.
          </h2>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-20">
        {/* Sleek Profile & Display */}
        <section className="flex flex-col gap-8">
          <div className="w-full rounded-3xl bg-[#161617] overflow-hidden border border-white/10 flex flex-col items-center justify-center p-8 sm:p-12 shadow-2xl relative">
            {/* Color preview background glow */}
            <div
              className="absolute inset-0 opacity-20 blur-3xl transition-colors duration-500 pointer-events-none"
              style={{ backgroundColor: selectedColor.hex }}
            ></div>

            <img
              alt="iPhone sleek profile"
              className="w-full max-w-2xl h-auto object-contain transform scale-105 sm:scale-110 drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-700"
              src={IMAGES.sleekProfile}
            />

            {/* Interactive Color Picker */}
            <div className="mt-8 flex flex-col items-center gap-3 z-10">
              <span className="text-[13px] font-medium text-[#c4c7c8]">
                Finish : <strong className="text-white">{selectedColor.name}</strong>
              </span>
              <div className="flex items-center gap-3 bg-[#1f1f1f] p-2 rounded-full border border-white/10">
                {DEVICE_COLORS.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setSelectedColor(col)}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer relative flex items-center justify-center ${
                      selectedColor.id === col.id
                        ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-[#161617]'
                        : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center self-start px-3.5 py-1 rounded-full bg-[#2a2a2a] border border-white/10 text-[12px] font-semibold text-white uppercase tracking-widest">
              Display
            </div>
            <h3 className="font-['Hanken_Grotesk'] text-headline-lg text-white">
              Super Retina XDR
            </h3>
            <p className="text-[17px] text-[#c4c7c8] leading-relaxed max-w-2xl">
              15.93 cm (6.3″) display — our best ever. Experience smoother scrolling and more immersive gaming with <span className="text-white font-semibold">ProMotion up to 120Hz</span>. 3,000 nits peak brightness with 33% fewer reflections under direct sunlight.
            </p>
          </div>
        </section>

        {/* Ceramic Shield 2 */}
        <section className="flex flex-col gap-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#161617] to-[#1f1f1f] border border-white/10 flex flex-col items-center justify-center text-center gap-6 shadow-2xl relative overflow-hidden">
            {/* Tactile light reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#0066CC]/20 blur-[70px] rounded-full"></div>

            <span
              className="material-symbols-outlined text-[64px] text-white relative z-10 animate-pulse"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}
            >
              health_and_safety
            </span>

            <div className="flex flex-col gap-3 relative z-10 max-w-lg">
              <h3 className="font-['Hanken_Grotesk'] text-[32px] sm:text-[40px] font-bold text-white tracking-tight">
                Ceramic Shield 2
              </h3>
              <p className="text-[20px] text-white font-medium tracking-tight">
                Tougher than any smartphone glass.
              </p>
              <p className="text-[16px] text-[#86868B] mt-2 leading-relaxed">
                Engineered for durability with <span className="text-white font-medium">3x better scratch resistance</span> and dual-ion exchange crystallization. It looks — and stays — beautiful.
              </p>
            </div>
          </div>
        </section>

        {/* Center Stage Camera */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center self-start px-3.5 py-1 rounded-full bg-[#2a2a2a] border border-white/10 text-[12px] font-semibold text-white uppercase tracking-widest">
              Camera
            </div>
            <h3 className="font-['Hanken_Grotesk'] text-headline-lg text-white leading-tight">
              18MP Center Stage.<br />
              <span className="text-[#86868B]">It’s a total frame changer.</span>
            </h3>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 bg-[#161617]">
            <img
              alt="Center Stage group selfie"
              className="w-full aspect-[4/5] sm:aspect-[16/11] object-cover"
              src={IMAGES.centerStageSelfie}
            />

            {/* Glassmorphic caption overlay */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 p-6 rounded-2xl bg-[#131313]/75 backdrop-blur-3xl border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-[22px] text-[#0066CC]">
                  group
                </span>
                <span className="text-[12px] font-bold uppercase tracking-widest">
                  Smarter Selfies
                </span>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#e2e2e2] leading-relaxed">
                The new front camera gives you flexible ways to frame your photos. When friends join the shot, the field of view expands so you get everyone in — automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Next Chapter Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <span className="text-[#86868B] text-[14px]">
            Explore next: Power and Silicon Intelligence
          </span>
          <button
            onClick={() => onSelectScreen('performance')}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-[14px] font-medium transition-colors cursor-pointer"
          >
            <span>Next: Performance</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
