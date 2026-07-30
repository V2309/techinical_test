export default function LongSubtitle({ text }: { text: string }) {
  return (
    <div
      className="flex flex-row justify-center items-center px-3 py-0 gap-[10px] h-[28px] bg-brand-02 rounded-[24px] flex-none"
    >
      <span className="font-sans font-extrabold text-[12px] leading-[24px] text-center uppercase text-brand-2-01 select-none flex-none">
        {text}
      </span>
    </div>
  );
}
