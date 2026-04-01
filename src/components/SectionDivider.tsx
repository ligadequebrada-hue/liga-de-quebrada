export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div
        className="bg-[#0d0d0e] py-4 overflow-hidden relative flex justify-center items-center rounded-xl"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="absolute inset-0 bg-[#FF6B00]/[0.03]"></div>
        <div className="flex gap-12 justify-center items-center whitespace-nowrap opacity-30 select-none">
          <span className="text-[10px] font-black italic uppercase tracking-[0.5em] text-white">
            LIGA DE QUEBRADA
          </span>
          <span className="text-[10px] font-black text-[#FF6B00]">•</span>
          <span className="text-[10px] font-black italic uppercase tracking-[0.5em] text-white">
            LIGA DE QUEBRADA
          </span>
          <span className="text-[10px] font-black text-[#FF6B00]">•</span>
          <span className="text-[10px] font-black italic uppercase tracking-[0.5em] text-white">
            LIGA DE QUEBRADA
          </span>
          <span className="text-[10px] font-black text-[#FF6B00]">•</span>
          <span className="text-[10px] font-black italic uppercase tracking-[0.5em] text-white">
            LIGA DE QUEBRADA
          </span>
        </div>
      </div>
    </div>
  );
}
