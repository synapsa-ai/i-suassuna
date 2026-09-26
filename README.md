# Hub de Guias de Implementação em Saúde Mental

Primeira versão navegável do hub do Instituto Suassuna. Next.js (App Router) + TypeScript + Tailwind CSS v4.
Sem backend, sem banco de dados e sem integrações: é a camada de identidade, arquitetura da informação e navegação.

![Texto descritivo da imagem](Captura%20de%20Tela%202026-09-25%20às%2022.37.23.png)

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home do Hub (hero, indicadores, catálogo, conceito, interoperabilidade, explorador, colaboração) |
| `/guias` | Catálogo completo com busca e filtros |
| `/guias/[slug]` | Página de cada guia: `core-saude-mental`, `carreta-saude-mental`, `avaliacao-neuropsicologica` |
| `/explorador` | Explorador de Modelos (demonstração ilustrativa) |

## Onde mexer

- **Guias** (título, identificador, versão, descrição, palavras-chave): `lib/guides.ts`. Cards, busca, filtros, indicadores, páginas e metadata leem só daqui.
- **Colaboradores**: `lib/collaborators.ts` (aceita `logo` opcional).
- **Grafo do explorador** (nós, relações, posições): `lib/model-graph.ts`.
- **Menu e rodapé**: `lib/navigation.ts`. **Marca e contato**: `lib/brand.ts`.
- **Identidade visual** (paleta do Instituto Suassuna em variáveis CSS de `:root`, tokens semânticos como `text-heading`/`bg-surface`/`border-line`/`bg-gold`, raios e receitas `hub-*` de componentes): `app/globals.css`. Trocar a paleta é editar só as variáveis `--suassuna-*`.
- **Referências externas** (ex.: FHIR): `lib/external-references.ts`. Preencha `href` para a referência virar link externo; nenhum outro arquivo muda.

## Trocar a logo

Hoje há um placeholder em `public/brand/logo-instituto-suassuna.svg`. Para usar a logo oficial, coloque o arquivo (fundo transparente) em `public/brand/`
e ajuste `logo.src`, `logo.width` e `logo.height` em `lib/brand.ts`. O header e o rodapé são verdes, então a logo é exibida em branco por filtro CSS (`logo.monochromeWhite`); use `false` se o arquivo já for a versão branca. O mesmo vale para o favicon em `app/icon.svg`.

## Server e Client Components

Tudo é Server Component, exceto quatro componentes pequenos que precisam de estado no navegador:
`GuideCatalog` (busca + filtros), `HeaderNav` (menu mobile), `GuideSectionNav` (navegação interna) e `ModelExplorer` (seleção de nós).
