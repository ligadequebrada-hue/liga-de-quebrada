'use client';

import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter leading-none uppercase">
              LIGA DE QUEBRADA
            </span>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none mt-1">
              RESPEITO • DISCIPLINA • FUTEBOL
            </span>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/ligadequebrada" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-white hover:text-[#FF6B00] transition-colors cursor-pointer" size={32} />
            </a>
            <a href="https://facebook.com/ligadequebrada" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-white hover:text-[#FF6B00] transition-colors cursor-pointer" size={32} />
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 text-center md:text-right">
          <p className="text-[9px] text-gray-800 font-bold uppercase tracking-[8px]">
            © 2026 PRODUZIDO NAS VIELAS E RUAS DAS QUEBRADAS
          </p>
        </div>
      </div>
    </footer>
  );
}
