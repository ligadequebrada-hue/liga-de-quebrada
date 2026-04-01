'use client';

import { useState } from 'react';
import { Upload, Check, Eye, EyeOff } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CadastroTimePage() {
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [aceite, setAceite] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [form, setForm] = useState({
    nomeTime: '',
    modalidade: 'Fut7/Society',
    dataFundacao: '',
    cor1: '#000000',
    cor2: '#FFFFFF',
    cor3: '#FF0000',
    instagram: '',
    diaSemana: 'Sábado',
    horario: '20:00',
    nomeQuadra: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    pontoReferencia: '',
    responsavel1Nome: '',
    responsavel1Cpf: '',
    responsavel1Rg: '',
    responsavel1Cargo: 'Presidente',
    responsavel1Whatsapp: '',
    responsavel1Instagram: '',
    responsavel2Nome: '',
    responsavel2Cpf: '',
    responsavel2Rg: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [escudo, setEscudo] = useState<File | null>(null);
  const [uniformeTitular, setUniformeTitular] = useState<File | null>(null);
  const [uniformeReserva, setUniformeReserva] = useState<File | null>(null);

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const handleCpfChange = (field: string, value: string) => {
    updateForm(field, formatCpf(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.senha !== form.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    if (!aceite) {
      alert('Você precisa aceitar os termos.');
      return;
    }
    setLoading(true);
    // TODO: integrate with Supabase
    console.log('Form data:', form);
    console.log('Files:', { escudo, uniformeTitular, uniformeReserva });
    setTimeout(() => {
      setLoading(false);
      alert('Cadastro enviado com sucesso!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#FF6B00] selection:text-white font-['Inter'] relative">
      <Navigation />

      {/* Page Title */}
      <div className="pt-28 pb-6 bg-[#090909] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight">Cadastro de Time Mandante</h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Liga de Quebrada • Temporada 2026</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* DADOS DO TIME */}
            <Section title="Dados do Time">
              <Field label="Nome do Time">
                <input
                  type="text"
                  placeholder="Ex: Time Liga de Quebrada"
                  value={form.nomeTime}
                  onChange={(e) => updateForm('nomeTime', e.target.value)}
                  className={inputClass}
                  required
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Modalidade">
                  <select
                    value={form.modalidade}
                    onChange={(e) => updateForm('modalidade', e.target.value)}
                    className={selectClass}
                  >
                    <option value="Fut7/Society">Fut7/Society</option>
                    <option value="Futsal">Futsal</option>
                  </select>
                </Field>
                <Field label="Data de Fundação">
                  <input
                    type="date"
                    value={form.dataFundacao}
                    onChange={(e) => updateForm('dataFundacao', e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Cores do Time (3 Principais)">
                <div className="grid grid-cols-3 gap-4">
                  <input type="color" value={form.cor1} onChange={(e) => updateForm('cor1', e.target.value)} className="w-full h-12 bg-white/5 border border-white/10 cursor-pointer p-1" />
                  <input type="color" value={form.cor2} onChange={(e) => updateForm('cor2', e.target.value)} className="w-full h-12 bg-white/5 border border-white/10 cursor-pointer p-1" />
                  <input type="color" value={form.cor3} onChange={(e) => updateForm('cor3', e.target.value)} className="w-full h-12 bg-white/5 border border-white/10 cursor-pointer p-1" />
                </div>
              </Field>

              <Field label="Instagram">
                <input
                  type="text"
                  placeholder="@seu_time"
                  value={form.instagram}
                  onChange={(e) => updateForm('instagram', e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Anexar Escudo (Opcional)">
                <FileUpload file={escudo} onChange={setEscudo} />
              </Field>
            </Section>

            {/* UNIFORMES */}
            <Section title="Uniformes">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Uniforme Titular (1)">
                  <FileUpload file={uniformeTitular} onChange={setUniformeTitular} />
                </Field>
                <Field label="Uniforme Reserva (2)">
                  <FileUpload file={uniformeReserva} onChange={setUniformeReserva} />
                </Field>
              </div>
            </Section>

            {/* LOCAL DE JOGO */}
            <Section title="Local de Jogo (Mando)">
              <div className="grid grid-cols-3 gap-4">
                <Field label="Dia da Semana">
                  <select
                    value={form.diaSemana}
                    onChange={(e) => updateForm('diaSemana', e.target.value)}
                    className={selectClass}
                  >
                    <option>Segunda</option>
                    <option>Terça</option>
                    <option>Quarta</option>
                    <option>Quinta</option>
                    <option>Sexta</option>
                    <option>Sábado</option>
                    <option>Domingo</option>
                  </select>
                </Field>
                <Field label="Horário">
                  <input
                    type="time"
                    value={form.horario}
                    onChange={(e) => updateForm('horario', e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Nome da Quadra">
                  <input
                    type="text"
                    placeholder="Ex: CDC Lapa"
                    value={form.nomeQuadra}
                    onChange={(e) => updateForm('nomeQuadra', e.target.value)}
                    className={inputClass}
                    required
                  />
                </Field>
              </div>

              <Field label="CEP">
                <input
                  type="text"
                  placeholder="00000-000"
                  value={form.cep}
                  onChange={(e) => updateForm('cep', e.target.value)}
                  className={inputClass}
                  maxLength={9}
                />
              </Field>

              <div className="grid grid-cols-[1fr_100px] gap-4">
                <Field label="Rua / Logradouro">
                  <input type="text" value={form.rua} onChange={(e) => updateForm('rua', e.target.value)} className={inputClass} />
                </Field>
                <Field label="Nº">
                  <input type="text" value={form.numero} onChange={(e) => updateForm('numero', e.target.value)} className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Bairro">
                  <input type="text" value={form.bairro} onChange={(e) => updateForm('bairro', e.target.value)} className={inputClass} />
                </Field>
                <Field label="Cidade">
                  <input type="text" value={form.cidade} onChange={(e) => updateForm('cidade', e.target.value)} className={inputClass} />
                </Field>
              </div>

              <Field label="Ponto de Referência">
                <input
                  type="text"
                  placeholder="Próximo ao mercado..."
                  value={form.pontoReferencia}
                  onChange={(e) => updateForm('pontoReferencia', e.target.value)}
                  className={inputClass}
                />
              </Field>
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* RESPONSÁVEL PRINCIPAL */}
            <Section title="Responsáveis">
              <div className="bg-white/[0.02] border border-white/5 p-5 space-y-4">
                <p className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.2em]">Responsável Principal</p>

                <Field label="Nome Completo">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={form.responsavel1Nome}
                    onChange={(e) => updateForm('responsavel1Nome', e.target.value)}
                    className={inputClass}
                    required
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="CPF">
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      value={form.responsavel1Cpf}
                      onChange={(e) => handleCpfChange('responsavel1Cpf', e.target.value)}
                      className={inputClass}
                      maxLength={14}
                      required
                    />
                  </Field>
                  <Field label="RG">
                    <input
                      type="text"
                      placeholder="Ex: 12345678 ou MG"
                      value={form.responsavel1Rg}
                      onChange={(e) => updateForm('responsavel1Rg', e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 11))}
                      className={inputClass}
                      maxLength={11}
                    />
                  </Field>
                </div>

                <Field label="Cargo">
                  <select
                    value={form.responsavel1Cargo}
                    onChange={(e) => updateForm('responsavel1Cargo', e.target.value)}
                    className={selectClass}
                  >
                    <option>Presidente</option>
                    <option>Capitão</option>
                    <option>Técnico</option>
                    <option>Dirigente</option>
                    <option>Outro</option>
                  </select>
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="WhatsApp">
                    <input
                      type="text"
                      placeholder="(11) 90000-0000"
                      value={form.responsavel1Whatsapp}
                      onChange={(e) => updateForm('responsavel1Whatsapp', e.target.value)}
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field label="Instagram">
                    <input
                      type="text"
                      placeholder="@usuario"
                      value={form.responsavel1Instagram}
                      onChange={(e) => updateForm('responsavel1Instagram', e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              </div>

              {/* RESPONSÁVEL 2 */}
              <div className="bg-white/[0.02] border border-white/5 p-5 space-y-4 mt-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Responsável 2</p>

                <Field label="Nome">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    value={form.responsavel2Nome}
                    onChange={(e) => updateForm('responsavel2Nome', e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="CPF">
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      value={form.responsavel2Cpf}
                      onChange={(e) => handleCpfChange('responsavel2Cpf', e.target.value)}
                      className={inputClass}
                      maxLength={14}
                    />
                  </Field>
                  <Field label="RG">
                    <input
                      type="text"
                      placeholder="Ex: 12345678 ou MG"
                      value={form.responsavel2Rg}
                      onChange={(e) => updateForm('responsavel2Rg', e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 11))}
                      className={inputClass}
                      maxLength={11}
                    />
                  </Field>
                </div>
              </div>
            </Section>

            {/* DADOS DE ACESSO */}
            <Section title="Dados de Acesso">
              <Field label="E-mail (Login)">
                <input
                  type="email"
                  placeholder="E-mail principal"
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className={inputClass}
                  autoComplete="email"
                  required
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Senha">
                  <div className="relative">
                    <input
                      type={showSenha ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={form.senha}
                      onChange={(e) => updateForm('senha', e.target.value)}
                      className={`${inputClass} pr-10`}
                      autoComplete="new-password"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowSenha(!showSenha)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      aria-label={showSenha ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showSenha ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </Field>
                <Field label="Confirmar Senha">
                  <div className="relative">
                    <input
                      type={showConfirmar ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={form.confirmarSenha}
                      onChange={(e) => updateForm('confirmarSenha', e.target.value)}
                      className={`${inputClass} pr-10`}
                      autoComplete="new-password"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmar(!showConfirmar)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      aria-label={showConfirmar ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showConfirmar ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </Field>
              </div>
            </Section>

            {/* TERMOS */}
            <Section title="Termos de Aceite">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={aceite}
                    onChange={(e) => setAceite(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border flex items-center justify-center transition-all ${
                    aceite ? 'bg-[#FF6B00] border-[#FF6B00]' : 'border-white/20 bg-white/5'
                  }`}>
                    {aceite && <Check size={14} className="text-white" />}
                  </div>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Você concorda que o <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">palmeiras tem mundial</span> *
                </span>
              </label>
            </Section>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !aceite}
              className="w-full bg-[#FF6B00] py-5 font-black uppercase italic tracking-[3px] hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Check size={20} />
              )}
              {loading ? 'ENVIANDO...' : 'FINALIZAR CADASTRO'}
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
}

// Shared input class
const inputClass = 'w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-[#FF6B00] text-sm font-medium text-white transition-all placeholder:text-gray-600';
const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23999%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10 [&>option]:bg-[#111] [&>option]:text-white [&>option]:font-[Inter]`;

// Section wrapper
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 p-6 space-y-4">
      <h2 className="text-lg font-black italic uppercase tracking-wide mb-2">{title}</h2>
      {children}
    </div>
  );
}

// Field wrapper
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">{label}</label>
      {children}
    </div>
  );
}

// File upload component
function FileUpload({ file, onChange }: { file: File | null; onChange: (f: File | null) => void }) {
  return (
    <label className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 cursor-pointer hover:border-[#FF6B00]/30 transition-all group">
      <Upload size={16} className="text-gray-500 group-hover:text-[#FF6B00] transition-colors shrink-0" />
      <span className="text-sm text-gray-500 truncate">
        {file ? file.name : 'Nenhum arquivo selecionado.'}
      </span>
      <input
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </label>
  );
}
