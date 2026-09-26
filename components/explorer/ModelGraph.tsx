import {
  graphLayouts,
  modelEdges,
  modelNodes,
  type GraphLayoutId,
  type ModelNodeId,
} from "@/lib/model-graph";

/** Nós brancos com borda; relacionados com borda dourada; selecionado em verde escuro. Conexões em dourado. */
const colors = {
  edge: "stroke-gold/60",
  edgeActive: "stroke-gold",
  arrow: "fill-gold/60",
  arrowActive: "fill-gold",
  node: "border-line bg-surface text-heading",
  nodeHover: "hover:border-gold",
  nodeRelated: "border-gold bg-surface text-heading",
  nodeSelected: "border-brand bg-brand text-white",
} as const;

type ModelGraphProps = {
  selected?: ModelNodeId | null;
  /** Se omitido, os nós são apenas visuais (prévia estática renderizada no servidor). */
  onSelect?: (id: ModelNodeId) => void;
};

type CanvasProps = ModelGraphProps & { layout: GraphLayoutId; className: string };

function GraphCanvas({ layout, className, selected = null, onSelect }: CanvasProps) {
  const { width, height, nodeWidth, nodeHeight, fontSize, positions } = graphLayouts[layout];

  const relatedIds = new Set<ModelNodeId>();
  if (selected) {
    for (const edge of modelEdges) {
      if (edge.from === selected) relatedIds.add(edge.to);
      if (edge.to === selected) relatedIds.add(edge.from);
    }
  }

  return (
    <div
      className={`@container relative mx-auto w-full ${className}`}
      style={{ aspectRatio: `${width} / ${height}`, maxWidth: `${width}px` }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 size-full" aria-hidden="true" focusable="false">
        {modelEdges.map((edge) => {
          const a = positions[edge.from];
          const b = positions[edge.to];
          const active = selected !== null && (edge.from === selected || edge.to === selected);
          const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                strokeWidth={active ? 2.25 : 1.5}
                className={active ? colors.edgeActive : colors.edge}
              />
              <polygon
                points="-8,-5.5 5,0 -8,5.5"
                transform={`translate(${(a.x + b.x) / 2} ${(a.y + b.y) / 2}) rotate(${angle})`}
                className={active ? colors.arrowActive : colors.arrow}
              />
            </g>
          );
        })}
      </svg>

      {modelNodes.map((node) => {
        const point = positions[node.id];
        const isSelected = selected === node.id;
        const state = isSelected ? colors.nodeSelected : relatedIds.has(node.id) ? colors.nodeRelated : colors.node;
        const style = {
          left: `${(point.x / width) * 100}%`,
          top: `${(point.y / height) * 100}%`,
          width: `${(nodeWidth / width) * 100}%`,
          height: `${(nodeHeight / height) * 100}%`,
          fontSize: `max(12px, ${(fontSize / width) * 100}cqw)`,
        };
        const shared = `absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-group border px-1 text-center font-semibold leading-none transition-colors duration-[180ms] ${state}`;

        return onSelect ? (
          <button
            key={node.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(node.id)}
            style={style}
            className={`${shared} ${isSelected ? "" : colors.nodeHover}`}
          >
            {node.label}
          </button>
        ) : (
          <span key={node.id} style={style} className={shared}>
            {node.label}
          </span>
        );
      })}
    </div>
  );
}

/**
 * Grafo ilustrativo em SVG (arestas) + HTML (nós). Renderiza dois arranjos e o CSS escolhe
 * o adequado à largura (horizontal a partir de md, vertical no mobile). Sem biblioteca de grafos.
 */
export function ModelGraph(props: ModelGraphProps) {
  return (
    <>
      <GraphCanvas layout="wide" className="hidden md:block" {...props} />
      <GraphCanvas layout="narrow" className="md:hidden" {...props} />
    </>
  );
}
