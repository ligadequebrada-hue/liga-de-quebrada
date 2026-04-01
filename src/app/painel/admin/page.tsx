'use client';

import { Shield, Users, Calendar, Trophy, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Times Cadastrados', value: '24', icon: Shield, color: '#10B981' },
  { label: 'Jogadores Inscritos', value: '312', icon: Users, color: '#3B82F6' },
  { label: 'Partidas Realizadas', value: '48', icon: Calendar, color: '#FF6B00' },
  { label: 'Rodada Atual', value: '8ª', icon: Trophy, color: '#F59E0B' },
];

const recentActivity = [
  { action: 'Novo time cadastrado', detail: 'Quebrada City FC', time: 'Há 2 horas', type: 'team' },
  { action: 'Resultado registrado', detail: 'Vila Nova 4 x 2 Rua FC', time: 'Há 5 horas', type: 'match' },
  { action: 'Jogador inscrito', detail: 'Carlos Silva - Favela United', time: 'Há 8 horas', type: 'player' },
  { action: 'Cartão vermelho', detail: 'João Santos - Beco All Stars', time: 'Há 1 dia', type: 'card' },
  { action: 'Documento enviado', detail: 'Regulamento atualizado', time: 'Há 1 dia', type: 'doc' },
  { action: 'Novo time cadastrado', detail: 'Periferia FC', time: 'Há 2 dias', type: 'team' },
];

const pendingItems = [
  { label: 'Inscrições pendentes', count: 3, severity: 'high' },
  { label: 'Documentos para revisar', count: 7, severity: 'medium' },
  { label: 'Resultados para confirmar', count: 2, severity: 'low' },
];

const typeColors: Record<string, string> = {
  team: '#10B981',
  match: '#FF6B00',
  player: '#3B82F6',
  card: '#EF4444',
  doc: '#F59E0B',
};

export default function PainelAdminPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tight">Painel Administrativo</h1>
          <p className="text-sm text-gray-500 mt-1">Gestão completa da Liga de Quebrada • Temporada 2026</p>
        </div>
        <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-2">
          <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
          <span className="text-xs font-bold text-[#10B981] uppercase">Sistema Online</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#10B981]">
                <ArrowUpRight size={14} />
                <TrendingUp size={14} />
              </div>
            </div>
            <p className="text-2xl font-black">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white/5 border border-white/5 p-6">
          <h2 className="text-lg font-black italic uppercase tracking-wide mb-5">Atividade Recente</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: typeColors[item.type] }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
                <p className="text-[10px] text-gray-600 shrink-0">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pending / Alerts */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/5 p-6">
            <h2 className="text-lg font-black italic uppercase tracking-wide mb-5 flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#F59E0B]" />
              Pendências
            </h2>
            <div className="space-y-3">
              {pendingItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-white/[0.02]">
                  <p className="text-sm font-medium">{item.label}</p>
                  <span className={`text-xs font-black px-2 py-1 ${
                    item.severity === 'high'
                      ? 'bg-red-500/10 text-red-400'
                      : item.severity === 'medium'
                      ? 'bg-yellow-500/10 text-yellow-400'
                      : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/5 border border-white/5 p-6">
            <h2 className="text-lg font-black italic uppercase tracking-wide mb-5">Campeonatos</h2>
            <div className="space-y-4">
              <div className="p-3 bg-[#FF6B00]/5 border border-[#FF6B00]/10">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold">Futsal</p>
                  <span className="text-[10px] font-bold text-[#FF6B00] uppercase">Ativo</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">12 times • Rodada 8 de 22</p>
                <div className="mt-2 h-1.5 bg-white/5 overflow-hidden">
                  <div className="h-full bg-[#FF6B00] w-[36%]" />
                </div>
              </div>
              <div className="p-3 bg-[#10B981]/5 border border-[#10B981]/10">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold">Fut7</p>
                  <span className="text-[10px] font-bold text-[#10B981] uppercase">Ativo</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">12 times • Rodada 6 de 22</p>
                <div className="mt-2 h-1.5 bg-white/5 overflow-hidden">
                  <div className="h-full bg-[#10B981] w-[27%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
