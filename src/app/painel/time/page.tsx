'use client';

import { Trophy, Users, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  { label: 'Posição no Ranking', value: '3º', change: '+2', up: true, icon: Trophy, color: '#FF6B00' },
  { label: 'Jogadores Inscritos', value: '18', change: '+3', up: true, icon: Users, color: '#10B981' },
  { label: 'Próximo Jogo', value: '05/04', change: 'Sáb', up: true, icon: Calendar, color: '#3B82F6' },
  { label: 'Aproveitamento', value: '72%', change: '+5%', up: true, icon: TrendingUp, color: '#F59E0B' },
];

const recentMatches = [
  { opponent: 'Vila Nova FC', result: 'V', score: '4 x 2', date: '28/03' },
  { opponent: 'Rua FC', result: 'V', score: '3 x 1', date: '21/03' },
  { opponent: 'Favela United', result: 'D', score: '1 x 2', date: '14/03' },
  { opponent: 'Beco All Stars', result: 'E', score: '2 x 2', date: '07/03' },
  { opponent: 'Quebrada City', result: 'V', score: '5 x 0', date: '01/03' },
];

const resultColor: Record<string, string> = {
  V: 'bg-[#10B981]',
  D: 'bg-red-500',
  E: 'bg-yellow-500',
};

const resultLabel: Record<string, string> = {
  V: 'Vitória',
  D: 'Derrota',
  E: 'Empate',
};

export default function PainelTimePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black italic uppercase tracking-tight">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Visão geral do seu time na temporada 2026</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-[#10B981]' : 'text-red-400'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-black">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Matches */}
        <div className="bg-white/5 border border-white/5 p-6">
          <h2 className="text-lg font-black italic uppercase tracking-wide mb-5">Últimos Jogos</h2>
          <div className="space-y-3">
            {recentMatches.map((match) => (
              <div key={`${match.opponent}-${match.date}`} className="flex items-center gap-4 p-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className={`w-8 h-8 ${resultColor[match.result]} flex items-center justify-center text-xs font-black text-white shrink-0`}>
                  {match.result}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{match.opponent}</p>
                  <p className="text-[10px] text-gray-500">{resultLabel[match.result]} • {match.date}</p>
                </div>
                <p className="text-sm font-black text-gray-300 shrink-0">{match.score}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Match */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/5 p-6">
            <h2 className="text-lg font-black italic uppercase tracking-wide mb-5">Próximo Jogo</h2>
            <div className="flex items-center justify-between p-4 bg-[#FF6B00]/5 border border-[#FF6B00]/10">
              <div>
                <p className="text-xs text-[#FF6B00] font-bold uppercase tracking-wider">Futsal • Rodada 8</p>
                <p className="text-xl font-black mt-2">Seu Time vs Vila Real FC</p>
                <p className="text-sm text-gray-400 mt-1">Sábado, 05/04 às 15:00</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-[#FF6B00]">4</p>
                <p className="text-[10px] text-gray-500">DIAS</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 border border-white/5 p-6">
            <h2 className="text-lg font-black italic uppercase tracking-wide mb-5">Ações Rápidas</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Escalar Time', color: '#FF6B00' },
                { label: 'Ver Elenco', color: '#10B981' },
                { label: 'Calendário', color: '#3B82F6' },
                { label: 'Documentos', color: '#F59E0B' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="p-4 bg-white/[0.02] border border-white/5 text-sm font-bold hover:border-opacity-50 transition-all text-left"
                  style={{ borderColor: `${action.color}20` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${action.color}60`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${action.color}20`)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
