import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Liga de Quebrada | Campeonato de Futsal e Fut7 das Quebradas',
    template: '%s | Liga de Quebrada',
  },
  description:
    'Liga de Quebrada é o maior campeonato de futsal e fut7 das periferias do Brasil. Ranking, calendário de jogos, playoffs e muito mais. Respeito, disciplina e futebol.',
  keywords: [
    'liga de quebrada',
    'futsal',
    'fut7',
    'futebol de várzea',
    'campeonato de futsal',
    'campeonato periferia',
    'futebol quebrada',
    'ranking futsal',
    'playoffs futsal',
    'futebol amador',
    'liga amadora',
    'campeonato amador São Paulo',
    'futebol society',
    'torneio de futsal',
  ],
  authors: [{ name: 'Liga de Quebrada' }],
  creator: 'Liga de Quebrada',
  publisher: 'Liga de Quebrada',
  metadataBase: new URL('https://ligadequebrada.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ligadequebrada.com.br',
    siteName: 'Liga de Quebrada',
    title: 'Liga de Quebrada | Campeonato de Futsal e Fut7 das Quebradas',
    description:
      'O maior campeonato de futsal e fut7 das periferias do Brasil. Seu jogo não é um simples amistoso.',
    images: [
      {
        url: 'https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png',
        width: 1200,
        height: 630,
        alt: 'Liga de Quebrada - Escudo Oficial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liga de Quebrada | Futsal e Fut7',
    description:
      'O maior campeonato de futsal e fut7 das periferias do Brasil.',
    images: [
      'https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'seu-codigo-de-verificacao-aqui',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsOrganization',
              name: 'Liga de Quebrada',
              description:
                'O maior campeonato de futsal e fut7 das periferias do Brasil.',
              url: 'https://ligadequebrada.com.br',
              logo: 'https://s6zjlkxmjbg8agos.public.blob.vercel-storage.com/NOVO%20ESCUDO%20LIGA%20DE%20QUEBRADA.png',
              sport: ['Futsal', 'Futebol Society'],
              sameAs: [
                'https://instagram.com/ligadequebrada',
                'https://facebook.com/ligadequebrada',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0B] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
