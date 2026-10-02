import { brand } from "@/lib/brand";

export type NavItem = {
  label: string;
  href: string;
  /** Como marcar o item como ativo: rota exata, prefixo ou nunca (âncoras). */
  match?: "exact" | "prefix";
};

/** Menu principal do cabeçalho. "Ecossistema" e "Sobre" apontam para seções da home. */
export const primaryNav: readonly NavItem[] = [
  { label: "Início", href: "/", match: "exact" },
  { label: "Guias", href: "/guias", match: "prefix" },
  { label: "Ecossistema", href: "/#ecossistema" },
  { label: "Sobre", href: "/#sobre" },
];

export type FooterLink = { label: string; href: string; external?: boolean };

/** Colunas do rodapé. Links externos abrem em nova aba. */
export const footerColumns: readonly { title: string; links: readonly FooterLink[] }[] = [
  {
    title: "Guias",
    links: [
      { label: "Guias de Implementação", href: "/guias" },
      { label: "Recursos FHIR", href: "/#para-quem-implementa" },
      { label: "Terminologias", href: "/guias/core-saude-mental#terminologias" },
      { label: "Explorador de Modelos", href: "/explorador" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Instituto Suassuna", href: brand.siteUrl, external: true },
      { label: "Sobre a iniciativa", href: "/#sobre" },
      { label: "Contato", href: `mailto:${brand.contactEmail}` },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentação", href: "/guias" },
      { label: "FHIR", href: "https://hl7.org/fhir/", external: true },
      { label: "HL7", href: "https://www.hl7.org/", external: true },
    ],
  },
];
