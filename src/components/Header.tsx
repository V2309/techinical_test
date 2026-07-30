import React, { useState } from 'react';
import { Logo } from './Header/Logo';
import { DesktopNav } from './Header/DesktopNav';
import { MobileMenu } from './Header/MobileMenu';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 lg:h-20 bg-white backdrop-blur-md border-b border-brand-2-01/10 px-5 py-4 lg:px-[86px] flex items-center justify-between select-none">
      {/* Logo Container */}
      <Logo />

      {/* Right side: Nav + Action Buttons */}
      <DesktopNav />

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-brand-2-01/5 transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu — Full Screen Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};
