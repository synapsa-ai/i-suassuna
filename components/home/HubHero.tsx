import { HeroVisual } from "@/components/home/HeroVisual";
import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowDownIcon } from "@/components/ui/icons";

/** Abertura: texto à esquerda e composição visual à direita sobre o azul profundo (fundo vem do HeroBand). */
export function HubHero() {
  return (
    <section aria-labelledby="hero-titulo" className="py-12 md:py-20">
      <Container className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-8 lg:gap-16">
        <div>
          <p className="hub-badge hub-badge--accent">Saúde Digital</p>
          <h1
            id="hero-titulo"
            className="mt-5 text-[32px] font-bold leading-[1.12] min-[501px]:text-[40px] lg:text-[52px]"
          >
            Guias de Implementação para uma saúde interoperável
          </h1>
          <p className="mt-5 max-w-[540px] text-base leading-[1.65] text-white/82 md:text-lg">
            Conhecimento clínico, padrões e tecnologia reunidos para apoiar profissionais, organizações e
            desenvolvedores na construção de soluções digitais em saúde.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#guias">
              Explorar os guias
              <ArrowDownIcon width={16} height={16} />
            </LinkButton>
            <LinkButton href="#sobre" variant="secondary">
              Conheça a iniciativa
            </LinkButton>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
