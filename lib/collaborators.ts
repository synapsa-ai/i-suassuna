import { brand } from "@/lib/brand";

export type Collaborator = {
  name: string;
  role: string;
  href?: string;
  /** Define o ícone do grupo (instituição por padrão). */
  kind?: "institution" | "technology";
  /** Logo oficial da organização, quando disponível. */
  logo?: { src: string; width: number; height: number };
};

/** Apenas organizações confirmadas. Novas organizações entram aqui, sem alterar a interface. */
export const collaborators: readonly Collaborator[] = [
  {
    name: "Instituto Suassuna",
    role: "Define e mantém os Guias de Implementação.",
    href: brand.siteUrl,
    logo: {
      src: brand.logo.src,
      width: brand.logo.width,
      height: brand.logo.height,
    },
  },
  {
    name: "Synapsa",
    role: "Primeira implementação tecnológica de referência.",
    href: "https://synapsa.com.br",
    kind: "technology",
    logo: {
      src: "/brand/synapsa-logo.png",
      width: 800,
      height: 320,
    },
  },
];
