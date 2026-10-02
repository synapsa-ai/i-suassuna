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
  hubName: "Suassuna Saúde Digital",
  hubTitle: "Guias de Implementação",
  /** Vertical do Instituto à qual o Hub pertence (aparece ao lado da logo). */
  vertical: "Saúde Digital",
  siteUrl: "https://institutosuassuna.com.br",
  /** Contato de suporte publicado no site oficial do Instituto. */
  contactEmail: "suporte@institutosuassuna.com",
  logo: {
    src: "/brand/logo-instituto-suassuna.svg",
    width: 158,
    height: 50,
    alt: "Instituto Suassuna",
  },
} as const;
