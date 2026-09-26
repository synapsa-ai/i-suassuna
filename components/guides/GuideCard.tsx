import Link from "next/link";
import { CategoryIcon, CategoryTag, StatusBadge } from "@/components/guides/GuideMeta";
import { ArrowRightIcon } from "@/components/ui/icons";
import { guideHref, type ImplementationGuide } from "@/lib/guides";

/**
 * Card do guia: ícone + badges, título, identificador em fonte monoespaçada, descrição e rodapé com
 * versão + botão. O card inteiro é clicável por meio de um link "esticado" (pseudo-elemento do botão),
 * preservando semântica e acessibilidade.
 */
export function GuideCard({ guide }: { guide: ImplementationGuide }) {
  const gutter = "px-4 min-[501px]:px-5 md:px-6";

  return (
    <article className="hub-card group flex h-full min-h-[200px] flex-col">
      <div className={`flex items-start justify-between gap-3 pt-4 min-[501px]:pt-5 md:pt-6 ${gutter}`}>
        <span className="hub-icon max-[500px]:size-[70px]">
          <CategoryIcon category={guide.category} width={40} height={40} />
        </span>
        <div className="flex flex-col items-end gap-2">
          <StatusBadge status={guide.status} />
          <CategoryTag category={guide.category} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col py-4 md:py-5 ${gutter}`}>
        <h3 className="mb-2 text-lg font-semibold leading-[1.3] min-[501px]:text-xl md:text-[22px]">{guide.title}</h3>
        <p className="mb-3 break-all font-mono text-[13px] font-medium text-brand-soft">{guide.technicalName}</p>
        <p className="flex-1 text-[13px] leading-[1.5] text-muted md:text-sm">{guide.description}</p>

        {guide.referenceImplementation && (
          <p className="mt-4 border-l-2 border-gold pl-3 text-xs leading-5 text-muted">
            Implementação de referência: <strong className="font-medium text-heading">{guide.referenceImplementation}</strong>
          </p>
        )}
      </div>

      <div
        className={`mt-auto flex items-center justify-between gap-4 border-t border-line pb-4 pt-3 min-[501px]:pb-5 md:pb-6 md:pt-4 ${gutter}`}
      >
        <p className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-heading md:text-xl">{guide.version}</span>
          <span className="text-xs text-muted">Versão</span>
        </p>
        <Link
          href={guideHref(guide)}
          aria-label={`Acessar guia: ${guide.title}`}
          className="hub-button hub-button--outline after:absolute after:inset-0"
        >
          Acessar
          <ArrowRightIcon width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
