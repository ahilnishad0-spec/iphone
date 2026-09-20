import React, { useState } from 'react';
import { ScreenType } from '../types';
import { IMAGES } from '../data/productData';

interface PerformanceScreenProps {
  onSelectScreen: (screen: ScreenType) => void;
  onOpenCompare: () => void;
}

export const PerformanceScreen: React.FC<PerformanceScreenProps> = ({
  onSelectScreen,
  onOpenCompare,
}) => {
  const [activeDemo, setActiveDemo] = useState<'translate' | 'visual'>('translate');
  const [translateInput, setTranslateInput] = useState('Where is the best gelato in Rome?');
  const [translatedResult, setTranslatedResult] = useState('Dov\'è il miglior gelato a Roma?');
  const [targetLang, setTargetLang] = useState('Italian');

  const handleTranslate = (lang: string) => {
    setTargetLang(lang);
    if (lang === 'Italian') {
      setTranslatedResult('Dov\'è il miglior gelato a Roma?');
    } else if (lang === 'Japanese') {
      setTranslatedResult('ローマで一番美味しいジェラートはどこですか？');
    } else if (lang === 'French') {
      setTranslatedResult('Où se trouve la meilleure glace de Rome ?');
    } else if (lang === 'Spanish') {
      setTranslatedResult('¿Dónde está el mejor helado de Roma?');
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen text-[#e2e2e2] animate-in fade-in duration-500 pb-20">
      {/* Intro Section */}
      <section className="flex flex-col gap-4 mt-8 mb-6 px-6 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 bg-[#161617] border border-white/10 rounded-full px-3.5 py-1.5 w-max">
          <span
            className="material-symbols-outlined text-[#0066CC] text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stream_apps
          </span>
          <span className="text-[12px] font-semibold text-white uppercase tracking-widest">
            Performance &amp; Intelligence
          </span>
        </div>

        <h1 className="font-['Hanken_Grotesk'] text-display-xl text-white mt-2 leading-none">
          Power player.<br />
          <span className="text-[#86868B]">Energy expert.</span>
        </h1>

        <p className="text-[18px] sm:text-[20px] text-[#c4c7c8] max-w-md leading-relaxed">
          The A19 chip powers everything you do, while bringing Apple Intelligence to life.
        </p>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-16">
        {/* A19 Chip Macro Card */}
        <section>
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-[32px] overflow-hidden bg-[#161617] shadow-2xl flex flex-col justify-end border border-white/10 group">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-1000"
              style={{ backgroundImage: `url('${IMAGES.a19Chip}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

            <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-2 max-w-xl">
              <h2 className="font-['Hanken_Grotesk'] text-[28px] sm:text-[36px] font-bold text-white">
                A19 chip.
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#c4c7c8] leading-relaxed">
                Up to 50% faster CPU. Up to 2.1x faster 5‑core GPU. Built with 2nd-generation 3-nanometer architecture for the next generation of console-quality AAA gaming and on-device AI.
              </p>
            </div>
          </div>
        </section>

        {/* Battery Life Highlight */}
        <section>
          <div className="relative w-full rounded-[32px] overflow-hidden bg-[#1a1c1d] shadow-2xl flex flex-col items-center text-center p-8 sm:p-12 border border-white/10">
            {/* Ambient battery aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0066CC]/15 blur-[90px] rounded-full pointer-events-none"></div>

            <img
              alt="All-day battery life visualization showing 5 iPhones running demanding apps"
              className="w-full max-w-lg h-auto object-contain mb-8 drop-shadow-2xl scale-100 sm:scale-105 transition-transform"
              src={IMAGES.batteryLineup}
            />

            <h3 className="font-['Hanken_Grotesk'] text-[30px] sm:text-[38px] font-bold text-white mb-3 tracking-tight">
              All-day battery life.
            </h3>

            <p className="text-[16px] sm:text-[18px] text-[#86868B] max-w-xl mb-8 leading-relaxed">
              Up to 30 hours of video playback. If you need a quick top-up, just 10 minutes of charge gives you up to 8 hours of playback.
            </p>

            <button
              onClick={onOpenCompare}
              className="bg-white text-[#131313] rounded-full px-7 py-3.5 text-[14px] font-semibold hover:scale-105 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-white/10 cursor-pointer"
            >
              <span>Compare performance</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Apple Intelligence Section */}
        <section className="flex flex-col gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Hanken_Grotesk'] text-display-xl text-white tracking-tight leading-tight">
              Effortlessly<br />helpful.
            </h2>
            <p className="text-[20px] sm:text-[24px] text-[#0066CC] font-medium">
              Apple Intelligence arrives.
            </p>
          </div>

          <div className="relative w-full rounded-[32px] overflow-hidden bg-[#1f1f1f] shadow-2xl border border-white/10">
            {/* Feature Visual */}
            <div className="w-full min-h-[320px] sm:min-h-[420px] bg-[#0e0e0e] relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0066CC]/15 to-transparent opacity-60"></div>
              <img
                alt="Apple Intelligence lock screen features"
                className="relative z-10 w-full max-w-xs h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] rounded-2xl"
                src={IMAGES.appleIntelligenceLock}
              />
            </div>

            {/* Feature Tabs & Interactive Demos */}
            <div className="p-6 sm:p-8 bg-[#161617]/95 backdrop-blur-3xl flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#2a2a2a] flex items-center justify-center shrink-0 border border-white/10">
                  <span
                    className="material-symbols-outlined text-[#0066CC] text-[26px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    translate
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[17px] font-semibold text-white">
                      Live Translation
                    </h4>
                    <span className="text-[11px] uppercase tracking-wider text-[#0066CC] font-bold bg-[#0066CC]/10 px-2.5 py-0.5 rounded-full">
                      On-Device
                    </span>
                  </div>
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    Automatically translate texts in Messages, and get live translated captions in FaceTime and spoken translations with zero latency.
                  </p>

                  {/* Interactive Translator Simulator */}
                  <div className="mt-3 bg-[#1f1f1f] p-4 rounded-2xl border border-white/5 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12px] text-[#86868B]">Translate to:</span>
                      {['Italian', 'Japanese', 'French', 'Spanish'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleTranslate(lang)}
                          className={`text-[12px] px-3 py-1 rounded-full cursor-pointer transition-all ${
                            targetLang === lang
                              ? 'bg-[#0066CC] text-white font-medium'
                              : 'bg-white/5 text-[#c4c7c8] hover:bg-white/10'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <div className="bg-[#131313] p-3 rounded-xl flex flex-col gap-1 border border-white/5">
                      <span className="text-[11px] text-[#86868B] uppercase">English</span>
                      <span className="text-[14px] text-white font-medium">{translateInput}</span>
                    </div>
                    <div className="bg-[#0066CC]/15 p-3 rounded-xl flex flex-col gap-1 border border-[#0066CC]/30">
                      <span className="text-[11px] text-[#5AC8FA] uppercase font-semibold">
                        {targetLang} (Translated Live)
                      </span>
                      <span className="text-[14px] text-white font-medium">
                        {translatedResult}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#2a2a2a] flex items-center justify-center shrink-0 border border-white/10">
                  <span
                    className="material-symbols-outlined text-[#0066CC] text-[26px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    view_in_ar
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h4 className="text-[17px] font-semibold text-white">
                    Visual Intelligence
                  </h4>
                  <p className="text-[15px] text-[#86868B] leading-relaxed">
                    Search, ask questions, extract schedules, and take action seamlessly with the content currently on your iPhone screen via Camera Control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Chapter Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <span className="text-[#86868B] text-[14px]">
            Explore next: 48MP Dual Fusion Optical System
          </span>
          <button
            onClick={() => onSelectScreen('camera')}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-[14px] font-medium transition-colors cursor-pointer"
          >
            <span>Next: Camera</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
