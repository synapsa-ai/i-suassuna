import { CloseIcon, SearchIcon } from "@/components/ui/icons";

type GuideSearchProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

/** Campo de busca branco com borda neutra; o foco (borda e anel dourados) vem de .hub-field. */
export function GuideSearch({ id, value, onChange }: GuideSearchProps) {
  return (
    <div role="search" className="hub-field max-md:px-4 max-md:py-2.5">
      <label htmlFor={id} className="sr-only">
        Buscar guias de implementação
      </label>
      <SearchIcon width={20} height={20} className="mr-3 shrink-0 text-muted" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar guias de implementação..."
        autoComplete="off"
        spellCheck={false}
        className="min-w-0 flex-1 bg-transparent text-[15px] text-body outline-none placeholder:text-muted md:text-base"
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
