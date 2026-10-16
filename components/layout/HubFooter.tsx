import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { brand } from "@/lib/brand";
import { footerColumns } from "@/lib/navigation";

const linkClass = "rounded-sm underline-offset-4 transition-colors hover:text-white hover:underline";
const headingClass = "text-xs font-medium uppercase tracking-[0.5px] text-accent-soft";

/** Rodapé em azul profundo, com um filete turquesa no topo. */
export function HubFooter() {
  return (
    <footer className="on-dark border-t-[3px] border-accent bg-brand-deep">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-14">
        <div>
          <span className="inline-flex rounded-control bg-white px-3 py-2 shadow-[0_10px_30px_rgb(0_0_0/0.16)]">
            <BrandLogo className="h-10" />
          </span>
          <p className="mt-4 text-lg font-semibold leading-snug text-white">{brand.vertical}</p>
          <p className="mt-2 max-w-sm text-sm leading-6">
            Conhecimento clínico, padrões e tecnologia para construir uma saúde mais interoperável.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={`Rodapé — ${column.title}`}>
            <h2 className={headingClass}>{column.title}</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {column.links.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (abre em nova aba)`}
                      className={`${linkClass} inline-flex items-center gap-1.5`}
                    >
                      {item.label}
                      <ExternalLinkIcon width={14} height={14} />
                    </a>
                  ) : item.href.startsWith("mailto:") ? (
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-white/75">
          Iniciativa do {brand.name}. Conteúdo em desenvolvimento: os Guias de Implementação estão em versão 0.x e
          podem sofrer alterações. Não são documentos oficiais do SUS nem de secretarias de saúde.
        </Container>
      </div>
    </footer>
  );
}
