import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CpuIcon, ExternalLinkIcon, HomeIcon, UsersIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collaborators } from "@/lib/collaborators";

/** Painel "Colaboradores" com um grupo por organização; o tile do ícone alterna verde escuro e dourado. */
const tileStyles = ["bg-brand text-accent-soft", "bg-accent text-brand"];

export function CollaboratorsSection() {
  return (
    <section
      id="colaboracao"
      aria-labelledby="colaboracao-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[60px] md:pt-20"
    >
      <Container>
        <SectionHeading id="colaboracao-titulo" eyebrow="Colaboração" title="Construído de forma colaborativa">
          <p>
            Os Guias de Implementação são desenvolvidos a partir da colaboração entre conhecimento clínico, acadêmico e
            tecnológico.
          </p>
        </SectionHeading>

        <div className="hub-panel mt-10">
          <div className="hub-panel-head flex items-center gap-3 px-5 py-4 md:px-8 md:py-6">
            <UsersIcon width={24} height={24} className="text-brand-soft" />
            <h3 className="text-xl font-semibold md:text-2xl">Colaboradores</h3>
          </div>

          <ul className="grid gap-5 p-5 md:grid-cols-2 md:p-8">
            {collaborators.map((collaborator, index) => {
              const Icon = collaborator.kind === "technology" ? CpuIcon : HomeIcon;
              return (
                <li key={collaborator.name} className="hub-group flex flex-col">
                  <div className="hub-group-head flex items-center gap-4 px-5 py-4 md:px-6 md:py-5">
                    {collaborator.logo ? (
                      <span className="flex h-16 w-44 shrink-0 items-center justify-center rounded-tile bg-white px-3 shadow-[0_6px_18px_rgb(8_29_47/0.08)]">
                        <Image
                          src={collaborator.logo.src}
                          alt={`Logo ${collaborator.name}`}
                          width={collaborator.logo.width}
                          height={collaborator.logo.height}
                          loading="eager"
                          className="max-h-14 max-w-full object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className={`flex size-12 shrink-0 items-center justify-center rounded-tile max-[500px]:size-10 ${tileStyles[index % tileStyles.length]}`}
                      >
                        <Icon width={20} height={20} />
                      </span>
                    )}
                    <h4
                      className={
                        collaborator.logo ? "sr-only" : "flex-1 text-base font-semibold leading-[1.3] md:text-lg"
                      }
                    >
                      {collaborator.name}
                    </h4>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-sm leading-6 text-body-soft">{collaborator.role}</p>
                    {collaborator.href && (
                      <a
                        href={collaborator.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar site de ${collaborator.name} (abre em nova aba)`}
                        className="hub-button hub-button--outline self-start"
                      >
                        Visitar site
                        <ExternalLinkIcon width={14} height={14} />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted">
          Novas organizações colaboradoras serão listadas aqui conforme a participação for confirmada.
        </p>
      </Container>
    </section>
  );
}
