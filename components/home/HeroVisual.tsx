import { BuildingIcon, CodeIcon, DatabaseIcon, HeartPulseIcon, NetworkIcon, UserIcon } from "@/components/ui/icons";

/** Cada nó fica em coordenadas percentuais (centro) da composição; as linhas usam o mesmo sistema 0–100. */
const steps = [
  { label: "Pessoa", Icon: UserIcon, x: 17, y: 14 },
  { label: "Atendimento", Icon: HeartPulseIcon, x: 17, y: 50 },
  { label: "Dados de saúde", Icon: DatabaseIcon, x: 17, y: 86 },
];

const systems = [
  { label: "Clínica", Icon: BuildingIcon, x: 83, y: 14 },
  { label: "Plataforma", Icon: CodeIcon, x: 83, y: 50 },
  { label: "Serviço de saúde", Icon: NetworkIcon, x: 83, y: 86 },
];

const entities = [
  { label: "Patient", x: 38, y: 22 },
  { label: "Observation", x: 62, y: 22 },
  { label: "Encounter", x: 36, y: 78 },
  { label: "Questionnaire", x: 64, y: 78 },
  { label: "Organization", x: 50, y: 95 },
];

const lines = [
  ...steps.map((step) => `M ${step.x + 11} ${step.y} C 36 ${step.y}, 36 50, 41 50`),
  ...systems.map((system) => `M 59 50 C 64 50, 64 ${system.y}, ${system.x - 11} ${system.y}`),
];

function Node({ label, Icon, x, y }: { label: string; Icon: typeof UserIcon; x: number; y: number }) {
  return (
    <li
      className="hub-float absolute flex w-[27%] -translate-x-1/2 -translate-y-1/2 items-center gap-2 px-3 py-2.5"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-tile bg-accent text-brand-deep">
        <Icon width={18} height={18} />
      </span>
      <span className="text-[13px] font-medium leading-tight text-white">{label}</span>
    </li>
  );
}

/**
 * Composição do hero: pessoa → atendimento → dados de saúde → FHIR → sistemas conectados, com as entidades
 * (Patient, Observation…) como chips leves. No mobile vira um fluxo vertical simples.
 */
export function HeroVisual() {
  return (
    <div role="img" aria-label="Da pessoa e do atendimento aos dados de saúde, padronizados em FHIR e conectados a diferentes sistemas">
      {/* Desktop */}
      <div className="relative mx-auto hidden aspect-[5/4.4] w-full max-w-[560px] md:block">
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
          {lines.map((d) => (
            <path key={d} d={d} className="hub-flow-line" />
          ))}
        </svg>

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex size-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-brand-deep shadow-[0_0_0_10px_rgb(24_175_145/0.12)]"
        >
          <span className="text-lg font-bold tracking-wide text-accent-soft lg:text-xl">FHIR</span>
        </div>

        <ul className="absolute inset-0">
          {steps.map((step) => (
            <Node key={step.label} {...step} />
          ))}
          {systems.map((system) => (
            <Node key={system.label} {...system} />
          ))}
          {entities.map((entity) => (
            <li
              key={entity.label}
              className="hub-chip hub-chip--on-dark absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[11px]"
              style={{ left: `${entity.x}%`, top: `${entity.y}%` }}
            >
              {entity.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: fluxo vertical */}
      <ol className="mx-auto flex max-w-[320px] flex-col items-stretch gap-0 md:hidden">
        {[...steps.map((step) => step.label), "FHIR", "Sistemas conectados"].map((label, index, all) => (
          <li key={label} className="flex flex-col items-center">
            <span className="hub-float w-full px-4 py-3 text-center text-sm font-medium text-white">{label}</span>
            {index < all.length - 1 && <span aria-hidden="true" className="h-5 w-px bg-accent-soft/60" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
