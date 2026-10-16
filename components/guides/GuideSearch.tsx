import { CloseIcon, SearchIcon } from "@/components/ui/icons";

type GuideSearchProps = {
  id: string;
  controlsId: string;
  value: string;
  onChange: (value: string) => void;
};

/** Campo de busca branco com borda neutra; o foco (borda e anel turquesa) vem de .hub-field. */
export function GuideSearch({ id, controlsId, value, onChange }: GuideSearchProps) {
  return (
    <div role="search" className="hub-field px-4 py-3 md:px-6 md:py-4">
      <label htmlFor={id} className="sr-only">
        Buscar guias de implementação
      </label>
      <SearchIcon width={22} height={22} className="mr-3 shrink-0 text-accent-hover" />
      <input
        id={id}
        type="search"
        aria-controls={controlsId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar guias, recursos ou áreas de saúde..."
        autoComplete="off"
        spellCheck={false}
        className="min-w-0 flex-1 bg-transparent text-base text-body outline-none placeholder:text-muted md:text-base"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Limpar busca"
          className="ml-2 flex items-center justify-center rounded-full p-1 text-muted transition-colors hover:bg-sunken hover:text-heading"
        >
          <CloseIcon width={16} height={16} />
        </button>
      )}
    </div>
  );
}
