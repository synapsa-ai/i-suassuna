import type { Metadata } from "next";
import { ModelExplorer } from "@/components/explorer/ModelExplorer";
import { StatusBadge } from "@/components/guides/GuideMeta";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Explorador de Modelos",
  description:
    "Demonstração do Explorador de Modelos do Instituto Suassuna, que permitirá visualizar os modelos de informação e relacionamentos definidos pelos Guias de Implementação.",
};

const upcoming = [
  "Navegar pelos modelos de cada Guia de Implementação",
  "Consultar atributos e relacionamentos de cada conceito",
  "Filtrar os modelos por guia e por área",
];

export default function ExplorerPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Explorador de Modelos" }]}
        eyebrow="Ferramenta"
        title="Explorador de Modelos"
        description="Visualize futuramente os modelos de informação, relacionamentos e estruturas definidos pelos Guias de Implementação."
      >
        <div className="mt-6">
          <StatusBadge status="em-desenvolvimento" />
        </div>
      </PageHeader>

      <Container className="pt-10 md:pt-[60px]">
        <ModelExplorer />

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-muted">
          Representação ilustrativa. Os conceitos e relações exibidos são exemplos para demonstrar a navegação e não
          constituem um modelo de informação definitivo dos Guias de Implementação.
        </p>

        <section aria-labelledby="em-breve" className="mt-[60px]">
          <div className="hub-panel mx-auto max-w-3xl">
            <div className="hub-panel-head px-5 py-4 md:px-8 md:py-6">
              <h2 id="em-breve" className="text-xl font-semibold md:text-2xl">
                O que vem a seguir
              </h2>
            </div>
            <ul className="grid gap-2 p-4 md:p-6">
              {upcoming.map((item) => (
                <li key={item} className="hub-item flex items-center justify-between gap-4">
                  <span>{item}</span>
                  <span className="hub-chip shrink-0">Em breve</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
