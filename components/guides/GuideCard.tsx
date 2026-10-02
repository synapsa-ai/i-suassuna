import Link from "next/link";
import { CategoryIcon, CategoryTag, StatusBadge } from "@/components/guides/GuideMeta";
import { ArrowRightIcon } from "@/components/ui/icons";
import { getCategory, guideHref, type ImplementationGuide } from "@/lib/guides";

/**
 * Card do guia, tratado como produto: ícone + status, título, descrição, tags, números do guia e botão.
 * O card inteiro é clicável por meio de um link "esticado" (pseudo-elemento do botão), preservando
 * semântica e acessibilidade. Os números vêm dos dados reais do guia (nada é inventado).
 */
export function GuideCard({ guide }: { guide: ImplementationGuide }) {
  const gutter = "px-5 md:px-6";
  const categoryLabel = getCategory(guide.category).label.toLowerCase();
  const tags = guide.keywords.filter((keyword) => keyword.toLowerCase() !== categoryLabel).slice(0, 2);
  const facts = [
    { value: guide.version, label: "Versão" },
    { value: guide.scopeTopics.length, label: "Temas" },
    { value: guide.audiences.length, label: "Públicos" },
  ];

  return (
    <article className="hub-card group flex h-full min-h-[200px] flex-col">
      <div className={`flex items-start justify-between gap-3 pt-5 md:pt-6 ${gutter}`}>
        <span className="hub-icon">
          <CategoryIcon category={guide.category} width={32} height={32} />
        </span>
        <StatusBadge status={guide.status} />
      </div>

      <div className={`flex flex-1 flex-col py-4 md:py-5 ${gutter}`}>
        <h3 className="mb-2 text-xl font-semibold leading-[1.3] md:text-[22px]">{guide.title}</h3>
        <p className="flex-1 text-sm leading-[1.6] text-muted">{guide.description}</p>

        <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-1.5">
          <li>
            <CategoryTag category={guide.category} />
          </li>
          {tags.map((tag) => (
            <li key={tag} className="hub-chip capitalize">
              {tag}
            </li>
          ))}
        </ul>

        {guide.referenceImplementation && (
          <p className="mt-4 border-l-2 border-accent pl-3 text-xs leading-5 text-muted">
            Implementação de referência: <strong className="font-medium text-heading">{guide.referenceImplementation}</strong>
          </p>
        )}
      </div>

      <dl className={`grid grid-cols-3 gap-2 border-t border-line py-3 ${gutter}`}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dd className="text-lg font-bold leading-none text-heading">{fact.value}</dd>
            <dt className="mt-1 text-xs text-muted">{fact.label}</dt>
          </div>
        ))}
      </dl>

      <div className={`pb-5 md:pb-6 ${gutter}`}>
        <Link
          href={guideHref(guide)}
          aria-label={`Explorar guia: ${guide.title}`}
          className="hub-button w-full after:absolute after:inset-0"
        >
          Explorar guia
          <ArrowRightIcon width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
