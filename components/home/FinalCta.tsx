import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";

/** Fecha a home em azul escuro; `data-flush-end` remove o respiro entre ele e o rodapé (ver app/layout.tsx). */
export function FinalCta() {
  return (
    <section
      data-flush-end
      aria-labelledby="cta-titulo"
      className="hub-hero on-dark mt-[60px] py-[60px] text-center md:mt-20 md:py-20"
    >
      <Container size="narrow">
        <h2 id="cta-titulo" className="text-[28px] font-bold leading-tight md:text-4xl">
          Conhecimento que vira implementação.
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-[1.65] md:text-lg">
          Explore os Guias de Implementação e descubra como padrões digitais podem conectar pessoas, serviços e
          informações em saúde.
        </p>
        <div className="mt-8">
          <LinkButton href="/guias">
            Explorar os guias
            <ArrowRightIcon width={16} height={16} />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
