import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { brand } from "@/lib/brand";
import { footerHubLinks, footerInstituteLinks } from "@/lib/navigation";

const linkClass = "rounded-sm underline-offset-4 transition-colors hover:text-white hover:underline";
const headingClass = "text-xs font-medium uppercase tracking-[0.5px] text-gold-soft";

/** Rodapé em verde institucional, espelhando o header, com um filete dourado no topo. */
export function HubFooter() {
  return (
    <footer className="on-dark mt-[60px] border-t-[3px] border-gold bg-brand">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-14">
        <div>
          <BrandLogo className="h-10" />
          <p className="mt-5 text-lg font-semibold leading-snug text-white">{brand.hubName}</p>
          <p className="mt-2 max-w-md text-sm leading-6">
            Padrões, modelos de informação e diretrizes para promover interoperabilidade, qualidade assistencial e
            inovação em saúde mental.
          </p>
        </div>

        <nav aria-label="Rodapé — Hub">
          <h2 className={headingClass}>Hub</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {footerHubLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rodapé — Instituto">
          <h2 className={headingClass}>Instituto</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            <li>
              <a
                href={footerInstituteLinks.site.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${footerInstituteLinks.site.label} (abre em nova aba)`}
                className={`${linkClass} inline-flex items-center gap-1.5`}
              >
                {footerInstituteLinks.site.label}
                <ExternalLinkIcon width={14} height={14} />
              </a>
            </li>
            <li>
              <a href={footerInstituteLinks.contact.href} className={linkClass}>
                {footerInstituteLinks.contact.label}
              </a>
              <span className="block break-all text-sm text-white/75">{brand.contactEmail}</span>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-white/75">
          Conteúdo em desenvolvimento. Os Guias de Implementação estão em versão 0.x e podem sofrer alterações.
        </Container>
      </div>
    </footer>
  );
}
