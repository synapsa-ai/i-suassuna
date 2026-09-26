import { brand } from "@/lib/brand";

export type Collaborator = {
  name: string;
  role: string;
  href?: string;
  /** Define o ícone do grupo (instituição por padrão). */
  kind?: "institution" | "technology";
  /** Preparado para logo oficial futura (arquivo em public/brand/). */
  logo?: { src: string; width: number; height: number };
};

/** Apenas organizações confirmadas. Novas organizações entram aqui, sem alterar a interface. */
export const collaborators: readonly Collaborator[] = [
  {
    name: "Instituto Suassuna",
    role: "Define e mantém os Guias de Implementação.",
    href: brand.siteUrl,
  },
  {
    name: "Synapsa",
    role: "Primeira implementação tecnológica de referência.",
    kind: "technology",
  },
];
