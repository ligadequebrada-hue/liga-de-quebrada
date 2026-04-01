import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Acesse o portal do time ou o painel administrativo da Liga de Quebrada.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
