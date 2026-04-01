'use client';

import { useState } from 'react';
import { Trophy, Shield, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamMarquee from '@/components/TeamMarquee';
import RankingTableMini from '@/components/RankingTableMini';
import MatchesLoop from '@/components/MatchesLoop';
import SectionDivider from '@/components/SectionDivider';
import RankingPage from '@/components/RankingPage';
import Footer from '@/components/Footer';
import {
  topMandantes,
  topVisitantes,
  upcomingMatchesFutsal,
  upcomingMatchesFut7,
} from '@/lib/data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#FF6B00] selection:text-white font-['Inter'] relative">
      {/* Background Global */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596720426673-e4f28bc187b3?q=80&w=2069&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)',
        }}
      ></div>

      <div className="relative z-10">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'home' && (
          <>
            <HeroSection />
            <TeamMarquee />

            <div className="space-y-24 py-24">
              {/* ================= SEÇÃO FUTSAL (LARANJA) ================= */}
              <section className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 h-full">
                    <RankingTableMini
                      title="TOP 5 - MANDANTES"
                      data={topMandantes}
                      accentColor="#FF6B00"
                      setActiveTab={setActiveTab}
                      badgeLabel="FUTSAL"
                    />
                    <RankingTableMini
                      title="TOP 5 - VISITANTES"
                      data={topVisitantes}
                      accentColor="#FFFFFF"
                      setActiveTab={setActiveTab}
                      badgeLabel="FUTSAL"
                    />
                  </div>
                  {/* Card Elite FUTSAL */}
                  <div className="bg-[#FF6B00]/5 border border-[#FF6B00]/10 p-8 transition-all group flex flex-col justify-between h-full rounded-xl relative shadow-2xl hover:border-[#FF6B00]/30">
                    <div className="flex flex-col items-start">
                      <Trophy className="text-[#FF6B00] mb-6" size={48} />
                      <h3 className="text-4xl font-black italic uppercase mb-4 leading-[0.9] text-white text-left">
                        A Elite da
                        <br />
                        Quebrada
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 text-left max-w-sm">
                        Acompanhe os times que lideram o ranking da Temporada 2026 e garantem vaga
                        nos playoffs. A glória é para poucos.
                      </p>
                    </div>
                    <div className="flex w-full">
                      <button
                        className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all whitespace-nowrap"
                        onClick={() => setActiveTab('ranking-futsal')}
                      >
                        VER RANKING DE FUTSAL COMPLETO <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 h-[340px]">
                  {/* Card Principal Fixo (FUTSAL) */}
                  <div className="w-full lg:w-[300px] bg-[#090909] border border-white/10 transition-all group rounded-xl flex flex-col justify-between relative shrink-0 z-20 h-full overflow-hidden shadow-2xl">
                    <div className="flex justify-end items-center p-3 bg-white/[0.02] h-[50px] relative border-b border-white/5"></div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-1 mb-6 text-[#FF6B00]">
                        <Shield size={30} strokeWidth={2.5} />
                        <span className="font-black italic text-xl px-1">VS</span>
                        <Shield size={30} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-black italic uppercase mb-4">
                        PRÓXIMOS CONFRONTOS
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Jogos decisivos que valem tudo! Confira quem vai duelar na próxima rodada e
                        prepare a torcida.
                      </p>
                    </div>
                    <div className="mt-auto p-3 flex items-center bg-white/[0.02] h-[45px] border-t border-white/5">
                      <button
                        className="flex items-center gap-2 text-[10px] font-black text-[#FF6B00] uppercase tracking-widest w-full hover:gap-4 transition-all"
                        onClick={() => setActiveTab('calendario-futsal')}
                      >
                        VER RODADA COMPLETA <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Loop de Jogos FUTSAL */}
                  <div className="flex-1 relative overflow-hidden flex items-center h-full">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>
                    <MatchesLoop matches={upcomingMatchesFutsal} accentColor="#FF6B00" />
                  </div>
                </div>
              </section>

              <SectionDivider />

              {/* ================= SEÇÃO FUT7 (VERDE) ================= */}
              <section className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 h-full">
                    <RankingTableMini
                      title="TOP 5 - MANDANTES"
                      data={topMandantes}
                      accentColor="#10B981"
                      setActiveTab={setActiveTab}
                      badgeLabel="FUT7"
                    />
                    <RankingTableMini
                      title="TOP 5 - VISITANTES"
                      data={topVisitantes}
                      accentColor="#FFFFFF"
                      setActiveTab={setActiveTab}
                      badgeLabel="FUT7"
                    />
                  </div>
                  {/* Card Elite FUT7 */}
                  <div className="bg-[#10B981]/5 border border-[#10B981]/10 p-8 transition-all group flex flex-col justify-between h-full rounded-xl relative shadow-2xl hover:border-[#10B981]/30">
                    <div className="flex flex-col items-start">
                      <Trophy className="text-[#10B981] mb-6" size={48} />
                      <h3 className="text-4xl font-black italic uppercase mb-4 leading-[0.9] text-white text-left">
                        A Elite da
                        <br />
                        Quebrada
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 text-left max-w-sm">
                        Acompanhe os times que lideram o ranking da Temporada 2026 e garantem vaga
                        nos playoffs. A glória é para poucos.
                      </p>
                    </div>
                    <div className="flex w-full">
                      <button
                        className="text-[10px] font-black text-[#10B981] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all whitespace-nowrap"
                        onClick={() => setActiveTab('ranking-fut7')}
                      >
                        VER RANKING DE FUT7 COMPLETO <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Área de Confrontos FUT7 */}
                <div className="flex flex-col lg:flex-row gap-8 h-[340px]">
                  <div className="w-full lg:w-[300px] bg-[#090909] border border-white/10 transition-all group rounded-xl flex flex-col justify-between relative shrink-0 z-20 h-full overflow-hidden shadow-2xl">
                    <div className="flex justify-end items-center p-3 bg-white/[0.02] h-[50px] relative border-b border-white/5"></div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-1 mb-6 text-[#10B981]">
                        <Shield size={30} strokeWidth={2.5} />
                        <span className="font-black italic text-xl px-1">VS</span>
                        <Shield size={30} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-black italic uppercase mb-4">
                        PRÓXIMOS CONFRONTOS
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Jogos decisivos que valem tudo! Confira quem vai duelar na próxima rodada e
                        prepare a torcida.
                      </p>
                    </div>
                    <div className="mt-auto p-3 flex items-center bg-white/[0.02] h-[45px] border-t border-white/5">
                      <button
                        className="flex items-center gap-2 text-[10px] font-black text-[#10B981] uppercase tracking-widest w-full hover:gap-4 transition-all"
                        onClick={() => setActiveTab('calendario-fut7')}
                      >
                        VER RODADA COMPLETA <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 relative overflow-hidden flex items-center h-full">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>
                    <MatchesLoop matches={upcomingMatchesFut7} accentColor="#10B981" />
                  </div>
                </div>
              </section>
            </div>
          </>
        )}

        {/* Ranking Pages */}
        {(activeTab === 'ranking-futsal' || activeTab === 'ranking-fut7') && (
          <RankingPage category={activeTab === 'ranking-futsal' ? 'Futsal' : 'Fut7'} />
        )}

        {/* Placeholder pages */}
        {(activeTab.includes('calendario') ||
          activeTab.includes('playoffs') ||
          activeTab.includes('news') ||
          activeTab === 'vox' ||
          activeTab === 'interclubes') && (
          <div className="pt-40 pb-20 px-6 min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter text-center">
              Página em construção: <br />
              <span className="text-[#FF6B00]">{activeTab.replace('-', ' ').toUpperCase()}</span>
            </h2>
          </div>
        )}

        {/* Login */}
        {activeTab === 'login' && (
          <div className="pt-40 flex justify-center px-6 min-h-screen items-center">
            <div className="w-full max-w-md bg-white/5 p-10 relative">
              <h2 className="text-4xl font-black italic uppercase text-center mb-10">
                Portal do Time
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="captain-id" className="sr-only">ID do Capitão</label>
                  <input
                    id="captain-id"
                    type="text"
                    placeholder="ID DO CAPITÃO"
                    className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#FF6B00] font-bold text-white transition-all uppercase placeholder:text-gray-600"
                    autoComplete="username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="captain-password" className="sr-only">Senha de Acesso</label>
                  <input
                    id="captain-password"
                    type="password"
                    placeholder="SENHA DE ACESSO"
                    className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#FF6B00] font-bold text-white transition-all placeholder:text-gray-600"
                    autoComplete="current-password"
                    required
                  />
                </div>
                <button className="w-full bg-[#FF6B00] py-5 font-black uppercase italic tracking-[3px] hover:bg-white hover:text-black transition-all">
                  ENTRAR NA ARENA
                </button>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
