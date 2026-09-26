import Link from "next/link";
import { GuideSection, PendingNote, TagList } from "@/components/guides/GuideSection";
import { guideStatuses, type ImplementationGuide } from "@/lib/guides";

/**
 * Corpo do guia (Server Component). Nesta versão as seções técnicas são placeholders
 * bem definidos: nada aqui estabelece padrão clínico ou técnico definitivo.
 */
export function GuideDocument({ guide }: { guide: ImplementationGuide }) {
  const status = guideStatuses[guide.status].label;

  return (
    <div className="min-w-0 space-y-6">
      <GuideSection id="visao-geral" title="Visão Geral">
        <p>{guide.overview}</p>

        <div className="pt-2">
          <h3 className="text-lg font-semibold">Temas previstos</h3>
          <p className="mt-1 text-[0.9375rem]">
            Indicam a direção do guia e ainda não representam um escopo fechado.
          </p>
          <div className="mt-3">
            <TagList items={guide.scopeTopics} label="Temas previstos" />
          </div>
        </div>

        {guide.referenceImplementation && (
          <div className="hub-highlight px-5 py-4 text-[0.9375rem] leading-7 text-body-soft">
            <p className="text-base font-semibold text-heading">
              Implementação de referência: {guide.referenceImplementation}
            </p>
            <p className="mt-1">
              O Instituto Suassuna define e mantém o Guia. A {guide.referenceImplementation} é a primeira
              implementação tecnológica de referência; o padrão não pertence a nenhuma implementação específica.
            </p>
          </div>
        )}
      </GuideSection>

      <GuideSection id="casos-de-uso" title="Casos de Uso" pending>
        <PendingNote>
          Esta seção está em elaboração e reunirá os cenários de uso do guia, descrevendo como instituições,
          profissionais, serviços e sistemas poderão aplicá-lo na prática.
        </PendingNote>
        <div>
          <h3 className="text-lg font-semibold">Quem poderá adotar</h3>
          <div className="mt-3">
            <TagList items={guide.audiences} label="Públicos que poderão adotar o guia" />
          </div>
        </div>
      </GuideSection>

      <GuideSection id="modelos-de-informacao" title="Modelos de Informação" pending>
        <PendingNote>
          Esta seção está em elaboração e apresentará os modelos de informação relacionados ao Guia de Implementação.
        </PendingNote>
        <p>
          Enquanto isso, o{" "}
          <Link
            href="/explorador"
            className="font-medium text-brand-soft underline decoration-gold underline-offset-4 hover:text-heading"
          >
            Explorador de Modelos
          </Link>{" "}
          mostra uma representação ilustrativa de como conceitos e relações poderão ser visualizados.
        </p>
      </GuideSection>

      <GuideSection id="perfis-e-recursos" title="Perfis e Recursos" pending>
        <PendingNote>
          Esta seção está em elaboração e descreverá como os conceitos do guia serão representados em perfis e recursos
          reutilizáveis. Nenhum perfil ou recurso foi definido nesta versão.
        </PendingNote>
      </GuideSection>

      <GuideSection id="terminologias" title="Terminologias" pending>
        <PendingNote>
          Esta seção está em elaboração e reunirá os vocabulários, códigos e conjuntos de valores utilizados pelo guia.
          Nenhuma terminologia foi definida nesta versão.
        </PendingNote>
      </GuideSection>

      <GuideSection id="fluxos" title="Fluxos" pending>
        <PendingNote>
          Esta seção está em elaboração e apresentará os fluxos e jornadas cobertos pelo guia, com diagramas e a
          descrição de cada etapa. Os temas previstos na Visão Geral serão detalhados aqui.
        </PendingNote>
      </GuideSection>

      <GuideSection id="implementacao" title="Implementação" pending>
        <PendingNote>
          Esta seção está em elaboração e reunirá orientações para adoção do guia por organizações e sistemas,
          incluindo requisitos, boas práticas e exemplos.
          {guide.referenceImplementation
            ? ` A ${guide.referenceImplementation}, primeira implementação tecnológica de referência, será documentada aqui.`
            : ""}
        </PendingNote>
      </GuideSection>

      <GuideSection id="historico-de-versoes" title="Histórico de Versões">
        <div className="overflow-x-auto rounded-group border border-line">
          <table className="w-full border-collapse text-left text-[0.9375rem]">
            <caption className="sr-only">Histórico de versões de {guide.title}</caption>
            <thead className="bg-sunken text-sm text-heading">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Versão
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line">
                <td className="px-4 py-3 font-mono font-medium text-heading">{guide.version}</td>
                <td className="px-4 py-3">{status}</td>
                <td className="px-4 py-3">Estrutura inicial do guia: identificação, escopo e organização das seções.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted">
          Versões 0.x indicam conteúdo preliminar, sujeito a alterações até a primeira publicação estável.
        </p>
      </GuideSection>
    </div>
  );
}
