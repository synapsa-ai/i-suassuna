import Link from "next/link";
import { AudiencesSection } from "@/components/home/AudiencesSection";
import { CollaboratorsSection } from "@/components/home/CollaboratorsSection";
import { DeveloperResources } from "@/components/home/DeveloperResources";
import { Ecosystem } from "@/components/home/Ecosystem";
import { EducationalSection } from "@/components/home/EducationalSection";
import { FamilyMap } from "@/components/home/FamilyMap";
import { FhirExplanation } from "@/components/home/FhirExplanation";
import { FinalCta } from "@/components/home/FinalCta";
import { HubHero } from "@/components/home/HubHero";
import { ImplementationFlow } from "@/components/home/ImplementationFlow";
import { InstitutionalSection } from "@/components/home/InstitutionalSection";
import { InteroperabilitySection } from "@/components/home/InteroperabilitySection";
import { ModelExplorerPreview } from "@/components/home/ModelExplorerPreview";
import { GuideCatalog } from "@/components/guides/GuideCatalog";
import { buttonClass } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { HeroBand } from "@/components/ui/HeroBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { implementationGuides } from "@/lib/guides";

// Ordem: problema (hero) → guias → conceito → FHIR e recursos técnicos → instituição, públicos e ecossistema.
export default function HomePage() {
  return (
    <>
      <HeroBand>
        <HubHero />
      </HeroBand>

      <section
        id="guias"
        aria-labelledby="catalogo-titulo"
        className="scroll-mt-[calc(var(--header-h)+1rem)] pt-10 md:pt-12"
      >
        <Container>
          <SectionHeading id="catalogo-titulo" eyebrow="Catálogo" title="Guias de Implementação" className="mb-8">
            <p>Explore padrões desenvolvidos para diferentes contextos de cuidado e saúde digital.</p>
          </SectionHeading>
        </Container>
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

      <ImplementationFlow />

      <EducationalSection />

      <section aria-labelledby="family-map-title" className="pt-[60px] md:pt-20">
        <Container>
          <FamilyMap />
        </Container>
      </section>

      <InteroperabilitySection />
      <ModelExplorerPreview />
      <FhirExplanation />
      <DeveloperResources />
      <InstitutionalSection />
      <AudiencesSection />
      <Ecosystem />
      <CollaboratorsSection />
      <FinalCta />
    </>
  );
}
