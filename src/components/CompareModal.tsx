import React from 'react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in">
      <div className="bg-[#1c1c1e] border border-white/10 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="font-['Hanken_Grotesk'] text-[24px] font-bold text-white">
              A19 Silicon Performance
            </h3>
            <p className="text-[14px] text-[#86868B]">
              Benchmark comparisons with previous generation hardware.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Benchmark Bars */}
        <div className="flex flex-col gap-6">
          {/* CPU Multi-core */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[14px]">
              <span className="font-medium text-white">CPU Processing Speed</span>
              <span className="text-[#0066CC] font-bold">+50% vs A16 Bionic</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#86868B] w-24">A19 Chip</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0066CC] to-[#5AC8FA] w-[100%] rounded-full"></div>
                </div>
                <span className="text-[12px] font-semibold text-white w-10 text-right">100%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#86868B] w-24">A18 Pro</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#86868B] w-[82%] rounded-full"></div>
                </div>
                <span className="text-[12px] font-semibold text-[#86868B] w-10 text-right">82%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#86868B] w-24">A16 Bionic</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#555555] w-[50%] rounded-full"></div>
                </div>
                <span className="text-[12px] font-semibold text-[#86868B] w-10 text-right">50%</span>
              </div>
            </div>
          </div>

          {/* GPU Hardware Ray Tracing */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[14px]">
              <span className="font-medium text-white">GPU Graphics & Ray Tracing</span>
              <span className="text-[#0066CC] font-bold">2.1x Faster</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#86868B] w-24">A19 GPU</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#0066CC] to-[#34C759] w-[100%] rounded-full"></div>
                </div>
                <span className="text-[12px] font-semibold text-white w-10 text-right">2.1x</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#86868B] w-24">A16 GPU</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#555555] w-[47%] rounded-full"></div>
                </div>
                <span className="text-[12px] font-semibold text-[#86868B] w-10 text-right">1.0x</span>
              </div>
            </div>
          </div>

          {/* Neural Engine TOPS */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[14px]">
              <span className="font-medium text-white">Apple Intelligence Neural Engine</span>
              <span className="text-[#0066CC] font-bold">38 Trillion Ops/sec</span>
            </div>
            <p className="text-[13px] text-[#86868B] leading-relaxed">
              Enables real-time on-device diffusion models, multimodal visual comprehension, and instantaneous live transcription with zero cloud latency.
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-[#e2e2e2] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
