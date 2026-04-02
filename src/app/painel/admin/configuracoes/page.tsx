'use client';

import { Globe, Save } from 'lucide-react';

export default function ConfiguracoesGeralPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
          <Globe size={18} className="text-[#FF6B00]" />
        </div>
        <div>
          <h2 className="text-base sm:text-xl font-black italic uppercase tracking-tight">Geral</h2>
          <p className="text-[10px] sm:text-xs text-gray-500">Configurações gerais da liga</p>
        </div>
      </div>

      {/* Nome da Liga */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Informações da Liga</h3>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Nome da Liga</label>
            <input
              type="text"
              defaultValue="Liga de Quebrada"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Temporada</label>
            <input
              type="text"
              defaultValue="2026"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Descrição</label>
            <textarea
              defaultValue="A liga que nasceu nas quebradas e virou referência no futebol amador."
              rows={3}
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Contato</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">E-mail</label>
            <input
              type="email"
              defaultValue=""
              placeholder="contato@ligadequebrada.com"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Telefone / WhatsApp</label>
            <input
              type="text"
              defaultValue=""
              placeholder="(11) 99999-9999"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="bg-white/5 border border-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-300">Redes Sociais</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Instagram</label>
            <input
              type="text"
              defaultValue=""
              placeholder="@ligadequebrada"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">YouTube</label>
            <input
              type="text"
              defaultValue=""
              placeholder="youtube.com/@ligadequebrada"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-sm font-bold uppercase px-6 py-3 transition-colors">
          <Save size={16} />
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
