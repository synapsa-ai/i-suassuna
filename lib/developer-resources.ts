/**
 * Recursos técnicos da seção "Para quem implementa".
 *
 * Cada card abre a página correspondente do Guia FHIR do guia de referência (Core), quando publicado; sem ele, abre a seção do guia no Hub.
 * Para apontar para um recurso externo (por exemplo, um Guia de Implementação FHIR publicado), basta
 * preencher `href` no item: ele passa a ter prioridade e abre em nova aba. Nenhum componente muda.
 */
import { guideHref, guideSections, requireGuide, type GuideSectionId } from "@/lib/guides";

export type DeveloperResource = {
  id: string;
  label: string;
  description: string;
  /** Seção do guia de referência aberta por padrão. */
  section: GuideSectionId;
  /** Página do Guia FHIR publicado (relativa à raiz dele), usada quando o guia de referência tem `fhirIg`. */
  igPage?: string;
  /** Link externo configurado (opcional). Quando presente, tem prioridade sobre as demais opções. */
  href?: string;
};

export const developerResources: readonly DeveloperResource[] = [
  { id: "profiles", igPage: "recursos-fhir.html", label: "Perfis", description: "Como cada recurso é restringido e usado em saúde mental.", section: "perfis-e-recursos" },
  { id: "extensions", igPage: "artifacts.html", label: "Extensões", description: "Elementos adicionais para informações específicas do domínio.", section: "perfis-e-recursos" },
  { id: "valuesets", igPage: "artifacts.html", label: "ValueSets", description: "Conjuntos de códigos permitidos em cada campo.", section: "terminologias" },
  { id: "codesystems", igPage: "artifacts.html", label: "CodeSystems", description: "Sistemas de códigos e terminologias utilizados.", section: "terminologias" },
  { id: "examples", igPage: "artifacts.html#exemplos", label: "Examples", description: "Exemplos de instâncias para validar a implementação.", section: "implementacao" },
  { id: "capability", igPage: "artifacts.html", label: "CapabilityStatement", description: "O que um sistema declara suportar neste guia.", section: "implementacao" },
];

export function resourceLink(resource: DeveloperResource): { href: string; external: boolean } {
  if (resource.href) return { href: resource.href, external: true };
  const guide = requireGuide("core-saude-mental");
  if (guide.fhirIg && resource.igPage) return { href: new URL(resource.igPage, guide.fhirIg.url).href, external: true };
  return { href: `${guideHref(guide)}#${resource.section}`, external: false };
}

/** Rótulo da seção do guia, para o texto de apoio do card. */
export function sectionLabel(id: GuideSectionId): string {
  return guideSections.find((section) => section.id === id)?.label ?? id;
}
