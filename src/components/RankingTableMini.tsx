'use client';

import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { TeamRanking } from '@/lib/data';

type RankingTableMiniProps = {
  title: string;
  data: TeamRanking[];
  accentColor?: string;
  setActiveTab: (tab: string) => void;
  badgeLabel: string;
};

export default function RankingTableMini({
  title,
  data,
  accentColor = '#FF6B00',
  setActiveTab,
  badgeLabel,
}: RankingTableMiniProps) {
  const getMiniRowBorderColor = (index: number) => {
    if (index === 0) return '#FFD700';
    if (index === 1) return '#C0C0C0';
    return 'transparent';
  };

  return (
    <div className="bg-[#090909] border border-white/10 rounded-xl p-5 w-full relative overflow-hidden h-full shadow-lg flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: accentColor }}></div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 rounded-sm" style={{ backgroundColor: accentColor }}></div>
          <h3 className="text-sm font-black uppercase text-gray-300 tracking-wider">{title}</h3>
        </div>
        <button
          className="px-3 py-1 rounded-full text-[8px] font-black text-gray-500 uppercase tracking-widest bg-white/5 cursor-pointer hover:bg-white/10 hover:text-white transition-colors border border-white/10"
          onClick={() => setActiveTab(badgeLabel === 'FUTSAL' ? 'ranking-futsal' : 'ranking-fut7')}
        >
          {badgeLabel}
        </button>
      </div>

      <div className="flex text-[9px] font-bold text-gray-500 mb-3 px-3 uppercase tracking-widest">
        <span className="w-8">Pos</span>
        <span className="flex-1">Time</span>
        <span className="w-8 text-center">PTS</span>
        <span className="w-8 text-center">PJ</span>
        <span className="w-8 text-center">SG</span>
      </div>

      <div className="space-y-2 flex-1">
        {data.map((team, index) => (
          <div
            key={team.name}
            className="relative flex items-center bg-[#151515] border border-white/5 rounded-md p-3 hover:bg-white/5 transition-colors group overflow-hidden"
            style={{ borderLeft: `4px solid ${getMiniRowBorderColor(index)}` }}
          >
            <div className="w-12 flex flex-col items-center justify-center gap-0.5 pl-1">
              <span
                className={`font-black text-sm ${
                  index === 0 ? 'text-[#FFD700]' : index === 1 ? 'text-[#C0C0C0]' : 'text-white'
                }`}
              >
                {team.pos}º
              </span>
              <div className="flex items-center justify-center">
                {team.movement > 0 && (
                  <span className="flex items-center text-[7px] font-bold text-[#10B981] leading-none">
                    <ArrowUp size={6} strokeWidth={3} className="mr-px" />
                    {team.movement}
                  </span>
                )}
                {team.movement < 0 && (
                  <span className="flex items-center text-[7px] font-bold text-red-500 leading-none">
                    <ArrowDown size={6} strokeWidth={3} className="mr-px" />
                    {Math.abs(team.movement)}
                  </span>
                )}
                {team.movement === 0 && (
                  <span className="flex items-center text-[7px] font-bold text-gray-600 leading-none">
                    <Minus size={6} strokeWidth={3} />
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1 flex items-center gap-2 pl-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={team.logo} alt={team.name} className="w-8 h-8 object-contain" />
              <span className="text-[10px] font-bold text-white uppercase">{team.name}</span>
            </div>

            <span className="w-8 text-center font-black text-white text-sm">{team.pts}</span>
            <span className="w-8 text-center text-xs text-gray-400 font-bold">{team.pj}</span>
            <span className="w-8 text-center text-xs text-gray-400 font-bold">{team.sg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
