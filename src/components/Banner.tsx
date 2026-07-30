// import React, { useState } from 'react';
// import bannerImg from '../assets/banner.png';
// import LogoQ from '../assets/logo-q.svg';
// import LogoT from '../assets/logo-t.svg';
// import LogoA from '../assets/logo-a.svg';
// import LogoB from '../assets/logo-b.svg';
// import LogoL from '../assets/logo-l.svg';
// import LogoE from '../assets/logo-e.svg';

// export default function Banner() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   return (
//     /* Frame 2 */
//     <div className="relative w-full bg-white flex flex-col items-start px-4 md:px-12 lg:px-[86px] py-6 lg:py-0 gap-4 lg:gap-[10px] lg:h-[650px] mt-16 lg:mt-20">

//       {/* ========================================================
//           DESKTOP BANNER CARD (Hiển thị trên Desktop/Tablet lớn)
//          ======================================================== */}
//       <div className="hidden lg:flex relative w-full h-[650px] flex-row items-center px-[86px] py-[80px] gap-[60px] rounded-[24px] bg-[#F8F8F8] overflow-hidden isolate self-stretch">
        
//         {/* image 776 — absolute background */}
//         <img
//           src={bannerImg}
//           alt=""
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         />

//         {/* Frame 1618873369 — content overlay */}
//         <div className="max-w-full  flex flex-col items-start gap-6 flex-grow z-[1] p-0">
//           {/* Frame 1618873368 — Logo + Heading */}
//           <div className="w-[824px] max-w-full h-[192px] flex flex-col items-start gap-3 p-0">
            
//             {/* Logo QTable (Frame 1) */}
//             <div className="flex flex-row items-center gap-[4px]  bg-white/50 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),_inset_2px_2px_2px_rgba(0,0,0,0.04)] rounded-[80px] pl-2 pr-3 py-2 flex-none">
//               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-02 flex-none">
//                 <img src={LogoQ} alt="Q" className="w-[17px] h-[18px]" />
//               </span>
//               <span className="flex items-end gap-[1.5px] flex-none">
//                 <img src={LogoT} alt="t" className="h-[16px] w-auto" />
//                 <img src={LogoA} alt="a" className="h-[13px] w-auto" />
//                 <img src={LogoB} alt="b" className="h-[17px] w-auto" />
//                 <img src={LogoL} alt="l" className="h-[17px] w-auto" />
//                 <img src={LogoE} alt="e" className="h-[13px] w-auto" />
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className=" max-w-full  font-sans font-extrabold text-[56px] leading-[68px] text-brand-2-01">
//               Quản lý dễ dàng,
//               <br />
//               bán hàng hiệu quả
//             </h1>
//           </div>

//           {/* Description */}
//           <p className="w-[619px] max-w-full h-[56px] font-sans font-normal text-base leading-[28px] text-brand-2-01">
//             Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//             labore et dolore magna aliqua.
//           </p>

//           {/* CTA Button (Button-web) */}
//           <button
//             type="button"
//             className="flex flex-row justify-center items-center py-4 px-1 gap-[10px] w-[234px] h-[60px] bg-brand-2-01 rounded-[80px] hover:opacity-90 transition-opacity text-white select-none"
//           >
//             <div className="flex flex-row items-center px-6 py-0 gap-2 w-[226px] h-[32px]">
//               <span className="w-[138px] h-[28px] font-sans font-bold text-[20px] leading-[28px] text-white text-left truncate">
//                 Đặt lịch tư vấn
//               </span>
//               <div className="w-8 h-8 flex items-center justify-center flex-none">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* ========================================================
//           MOBILE BANNER CARD (Lớp stacked card theo Figma mobile)
//          ======================================================== */}
//       <div className="lg:hidden flex flex-col items-start p-0 w-[350px] max-w-full bg-white rounded-[12px] overflow-hidden border border-brand-2-01/5 shadow-sm mx-auto flex-none">
        
//         {/* Frame 1618873665 — Image Box */}
//        <div className="w-full relative flex-none overflow-hidden">
//   <img
//     src={bannerImg}
//     alt=""
//     className="w-full h-auto block"
//   />
// </div>

//         {/* Frame 1618873369 — Content Bottom */}
//         <div className="w-full h-[316px] bg-[#FAFAF5] flex flex-col items-start p-6 pt-4 pb-6 gap-4 flex-none self-stretch">
          
//           {/* Frame 1618873368 — Logo + Heading */}
//           <div className="w-[302px] max-w-full h-[124px] flex flex-col items-start gap-3 flex-none self-stretch">
            
