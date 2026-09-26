import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import { ArrowDownIcon } from "@/components/ui/icons";

/** Abertura: título centralizado sobre a faixa verde (o fundo vem do HeroBand em app/page.tsx). */
export function HubHero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-8 text-center md:pt-12">
      <Container size="narrow">
        <p className="text-xs font-medium uppercase tracking-[0.5px] text-gold-soft">
          Instituto Suassuna · Hub técnico-científico
        </p>
        <h1
          id="hero-titulo"
          className="mx-auto mt-2.5 max-w-[800px] text-[28px] font-bold leading-[1.17] min-[501px]:text-[35px] md:text-[45px]"
        >
          Guias de Implementação em Saúde Mental
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-[1.6] text-white/82 md:text-lg md:leading-[1.6]">
          Padrões, modelos de informação e diretrizes para promover interoperabilidade, qualidade assistencial e
          inovação em saúde mental.
        </p>
        <p className="mx-auto mt-3 max-w-[640px] text-[15px] leading-[1.6] text-white/82">
          Os guias são desenvolvidos para apoiar instituições, profissionais, serviços de saúde e tecnologias na adoção
          de modelos consistentes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="#guias">
            Explorar guias
            <ArrowDownIcon width={16} height={16} />
          </LinkButton>
          <LinkButton href="#sobre" variant="secondary">
            Entenda o projeto
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
