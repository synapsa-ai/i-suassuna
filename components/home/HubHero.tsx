import { HeroVisual } from "@/components/home/HeroVisual";
import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowDownIcon } from "@/components/ui/icons";

/** Abertura institucional: promessa clara à esquerda e visual de interoperabilidade à direita. */
export function HubHero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative py-14 md:py-20 lg:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:gap-16">
        <div>
          <p className="hub-live-badge">
            <span aria-hidden="true" className="hub-live-dot" />
            Instituto Suassuna · Saúde Digital
          </p>
          <h1
            id="hero-titulo"
            className="mt-6 max-w-[680px] font-heading text-[36px] font-bold leading-[1.04] tracking-[-0.035em] min-[501px]:text-[46px] lg:text-[60px]"
          >
            Padrões que conectam <span className="hub-gradient-text">cuidado e tecnologia.</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-base leading-[1.75] text-white/76 md:text-[17px]">
            Guias de Implementação que transformam conhecimento clínico em dados consistentes, sistemas conectados e
            melhores decisões em saúde mental.
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

          <dl className="mt-10 grid max-w-[600px] grid-cols-3 gap-3 border-t border-white/10 pt-6">
            <div>
              <dd className="font-heading text-xl font-bold text-white">3</dd>
              <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/50">Guias ativos</dt>
            </div>
            <div>
              <dd className="font-heading text-xl font-bold text-white">FHIR</dd>
              <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/50">Padrão global</dt>
            </div>
            <div>
              <dd className="font-heading text-xl font-bold text-white">Open</dd>
              <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-white/50">Conhecimento</dt>
            </div>
          </dl>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