//             {/* Logo QTable mobile (Frame 1) */}
//             <div className="flex flex-row items-center gap-[10px] w-[101px] h-[44px] bg-white/50 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),_inset_2px_2px_2px_rgba(0,0,0,0.04)] rounded-[80px] pl-2 pr-3 py-2 flex-none">
//               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-02 flex-none">
//                 <img src={LogoQ} alt="Q" className="w-[17px] h-[18px]" />
//               </span>
//               <span className="flex items-end gap-[1.5px] flex-none">
//                 <img src={LogoT} alt="t" className="h-[16px] w-auto" />
//                 <img src={LogoA} alt="a" className="h-[13px] w-auto" />
//                 <img src={LogoB} alt="b" className="h-[17px] w-auto" />
//                 <img src={LogoL} alt="l" className="h-[17px] w-auto" />
//                 <img src={LogoE} alt="e" className="h-[13px] w-auto" />
//               </span>
//             </div>

//             {/* Heading Mobile */}
//             <h1 className="w-[302px] max-w-full h-[88px] font-sans font-extrabold text-[28px] leading-[36px] text-brand-2-01">
//               Quản lý dễ dàng,
//               <br />
//               bán hàng hiệu quả
//             </h1>
//           </div>

//           {/* Description Mobile */}
//           <p className="w-[302px] max-w-full h-[36px] font-sans font-normal text-xs leading-[18px] text-brand-2-01/80 line-clamp-2">
//         Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>

//           {/* CTA Button Mobile (Button-web mobile) */}
//           <button
//             type="button"
//             className="flex flex-row justify-center items-center py-2.5 px-5 gap-1.5 w-[162px] h-[40px] bg-brand-2-01 rounded-[80px] hover:opacity-90 transition-opacity text-white text-xs font-bold select-none mt-auto"
//           >
//             <span>Đặt lịch tư vấn</span>
//             <svg className="w-3.5 h-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Pagination (Frame 1618873388) */}
//       <div className="flex flex-row justify-center items-center py-5 px-0 gap-2 w-full h-[44px] flex-none self-stretch">
//         {[0, 1, 2, 3].map((index) => (
//           <button
//             key={index}
//             type="button"
//             onClick={() => setActiveSlide(index)}
//             className={`rounded-full transition-all duration-300 focus:outline-none ${
//               index === activeSlide
//                 ? 'w-[60px] h-[4px] bg-[#2D2F33]'
//                 : 'w-[24px] h-[2px] bg-[#D9D9D9] hover:bg-[#D9D9D9]/80'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }


import React, { useState } from 'react';
import bannerImg from '../assets/banner.png';
import LogoQ from '../assets/logo-q.svg';
import LogoT from '../assets/logo-t.svg';
import LogoA from '../assets/logo-a.svg';
import LogoB from '../assets/logo-b.svg';
import LogoL from '../assets/logo-l.svg';
import LogoE from '../assets/logo-e.svg';

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    /* Frame 2 */
    <div className="relative w-full bg-white flex flex-col items-start px-4 md:px-12 lg:px-[86px] py-6 lg:py-0 gap-4 lg:gap-[10px] lg:h-[650px] mt-16 lg:mt-20">

      {/* ========================================================
          DESKTOP BANNER CARD (Hiển thị trên Desktop/Tablet lớn)
         ======================================================== */}
      <div className="hidden lg:flex relative w-full h-[650px] flex-row items-center px-[86px] py-[80px] gap-[60px] rounded-[24px] bg-[#F8F8F8] overflow-hidden isolate self-stretch">
        
        {/* image 776 — absolute background */}
        <img
          src={bannerImg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Frame 1618873369 — content overlay */}
        <div className="max-w-full  flex flex-col items-start gap-6 flex-grow z-[1] p-0">
          {/* Frame 1618873368 — Logo + Heading */}
          <div className=" max-w-full flex flex-col items-start gap-3 p-0">
            
            {/* Logo QTable (Frame 1) */}
            <div className="flex flex-row items-center gap-[4px]  bg-white/50 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),_inset_2px_2px_2px_rgba(0,0,0,0.04)] rounded-[80px] pl-2 pr-3 py-2 flex-none">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-02 flex-none">
                <img src={LogoQ} alt="Q" className="w-[17px] h-[18px]" />
              </span>
              <span className="flex items-end gap-[1.5px] flex-none">
                <img src={LogoT} alt="t" className="h-[16px] w-auto" />
                <img src={LogoA} alt="a" className="h-[13px] w-auto" />
                <img src={LogoB} alt="b" className="h-[17px] w-auto" />
                <img src={LogoL} alt="l" className="h-[17px] w-auto" />
                <img src={LogoE} alt="e" className="h-[13px] w-auto" />
              </span>
            </div>

            {/* Heading */}
            <h1 className=" max-w-full  font-sans font-extrabold text-[56px] leading-[68px] text-brand-2-01">
              Quản lý dễ dàng,
              <br />
              bán hàng hiệu quả
            </h1> 
          </div>

          {/* Description */}
          <p className="max-w-[619px] h-[56px] font-sans font-normal text-base leading-[28px] text-brand-2-01">
            Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          {/* CTA Button (Button-web) */}
          <button
            type="button"
            className="flex flex-row justify-center items-center py-4 px-1 gap-[10px] w-[234px] h-[60px] bg-brand-2-01 rounded-[80px] hover:opacity-90 transition-opacity text-white select-none"
          >
            <div className="flex flex-row items-center px-6 py-0 gap-2 w-[226px] h-[32px]">
              <span className="font-sans font-bold text-[20px] leading-[28px] text-white text-left truncate">
                Đặt lịch tư vấn
              </span>
              <div className="w-8 h-8 flex items-center justify-center flex-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE BANNER CARD (Lớp stacked card theo Figma mobile)
         ======================================================== */}
      <div className="lg:hidden flex flex-col items-start p-0 w-[350px] max-w-full bg-white rounded-[12px] overflow-hidden border border-brand-2-01/5 shadow-sm mx-auto flex-none">
        
        {/* Frame 1618873665 — Image Box */}
       <div className="w-full relative flex-none overflow-hidden">
  <img
    src={bannerImg}
    alt=""
    className="w-full h-auto block"
  />
