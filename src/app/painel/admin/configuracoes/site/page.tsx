'use client';

import { Monitor, Save, Eye, Loader2, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getSiteConfig, updateSiteConfig } from '@/lib/actions/site-config';

export default function ConfiguracaoSitePage() {
  const [badge, setBadge] = useState('');
  const [titleWhite, setTitleWhite] = useState('');
  const [titleOrange, setTitleOrange] = useState('');
  const [status, setStatus] = useState<'online' | 'offline'>('online');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getSiteConfig()
      .then((config) => {
        setBadge(config.hero_badge || 'TEMPORADA 2026 ONLINE');
        setTitleWhite(config.hero_title_white || 'SEU JOGO NÃO É UM');
        setTitleOrange(config.hero_title_orange || 'SIMPLES AMISTOSO');
        setStatus((config.hero_status as 'online' | 'offline') || 'online');
      })
      .catch(() => {
        setBadge('TEMPORADA 2026 ONLINE');
        setTitleWhite('SEU JOGO NÃO É UM');
        setTitleOrange('SIMPLES AMISTOSO');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await updateSiteConfig([
        { id: 'hero_badge', value: badge },
        { id: 'hero_title_white', value: titleWhite },
        { id: 'hero_title_orange', value: titleOrange },
        { id: 'hero_status', value: status },
      ]);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      alert('Erro ao salvar. Verifique se a tabela site_config existe no Supabase.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={24} className="animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
          <Monitor size={18} className="text-[#FF6B00]" />
        </div>
        <div>
          <h2 className="text-base sm:text-xl font-black italic uppercase tracking-tight">Configuração do Site</h2>
          <p className="text-[10px] sm:text-xs text-gray-500">Personalize os textos exibidos na página inicial</p>
        </div>
      </div>

      {/* Status Online/Offline */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Status da Temporada</h3>
        <p className="text-[10px] sm:text-xs text-gray-500">Controla a cor da bolinha e o indicador de status na página inicial.</p>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => setStatus('online')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase border transition-all ${
              status === 'online'
                ? 'bg-[#00FF00]/10 border-[#00FF00]/30 text-[#00FF00]'
                : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#00FF00] rounded-full" />
            Online
          </button>
          <button
            onClick={() => setStatus('offline')}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase border transition-all ${
              status === 'offline'
                ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]'
                : 'bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#EF4444] rounded-full" />
            Offline
          </button>
        </div>
      </div>

      {/* Badge / Temporada */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Badge de Destaque</h3>
        <p className="text-[10px] sm:text-xs text-gray-500">Texto exibido na tag no topo da seção principal.</p>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Texto da Badge</label>
          <input
            type="text"
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            placeholder="TEMPORADA 2026 ONLINE"
            className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
          />
        </div>
      </div>

      {/* Frase de Destaque */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Frase de Destaque</h3>
        <p className="text-[10px] sm:text-xs text-gray-500">Título principal da página inicial. A primeira linha aparece em branco e a segunda em laranja.</p>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Linha 1 (Branca)</label>
            <input
              type="text"
              value={titleWhite}
              onChange={(e) => setTitleWhite(e.target.value)}
              placeholder="SEU JOGO NÃO É UM"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Linha 2 (Laranja)</label>
            <input
              type="text"
              value={titleOrange}
              onChange={(e) => setTitleOrange(e.target.value)}
              placeholder="SIMPLES AMISTOSO"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Eye size={16} className="text-gray-400" />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Pré-visualização</h3>
        </div>
        <div className="bg-[#0A0A0B] border border-white/10 p-4 sm:p-8 rounded overflow-hidden">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                status === 'online'
                  ? 'bg-[#00FF00] shadow-[0_0_10px_#00FF00]'
                  : 'bg-[#EF4444] shadow-[0_0_10px_#EF4444]'
              }`}
            />
            <span className="text-[10px] font-bold tracking-[3px] text-gray-300 uppercase">
              {badge || 'TEMPORADA 2026 ONLINE'}
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-black italic text-white leading-[0.9] tracking-tighter uppercase">
            {titleWhite || 'SEU JOGO NÃO É UM'} <br />
            <span className="text-[#FF6B00]">{titleOrange || 'SIMPLES AMISTOSO'}</span>
          </h1>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF6B00]/90 disabled:opacity-50 text-white text-sm font-bold uppercase px-6 py-3 transition-colors"
        >
          {saving ? (
            <Loader2 size={16} className="animate-spin" />
          ) : saved ? (
            <Check size={16} />
          ) : (
            <Save size={16} />
          )}
          {saving ? 'Salvando...' : saved ? 'Salvo!' : 'Salvar Alterações'}
        </button>
      </div>
    </div>
  );
}
