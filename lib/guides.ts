/**
 * Fonte única de dados dos Guias de Implementação.
 * Páginas, cards, busca, filtros, indicadores e metadata leem daqui.
 */

export type GuideCategoryId = "core" | "saude-itinerante" | "neuropsicologia";

export type GuideCategory = {
  id: GuideCategoryId;
  label: string;
};

export type GuideStatusId = "em-desenvolvimento";

export const guideStatuses: Record<GuideStatusId, { label: string }> = {
  "em-desenvolvimento": { label: "Em desenvolvimento" },
};

export const guideCategories: readonly GuideCategory[] = [
  { id: "core", label: "Core" },
  { id: "saude-itinerante", label: "Saúde Itinerante" },
  { id: "neuropsicologia", label: "Neuropsicologia" },
];

export type ImplementationGuide = {
  id: string;
  slug: string;
  title: string;
  technicalName: string;
  category: GuideCategoryId;
  version: string;
  status: GuideStatusId;
  description: string;
  keywords: string[];
  /** Implementação tecnológica de referência, quando houver. */
  referenceImplementation?: string;
  /** Guia de Implementação FHIR publicado para este guia, quando existir (abre em nova aba). */
  fhirIg?: { url: string; label: string };
  /** Parágrafo complementar exibido na Visão Geral. */
  overview: string;
  /** Temas que poderão ser contemplados no futuro (não é escopo fechado). */
  scopeTopics: string[];
  /** Públicos que poderão adotar o guia. */
  audiences: string[];
};

export const implementationGuides: readonly ImplementationGuide[] = [
  {
    id: "ig-01",
    slug: "core-saude-mental",
    title: "Synapsa — Core de Saúde Mental",
    technicalName: "suassuna.core.saude-mental",
    category: "core",
    version: "0.1.0",
    status: "em-desenvolvimento",
    description:
      "Modelo base para representação e interoperabilidade de informações em psicologia e saúde mental, estabelecendo conceitos comuns que poderão ser reutilizados pelos demais Guias de Implementação.",
    keywords: [
      "core",
      "modelo base",
      "conceitos comuns",
      "psicologia",
      "saúde mental",
      "interoperabilidade",
      "synapsa",
      "referência",
    ],
    referenceImplementation: "Synapsa",
    fhirIg: { url: "https://synapsa-fhir-ig.vercel.app/index.html", label: "Guia de Implementação FHIR Synapsa" },
    overview:
      "O Core reúne os conceitos que atravessam diferentes contextos de cuidado em saúde mental, para que áreas específicas possam reutilizá-los em vez de redefini-los a cada projeto. O Guia é definido e mantido pelo Instituto Suassuna; a Synapsa é a primeira implementação tecnológica de referência.",
    scopeTopics: ["Pessoa atendida", "Profissional", "Organização", "Atendimento", "Avaliação"],
    audiences: [
      "Clínicas",
      "Psicólogos",
      "Instituições de ensino",
      "Serviços de saúde",
      "Sistemas de informação",
      "Plataformas digitais",
    ],
  },
  {
    id: "ig-02",
    slug: "carreta-saude-mental",
    title: "Carreta de Saúde Mental",
    technicalName: "suassuna.saude-mental-itinerante",
    category: "saude-itinerante",
    version: "0.1.0",
    status: "em-desenvolvimento",
    description:
      "Guia voltado à organização e padronização de jornadas assistenciais realizadas em unidades móveis e ações itinerantes de saúde mental.",
    keywords: [
      "carreta",
      "saúde itinerante",
      "unidade móvel",
      "unidades móveis",
      "ações itinerantes",
      "jornada assistencial",
      "triagem",
      "cadastro",
      "atendimento",
      "avaliação",
      "encaminhamento",
      "retorno",
      "continuidade do cuidado",
      "indicadores",
    ],
    overview:
      "Ações itinerantes reúnem etapas que se sucedem em contextos variados, do primeiro contato à continuidade do cuidado. O Guia busca organizar essas jornadas de forma padronizada, para que a informação produzida em campo possa ser registrada e compartilhada com consistência.",
    scopeTopics: [
      "Triagem",
      "Cadastro",
      "Atendimento",
      "Avaliação",
      "Encaminhamento",
      "Retorno",
      "Continuidade do cuidado",
      "Indicadores",
    ],
    audiences: ["Unidades móveis", "Serviços de saúde", "Projetos sociais", "Municípios", "Governos"],
  },
  {
    id: "ig-03",
    slug: "avaliacao-neuropsicologica",
    title: "Avaliação Neuropsicológica",
    technicalName: "suassuna.avaliacao-neuropsicologica",
    category: "neuropsicologia",
    version: "0.1.0",
    status: "em-desenvolvimento",
    description:
      "Guia para estruturação de informações e jornadas relacionadas ao processo de avaliação neuropsicológica, permitindo maior consistência na coleta, organização e troca de informações.",
    keywords: [
      "neuropsicologia",
      "avaliação neuropsicológica",
      "avaliação",
      "solicitação",
      "anamnese",
      "instrumentos",
      "resultados",
      "documentos",
      "encaminhamento",
      "acompanhamento",
    ],
    overview:
      "A avaliação neuropsicológica envolve etapas e documentos que se encadeiam ao longo do processo. O Guia busca dar estrutura à informação em cada etapa, favorecendo a consistência na coleta, na organização e na troca de dados. Nesta versão, apenas a estrutura inicial está apresentada: protocolos e instrumentos ainda não foram definidos.",
    scopeTopics: [
      "Solicitação",
      "Anamnese",
      "Instrumentos",
      "Avaliação",
      "Resultados",
      "Documentos",
      "Encaminhamento",
      "Acompanhamento",
    ],
    audiences: ["Clínicas", "Psicólogos", "Instituições de ensino", "Sistemas de informação"],
  },
];

export function getGuideBySlug(slug: string): ImplementationGuide | undefined {
  return implementationGuides.find((guide) => guide.slug === slug);
}

/** Para referências internas a guias que precisam existir (falha cedo se o slug mudar). */
export function requireGuide(slug: string): ImplementationGuide {
  const guide = getGuideBySlug(slug);
  if (!guide) throw new Error(`Guia não encontrado: ${slug}`);
  return guide;
}

export function getCategory(id: GuideCategoryId): GuideCategory {
  const category = guideCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Categoria desconhecida: ${id}`);
  return category;
}

export function guideHref(guide: Pick<ImplementationGuide, "slug">): string {
  return `/guias/${guide.slug}`;
}

/** Seções internas de cada página de guia (ids usados como âncoras). */
export const guideSections = [
  { id: "visao-geral", label: "Visão Geral" },
  { id: "casos-de-uso", label: "Casos de Uso" },
  { id: "modelos-de-informacao", label: "Modelos de Informação" },
  { id: "perfis-e-recursos", label: "Perfis e Recursos" },
  { id: "terminologias", label: "Terminologias" },
  { id: "fluxos", label: "Fluxos" },
  { id: "implementacao", label: "Implementação" },
  { id: "historico-de-versoes", label: "Histórico de Versões" },
] as const;

export type GuideSectionId = (typeof guideSections)[number]["id"];
