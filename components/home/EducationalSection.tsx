import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Conhecimento do domínio",
    text: "Conceitos, processos e informações de psicologia e saúde mental.",
  },
  {
    title: "Regras e estruturas",
    text: "O Guia organiza esse conhecimento em modelos consistentes e documentados.",
  },
  {
    title: "Adoção compartilhada",
    text: "Diferentes organizações e sistemas passam a usar a mesma linguagem.",
  },
];

const audiences = [
  { name: "Psicólogos", text: "Clareza sobre quais informações registrar e compartilhar." },
  { name: "Gestores", text: "Base comum para organizar serviços e acompanhar resultados." },
  { name: "Pesquisadores", text: "Dados descritos de forma consistente e mais fáceis de comparar." },
  { name: "Desenvolvedores", text: "Referência para construir sistemas que se comunicam entre si." },
  { name: "Instituições", text: "Um padrão compartilhado para colaborar com outras organizações." },
];

/** Conceito em três blocos e, abaixo, os públicos em um painel. */
export function EducationalSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[60px] md:pt-20"
    >
      <Container>
        <SectionHeading id="sobre-titulo" eyebrow="Conceito" title="O que é um Guia de Implementação?">
          <p>
            Um Guia de Implementação transforma conceitos, processos e informações de um determinado domínio em regras
            e estruturas consistentes que podem ser adotadas por diferentes organizações e sistemas.
          </p>
          <p className="mt-4">
            Em saúde mental, isso significa que uma clínica, um serviço itinerante e uma plataforma digital podem
            descrever um atendimento ou uma avaliação da mesma forma, sem depender de acordos individuais entre cada um
            deles.
          </p>
        </SectionHeading>

        <ol className="mt-10 flex flex-wrap justify-center gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="hub-box w-full max-w-[350px] p-[25px] md:w-[352px] md:max-w-none">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-tile bg-accent text-base font-bold text-brand"
                >
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
              </div>
              <p className="mt-4 text-base leading-[1.6] text-body-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="hub-panel mt-10">
          <div className="hub-panel-head px-5 py-4 md:px-8 md:py-6">
            <h3 className="text-xl font-semibold md:text-2xl">Para quem os guias são úteis</h3>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 p-4 md:p-6">
            {audiences.map((audience) => (
              <li key={audience.name} className="hub-item">
                <p className="text-base font-medium text-heading">{audience.name}</p>
                <p className="mt-1 text-sm leading-5">{audience.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
