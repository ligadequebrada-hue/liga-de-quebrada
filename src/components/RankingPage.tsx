'use client';

import FullRankingTable from './FullRankingTable';
import { generateFullRanking } from '@/lib/data';

type RankingPageProps = {
  category: string;
};

export default function RankingPage({ category }: RankingPageProps) {
  const fullMandantes = generateFullRanking();
  const fullVisitantes = generateFullRanking();
  const accent = category === 'Futsal' ? '#FF6B00' : '#10B981';

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 pl-6" style={{ borderLeft: `8px solid ${accent}` }}>
          <h2 className="text-5xl font-black italic uppercase text-white mb-2 tracking-tighter">
            Classificação Oficial {category}
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              Temporada 2026
            </span>
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#10B9811A' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981' }}
              ></span>
              <span
                className="text-[10px] font-black tracking-[2px] uppercase"
                style={{ color: '#10B981' }}
              >
                ONLINE
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <FullRankingTable title="RANKING MANDANTES" data={fullMandantes} accentColor={accent} />
          <FullRankingTable title="RANKING VISITANTES" data={fullVisitantes} accentColor="#FFFFFF" />
        </div>
      </div>
    </section>
  );
}
