import React from 'react';
import LogoQ from '../../assets/logo-q.svg';
import LogoT from '../../assets/logo-t.svg';
import LogoA from '../../assets/logo-a.svg';
import LogoB from '../../assets/logo-b.svg';
import LogoL from '../../assets/logo-l.svg';
import LogoE from '../../assets/logo-e.svg';

export const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center gap-[3px] lg:gap-[4px] flex-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-02 rounded-lg transition-all">
      <span className="flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-brand-02">
        <img src={LogoQ} alt="Q" className="w-[20px] h-[21px] lg:w-[26px] lg:h-[28px]" />
      </span>
      <span className="flex items-end gap-[1.5px] lg:gap-[2px]">
        <img src={LogoT} alt="t" className="h-[18px] lg:h-[24px] w-auto" />
        <img src={LogoA} alt="a" className="h-[14px] lg:h-[19px] w-auto" />
        <img src={LogoB} alt="b" className="h-[19px] lg:h-[25px] w-auto" />
        <img src={LogoL} alt="l" className="h-[19px] lg:h-[25px] w-auto" />
        <img src={LogoE} alt="e" className="h-[14px] lg:h-[19px] w-auto" />
      </span>
    </a>
  );
};
