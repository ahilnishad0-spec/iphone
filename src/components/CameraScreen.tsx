import React, { useState } from 'react';
import { ScreenType } from '../types';
import { IMAGES } from '../data/productData';

interface CameraScreenProps {
  onSelectScreen: (screen: ScreenType) => void;
}

export const CameraScreen: React.FC<CameraScreenProps> = ({ onSelectScreen }) => {
  const [selectedStyle, setSelectedStyle] = useState('vibrant');
  const [isWideAngle, setIsWideAngle] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const stylesList = [
    { id: 'standard', name: 'Standard', filter: 'brightness(1) contrast(1) saturate(1)' },
    { id: 'vibrant', name: 'Vibrant Portrait', filter: 'brightness(1.05) contrast(1.1) saturate(1.3)' },
    { id: 'cinematic', name: 'Moody Cinematic', filter: 'brightness(0.95) contrast(1.25) saturate(0.9) sepia(0.2)' },
    { id: 'warm', name: 'Warm Amber', filter: 'brightness(1.02) contrast(1.05) saturate(1.15) sepia(0.35)' },
    { id: 'bw', name: 'Studio Noir', filter: 'grayscale(1) contrast(1.3) brightness(0.95)' },
  ];

  const currentFilter = stylesList.find((s) => s.id === selectedStyle)?.filter || 'none';

  return (
    <div className="flex flex-col w-full min-h-screen text-[#e2e2e2] animate-in fade-in duration-500 pb-20">
      {/* Hero Section with Macro Camera Background */}
      <section
        className="relative w-full min-h-[560px] sm:min-h-[640px] flex flex-col justify-end pb-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url('${IMAGES.cameraHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col gap-4">
          <h1 className="font-['Hanken_Grotesk'] text-display-xl text-white tracking-tight leading-none">
            An evolution<br />in resolution.
          </h1>
          <p className="text-[19px] sm:text-[22px] text-[#c6c6c7] max-w-md font-normal leading-snug">
            The all-new 48MP Dual Fusion camera system. Super-stunning shots up close and far away.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-16 mt-8">
        {/* Dual Camera Feature */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-[32px] text-[#0066CC]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              camera
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-headline-lg text-white">
              All 48MP rear cameras.
            </h2>
          </div>

          <p className="text-[17px] text-[#c4c7c8] leading-relaxed max-w-3xl">
            iPhone 17 has a 48MP Fusion Main camera with a 2x optical-quality telephoto and a <strong className="text-white font-semibold">48MP Fusion Ultra Wide camera with 4x the resolution</strong>. Now Ultra Wide photos are 24MP by default, the perfect file size for high‑quality storing and sharing.
          </p>

          {/* Bento Grid for Camera Specs */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-[#161617] rounded-3xl p-6 sm:p-8 flex flex-col gap-2 shadow-xl border border-white/10">
              <span className="font-['Hanken_Grotesk'] text-[36px] sm:text-[48px] font-bold text-white">
                48MP
              </span>
              <span className="text-[13px] font-semibold text-[#86868B] uppercase tracking-wider">
                Main Optical Sensor
              </span>
            </div>
            <div className="bg-[#161617] rounded-3xl p-6 sm:p-8 flex flex-col gap-2 shadow-xl border border-white/10">
              <span className="font-['Hanken_Grotesk'] text-[36px] sm:text-[48px] font-bold text-white">
                48MP
              </span>
              <span className="text-[13px] font-semibold text-[#86868B] uppercase tracking-wider">
                Ultra Wide Macro
              </span>
            </div>
          </div>
        </section>

        {/* Photographic Styles Interactive Card */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[12px] font-semibold text-[#86868B] uppercase tracking-widest">
                Tone &amp; Color Tone Engine
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-[26px] font-bold text-white">
                Next-Gen Photographic Styles
              </h3>
            </div>
          </div>

          <div className="relative w-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between p-6 sm:p-8">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${IMAGES.photographicStyles}')`,
                filter: currentFilter,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-block px-3.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[12px] font-semibold text-white uppercase tracking-widest border border-white/20">
                Latest Gen
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <div>
                <h3 className="font-['Hanken_Grotesk'] text-[24px] sm:text-[28px] font-bold text-white leading-tight">
                  Photographic Styles
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#e2e2e2] mt-1">
                  Choose from different preset styles to customise the tone, colour and look of your photos.
                </p>
              </div>

              {/* Interactive Style Preset Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {stylesList.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer backdrop-blur-md ${
                      selectedStyle === style.id
                        ? 'bg-white text-black font-semibold shadow-md scale-105'
                        : 'bg-black/50 text-white/80 border border-white/20 hover:bg-black/70'
                    }`}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Front Camera Section */}
        <section className="w-full py-10 px-6 sm:px-8 bg-[#1b1b1b] rounded-3xl border border-white/10 flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center items-center">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[12px] font-semibold text-white uppercase tracking-widest border border-white/10">
              New
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-[32px] sm:text-[44px] font-bold text-white tracking-tight leading-tight">
              18MP Center Stage<br />front camera.
            </h2>
            <p className="text-[17px] sm:text-[20px] text-[#86868B] max-w-xs">
              It’s a total frame changer.
            </p>
          </div>

          {/* Center Stage Interactive Demo Card */}
          <div className="bg-[#161617] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-black flex items-center justify-center">
              <div
                className={`w-full h-full bg-cover bg-center transition-all duration-700 ${
                  isLandscape ? 'rotate-90 scale-125' : ''
                } ${isWideAngle ? 'scale-90' : 'scale-105'}`}
                style={{ backgroundImage: `url('${IMAGES.groupSelfieDemo}')` }}
              ></div>

              {/* Viewfinder simulation overlays */}
              <div className="absolute inset-0 pointer-events-none border-2 border-white/10 m-4 rounded-2xl flex flex-col justify-between p-4">
                <div className="flex justify-between items-center text-white/70 text-[12px]">
                  <span>18MP • 4K</span>
                  <span className="bg-black/50 px-2 py-0.5 rounded-full">
                    {isWideAngle ? '0.5x Ultra Wide' : '1x Wide'}
                  </span>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/60"></div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-md">
                <h4 className="text-[18px] font-semibold text-white">
                  Smarter group selfies.
                </h4>
                <p className="text-[14px] sm:text-[15px] text-[#86868B]">
                  Tap to expand the field of view and rotate from portrait to landscape without moving your iPhone.
                </p>
              </div>

              {/* Interactive Camera Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsWideAngle(!isWideAngle)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    isWideAngle
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-[#2a2a2a] text-[#c4c7c8] hover:text-white'
                  }`}
                >
                  {isWideAngle ? 'Zoom 1x' : 'Expand 0.5x'}
                </button>
                <button
                  onClick={() => setIsLandscape(!isLandscape)}
                  className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#353535] flex items-center justify-center text-white cursor-pointer transition-colors"
                  title="Rotate Frame"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    screen_rotation
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Features List */}
        <section className="flex flex-col gap-6">
          <h3 className="font-['Hanken_Grotesk'] text-headline-lg text-white">
            Pro-level video.
          </h3>
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {/* Item 1 */}
            <div className="flex items-start gap-4 py-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1f1f1f] flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#0066CC]">movie</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-semibold text-white">
                  4K 60 fps Dolby Vision
                </h4>
                <p className="text-[15px] text-[#86868B]">
                  Capture stunningly smooth, ultra-stabilised cinematic video with next-gen action mode.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 py-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1f1f1f] flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#0066CC]">
                  flip_camera_ios
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-semibold text-white">
                  Dual Capture video
                </h4>
                <p className="text-[15px] text-[#86868B]">
                  Record yourself and the world around you with simultaneous front and rear video capture.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 py-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1f1f1f] flex items-center justify-center shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[#0066CC]">
                  auto_awesome
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-semibold text-white">Audio Mix</h4>
                <p className="text-[15px] text-[#86868B]">
                  Adjust the way voices sound in your videos for theatre-quality results with spatial beamforming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-6 bg-[#161617] rounded-3xl border border-white/10 flex flex-col items-center text-center gap-6 shadow-2xl">
          <h2 className="font-['Hanken_Grotesk'] text-headline-lg text-white">
            Smile. Snap. Share.
          </h2>
          <p className="text-[16px] text-[#c4c7c8] max-w-sm mb-2">
            Experience the most advanced camera system we've ever made.
          </p>
          <button
            onClick={() => onSelectScreen('shop')}
            className="inline-flex items-center justify-center px-9 py-4 bg-white text-black rounded-full text-[15px] font-semibold transition-transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            Buy iPhone 17
          </button>
        </section>
      </div>
    </div>
  );
};
