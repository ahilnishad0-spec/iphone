import React, { useState } from 'react';
import { ScreenType } from '../types';
import { IMAGES } from '../data/productData';

interface OverviewScreenProps {
  onSelectScreen: (screen: ScreenType) => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({ onSelectScreen }) => {
  const [activeWhyItem, setActiveWhyItem] = useState<string | null>(null);

  const toggleWhyItem = (id: string) => {
    setActiveWhyItem(activeWhyItem === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full min-h-screen text-[#e2e2e2] animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-12 pb-16">
        {/* Ambient Pulsing Glows */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0066CC]/25 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: '8s' }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#A7C7E7]/15 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-5xl mx-auto">
          {/* Main Title Headings */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-['Hanken_Grotesk'] text-display-xl text-white tracking-tight">
              iPhone 17
            </h1>
            <p className="font-['Hanken_Grotesk'] text-headline-lg bg-gradient-to-r from-white via-[#9ec5fe] to-[#0066CC] bg-clip-text text-transparent">
              Magichromatic.
            </p>
            <p className="text-[19px] sm:text-[21px] text-[#c4c7c8] max-w-md mx-auto mt-2 font-normal leading-relaxed">
              Even more delightful. Even more durable.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => onSelectScreen('shop')}
              className="bg-white text-[#131313] font-semibold text-[14px] px-7 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/15 cursor-pointer"
            >
              Buy
            </button>
            <button
              onClick={() => onSelectScreen('design')}
              className="bg-transparent text-white border border-[#444748] font-medium text-[14px] px-7 py-3 rounded-full transition-all hover:bg-white/5 active:scale-95 cursor-pointer"
            >
              Learn more
            </button>
          </div>

          {/* Fanned Magichromatic iPhones Image */}
          <div className="w-full max-w-3xl mt-6 sm:mt-10 relative group">
            <img
              alt="iPhone 17 showcasing various vibrant magichromatic colors arranged in a fan-like spread"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-[1.02]"
              src={IMAGES.heroFan}
            />
          </div>
        </div>
      </section>

      {/* Highlights Bento Grid */}
      <section className="py-20 px-6 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-3 text-center mb-14">
          <h2 className="font-['Hanken_Grotesk'] text-display-xl text-white">
            Get the highlights.
          </h2>
          <p className="text-[#86868B] text-[16px]">
            Engineered with titanium, next-gen silicon, and optical breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Display */}
          <div
            onClick={() => onSelectScreen('design')}
            className="bg-[#1f1f1f] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center gap-6 shadow-xl border border-white/5 overflow-hidden relative group cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full h-56 rounded-2xl overflow-hidden bg-[#353535]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Close up of iPhone 17 display showcasing high brightness"
                src={IMAGES.displayHighlight}
              />
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest">
                Display
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-[22px] sm:text-[24px] font-semibold text-white leading-snug">
                Brighter display, now with ProMotion.
              </h3>
            </div>
          </div>

          {/* Bento Card 2: Camera */}
          <div
            onClick={() => onSelectScreen('camera')}
            className="bg-[#1f1f1f] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center gap-6 shadow-xl border border-white/5 overflow-hidden relative group cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full h-56 rounded-2xl overflow-hidden bg-[#353535]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Close up macro shot of the iPhone 17 rear camera lenses"
                src={IMAGES.cameraHighlight}
              />
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest">
                Camera
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-[22px] sm:text-[24px] font-semibold text-white leading-snug">
                48MP Dual Fusion system.
              </h3>
            </div>
          </div>

          {/* Bento Card 3: Performance */}
          <div
            onClick={() => onSelectScreen('performance')}
            className="bg-[#1f1f1f] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center gap-6 shadow-xl border border-white/5 overflow-hidden relative group cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="relative z-10 w-full h-56 rounded-2xl overflow-hidden bg-[#161617] flex items-center justify-center border border-white/5">
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-28 h-28 text-[#0066CC] animate-spin-slow"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50 10A40 40 0 1 0 90 50"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <circle cx="50" cy="50" fill="currentColor" r="12" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-tighter text-white">
                    A19
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest">
                Performance
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-[22px] sm:text-[24px] font-semibold text-white leading-snug">
                A19 chip. Power player.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Highlights Section */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/10">
        <div className="px-6 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="font-['Hanken_Grotesk'] text-display-xl text-white">
              A19 chip.
            </h2>
            <h3 className="font-['Hanken_Grotesk'] text-headline-lg text-[#86868B]">
              Power player. Energy expert.
            </h3>
            <p className="text-[16px] text-[#c4c7c8] mt-2 leading-relaxed">
              The A19 chip powers everything you do on iPhone, including Apple Intelligence features like Live Translation and Image Playground, and ProMotion for playing advanced AAA games. And with all-day battery life, you can work, watch and wander with no worries.
            </p>
          </div>

          <div className="w-full max-w-md grid grid-cols-2 gap-4">
            <div className="bg-[#161617] p-6 rounded-2xl flex flex-col gap-1 shadow-md border border-white/5">
              <span className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-widest">
                CPU
              </span>
              <span className="font-['Hanken_Grotesk'] text-[40px] font-bold text-white">
                50%
              </span>
              <span className="text-[14px] text-[#c4c7c8]">faster performance</span>
            </div>

            <div className="bg-[#161617] p-6 rounded-2xl flex flex-col gap-1 shadow-md border border-white/5">
              <span className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-widest">
                GPU
              </span>
              <span className="font-['Hanken_Grotesk'] text-[40px] font-bold text-white">
                2.1x
              </span>
              <span className="text-[14px] text-[#c4c7c8]">faster graphics</span>
            </div>

            <div className="col-span-2 bg-[#161617] p-6 rounded-2xl flex flex-col gap-2 shadow-md border border-white/5">
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-[#0066CC] text-[28px]">
                  battery_charging_full
                </span>
                <div className="flex-1 h-2.5 bg-[#353535] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0066CC] w-[88%] rounded-full"></div>
                </div>
              </div>
              <span className="font-['Hanken_Grotesk'] text-[28px] font-semibold text-white">
                Up to 30 hrs
              </span>
              <span className="text-[14px] text-[#c4c7c8]">video playback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apple is the Best Place to Buy iPhone */}
      <section className="py-20 px-6 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-['Hanken_Grotesk'] text-display-xl text-white">
            Why Apple is the best place to buy iPhone.
          </h2>

          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {/* List Item 1 */}
            <div className="py-6 flex flex-col gap-3 group">
              <button
                onClick={() => toggleWhyItem('tradein')}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <h4 className="text-[18px] font-medium text-white group-hover:text-[#0066CC] transition-colors">
                    Apple Trade In
                  </h4>
                  <p className="text-[15px] text-[#c4c7c8]">
                    Save on a new iPhone with a trade‑in.
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined text-[#86868B] group-hover:text-white transition-transform ${
                    activeWhyItem === 'tradein' ? 'rotate-90 text-white' : ''
                  }`}
                >
                  chevron_right
                </span>
              </button>
              {activeWhyItem === 'tradein' && (
                <div className="pt-3 pb-2 text-[14px] text-[#86868B] bg-white/5 p-4 rounded-xl animate-in fade-in">
                  Trade in your eligible smartphone for credit toward a new iPhone 17. We will send you a prepaid trade-in kit and credit your original payment method.
                  <div className="mt-3">
                    <button
                      onClick={() => onSelectScreen('shop')}
                      className="text-[#0066CC] font-semibold hover:underline"
                    >
                      Estimate trade-in value in Buy &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* List Item 2 */}
            <div className="py-6 flex flex-col gap-3 group">
              <button
                onClick={() => toggleWhyItem('financing')}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <h4 className="text-[18px] font-medium text-white group-hover:text-[#0066CC] transition-colors">
                    Ways to Buy
                  </h4>
                  <p className="text-[15px] text-[#c4c7c8]">
                    Monthly payment options are available.
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined text-[#86868B] group-hover:text-white transition-transform ${
                    activeWhyItem === 'financing' ? 'rotate-90 text-white' : ''
                  }`}
                >
                  chevron_right
                </span>
              </button>
              {activeWhyItem === 'financing' && (
                <div className="pt-3 pb-2 text-[14px] text-[#86868B] bg-white/5 p-4 rounded-xl animate-in fade-in">
                  Pay 0% APR over 24 months with Apple Card Monthly Installments, or choose carrier monthly offers from AT&amp;T, T-Mobile, and Verizon.
                </div>
              )}
            </div>

            {/* List Item 3 */}
            <div className="py-6 flex flex-col gap-3 group">
              <button
                onClick={() => toggleWhyItem('delivery')}
                className="w-full flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <h4 className="text-[18px] font-medium text-white group-hover:text-[#0066CC] transition-colors">
                    Delivery and Pickup
                  </h4>
                  <p className="text-[15px] text-[#c4c7c8]">
                    Get flexible delivery and easy pickup.
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined text-[#86868B] group-hover:text-white transition-transform ${
                    activeWhyItem === 'delivery' ? 'rotate-90 text-white' : ''
                  }`}
                >
                  chevron_right
                </span>
              </button>
              {activeWhyItem === 'delivery' && (
                <div className="pt-3 pb-2 text-[14px] text-[#86868B] bg-white/5 p-4 rounded-xl animate-in fade-in">
                  Enjoy free, fast two-hour courier delivery in most metro areas or pick up your order in-store at your local Apple Store.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
