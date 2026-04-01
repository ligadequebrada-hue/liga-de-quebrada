'use client';

import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { FullTeamRanking } from '@/lib/data';

type FullRankingTableProps = {
  title: string;
  data: FullTeamRanking[];
  accentColor: string;
};

export default function FullRankingTable({ title, data, accentColor }: FullRankingTableProps) {
  const getRowBorderColor = (index: number) => {
    if (index === 0) return '#FFD700';
    if (index === 1) return '#C0C0C0';
    return 'transparent';
  };

  return (
    <div className="bg-[#0d0d0e] border border-white/5 rounded-2xl shadow-2xl flex flex-col h-full p-6">
      <div className="flex items-center gap-4 mb-6 relative overflow-hidden pb-4 border-b border-white/5">
        <div className="w-1.5 h-8 rounded-sm shrink-0" style={{ backgroundColor: accentColor }}></div>
        <h3
          className="text-3xl font-black italic uppercase tracking-tighter leading-none"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
      </div>

      <div className="flex px-3 pb-2 text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2">
        <div className="w-20 text-center">Pos</div>
        <div className="flex-1 pl-4">Clube</div>
        <div className="w-12 text-center text-white">PTS</div>
        <div className="w-10 text-center">J</div>
        <div className="w-10 text-center">V</div>
        <div className="w-10 text-center">E</div>
        <div className="w-10 text-center">D</div>
        <div className="w-10 text-center">SG</div>
        <div className="w-24 text-center hidden xl:block">Últimos 5</div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {data.map((team, idx) => (
          <div
            key={team.name}
            className="flex items-center bg-[#151515] border border-white/5 rounded-md p-3 relative overflow-hidden hover:bg-[#202020] transition-colors"
            style={{ borderLeft: `5px solid ${getRowBorderColor(idx)}` }}
          >
            <div className="w-20 flex flex-col items-center justify-center gap-1">
              <span
                className={`font-black text-xl ${
                  idx === 0 ? 'text-[#FFD700]' : idx === 1 ? 'text-[#C0C0C0]' : 'text-gray-500'
                }`}
              >
                {team.pos}º
              </span>
              <div className="flex items-center justify-center">
                {team.movement > 0 && (
                  <span className="flex items-center text-[9px] font-bold text-[#10B981] leading-none">
                    <ArrowUp size={10} strokeWidth={4} className="mr-0.5" /> {team.movement}
                  </span>
                )}
                {team.movement < 0 && (
                  <span className="flex items-center text-[9px] font-bold text-red-500 leading-none">
                    <ArrowDown size={10} strokeWidth={4} className="mr-0.5" />{' '}
                    {Math.abs(team.movement)}
                  </span>
                )}
                {team.movement === 0 && (
                  <span className="flex items-center text-[9px] font-bold text-gray-600 leading-none">
                    <Minus size={10} strokeWidth={4} />
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1 flex items-center gap-4 pl-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={team.logo} alt={team.name} className="w-10 h-10 object-contain" />
              <span className="font-bold text-white uppercase tracking-wide text-sm">
                {team.name}
              </span>
            </div>

            <div className="w-12 text-center font-black text-lg text-white">{team.pts}</div>
            <div className="w-10 text-center font-medium text-sm text-gray-400">{team.j}</div>
            <div className="w-10 text-center font-medium text-sm text-gray-400">{team.v}</div>
            <div className="w-10 text-center font-medium text-sm text-gray-400">{team.e}</div>
            <div className="w-10 text-center font-medium text-sm text-gray-400">{team.d}</div>
            <div className="w-10 text-center font-bold text-sm text-white">
              {team.sg > 0 ? `+${team.sg}` : team.sg}
            </div>

            <div className="w-24 hidden xl:flex justify-center gap-1.5">
              {team.last5?.map((res, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    res === 'v' ? 'bg-[#10B981]' : res === 'e' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  title={res === 'v' ? 'Vitória' : res === 'e' ? 'Empate' : 'Derrota'}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
