import Link from "next/link";
import { CollaboratorsSection } from "@/components/home/CollaboratorsSection";
import { EducationalSection } from "@/components/home/EducationalSection";
import { FamilyMap } from "@/components/home/FamilyMap";
import { HubHero } from "@/components/home/HubHero";
import { HubStats } from "@/components/home/HubStats";
import { InteroperabilitySection } from "@/components/home/InteroperabilitySection";
import { ModelExplorerPreview } from "@/components/home/ModelExplorerPreview";
import { GuideCatalog } from "@/components/guides/GuideCatalog";
import { buttonClass } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { HeroBand } from "@/components/ui/HeroBand";
import { ArrowRightIcon } from "@/components/ui/icons";
import { implementationGuides } from "@/lib/guides";

// Ordem: faixa verde (título e indicadores) → busca e filtros → grade de cards → conteúdo → colaboradores.
export default function HomePage() {
  return (
    <>
      <HeroBand className="pb-10 md:pb-12">
        <HubHero />
        <HubStats />
      </HeroBand>

      <section
        id="guias"
        aria-labelledby="catalogo-titulo"
        className="scroll-mt-[calc(var(--header-h)+1rem)] pt-10 md:pt-12"
      >
        <h2 id="catalogo-titulo" className="sr-only">
          Guias de Implementação
        </h2>
        <GuideCatalog guides={implementationGuides} />

        <Container size="narrow">
          <p className="mt-10 text-center">
            <Link href="/guias" className={buttonClass("outline")}>
              Ver catálogo completo
              <ArrowRightIcon width={16} height={16} />
            </Link>
          </p>
        </Container>
      </section>

      <EducationalSection />

      <section aria-labelledby="family-map-title" className="pt-[60px] md:pt-20">
        <Container>
          <FamilyMap />
        </Container>
      </section>

      <InteroperabilitySection />
      <ModelExplorerPreview />
      <CollaboratorsSection />
    </>
  );
}
