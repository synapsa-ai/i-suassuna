import { getCategory, guideStatuses, type ImplementationGuide } from "@/lib/guides";

/** Minúsculas e sem acentos, para que "avaliacao" encontre "avaliação". */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/** Texto pesquisável: nome, descrição, categoria, palavras-chave e identificador técnico. */
export function buildSearchText(guide: ImplementationGuide): string {
  return normalize(
    [
      guide.title,
      guide.technicalName,
      getCategory(guide.category).label,
      guideStatuses[guide.status].label,
      guide.description,
      guide.referenceImplementation ?? "",
      ...guide.keywords,
    ].join(" "),
  );
}

/** Todos os termos digitados precisam aparecer no texto (AND). */
export function matchesQuery(searchText: string, query: string): boolean {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return terms.every((term) => searchText.includes(term));
}
