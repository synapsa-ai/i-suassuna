import { ModelGraph } from "@/components/explorer/ModelGraph";
import { StatusBadge } from "@/components/guides/GuideMeta";
import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ModelExplorerPreview() {
  return (
    <section
      id="explorador"
      aria-labelledby="explorador-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[60px] md:pt-20"
    >
      <Container>
        <div className="hub-panel grid items-center gap-8 p-5 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
          <div>
            <SectionHeading id="explorador-titulo" eyebrow="Ferramenta" title="Explorador de Modelos" align="start">
              <p>
                Visualize futuramente os modelos de informação, relacionamentos e estruturas definidos pelos Guias de
                Implementação.
              </p>
            </SectionHeading>
            <div className="mt-6">
              <StatusBadge status="em-desenvolvimento" />
            </div>
            <div className="mt-8">
              <LinkButton href="/explorador">
                Explorar modelos
                <ArrowRightIcon width={16} height={16} />
              </LinkButton>
            </div>
          </div>

          {/* Prévia decorativa: a versão navegável está em /explorador. */}
          <div aria-hidden="true" className="hub-group p-4 sm:p-8">
            <ModelGraph selected="atendimento" />
          </div>
        </div>
      </Container>
    </section>
  );
}
