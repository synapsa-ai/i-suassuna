import { brand } from "@/lib/brand";

export type NavItem = {
  label: string;
  href: string;
  /** Como marcar o item como ativo: rota exata, prefixo ou nunca (âncoras). */
  match?: "exact" | "prefix";
};

/** Menu principal do cabeçalho. "Sobre" e "Colaboração" apontam para seções da home. */
export const primaryNav: readonly NavItem[] = [
  { label: "Início", href: "/", match: "exact" },
  { label: "Guias", href: "/guias", match: "prefix" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Colaboração", href: "/#colaboracao" },
];

export const footerHubLinks: readonly NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Guias", href: "/guias" },
  { label: "Explorador de Modelos", href: "/explorador" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Colaboração", href: "/#colaboracao" },
];

export const footerInstituteLinks = {
  site: { label: "Instituto Suassuna", href: brand.siteUrl },
  contact: { label: "Contato", href: `mailto:${brand.contactEmail}` },
} as const;
