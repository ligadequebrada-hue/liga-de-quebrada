import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastro de Time Mandante',
  description: 'Cadastre seu time na Liga de Quebrada. Preencha os dados do time, responsáveis e local de jogo.',
};

export default function CadastroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
