/**
 * Identidade e dados institucionais do Hub.
 *
 * Para trocar o placeholder pela logo oficial:
 *   1. coloque o arquivo em public/brand/ (SVG ou PNG com fundo transparente);
 *   2. ajuste `logo.src`, `logo.width` e `logo.height` abaixo.
 * Nenhum outro arquivo precisa mudar.
 */
export const brand = {
  name: "Instituto Suassuna",
  hubName: "Hub de Guias de Implementação em Saúde Mental",
  hubTitle: "Guias de Implementação em Saúde Mental",
  siteUrl: "https://institutosuassuna.com.br",
  /** Contato de suporte publicado no site oficial do Instituto. */
  contactEmail: "suporte@institutosuassuna.com",
  logo: {
    src: "/brand/logo-instituto-suassuna.svg",
    width: 158,
    height: 50,
    alt: "Instituto Suassuna",
    /**
     * O fundo do Hub é um degradê azul/verde, e o Hub original usa logos brancas sobre ele.
     * Com `true`, a logo é renderizada em branco por filtro CSS (funciona com qualquer arquivo de
     * fundo transparente). Use `false` se o arquivo em `src` já for a versão branca.
     */
    monochromeWhite: true,
  },
} as const;
