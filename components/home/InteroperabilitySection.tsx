import { ExternalReferences } from "@/components/home/ExternalReferences";
import { Container } from "@/components/ui/Container";
import { ArrowDownIcon, ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const chain = [
  { label: "Profissional", note: "Registra e utiliza informações no cuidado." },
  { label: "Clínica", note: "Organiza atendimentos e equipes." },
  { label: "Sistema", note: "Armazena e processa os dados." },
  { label: "Instituição", note: "Coordena serviços e acompanha resultados." },
  { label: "Rede de Saúde", note: "Compartilha informações entre serviços." },
];

/** Diagrama conceitual em React + CSS. Apenas apresenta a ideia; nenhuma integração existe. */
export function InteroperabilitySection() {
  return (
    <section
      aria-labelledby="interoperabilidade-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[60px] md:pt-20"
    >
      <Container>
        <SectionHeading
          id="interoperabilidade-titulo"
          eyebrow="Interoperabilidade"
          title="Interoperabilidade em Saúde Mental"
        >
          <p>
            Quando profissionais, clínicas, sistemas e instituições compartilham os mesmos modelos de informação, os
            dados passam a ser representados e trocados com maior consistência ao longo de toda a rede de cuidado.
          </p>
        </SectionHeading>

        {/* Painel creme para os nós brancos se destacarem. */}
        <div className="hub-panel mt-10 bg-sunken p-5 md:p-8">
          <ol aria-label="Cadeia de troca de informações em saúde mental" className="grid gap-9 md:grid-cols-5">
            {chain.map((item, index) => {
              const isLast = index === chain.length - 1;
              return (
                <li key={item.label} className="relative">
                  <div className="hub-group h-full bg-surface p-4">
                    <p className="text-lg font-semibold leading-snug text-heading">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-body-soft">{item.note}</p>
                  </div>

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-full flex h-9 items-center justify-center text-gold md:inset-x-auto md:left-full md:top-0 md:h-full md:w-9"
                    >
                      <ArrowDownIcon width={18} height={18} className="md:hidden" />
                      <ArrowRightIcon width={18} height={18} className="hidden md:block" />
                    </span>
                  )}

                  <span aria-hidden="true" className="absolute left-1/2 top-full hidden h-9 w-px bg-gold md:block" />
                </li>
              );
            })}
          </ol>

          <div className="mt-9 rounded-group bg-brand px-5 py-5 text-center">
            <p className="text-lg font-semibold text-white">Modelos de informação compartilhados</p>
            <p className="mx-auto mt-1 max-w-2xl text-sm leading-6 text-white/75">
              Definidos pelos Guias de Implementação e reutilizados por todos os elos da cadeia, para que cada um
              represente a mesma informação da mesma maneira.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm text-muted">
          <ExternalReferences />
          <p className="max-w-xl">
            Camada de integração prevista para uma etapa futura. Nenhuma integração está implementada nesta versão.
          </p>
        </div>
      </Container>
    </section>
  );
}
