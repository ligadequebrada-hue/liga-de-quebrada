'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Shield, Users, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

type LoginMode = 'select' | 'team' | 'admin';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [mode, setMode] = useState<LoginMode>('select');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await signIn(email, password);

    if (authError) {
      setError('Credenciais inválidas. Verifique e tente novamente.');
      setLoading(false);
      return;
    }

    // Redirect based on mode
    if (mode === 'admin') {
      router.push('/painel/admin');
    } else {
      router.push('/painel/time');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596720426673-e4f28bc187b3?q=80&w=2069&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="inline-block cursor-pointer"
            onClick={() => router.push('/')}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png"
              alt="Logo Liga de Quebrada"
              className="h-20 w-auto mx-auto mb-4"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-3xl font-black italic uppercase tracking-tight">
            Liga de Quebrada
          </h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-1">
            Respeito • Disciplina • Futebol
          </p>
        </div>

        {/* Mode Select */}
        {mode === 'select' && (
          <div className="space-y-4">
            <button
              onClick={() => setMode('team')}
              className="w-full bg-white/5 border border-white/10 p-6 flex items-center gap-5 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/5 transition-all group"
            >
              <div className="w-14 h-14 bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
                <Users className="text-[#FF6B00]" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-black italic uppercase tracking-wide group-hover:text-[#FF6B00] transition-colors">
                  Portal do Time
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Acesso para capitães e representantes de equipe
                </p>
              </div>
            </button>

            <button
              onClick={() => setMode('admin')}
              className="w-full bg-white/5 border border-white/10 p-6 flex items-center gap-5 hover:border-[#10B981]/50 hover:bg-[#10B981]/5 transition-all group"
            >
              <div className="w-14 h-14 bg-[#10B981]/10 flex items-center justify-center shrink-0">
                <Shield className="text-[#10B981]" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-black italic uppercase tracking-wide group-hover:text-[#10B981] transition-colors">
                  Painel Administrativo
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Acesso restrito para administradores da liga
                </p>
              </div>
            </button>

            <button
              onClick={() => router.push('/')}
              className="w-full text-center text-xs text-gray-500 hover:text-white transition-colors mt-6 py-2 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14} />
              VOLTAR PARA O SITE
            </button>
          </div>
        )}

        {/* Login Form */}
        {(mode === 'team' || mode === 'admin') && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => { setMode('select'); setError(''); setEmail(''); setPassword(''); }}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Voltar"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center ${
                  mode === 'admin' ? 'bg-[#10B981]/10' : 'bg-[#FF6B00]/10'
                }`}>
                  {mode === 'admin'
                    ? <Shield className="text-[#10B981]" size={18} />
                    : <Users className="text-[#FF6B00]" size={18} />
                  }
                </div>
                <h2 className="text-xl font-black italic uppercase tracking-wide">
                  {mode === 'admin' ? 'Painel Admin' : 'Portal do Time'}
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#FF6B00] font-bold text-white transition-all placeholder:text-gray-600"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 p-4 pr-12 outline-none focus:border-[#FF6B00] font-bold text-white transition-all placeholder:text-gray-600"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 text-center font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 font-black uppercase italic tracking-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  mode === 'admin'
                    ? 'bg-[#10B981] hover:bg-white hover:text-black'
                    : 'bg-[#FF6B00] hover:bg-white hover:text-black'
                }`}
              >
                {loading ? 'ENTRANDO...' : 'ENTRAR'}
              </button>
            </form>

            <button
              onClick={() => router.push('/')}
              className="w-full text-center text-xs text-gray-500 hover:text-white transition-colors mt-8 py-2 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14} />
              VOLTAR PARA O SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
