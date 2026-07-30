import React from 'react';

const SOLUTIONS = [
  'Lorem ipsum dolor',
  'Sed do eiusmod tempor',
  'Lorem ipsum dolor',
  'Sed do eiusmod tempor'
];

export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-8 h-full">
      {/* Desktop Navigation Menu */}
      <nav className="flex items-center gap-8 h-full">
        {/* Dropdown Menu Item (Giải pháp) */}
        <div className="group relative flex items-center gap-1.5 h-full cursor-pointer py-4">
          <span className="text-base font-semibold leading-6">
            Giải pháp
          </span>
          <svg
            className="w-3.5 h-3.5 transition-all duration-300 ease-in-out text-brand-2-01/50 group-hover:rotate-180 group-hover:text-brand-2-01"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

          {/* Mega-menu / Dropdown Container */}
          <div
            className="absolute top-[calc(100%-8px)] left-[calc(100%+30px)] -translate-x-1/2 w-[280px] h-[192px] bg-white rounded-xl border-t border-brand-2-01/10 p-6 flex flex-col justify-center items-start gap-4 transition-all duration-300 ease-out z-50 opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            {SOLUTIONS.map((text, idx) => (
              <a
                key={idx}
                href={`#lorem-${idx + 1}`}
                className="group/item w-[232px] h-6 font-sans font-normal text-base leading-6 text-brand-2-01 flex items-center justify-between transition-all duration-200"
              >
                <span className="group-hover/item:font-semibold transition-all truncate">
                  {text}
                </span>
                <svg
                  className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-brand-2-01"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <a href="#thiet-bi" className="text-base font-semibold leading-6">Thiết bị</a>
        <a href="#bang-gia" className="text-base font-semibold leading-6">Bảng giá</a>
        <a href="#ho-tro" className="text-base font-semibold leading-6">Hỗ trợ</a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#dang-nhap"
          className="text-base font-bold border border-brand-2-01/20 rounded-full px-6 py-2.5 hover:bg-brand-2-01/5 transition-all duration-200"
        >
          Đăng nhập
        </a>
        <a
          href="#trial"
          className="group/btn text-base font-bold bg-brand-02 rounded-full px-6 py-2.5 flex items-center gap-[6px] hover:scale-105 active:scale-98 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span>Sử dụng miễn phí</span>
          <svg
            className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 duration-200"
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
  );
};
