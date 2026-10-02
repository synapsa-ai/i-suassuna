import Link from "next/link";
import { getCategory, guideHref, requireGuide, type ImplementationGuide } from "@/lib/guides";

type FamilyLinkProps = {
  guide: ImplementationGuide;
  note?: string;
  emphasis?: boolean;
};

/** Core em verde escuro com rótulo dourado suave; os demais guias em creme com borda. */
function FamilyLink({ guide, note, emphasis = false }: FamilyLinkProps) {
  return (
    <Link
      href={guideHref(guide)}
      className={`hub-group block w-full p-4 ${emphasis ? "border-brand bg-brand" : ""}`}
    >
      <span
        className={`block text-xs font-medium uppercase tracking-[0.5px] ${emphasis ? "text-accent-soft" : "text-brand-soft"}`}
      >
        {getCategory(guide.category).label}
      </span>
      <span className={`mt-1 block text-lg font-semibold leading-snug ${emphasis ? "text-white" : "text-heading"}`}>
        {guide.title}
      </span>
      {note && (
        <span className={`mt-1 block text-sm leading-5 ${emphasis ? "text-white/82" : "text-body-soft"}`}>{note}</span>
      )}
    </Link>
  );
}

/**
 * Mapa conceitual da família de guias: o Core é a base reutilizável e as demais
 * áreas se apoiam nele. A camada de interoperabilidade é apenas indicada (futura).
 */
export function FamilyMap() {
  const core = requireGuide("core-saude-mental");
  const branches = [requireGuide("carreta-saude-mental"), requireGuide("avaliacao-neuropsicologica")];

  return (
    <figure aria-labelledby="family-map-title" className="hub-panel mx-auto max-w-[760px] p-5 sm:p-7">
      <figcaption className="flex items-center justify-between gap-3">
        <span id="family-map-title" className="text-xs font-medium uppercase tracking-[0.5px] text-brand-soft">
          Família de Guias
        </span>
        <span className="hidden text-xs text-muted sm:inline">Definida pelo Instituto Suassuna</span>
      </figcaption>

      <div className="mt-5 flex flex-col items-center">
        <FamilyLink guide={core} emphasis note="Guia base · Implementação de referência: Synapsa" />

        <span aria-hidden="true" className="hidden h-6 w-px bg-accent sm:block" />

        <div className="relative mt-3 grid w-full gap-3 sm:mt-0 sm:grid-cols-2 sm:gap-0">
          <span aria-hidden="true" className="absolute left-1/4 right-1/4 top-0 hidden h-px bg-accent sm:block" />
          {branches.map((guide) => (
            <div key={guide.id} className="relative flex flex-col items-center sm:px-2 sm:pt-6">
              <span aria-hidden="true" className="absolute left-1/2 top-0 hidden h-6 w-px bg-accent sm:block" />
              <FamilyLink guide={guide} />
              <span aria-hidden="true" className="hidden h-6 w-px bg-accent sm:block" />
            </div>
          ))}
        </div>

        <div className="mt-3 w-full rounded-group border border-dashed border-accent bg-page px-4 py-3 text-center sm:mt-0">
          <p className="text-base font-semibold text-heading">Interoperabilidade</p>
          <p className="text-xs leading-5 text-muted">FHIR · APIs · Redes — camada futura, ainda não implementada</p>
        </div>
      </div>
    </figure>
  );
}
