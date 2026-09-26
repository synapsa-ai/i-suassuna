import type { Metadata } from "next";
import { GuideCatalog } from "@/components/guides/GuideCatalog";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { guideCategories, implementationGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Catálogo de Guias de Implementação",
  description:
    "Catálogo dos Guias de Implementação em Saúde Mental do Instituto Suassuna: busque por nome, categoria, palavra-chave ou identificador técnico.",
};

const legend = [
  {
    term: "Categoria",
    text: `Área de aplicação do guia: ${guideCategories.map((category) => category.label).join(", ")}.`,
  },
  {
    term: "Status",
    text: "Etapa em que o guia se encontra. Neste momento, todos estão em desenvolvimento.",
  },
  {
    term: "Versão",
    text: "Número da versão do guia. Versões 0.x indicam conteúdo preliminar, sujeito a alterações.",
  },
  {
    term: "Identificador técnico",
    text: "Nome único do guia, usado para referenciá-lo em documentos e sistemas.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Guias" }]}
        eyebrow="Catálogo"
        title="Catálogo de Guias de Implementação"
        description="Todos os Guias de Implementação em Saúde Mental definidos e mantidos pelo Instituto Suassuna. Busque por nome, categoria, palavra-chave ou identificador técnico."
      />

      <section aria-labelledby="lista-de-guias" className="pt-10 md:pt-[60px]">
        <h2 id="lista-de-guias" className="sr-only">
          Guias de Implementação
        </h2>
        <GuideCatalog guides={implementationGuides} />
      </section>

      <section aria-labelledby="como-ler" className="pt-[60px] md:pt-20">
        <Container>
          <div className="hub-panel">
            <div className="hub-panel-head px-5 py-4 md:px-8 md:py-6">
              <h2 id="como-ler" className="text-xl font-semibold md:text-2xl">
                Como ler o catálogo
              </h2>
            </div>
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2 p-4 md:p-6">
              {legend.map((item) => (
                <div key={item.term} className="hub-item">
                  <dt className="text-base font-medium text-heading">{item.term}</dt>
                  <dd className="mt-1 text-sm leading-6">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
