import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalReferences } from "@/lib/external-references";

const resources = ["Patient", "Practitioner", "Encounter", "Observation", "Questionnaire"];

function System({ name }: { name: string }) {
  return (
    <span className="hub-box flex min-w-32 items-center justify-center px-6 py-5 text-base font-semibold text-heading">
      {name}
    </span>
  );
}

/** Área educativa curta: Sistema A → FHIR → Sistema B e os principais recursos como chips. */
export function FhirExplanation() {
  const fhir = externalReferences.find((reference) => reference.id === "fhir");

  return (
    <section aria-labelledby="fhir-titulo" className="pt-[60px] md:pt-20">
      <Container>
        <div className="hub-panel px-5 py-10 md:px-10 md:py-14">
          <SectionHeading id="fhir-titulo" eyebrow="Educativo" title="O que é FHIR?">
            <p>FHIR é um padrão internacional para troca de informações de saúde entre sistemas.</p>
          </SectionHeading>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-5">
            <System name="Sistema A" />
            <ArrowRightIcon aria-hidden="true" className="size-6 rotate-90 text-accent-hover md:rotate-0" />
            <span className="flex min-w-32 items-center justify-center rounded-card bg-brand px-8 py-5 text-lg font-bold tracking-wide text-white">
              FHIR
            </span>
            <ArrowRightIcon aria-hidden="true" className="size-6 rotate-90 text-accent-hover md:rotate-0" />
            <System name="Sistema B" />
          </div>

          <ul aria-label="Principais recursos FHIR" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {resources.map((resource) => (
              <li key={resource} className="hub-chip px-4 py-2 font-mono text-[13px] text-heading">
                {resource}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center">
            {fhir?.href ? (
              <a
                href={fhir.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entenda o padrão (abre em nova aba)"
                className="hub-button hub-button--lg"
              >
                Entenda o padrão
                <ExternalLinkIcon width={16} height={16} />
              </a>
            ) : (
              <LinkButton href="/guias">Entenda o padrão</LinkButton>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
