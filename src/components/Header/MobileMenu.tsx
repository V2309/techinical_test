import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOLUTIONS = [
  { text: 'Lorem ipsum dolor', href: '#lorem-1', textClass: 'text-brand-2-01/80' },
  { text: 'Sed do eiusmod tempor', href: '#lorem-2', textClass: 'text-brand-2-01/85', hasArrow: true },
  { text: 'Lorem ipsum dolor', href: '#lorem-3', textClass: 'text-brand-2-01/80' },
  { text: 'Sed do eiusmod tempor', href: '#lorem-4', textClass: 'text-brand-2-01/80' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSolutionsOpen(false); // reset solutions dropdown when menu closes
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col w-full h-screen overflow-y-auto lg:hidden animate-in fade-in duration-200">
      {/* Decorative blob overlay – clips without conflicting with overflow-y-auto */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: 'absolute',
            width: '518px',
            height: '564px',
            left: '-94px',
            top: '761px',
            background: '#F0F0E1',
            opacity: 0.5,
            borderRadius: '50%',
          }}
        />
      </div>
      {/* Overlay Header */}
      <div className="h-16 flex items-center justify-between px-5 border-b border-brand-2-01/5 flex-none select-none">
        {/* Logo QTable */}
        <Logo />

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-brand-2-01/5 transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-brand-2-01" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Overlay Body */}
      <div className="flex-grow flex flex-col justify-between p-6 gap-8 select-none">
        {/* Navigation links inside menu */}
        <div className="flex flex-col gap-6">
          {/* Group 1: Giải pháp (Collapsible) */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center justify-between w-full text-sm uppercase tracking-wider text-brand-2-01 font-sans focus:outline-none"
              style={{ fontWeight: 800 }}
            >
              <span>Giải pháp</span>
              <svg
                className={`w-3 h-3 text-brand-2-01/40 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isSolutionsOpen && (
              <div className="flex flex-col gap-3 pl-3 border-l border-brand-2-01/10 animate-in slide-in-from-top-2 duration-200">
                {SOLUTIONS.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`${item.textClass} font-semibold flex items-center justify-between`}
                  >
                    <span>{item.text}</span>
                    {item.hasArrow && (
                      <svg className="w-3.5 h-3.5 text-brand-2-01/60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other tabs as direct siblings */}
          <a href="#thiet-bi" onClick={onClose} className="text-[18px] font-bold text-brand-2-01">
            Thiết bị
          </a>
          <a href="#bang-gia" onClick={onClose} className="text-[18px] font-bold text-brand-2-01">
            Bảng giá
          </a>
          <a href="#ho-tro" onClick={onClose} className="text-[18px] font-bold text-brand-2-01">
            Hỗ trợ
          </a>
        </div>

        {/* Bottom Action buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <a
            href="#dang-nhap"
            onClick={onClose}
            className="w-full text-center text-sm font-semibold border border-brand-2-01/20 rounded-full py-3 hover:bg-brand-2-01/5 transition-all text-brand-2-01"
          >
            Đăng nhập
          </a>
          <a
            href="#trial"
            onClick={onClose}
            className="w-full text-center text-sm font-bold bg-brand-02 rounded-full py-3 flex items-center justify-center gap-1.5 hover:bg-[#aef03c] transition-all text-brand-2-01"
          >
            <span>Sử dụng miễn phí</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
