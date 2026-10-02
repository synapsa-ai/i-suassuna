import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const nodes = [
  "Psicologia",
  "Saúde Mental",
  "Neuropsicologia",
  "FHIR",
  "Dados",
  "Interoperabilidade",
  "Pesquisa",
  "Tecnologia",
];

/** Posições em elipse (percentuais), a partir do topo, em sentido horário. */
const positions = nodes.map((label, index) => {
  const angle = (index / nodes.length) * 2 * Math.PI - Math.PI / 2;
  return { label, x: 50 + 40 * Math.cos(angle), y: 50 + 38 * Math.sin(angle) };
});

/** Componente central com os elementos ao redor; no mobile os elementos viram uma grade sob o núcleo. */
export function Ecosystem() {
  return (
    <section
      id="ecossistema"
      aria-labelledby="ecossistema-titulo"
      className="scroll-mt-[calc(var(--header-h)+1rem)] pt-[60px] md:pt-20"
    >
      <Container>
        <SectionHeading id="ecossistema-titulo" eyebrow="Ecossistema" title="Uma rede de conhecimento e tecnologia" />

        {/* Desktop */}
        <div className="relative mx-auto mt-10 hidden aspect-[2/1] w-full max-w-[860px] md:block">
          <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
            {positions.map((node) => (
              <path
                key={node.label}
                d={`M 50 50 L ${node.x} ${node.y}`}
                className="hub-flow-line"
                style={{ stroke: "rgb(16 54 88 / 0.28)" }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex size-[23%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand text-center text-white shadow-[0_0_0_10px_rgb(24_175_145/0.18)]">
            <span className="text-base font-bold leading-tight lg:text-lg">Suassuna</span>
            <span className="text-xs text-accent-soft lg:text-sm">Saúde Digital</span>
          </div>

          <ul>
            {positions.map((node) => (
              <li
                key={node.label}
                className="hub-box absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 text-sm font-medium text-heading"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <div className="mx-auto flex size-32 flex-col items-center justify-center rounded-full bg-brand text-center text-white shadow-[0_0_0_8px_rgb(24_175_145/0.18)]">
            <span className="text-base font-bold">Suassuna</span>
            <span className="text-xs text-accent-soft">Saúde Digital</span>
          </div>
          <span aria-hidden="true" className="mx-auto block h-6 w-0.5 bg-accent" />
          <ul className="grid grid-cols-2 gap-2.5">
            {nodes.map((label) => (
              <li key={label} className="hub-box px-3 py-2.5 text-center text-sm font-medium text-heading">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
