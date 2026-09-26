import type { ReactNode } from "react";
import { CategoryTag, StatusBadge } from "@/components/guides/GuideMeta";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { HeroBand } from "@/components/ui/HeroBand";
import { brand } from "@/lib/brand";
import type { ImplementationGuide } from "@/lib/guides";

function MetaItem({ label, children, wide = false }: { label: string; children: ReactNode; wide?: boolean }) {
  return (
    <div
      className={`hub-tile flex-1 px-5 py-4 text-left ${wide ? "max-w-[340px] basis-[280px] grow-[1.4]" : "max-w-[300px] basis-[210px]"}`}
    >
      <dt className="text-xs uppercase tracking-[0.5px] text-white/75">{label}</dt>
      <dd className="mt-1 text-base font-medium text-white">{children}</dd>
    </div>
  );
}

/** Cabeçalho da página do guia: faixa verde com título centralizado e metadados técnicos em cards. */
export function GuideHeader({ guide }: { guide: ImplementationGuide }) {
  return (
    <HeroBand className="pb-10 pt-8 text-center md:pb-12 md:pt-12">
      <Container size="narrow">
        <Breadcrumb
          items={[{ label: "Início", href: "/" }, { label: "Guias", href: "/guias" }, { label: guide.title }]}
        />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <StatusBadge status={guide.status} />
          <CategoryTag category={guide.category} tone="dark" />
        </div>

        <h1 className="mx-auto mt-4 max-w-[800px] text-[28px] font-bold leading-[1.17] min-[501px]:text-[35px] md:text-[45px]">
          {guide.title}
        </h1>

        <p className="mx-auto mt-4 max-w-[720px] text-base leading-[1.6] text-white/82">{guide.description}</p>
      </Container>

      <Container>
        <dl className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-3 md:gap-4">
          <MetaItem label="Identificador técnico" wide>
            <code className="break-all font-mono text-[13px] font-medium text-white">{guide.technicalName}</code>
          </MetaItem>
          <MetaItem label="Versão">{guide.version}</MetaItem>
          <MetaItem label="Mantido por">{brand.name}</MetaItem>
          {guide.referenceImplementation && (
            <MetaItem label="Implementação de referência">{guide.referenceImplementation}</MetaItem>
          )}
        </dl>
      </Container>
    </HeroBand>
  );
}
