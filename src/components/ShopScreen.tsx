import React, { useState } from 'react';
import { ScreenType, DeviceModel, DeviceColor, StorageOption, CartItem } from '../types';
import { DEVICE_MODELS, DEVICE_COLORS, STORAGE_OPTIONS, TRADE_IN_OPTIONS, IMAGES } from '../data/productData';

interface ShopScreenProps {
  onAddToCart: (item: CartItem) => void;
  cartItems: CartItem[];
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
  onSelectScreen: (screen: ScreenType) => void;
}

export const ShopScreen: React.FC<ShopScreenProps> = ({
  onAddToCart,
  cartItems,
  onRemoveFromCart,
  onClearCart,
  onSelectScreen,
}) => {
  const [selectedModel, setSelectedModel] = useState<DeviceModel>(DEVICE_MODELS[0]);
  const [selectedColor, setSelectedColor] = useState<DeviceColor>(DEVICE_COLORS[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(STORAGE_OPTIONS[0]);
  const [selectedTradeIn, setSelectedTradeIn] = useState(TRADE_IN_OPTIONS[7]); // No trade in
  const [hasAppleCare, setHasAppleCare] = useState(false);
  const [paymentMode, setPaymentMode] = useState<'monthly' | 'full'>('full');
  const [showBagModal, setShowBagModal] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Price calculations
  const basePrice = selectedModel.startingPrice + selectedStorage.priceDelta + (hasAppleCare ? 199 : 0);
  const finalPrice = Math.max(0, basePrice - selectedTradeIn.value);
  const monthlyPrice = (finalPrice / 24).toFixed(2);

  const handleAddCurrentToBag = () => {
    const item: CartItem = {
      id: `${selectedModel.id}-${selectedColor.id}-${selectedStorage.id}-${Date.now()}`,
      model: selectedModel,
      color: selectedColor,
      storage: selectedStorage,
      hasAppleCare,
      tradeInValue: selectedTradeIn.value,
      tradeInModel: selectedTradeIn.model,
      totalPrice: finalPrice,
      monthlyPrice: parseFloat(monthlyPrice),
    };
    onAddToCart(item);
    setShowBagModal(true);
  };

  const handleCheckout = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
      setOrderSuccess(false);
      setShowBagModal(false);
    }, 3000);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="flex flex-col w-full min-h-screen text-[#e2e2e2] animate-in fade-in duration-500 pb-28">
      {/* Header */}
      <section className="px-6 pt-10 pb-8 max-w-5xl mx-auto w-full text-center">
        <span className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-widest bg-[#0066CC]/10 px-3.5 py-1 rounded-full border border-[#0066CC]/20">
          Official Apple Store
        </span>
        <h1 className="font-['Hanken_Grotesk'] text-display-xl text-white mt-4">
          Buy {selectedModel.name}
        </h1>
        <p className="text-[18px] text-[#86868B] max-w-lg mx-auto mt-2">
          From ${selectedModel.startingPrice} or ${(selectedModel.startingPrice / 24).toFixed(2)}/mo. for 24 mo. before trade‑in.
        </p>
      </section>

      <div className="max-w-5xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Device Showcase */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32 self-start">
          <div className="w-full bg-[#161617] rounded-3xl p-8 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            {/* Color halo */}
            <div
              className="absolute inset-0 opacity-25 blur-3xl transition-colors duration-700 pointer-events-none"
              style={{ backgroundColor: selectedColor.hex }}
            ></div>

            <img
              alt={`${selectedModel.name} in ${selectedColor.name}`}
              className="w-full max-w-xs h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-500 scale-105"
              src={IMAGES.sleekProfile}
            />

            <div className="mt-6 text-center z-10">
              <h3 className="font-['Hanken_Grotesk'] text-[20px] font-bold text-white">
                {selectedModel.name}
              </h3>
              <p className="text-[14px] text-[#86868B]">
                {selectedColor.name} • {selectedStorage.capacity}
              </p>
            </div>
          </div>

          {/* Quick Specs Highlight Box */}
          <div className="bg-[#1b1b1b] rounded-2xl p-5 border border-white/5 flex flex-col gap-2.5 text-[13px] text-[#c4c7c8]">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="material-symbols-outlined text-[#0066CC] text-[18px]">verified</span>
              <span>Included with your configuration</span>
            </div>
            <div className="flex justify-between border-t border-white/5 pt-2">
              <span className="text-[#86868B]">Display</span>
              <span className="text-white text-right">{selectedModel.specs.display}</span>
            </div>
            <div className="flex justify-between border-t border-white/5 pt-2">
              <span className="text-[#86868B]">Chip</span>
              <span className="text-white text-right">{selectedModel.specs.chip}</span>
            </div>
            <div className="flex justify-between border-t border-white/5 pt-2">
              <span className="text-[#86868B]">Camera</span>
              <span className="text-white text-right">{selectedModel.specs.camera}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Configurator */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* 1. Select Model */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-black text-[12px] flex items-center justify-center font-bold">1</span>
              Select your model.
            </h3>
            <div className="flex flex-col gap-3">
              {DEVICE_MODELS.map((model) => {
                const isSelected = selectedModel.id === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`p-5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#222224] border-[#0066CC] ring-1 ring-[#0066CC]'
                        : 'bg-[#161617] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-['Hanken_Grotesk'] text-[18px] font-bold text-white">
                        {model.name}
                      </h4>
                      <p className="text-[13px] text-[#86868B] mt-0.5">{model.displaySize}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[16px] font-bold text-white">
                        ${model.startingPrice}
                      </span>
                      <p className="text-[11px] text-[#86868B]">
                        or ${model.monthlyPrice}/mo.
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Select Finish */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-black text-[12px] flex items-center justify-center font-bold">2</span>
              Select your finish.
              <span className="text-[#86868B] font-normal text-[14px] ml-auto">
                {selectedColor.name}
              </span>
            </h3>
            <div className="grid grid-cols-5 gap-3 bg-[#161617] p-4 rounded-2xl border border-white/10">
              {DEVICE_COLORS.map((col) => {
                const isSelected = selectedColor.id === col.id;
                return (
                  <button
                    key={col.id}
                    onClick={() => setSelectedColor(col)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all cursor-pointer ${
                      isSelected ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full transition-transform ${
                        isSelected
                          ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-[#161617]'
                          : ''
                      }`}
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-[11px] text-center text-[#c4c7c8] truncate w-full">
                      {col.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Select Storage */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-black text-[12px] flex items-center justify-center font-bold">3</span>
              Select storage capacity.
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STORAGE_OPTIONS.map((opt) => {
                const isSelected = selectedStorage.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedStorage(opt)}
                    className={`p-4 rounded-2xl border text-center flex flex-col gap-1 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#222224] border-[#0066CC] ring-1 ring-[#0066CC]'
                        : 'bg-[#161617] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="font-['Hanken_Grotesk'] text-[20px] font-bold text-white">
                      {opt.capacity}
                    </span>
                    <span className="text-[12px] text-[#86868B]">
                      {opt.priceDelta === 0 ? 'Included' : `+$${opt.priceDelta}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Apple Trade In */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-black text-[12px] flex items-center justify-center font-bold">4</span>
              Apple Trade In.
            </h3>
            <div className="bg-[#161617] p-5 rounded-2xl border border-white/10 flex flex-col gap-3">
              <label className="text-[13px] text-[#86868B]">
                Select your smartphone to calculate trade-in discount:
              </label>
              <select
                value={selectedTradeIn.model}
                onChange={(e) => {
                  const found = TRADE_IN_OPTIONS.find((t) => t.model === e.target.value);
                  if (found) setSelectedTradeIn(found);
                }}
                className="bg-[#242426] border border-white/10 text-white rounded-xl p-3 text-[14px] outline-none focus:border-[#0066CC]"
              >
                {TRADE_IN_OPTIONS.map((opt) => (
                  <option key={opt.model} value={opt.model}>
                    {opt.model} {opt.value > 0 ? `(Get up to $${opt.value} credit)` : '(No credit)'}
                  </option>
                ))}
              </select>
              {selectedTradeIn.value > 0 && (
                <div className="text-[13px] text-[#34C759] font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Instant saving of ${selectedTradeIn.value} applied to your total!</span>
                </div>
              )}
            </div>
          </div>

          {/* 5. AppleCare+ Option */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white text-black text-[12px] flex items-center justify-center font-bold">5</span>
              AppleCare+ Coverage.
            </h3>
            <div
              onClick={() => setHasAppleCare(!hasAppleCare)}
              className={`p-5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                hasAppleCare
                  ? 'bg-[#222224] border-[#0066CC] ring-1 ring-[#0066CC]'
                  : 'bg-[#161617] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-[28px] text-[#ff3b30]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <div>
                  <h4 className="text-[16px] font-semibold text-white">AppleCare+ for iPhone</h4>
                  <p className="text-[13px] text-[#86868B]">
                    Unlimited repairs for accidental damage protection.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[15px] font-bold text-white">+$199</span>
                <p className="text-[11px] text-[#86868B]">{hasAppleCare ? 'Added' : 'Add'}</p>
              </div>
            </div>
          </div>

          {/* Summary & Sticky Action Bar */}
          <div className="bg-[#1f1f1f] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[14px] text-[#86868B]">Total Price</span>
                <span className="font-['Hanken_Grotesk'] text-[32px] font-bold text-white">
                  ${finalPrice}
                </span>
              </div>
              <div className="flex justify-between text-[13px] text-[#86868B]">
                <span>Or monthly installments</span>
                <span className="text-[#0066CC] font-semibold">${monthlyPrice}/mo. for 24 mo.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddCurrentToBag}
                className="flex-1 bg-white text-black font-semibold text-[15px] py-4 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => setShowBagModal(true)}
                className="bg-[#2a2a2a] text-white font-medium text-[15px] py-4 px-6 rounded-full hover:bg-[#353535] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>View Bag ({cartItems.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bag / Cart Modal */}
      {showBagModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="bg-[#1c1c1e] border border-white/10 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[26px] text-white">
                  shopping_bag
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-[24px] font-bold text-white">
                  Review your Apple Bag
                </h3>
              </div>
              <button
                onClick={() => setShowBagModal(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {orderSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in">
                <div className="w-16 h-16 rounded-full bg-[#34C759]/20 text-[#34C759] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[40px]">check</span>
                </div>
                <h4 className="font-['Hanken_Grotesk'] text-[24px] font-bold text-white">
                  Thank You for Your Order!
                </h4>
                <p className="text-[15px] text-[#86868B] max-w-sm">
                  We sent an order confirmation to your email. Your new iPhone 17 will ship with free express delivery.
                </p>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="flex flex-col gap-4 divide-y divide-white/10">
                  {cartItems.length === 0 ? (
                    <p className="text-[#86868B] text-center py-8">Your bag is currently empty.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="pt-4 first:pt-0 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10"
                            style={{ backgroundColor: item.color.hex }}
                          >
                            <span className="material-symbols-outlined text-black/70">smartphone</span>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="text-[16px] font-bold text-white">
                              {item.model.name} {item.storage.capacity}
                            </h4>
                            <p className="text-[13px] text-[#86868B]">{item.color.name}</p>
                            {item.hasAppleCare && (
                              <span className="text-[12px] text-[#ff3b30] mt-1">+ AppleCare+ Coverage</span>
                            )}
                            {item.tradeInValue > 0 && (
                              <span className="text-[12px] text-[#34C759]">
                                Trade-in: -${item.tradeInValue} ({item.tradeInModel})
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right flex flex-col items-end gap-1">
                          <span className="text-[16px] font-bold text-white">${item.totalPrice}</span>
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-[12px] text-[#86868B] hover:text-[#ff3b30] cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Bag Totals */}
                {cartItems.length > 0 && (
                  <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                    <div className="flex justify-between text-[14px] text-[#86868B]">
                      <span>Shipping</span>
                      <span className="text-[#34C759] font-medium">FREE Express</span>
                    </div>
                    <div className="flex justify-between text-[18px] font-bold text-white border-t border-white/10 pt-3">
                      <span>Total Due</span>
                      <span>${cartTotal}</span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full bg-[#0066CC] hover:bg-[#0077ED] text-white font-semibold py-4 rounded-full text-[15px] transition-colors mt-2 cursor-pointer shadow-lg shadow-[#0066CC]/20"
                    >
                      Check Out with Apple Pay
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
