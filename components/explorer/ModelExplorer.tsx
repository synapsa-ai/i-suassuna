"use client";

import { useState } from "react";
import { ModelGraph } from "@/components/explorer/ModelGraph";
import { getModelNode, getRelations, type ModelNode, type ModelNodeId } from "@/lib/model-graph";

function RelationList({
  title,
  direction,
  nodes,
  onSelect,
}: {
  title: string;
  direction: "→" | "←";
  nodes: readonly ModelNode[];
  onSelect: (id: ModelNodeId) => void;
}) {
  if (nodes.length === 0) return null;
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.5px] text-brand-soft">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {nodes.map((node) => (
          <li key={node.id}>
            <button type="button" onClick={() => onSelect(node.id)} className="hub-pill">
              <span aria-hidden="true" className="text-brand-soft">
                {direction}
              </span>
              {node.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Explorador interativo: selecione um conceito para destacar suas relações. */
export function ModelExplorer() {
  const [selectedId, setSelectedId] = useState<ModelNodeId | null>(null);
  const selected = selectedId ? getModelNode(selectedId) : null;
  const relations = selectedId ? getRelations(selectedId) : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_21rem]">
      {/* Container branco; a área do diagrama, em creme, deixa os nós brancos em evidência. */}
      <div className="hub-panel p-4 sm:p-6">
        <div className="rounded-group border border-line bg-sunken p-4 sm:p-8">
          <ModelGraph
            selected={selectedId}
            onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
          />
        </div>
      </div>

      <aside aria-label="Detalhes do conceito selecionado" className="hub-panel p-6">
        <div aria-live="polite">
          {selected && relations ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.5px] text-brand-soft">Conceito ilustrativo</p>
                <h2 className="mt-1 text-2xl font-semibold">{selected.label}</h2>
                <p className="mt-2 text-[0.9375rem] leading-7 text-body-soft">{selected.description}</p>
              </div>
              <RelationList title="Aponta para" direction="→" nodes={relations.outgoing} onSelect={setSelectedId} />
              <RelationList title="Recebe de" direction="←" nodes={relations.incoming} onSelect={setSelectedId} />
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="text-sm font-medium text-brand-soft underline decoration-gold underline-offset-4 hover:text-heading"
              >
                Limpar seleção
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold">Selecione um conceito</h2>
              <p className="mt-2 text-[0.9375rem] leading-7 text-body-soft">
                Escolha um item no diagrama para destacar suas relações e ver uma descrição breve. Você também pode
                navegar entre os conceitos relacionados.
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
