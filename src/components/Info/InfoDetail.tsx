import React, { useState } from 'react';

export default function InfoDetail({
  title,
  description,
  items,
  selectedItem,
  onSelectItem,
}: {
  title: string;
  description: string;
  items: string[];
  selectedItem: string;
  onSelectItem: (item: string) => void;
}) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    /* Frame 1618873378 — Outer Container */
    <div className="w-[1220px] max-w-full flex flex-col lg:flex-row justify-between items-center p-0 gap-10 lg:gap-[80px]">

      {/* Left — text content (Frame 1618873376 / Content mobile) */}
      <div className="w-full lg:w-[540px] max-w-[302px] lg:max-w-none h-auto lg:h-[600px] flex-none flex flex-col items-start p-0 gap-4 lg:gap-10 border-0 lg:border-l lg:border-solid lg:border-brand-2-01/10 relative">

        {/* MOBILE SUB-ITEM DROPDOWN SELECTOR (lg:hidden) */}
        <div className="lg:hidden relative w-full h-[40px] z-10">
          <button
            type="button"
            onClick={() => setIsSubOpen(!isSubOpen)}
            className="flex flex-row justify-between items-center px-5 w-full h-[40px] rounded-[24px] bg-white border border-brand-2-01/10 text-brand-2-01 font-sans font-semibold text-sm select-none shadow-sm"
          >
            <span>{selectedItem}</span>
            <svg
              className={`w-4 h-4 text-brand-2-01/60 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {isSubOpen && (
            <div className="absolute top-[54px] left-0 w-full bg-white border border-brand-2-01/10 rounded-2xl shadow-xl overflow-hidden py-1 z-30 max-h-[240px] overflow-y-auto">
              {items.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    onSelectItem(item);
                    setIsSubOpen(false);
                  }}
                  className={`block px-5 py-3 w-full text-left font-sans text-sm ${
                    item === selectedItem ? 'bg-brand-2-01/5 font-semibold text-brand-2-01' : 'text-brand-2-01/80 hover:bg-brand-2-01/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 01 — Heading Parent Div */}
        <div className="relative w-full lg:h-[260px] flex flex-col justify-center items-start pt-0 lg:pt-[20px] px-0 pb-0 lg:pb-[20px] pl-0 lg:pl-10 gap-3 lg:gap-6 flex-none self-stretch isolate">
          
          {/* Accent bar (Rectangle 18267) — Hidden on Mobile */}
          <div className="hidden lg:block absolute left-[-1px] top-[73px] w-[3px] h-[50px] bg-[#6E6F72] rounded-[80px] z-[3]" />

          {/* Background bar (Rectangle 18266) — Hidden on Mobile */}
          <div className="hidden lg:block absolute left-[-1px] top-[73px] w-[3px] h-[120px] bg-[#E1E1D9] rounded-[80px] z-[2]" />

          {/* Content (Frame 1618873375) */}
          <div className="w-full flex flex-col items-start p-0 gap-2 flex-none self-stretch z-0">
            {/* Title */}
            <h3 className="w-full min-h-[32px]  font-sans font-bold text-[24px] lg:text-[36px] leading-[32px] lg:leading-[50px] text-brand-2-01 flex-none self-stretch">
              {title}
            </h3>

            {/* Description */}
            <p className="w-full  h-auto font-sans font-normal text-sm lg:text-base leading-[20px] lg:leading-[28px] text-brand-2-01 flex-none self-stretch">
              {description}
            </p>
          </div>

        </div>
   

        {/* Items list (Frame 3) — Hidden on Mobile */}
        <ul className="hidden lg:flex flex-col items-start pt-0 pr-0 pb-0 pl-10 gap-7 w-full  flex-none self-stretch mt-auto">
          {items.map((item) => (
            /* Item wrapper (Frame 1618873375) */
            <li
              key={item}
              onClick={() => onSelectItem(item)}
              className="flex flex-col items-start p-0 gap-4 w-full  min-h-[28px] h-auto flex-none self-stretch cursor-pointer"
            >
              {/* Text */}
              <span className="w-full min-h-[28px] h-auto font-sans font-bold text-[20px] leading-[28px] text-brand-2-01 flex-none self-stretch transition-colors hover:text-brand-2-01/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — (Frame 1618873379) */}
      <div className="relative w-full aspect-square lg:aspect-square lg:flex-1 flex-none">
        {/* Img-Holder */}
        <div className="absolute inset-0 bg-white rounded-[24px] border border-brand-2-01/5 flex items-center justify-center">
          {/* Img content can go here */}
        </div>
      </div>

    </div>
  );
}
