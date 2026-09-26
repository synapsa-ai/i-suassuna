/**
 * Grafo ILUSTRATIVO do Explorador de Modelos.
 * Conceitos e relações são exemplos para demonstrar a navegação; não representam
 * um modelo de informação definitivo dos Guias de Implementação.
 */

export type ModelNodeId = "paciente" | "profissional" | "organizacao" | "atendimento" | "avaliacao";

export type ModelNode = {
  id: ModelNodeId;
  label: string;
  description: string;
};

export type ModelEdge = { from: ModelNodeId; to: ModelNodeId };

export const modelNodes: readonly ModelNode[] = [
  {
    id: "paciente",
    label: "Paciente",
    description: "Pessoa que recebe cuidado em saúde mental.",
  },
  {
    id: "profissional",
    label: "Profissional",
    description: "Profissional que conduz atendimentos e avaliações.",
  },
  {
    id: "organizacao",
    label: "Organização",
    description: "Clínica, instituição ou serviço ao qual profissionais e atendimentos estão vinculados.",
  },
  {
    id: "atendimento",
    label: "Atendimento",
    description: "Encontro assistencial entre um profissional e uma pessoa atendida.",
  },
  {
    id: "avaliacao",
    label: "Avaliação",
    description: "Processo estruturado de avaliação realizado a partir de um atendimento.",
  },
];

export const modelEdges: readonly ModelEdge[] = [
  { from: "paciente", to: "atendimento" },
  { from: "profissional", to: "atendimento" },
  { from: "organizacao", to: "profissional" },
  { from: "atendimento", to: "avaliacao" },
];

export type GraphLayoutId = "wide" | "narrow";

type Point = { x: number; y: number };

export type GraphLayout = {
  width: number;
  height: number;
  nodeWidth: number;
  nodeHeight: number;
  /** Tamanho da fonte, em unidades do viewBox (escala junto com o diagrama). */
  fontSize: number;
  positions: Record<ModelNodeId, Point>;
};

/** Coordenadas em unidades do viewBox. "narrow" é usado abaixo do breakpoint md. */
export const graphLayouts: Record<GraphLayoutId, GraphLayout> = {
  wide: {
    width: 800,
    height: 340,
    nodeWidth: 140,
    nodeHeight: 52,
    fontSize: 15,
    positions: {
      organizacao: { x: 95, y: 80 },
      profissional: { x: 305, y: 80 },
      paciente: { x: 305, y: 260 },
      atendimento: { x: 515, y: 170 },
      avaliacao: { x: 715, y: 170 },
    },
  },
  narrow: {
    width: 340,
    height: 390,
    nodeWidth: 120,
    nodeHeight: 46,
    fontSize: 14,
    positions: {
      organizacao: { x: 95, y: 45 },
      profissional: { x: 95, y: 140 },
      paciente: { x: 245, y: 140 },
      atendimento: { x: 170, y: 245 },
      avaliacao: { x: 170, y: 345 },
    },
  },
};

export function getModelNode(id: ModelNodeId): ModelNode {
  const node = modelNodes.find((item) => item.id === id);
  if (!node) throw new Error(`Nó desconhecido: ${id}`);
  return node;
}

export function getRelations(id: ModelNodeId) {
  return {
    outgoing: modelEdges.filter((edge) => edge.from === id).map((edge) => getModelNode(edge.to)),
    incoming: modelEdges.filter((edge) => edge.to === id).map((edge) => getModelNode(edge.from)),
  };
}
