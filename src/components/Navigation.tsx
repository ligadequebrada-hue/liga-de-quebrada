'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

type NavigationProps = {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
};

const menuItems = [
  { label: 'HOME', id: 'home' },
  {
    label: 'CALENDÁRIO',
    id: 'calendario-group',
    hasSubmenu: true,
    subItems: [
      { label: 'FUTSAL', id: 'calendario-futsal' },
      { label: 'FUT7', id: 'calendario-fut7' },
    ],
  },
  {
    label: 'RANKING',
    id: 'ranking-group',
    hasSubmenu: true,
    subItems: [
      { label: 'FUTSAL', id: 'ranking-futsal' },
      { label: 'FUT7', id: 'ranking-fut7' },
    ],
  },
  {
    label: 'PLAYOFFS',
    id: 'playoffs-group',
    hasSubmenu: true,
    subItems: [
      { label: 'FUTSAL', id: 'playoffs-futsal' },
      { label: 'FUT7', id: 'playoffs-fut7' },
    ],
  },
  { label: 'INTERCLUBES', id: 'interclubes' },
  {
    label: 'NEWS',
    id: 'news-group',
    hasSubmenu: true,
    subItems: [
      { label: 'FUTSAL', id: 'news-futsal' },
      { label: 'FUT7', id: 'news-fut7' },
    ],
  },
  { label: 'VOX ESPORTES', id: 'vox' },
];

export default function Navigation({ activeTab = '', setActiveTab }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const handleTab = (tab: string) => setActiveTab?.(tab);

  return (
    <nav className="fixed top-0 w-full bg-[#0A0A0B]/95 backdrop-blur-xl z-[100]" role="navigation" aria-label="Menu principal">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer shrink-0" onClick={() => handleTab('home')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png"
            alt="Logo Liga de Quebrada"
            className="h-14 w-auto object-contain"
            width={56}
            height={56}
          />
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-black italic text-white tracking-tighter leading-none uppercase">
              LIGA DE QUEBRADA
            </span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none mt-1">
              RESPEITO • DISCIPLINA • FUTEBOL
            </span>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex gap-5 items-center">
          {menuItems.map((item) => {
            const isActive = item.hasSubmenu
              ? item.subItems!.some((sub) => sub.id === activeTab)
              : activeTab === item.id;

            return item.hasSubmenu ? (
              <div key={item.label} className="relative group">
                <button
                  className={`flex items-center gap-1 text-[10px] xl:text-[11px] font-black tracking-[1.5px] transition-all hover:scale-105 ${
                    isActive ? 'text-[#FF6B00]' : 'text-gray-400 hover:text-white'
                  }`}
                  aria-haspopup="true"
                >
                  {item.label} <ChevronDown size={14} strokeWidth={3} />
                </button>
                <div className="absolute top-full left-0 mt-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-[#0d0d0e] rounded-md shadow-2xl p-2 w-32 flex flex-col gap-1">
                    {item.subItems!.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleTab(sub.id)}
                        className={`text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider rounded hover:bg-white/5 hover:text-[#FF6B00] transition-colors ${
                          activeTab === sub.id ? 'text-[#FF6B00] bg-white/5' : 'text-gray-400'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleTab(item.id)}
                className={`text-[10px] xl:text-[11px] font-black tracking-[1.5px] transition-all hover:scale-105 whitespace-nowrap ${
                  isActive ? 'text-[#FF6B00]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <button
            onClick={() => router.push('/login')}
            className="bg-[#FF6B00] text-white px-6 py-2.5 font-black text-[10px] uppercase italic hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] inline-block">PORTAL DO TIME</span>
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-[#FF6B00]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#0A0A0B] p-6 flex flex-col gap-4 z-50">
          {menuItems.map((item) =>
            item.hasSubmenu ? (
              <div key={item.label} className="flex flex-col gap-3 pl-4 ml-1">
                <span className="text-sm font-black uppercase text-gray-500 tracking-widest">
                  {item.label}
                </span>
                {item.subItems!.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      handleTab(sub.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm font-bold uppercase tracking-wider ${
                      activeTab === sub.id ? 'text-[#FF6B00]' : 'text-white'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => {
                  handleTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-black uppercase tracking-widest ${
                  activeTab === item.id ? 'text-[#FF6B00]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            )
          )}
          <button
            onClick={() => {
              router.push('/login');
              setIsMobileMenuOpen(false);
            }}
            className="bg-[#FF6B00] text-white py-3 font-black uppercase text-center mt-4"
          >
            PORTAL DO TIME
          </button>
        </div>
      )}
    </nav>
  );
}
