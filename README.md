# Liga de Quebrada - Site Oficial

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar em produção
npm start
```

O site vai estar disponível em **http://localhost:3000**

## Tecnologias

- **Next.js 14** (App Router) - SSR/SSG para SEO máximo
- **React 18** - Interface reativa
- **TypeScript** - Tipagem forte
- **Tailwind CSS** - Estilização performática
- **Lucide React** - Ícones

## SEO

- Meta tags completas (Open Graph, Twitter Cards)
- JSON-LD estruturado (Schema.org SportsOrganization)
- Sitemap automático (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- HTML semântico (`<nav>`, `<section>`, `<article>`, `<footer>`)
- `lang="pt-BR"` no HTML

## Deploy

Recomendado: **Vercel** (deploy automático com `git push`)
