'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LogOut, LayoutDashboard, Users, Calendar, Trophy, Shield, Settings,
  BarChart3, FileText, ChevronRight, ArrowLeft, Globe, Palette, Bell,
  ShieldCheck, Database, Monitor, MoreHorizontal, X,
} from 'lucide-react';

const mainMenuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/painel/admin' },
  { label: 'Times', icon: Shield, href: '/painel/admin/times' },
  { label: 'Jogadores', icon: Users, href: '/painel/admin/jogadores' },
  { label: 'Partidas', icon: Calendar, href: '/painel/admin/partidas' },
  { label: 'Ranking', icon: Trophy, href: '/painel/admin/ranking' },
  { label: 'Relatórios', icon: BarChart3, href: '/painel/admin/relatorios' },
  { label: 'Documentos', icon: FileText, href: '/painel/admin/documentos' },
  { label: 'Configurações', icon: Settings, href: '/painel/admin/configuracoes' },
];

const settingsMenuItems = [
  { label: 'Geral', icon: Globe, href: '/painel/admin/configuracoes' },
  { label: 'Configuração do Site', icon: Monitor, href: '/painel/admin/configuracoes/site' },
  { label: 'Campeonato', icon: Trophy, href: '/painel/admin/configuracoes/campeonato' },
  { label: 'Times & Jogadores', icon: Users, href: '/painel/admin/configuracoes/times-jogadores' },
  { label: 'Aparência', icon: Palette, href: '/painel/admin/configuracoes/aparencia' },
  { label: 'Notificações', icon: Bell, href: '/painel/admin/configuracoes/notificacoes' },
  { label: 'Regulamento', icon: FileText, href: '/painel/admin/configuracoes/regulamento' },
  { label: 'Permissões', icon: ShieldCheck, href: '/painel/admin/configuracoes/permissoes' },
  { label: 'Dados & Backup', icon: Database, href: '/painel/admin/configuracoes/dados' },
];

// Mobile: show first 4 items in bottom bar, rest in "Mais" sheet
const MOBILE_VISIBLE_COUNT = 4;

export default function PainelAdminLayout({ children }: { children: React.ReactNode }) {
  const { user, role, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const isSettingsSection = pathname.startsWith('/painel/admin/configuracoes');
  const menuItems = isSettingsSection ? settingsMenuItems : mainMenuItems;

  const mobileVisibleItems = menuItems.slice(0, MOBILE_VISIBLE_COUNT);
  const mobileMoreItems = menuItems.slice(MOBILE_VISIBLE_COUNT);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Close "more" sheet on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex">
      {/* ===== DESKTOP SIDEBAR (hidden on mobile) ===== */}
      <aside className="hidden lg:flex w-64 bg-[#090909] border-r border-white/5 flex-col shrink-0 fixed h-screen">
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
              <p className="text-[9px] text-[#10B981] font-bold uppercase tracking-[0.15em] mt-0.5">
                {isSettingsSection ? 'Configurações' : 'Administração'}
              </p>
            </div>
          </div>
        </div>

        {/* Back button when in settings */}
        {isSettingsSection && (
          <div className="px-4 pt-4">
            <button
              onClick={() => router.push('/painel/admin')}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-white hover:bg-white/5 rounded transition-all"
            >
              <ArrowLeft size={14} />
              Voltar ao menu principal
            </button>
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded transition-all group ${
                  isActive
                    ? 'bg-[#FF6B00]/10 text-[#FF6B00]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} className="shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                {!isActive && (
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                )}
              </button>
            );
          })}
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

      {/* ===== MOBILE TOP HEADER (visible on mobile only) ===== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#090909] border-b border-white/5">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => router.push('/')}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png"
              alt="Logo"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
            <div>
              <p className="text-xs font-black italic uppercase tracking-tight leading-none">LDQ</p>
              <p className="text-[8px] text-[#10B981] font-bold uppercase tracking-[0.12em] mt-0.5">
                {isSettingsSection ? 'Configurações' : 'Admin'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isSettingsSection && (
              <button
                onClick={() => router.push('/painel/admin')}
                className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 active:text-white"
              >
                <ArrowLeft size={14} />
              </button>
            )}
            <div className="w-7 h-7 bg-[#10B981]/20 rounded-full flex items-center justify-center text-[10px] font-black text-[#10B981]">
              {user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 lg:ml-64 pt-14 pb-20 lg:pt-0 lg:pb-0">
        {children}
      </main>

      {/* ===== MOBILE BOTTOM NAV (visible on mobile only) ===== */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090909] border-t border-white/5 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-16">
          {mobileVisibleItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full active:scale-95 transition-transform ${
                  isActive ? 'text-[#FF6B00]' : 'text-gray-500'
                }`}
              >
                <item.icon size={20} />
                <span className="text-[9px] font-bold uppercase tracking-wide leading-none">
                  {item.label.length > 10 ? item.label.split(' ')[0] : item.label}
                </span>
              </button>
            );
          })}
          {/* "Mais" button */}
          {mobileMoreItems.length > 0 && (
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full active:scale-95 transition-transform ${
                moreOpen ? 'text-[#FF6B00]' : 'text-gray-500'
              }`}
            >
              <MoreHorizontal size={20} />
              <span className="text-[9px] font-bold uppercase tracking-wide leading-none">Mais</span>
            </button>
          )}
        </div>
      </nav>

      {/* ===== MOBILE "MAIS" BOTTOM SHEET ===== */}
      {moreOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMoreOpen(false)}
          />
          {/* Sheet */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111] border-t border-white/10 rounded-t-2xl pb-[env(safe-area-inset-bottom)] animate-slide-up">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <p className="text-sm font-black uppercase tracking-wide">Menu</p>
              <button onClick={() => setMoreOpen(false)} className="text-gray-500 active:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="p-3 space-y-1 max-h-[60vh] overflow-y-auto">
              {mobileMoreItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <button
                    key={item.label}
                    onClick={() => { router.push(item.href); setMoreOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#FF6B00]/10 text-[#FF6B00]'
                        : 'text-gray-400 active:bg-white/5'
                    }`}
                  >
                    <item.icon size={18} className="shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                  </button>
                );
              })}
              {/* Logout in sheet */}
              <div className="pt-2 mt-2 border-t border-white/5">
                <button
                  onClick={async () => { await signOut(); router.push('/login'); }}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-red-400 rounded-xl active:bg-red-400/5 transition-all active:scale-[0.98]"
                >
                  <LogOut size={18} className="shrink-0" />
                  <span className="flex-1 text-left">Sair</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
