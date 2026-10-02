import { guideCategories, type GuideCategoryId } from "@/lib/guides";

export type GuideFilter = "todos" | GuideCategoryId;

const options: readonly { id: GuideFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  ...guideCategories.map((category) => ({ id: category.id, label: category.label })),
];

type GuideFiltersProps = {
  labelId: string;
  value: GuideFilter;
  onChange: (value: GuideFilter) => void;
};

/** Filtros por categoria: pílulas brancas; a selecionada (aria-pressed) fica em azul escuro; rolam na horizontal no mobile. */
export function GuideFilters({ labelId, value, onChange }: GuideFiltersProps) {
  return (
    <div>
      <p id={labelId} className="sr-only">
        Filtrar por categoria
      </p>
      <div
        role="group"
        aria-labelledby={labelId}
        className="hub-scroll-x -mx-[15px] flex gap-2 overflow-x-auto px-[15px] py-1 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:gap-2.5"
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={option.id === value}
            onClick={() => onChange(option.id)}
            className="hub-pill shrink-0 max-md:px-3.5 max-md:py-1.5 max-md:text-[13px]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