</div>

        {/* Frame 1618873369 — Content Bottom */}
        <div className="w-full h-[316px] bg-[#FAFAF5] flex flex-col items-start p-6 pt-4 pb-6 gap-4 flex-none self-stretch">
          
          {/* Frame 1618873368 — Logo + Heading */}
          <div className="w-[302px] max-w-full h-[124px] flex flex-col items-start gap-3 flex-none self-stretch">
            
            {/* Logo QTable mobile (Frame 1) */}
            <div className="flex flex-row items-center gap-[6px] w-[76px] h-[32px] bg-white border border-[#FAFAF5] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),_inset_2px_2px_2px_rgba(0,0,0,0.04)] rounded-[80px] pt-[6px] pr-[12px] pb-[6px] pl-[6px] flex-none">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-02 flex-none">
                <img src={LogoQ} alt="Q" className="w-[11px] h-[12px]" />
              </span>
              <span className="flex items-end gap-[1px] flex-none">
                <img src={LogoT} alt="t" className="h-[11px] w-auto" />
                <img src={LogoA} alt="a" className="h-[9px] w-auto" />
                <img src={LogoB} alt="b" className="h-[12px] w-auto" />
                <img src={LogoL} alt="l" className="h-[12px] w-auto" />
                <img src={LogoE} alt="e" className="h-[9px] w-auto" />
              </span>
            </div>

            {/* Heading Mobile */}
            <h1 className="w-[302px] max-w-full h-[80px] font-sans font-extrabold text-[32px] leading-[40px] text-brand-2-01 self-stretch flex-none">
              Quản lý dễ dàng,
              <br />
              bán hàng hiệu quả
            </h1>
          </div>

          {/* Description Mobile */}
          <p className="w-[302px] max-w-full h-[80px] font-sans font-normal text-sm leading-[20px] text-brand-2-01 flex-none self-stretch">
        Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Button Mobile (Button-web mobile) */}
          <button
            type="button"
            className="flex flex-row justify-center items-center py-2.5 px-5 gap-1.5 w-[162px] h-[40px] bg-brand-2-01 rounded-[80px] hover:opacity-90 transition-opacity text-white text-sm font-bold select-none mt-auto"
          >
            <span>Đặt lịch tư vấn</span>
            <svg className="w-3.5 h-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Pagination (Frame 1618873388) */}
      <div className="flex flex-row justify-center items-center py-5 px-0 gap-2 w-full h-[44px] flex-none self-stretch">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`rounded-full transition-all duration-300 focus:outline-none ${
              index === activeSlide
                ? 'w-[60px] h-[4px] bg-[#2D2F33]'
                : 'w-[24px] h-[2px] bg-[#D9D9D9] hover:bg-[#D9D9D9]/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}