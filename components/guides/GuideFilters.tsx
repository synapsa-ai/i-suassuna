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

/** Filtros por categoria: pílulas brancas; a selecionada (aria-pressed) fica em verde escuro. */
export function GuideFilters({ labelId, value, onChange }: GuideFiltersProps) {
  return (
    <div>
      <p id={labelId} className="mb-3 text-sm font-medium text-body-soft">
        Filtrar por categoria:
      </p>
      <div
        role="group"
        aria-labelledby={labelId}
        className="flex flex-wrap gap-2 max-[500px]:justify-center md:gap-2.5"
      >
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={option.id === value}
            onClick={() => onChange(option.id)}
            className="hub-pill max-md:px-3 max-md:py-1.5 max-md:text-[13px]"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
