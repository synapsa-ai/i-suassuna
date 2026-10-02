import { Container } from "@/components/ui/Container";
import {
  BuildingIcon,
  FileTextIcon,
  HeartPulseIcon,
  NetworkIcon,
  SlidersIcon,
  CodeIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { label: "Cuidado", Icon: HeartPulseIcon },
  { label: "Informação clínica", Icon: FileTextIcon },
  { label: "Padronização", Icon: SlidersIcon },
  { label: "FHIR", Icon: CodeIcon },
  { label: "Interoperabilidade", Icon: NetworkIcon },
  { label: "Ecossistema de Saúde", Icon: BuildingIcon },
];

/** Linha horizontal no desktop (lg+) e vertical abaixo disso. */
export function ImplementationFlow() {
  return (
    <section aria-labelledby="fluxo-titulo" className="pt-[60px] md:pt-20">
      <Container>
        <SectionHeading id="fluxo-titulo" eyebrow="Conceito" title="Da prática ao dado interoperável">
          <p>Como o cuidado do dia a dia se transforma em informação que diferentes sistemas conseguem compartilhar.</p>
        </SectionHeading>

        <ol className="mx-auto mt-10 flex max-w-[360px] flex-col items-stretch lg:max-w-none lg:flex-row">
          {steps.map(({ label, Icon }, index) => (
            <li key={label} className="flex flex-1 flex-col items-center lg:flex-row">
              <div className="hub-box flex w-full flex-col items-center gap-3 px-4 py-5 text-center lg:h-full">
                <span className="flex size-12 items-center justify-center rounded-tile bg-sunken text-heading">
                  <Icon width={24} height={24} />
                </span>
                <span className="text-xs font-medium text-muted">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-semibold leading-snug">{label}</h3>
              </div>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-6 w-0.5 shrink-0 bg-accent lg:h-0.5 lg:w-5 xl:w-8"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
