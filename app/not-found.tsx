import { LinkButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container size="narrow" className="py-24 text-center sm:py-32">
      <p className="font-mono text-sm font-medium text-brand-soft">404</p>
      <h1 className="mt-3 text-[28px] font-bold leading-[1.17] min-[501px]:text-[35px] md:text-[45px]">
        Página não encontrada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-[1.6] text-body-soft">
        O endereço acessado não existe neste Hub. Volte ao catálogo para encontrar os Guias de Implementação
        disponíveis.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <LinkButton href="/guias">Ver catálogo de guias</LinkButton>
        <LinkButton href="/" variant="outline">
          Voltar ao início
        </LinkButton>
      </div>
    </Container>
  );
}
