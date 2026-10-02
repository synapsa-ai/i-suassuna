import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { developerResources, resourceLink, sectionLabel } from "@/lib/developer-resources";

/** Seção visualmente distinta (azul profundo, tons de código) para quem implementa os guias. */
export function DeveloperResources() {
  return (
    <section
      id="para-quem-implementa"
      aria-labelledby="devs-titulo"
      className="on-dark mt-[60px] scroll-mt-[calc(var(--header-h)+1rem)] bg-brand-deep py-[60px] md:mt-20 md:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-xs font-medium uppercase tracking-[0.5px] text-accent-soft">Desenvolvedores</p>
          <h2 id="devs-titulo" className="mt-2 text-2xl font-semibold leading-tight md:text-[30px]">
            Para quem implementa
          </h2>
          <p className="mt-4 text-base leading-[1.6]">
            Os recursos técnicos de cada guia, organizados para consulta durante a implementação.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {developerResources.map((resource) => {
            const { href, external } = resourceLink(resource);
            const cardClass =
              "hub-float group flex h-full flex-col gap-2 p-5 hover:border-accent focus-visible:border-accent";
            const content = (
              <>
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-lg font-semibold text-white">{resource.label}</span>
                  {external ? (
                    <ExternalLinkIcon width={16} height={16} className="text-accent-soft" />
                  ) : (
                    <ArrowRightIcon
                      width={16}
                      height={16}
                      className="text-accent-soft transition-transform group-hover:translate-x-0.5"
                    />
                  )}
                </span>
                <span className="text-sm leading-6 text-white/78">{resource.description}</span>
                {!external && <span className="mt-auto pt-2 text-xs text-accent-soft">{sectionLabel(resource.section)}</span>}
              </>
            );
            return (
              <li key={resource.id}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${resource.label} (abre em nova aba)`}
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={href} className={cardClass}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
