import React, { useState, useEffect } from 'react';
import { ScreenType, CartItem } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { OverviewScreen } from './components/OverviewScreen';
import { DesignScreen } from './components/DesignScreen';
import { PerformanceScreen } from './components/PerformanceScreen';
import { CameraScreen } from './components/CameraScreen';
import { ShopScreen } from './components/ShopScreen';
import { MenuDrawer } from './components/MenuDrawer';
import { SearchModal } from './components/SearchModal';
import { CompareModal } from './components/CompareModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Scroll to top smoothly on screen change
  const handleSelectScreen = (screen: ScreenType) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2] flex flex-col selection:bg-[#0066CC] selection:text-white">
      {/* Top Fixed Header */}
      <Header
        activeScreen={activeScreen}
        onSelectScreen={handleSelectScreen}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartItems.length}
      />

      {/* Main Screen Content View */}
      <main className="flex-1 w-full pt-28">
        {activeScreen === 'overview' && (
          <OverviewScreen onSelectScreen={handleSelectScreen} />
        )}
        {activeScreen === 'design' && (
          <DesignScreen onSelectScreen={handleSelectScreen} />
        )}
        {activeScreen === 'performance' && (
          <PerformanceScreen
            onSelectScreen={handleSelectScreen}
            onOpenCompare={() => setIsCompareOpen(true)}
          />
        )}
        {activeScreen === 'camera' && (
          <CameraScreen onSelectScreen={handleSelectScreen} />
        )}
        {activeScreen === 'shop' && (
          <ShopScreen
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
            onSelectScreen={handleSelectScreen}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectScreen={handleSelectScreen} />

      {/* Mobile Bottom Navigation */}
      <BottomNav
        activeScreen={activeScreen}
        onSelectScreen={handleSelectScreen}
        cartCount={cartItems.length}
      />

      {/* Navigation Drawer Menu */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectScreen={handleSelectScreen}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectScreen={handleSelectScreen}
      />

      {/* Silicon Comparison Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />
    </div>
  );
}
