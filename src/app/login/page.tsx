'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError, role } = await signIn(email, password);

    if (authError) {
      setError('Credenciais inválidas. Verifique e tente novamente.');
      setLoading(false);
      return;
    }

    // Redirect based on user role
    if (role === 'admin') {
      router.push('/painel/admin');
    } else {
      router.push('/painel/time');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 grayscale">
          <source
            src="https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/IMG_0452.MP4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]/60" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-block cursor-pointer" onClick={() => router.push('/')}>
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

        {/* Login Form */}
        <div className="bg-white/5 border border-white/10 p-8">
          <h2 className="text-xl font-black italic uppercase tracking-wide text-center mb-8">
            Entrar no Sistema
          </h2>

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
              className="w-full bg-[#FF6B00] py-5 font-black uppercase italic tracking-[3px] hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'ENTRANDO...' : 'ENTRAR'}
            </button>
          </form>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full text-center text-xs text-gray-500 hover:text-white transition-colors mt-6 py-2 flex items-center justify-center gap-2"
        >
          <ArrowLeft size={14} />
          VOLTAR PARA O SITE
        </button>
      </div>
    </div>
  );
}
