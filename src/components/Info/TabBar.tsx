import React, { useState } from 'react';
import iconFood from '../../assets/icon-food.svg';
import iconRetail from '../../assets/icon-retail.svg';
import iconService from '../../assets/icon-service.svg';

export type Tab = {
  id: string;
  label: string;
  icon: string;
  isNew: boolean;
};

export const TABS: Tab[] = [
  { id: 'an-uong', label: 'Ăn uống', icon: iconFood,    isNew: false },
  { id: 'ban-le',  label: 'Bán lẻ',  icon: iconRetail,  isNew: true  },
  { id: 'dich-vu', label: 'Dịch vụ', icon: iconService, isNew: true  },
];

export default function TabBar({
  tabs,
  activeTab,
  onSelect,
}: {
  tabs: Tab[];
  activeTab: string;
  onSelect: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const activeObject = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="relative flex flex-row justify-center items-start pt-0 px-3 pb-3 gap-2 w-fit max-w-full bg-white rounded-b-[32px] before:content-[''] before:absolute before:top-0 before:-left-[24px] before:w-[24px] before:h-[24px] before:bg-[radial-gradient(circle_at_bottom_left,transparent_24px,#fff_24px)] after:content-[''] after:absolute after:top-0 after:-right-[24px] after:w-[24px] after:h-[24px] after:bg-[radial-gradient(circle_at_bottom_right,transparent_24px,#fff_24px)]">
      
      {/* MOBILE TAB DROPDOWN SELECTOR (lg:hidden) */}
      <div className="lg:hidden relative w-[200px] h-[36px] z-20">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex flex-row justify-center items-center px-4 w-full h-[36px] rounded-[24px] bg-[#2D2F33] text-white select-none font-sans font-semibold text-sm"
        >
          <div className="flex flex-row items-center gap-2">
            <img
              src={activeObject.icon}
              alt=""
              className="w-4 h-4 brightness-0 invert flex-none"
            />
            <span>{activeObject.label}</span>
            {activeObject.isNew && (
              <span className="inline-flex w-[32px] h-[18px] items-center justify-center text-[8px] rounded-[24px] bg-brand-02 text-brand-2-01 font-bold">
                NEW
              </span>
            )}
          </div>
          <svg
            className={`absolute right-4 w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-[54px] left-0 w-full bg-white border border-brand-2-01/10 rounded-2xl shadow-xl overflow-hidden py-1 z-30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onSelect(tab.id);
                  setIsOpen(false);
                }}
                className={`flex flex-row items-center justify-between px-4 py-3 w-full text-left font-sans text-sm ${
                  tab.id === activeTab ? 'bg-brand-2-01/5 font-semibold text-brand-2-01' : 'text-brand-2-01/80 hover:bg-brand-2-01/5'
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={tab.icon}
                    alt=""
                    className={`w-4 h-4 flex-none ${tab.id === activeTab ? '' : 'opacity-70'}`}
                  />
                  <span>{tab.label}</span>
                  {tab.isNew && (
                    <span className="inline-flex w-[32px] h-[18px] items-center justify-center text-[8px] rounded-[24px] bg-brand-02 text-brand-2-01 font-bold">
                      NEW
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP TABS (hidden lg:flex) */}
      <div className="hidden lg:flex flex-row gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              className={`
                flex flex-row justify-center items-center gap-2 px-6 py-0 rounded-[24px] w-[200px] h-[48px]
                font-sans font-semibold text-sm leading-[20px]
                transition-all duration-200 select-none flex-none
                ${isActive
                  ? 'bg-[#2D2F33] text-white shadow-sm'
                  : 'text-brand-2-01 hover:bg-brand-2-01/5'}
              `}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className={`w-4 h-4 flex-none transition-all duration-200 ${
                  isActive ? 'brightness-0 invert' : ''
                }`}
              />
              <span className="text-base font-semibold leading-6 text-center">
                {tab.label}
              </span>
              {tab.isNew && (
                <span className="inline-flex w-[48px] h-[24px] items-center justify-center text-[10px] rounded-[24px] bg-brand-02 text-brand-2-01 font-bold flex-none">
                  NEW
                </span>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
