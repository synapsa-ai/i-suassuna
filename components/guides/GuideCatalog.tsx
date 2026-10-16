"use client";

import { useId, useMemo, useRef, useState } from "react";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideFilters, type GuideFilter } from "@/components/guides/GuideFilters";
import { GuideSearch } from "@/components/guides/GuideSearch";
import { Container } from "@/components/ui/Container";
import { SearchIcon } from "@/components/ui/icons";
import type { ImplementationGuide } from "@/lib/guides";
import { buildSearchText, matchesQuery } from "@/lib/search";

/**
 * Busca + filtros + grade de cards. É o único estado interativo do catálogo, usado na home e em /guias.
 * Ocupa a largura toda: a busca fica em 1000px e a grade em 1400px, como no Hub.
 */
export function GuideCatalog({ guides }: { guides: readonly ImplementationGuide[] }) {
  const searchId = useId();
  const filtersLabelId = useId();
  const resultsId = useId();
  const resultsRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<GuideFilter>("todos");

  const index = useMemo(() => guides.map((guide) => ({ guide, text: buildSearchText(guide) })), [guides]);

  const results = index
    .filter(({ guide, text }) => (filter === "todos" || guide.category === filter) && matchesQuery(text, query))
    .map(({ guide }) => guide);

  const hasActiveFilters = query.trim() !== "" || filter !== "todos";
  const noun = guides.length === 1 ? "guia" : "guias";

  function reset() {
    setQuery("");
    setFilter("todos");
  }

  function changeFilter(nextFilter: GuideFilter) {
    setFilter(nextFilter);

    window.requestAnimationFrame(() => {
      const results = resultsRef.current;
      if (!results) return;

      const { top } = results.getBoundingClientRect();
      if (top > window.innerHeight - 120) {
        results.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  }

  return (
    <div>
      <Container size="narrow" id="busca" className="scroll-mt-[calc(var(--header-h)+1rem)]">
        <GuideSearch id={searchId} controlsId={resultsId} value={query} onChange={setQuery} />

        <div className="mt-5">
          <GuideFilters
            labelId={filtersLabelId}
            controlsId={resultsId}
            value={filter}
            onChange={changeFilter}
          />
        </div>

        {/* Altura de 44px: é a linha que, no Hub, também abriga o alternador grade/lista. */}
        <p role="status" aria-live="polite" className="mt-5 flex min-h-11 items-center justify-center text-sm font-medium text-body-soft">
          {results.length === guides.length && !hasActiveFilters
            ? `Mostrando ${guides.length} ${noun}`
            : `Mostrando ${results.length} de ${guides.length} ${noun}`}
        </p>
      </Container>

      <div
        ref={resultsRef}
        id={resultsId}
        className="scroll-mt-[calc(var(--header-h)+1rem)] mt-[30px] min-[501px]:mt-10 md:mt-[48px]"
      >
        <Container size="wide">
          {results.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 min-[501px]:grid-cols-2 min-[501px]:gap-4 md:gap-6 lg:grid-cols-3">
              {results.map((guide) => (
                <li key={guide.id}>
                  <GuideCard guide={guide} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto max-w-[1000px] rounded-card border border-dashed border-line bg-surface px-5 py-10 text-center">
              <SearchIcon width={48} height={48} className="mx-auto mb-4 text-accent-hover" />
              <p className="text-base font-medium text-heading">Nenhum guia encontrado</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-body-soft">
                Nenhum Guia de Implementação corresponde à busca e ao filtro selecionados. Tente outros termos ou
                remova os filtros.
              </p>
              <button type="button" onClick={reset} className="hub-button hub-button--outline mt-6">
                Limpar busca e filtros
              </button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
