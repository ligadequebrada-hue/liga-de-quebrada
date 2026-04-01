import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 grayscale">
          <source
            src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/IMG_0452.MP4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-5xl space-y-4 text-left">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-[#00FF00] rounded-full animate-pulse shadow-[0_0_10px_#00FF00]"></span>
            <span className="text-[10px] font-bold tracking-[3px] text-gray-300 uppercase">
              TEMPORADA 2026 ONLINE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic text-white leading-[0.9] tracking-tighter uppercase">
            SEU JOGO NÃO É UM <br />
            <span className="text-[#FF6B00]">SIMPLES AMISTOSO</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group bg-[#FF6B00] text-white px-10 py-5 font-black uppercase italic tracking-wider flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              CADASTRO MANDANTE{' '}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            <button className="group bg-[#4A4A4A] text-white px-10 py-5 font-black uppercase italic tracking-wider flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              CADASTRO VISITANTE{' '}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
