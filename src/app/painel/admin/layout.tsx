'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut, LayoutDashboard, Users, Calendar, Trophy, Shield, Settings, BarChart3, FileText, ChevronRight } from 'lucide-react';

export default function PainelAdminLayout({ children }: { children: React.ReactNode }) {
  const { user, role, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/painel/admin' },
    { label: 'Times', icon: Shield, href: '/painel/admin/times' },
    { label: 'Jogadores', icon: Users, href: '/painel/admin/jogadores' },
    { label: 'Partidas', icon: Calendar, href: '/painel/admin/partidas' },
    { label: 'Ranking', icon: Trophy, href: '/painel/admin/ranking' },
    { label: 'Relatórios', icon: BarChart3, href: '/painel/admin/relatorios' },
    { label: 'Documentos', icon: FileText, href: '/painel/admin/documentos' },
    { label: 'Configurações', icon: Settings, href: '/painel/admin/configuracoes' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#090909] border-r border-white/5 flex flex-col shrink-0 fixed h-screen">
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png"
              alt="Logo Liga de Quebrada"
              className="h-10 w-auto"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-black italic uppercase tracking-tight leading-none">LDQ</p>
              <p className="text-[9px] text-[#10B981] font-bold uppercase tracking-[0.15em] mt-0.5">Administração</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded transition-all group"
            >
              <item.icon size={18} className="shrink-0" />
              <span className="flex-1 text-left">{item.label}</span>
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center text-xs font-black text-[#10B981]">
              {user.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">{user.email}</p>
              <p className="text-[10px] text-[#10B981] uppercase font-bold">Administrador</p>
            </div>
          </div>
          <button
            onClick={async () => { await signOut(); router.push('/login'); }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-red-400 hover:bg-red-400/5 rounded transition-all"
          >
            <LogOut size={14} />
            SAIR
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}
