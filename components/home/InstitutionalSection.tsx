import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

/** Seção institucional; o Instituto é apresentado como organização, nunca como órgão público. */
export function InstitutionalSection() {
  return (
    <section aria-labelledby="instituto-titulo" className="mt-[60px] bg-sunken py-[60px] md:mt-20 md:py-20">
      <Container size="narrow" className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.5px] text-brand-soft">{brand.name}</p>
        <h2 id="instituto-titulo" className="mt-2 text-[28px] font-semibold leading-tight md:text-4xl">
          Saúde, conhecimento e tecnologia.
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-base leading-[1.7] text-body-soft md:text-lg">
          O Instituto Suassuna amplia sua atuação no conhecimento em saúde por meio de iniciativas de Saúde Digital,
          aproximando conhecimento clínico, interoperabilidade e tecnologia.
        </p>
      </Container>
    </section>
  );
}
