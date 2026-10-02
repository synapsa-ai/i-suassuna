import { Container } from "@/components/ui/Container";
import {
  BriefcaseIcon,
  BuildingIcon,
  CodeIcon,
  FlaskIcon,
  MapPinIcon,
  StethoscopeIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  { name: "Profissionais de Saúde", Icon: StethoscopeIcon },
  { name: "Clínicas e Instituições", Icon: BuildingIcon },
  { name: "Municípios", Icon: MapPinIcon },
  { name: "Pesquisadores", Icon: FlaskIcon },
  { name: "Desenvolvedores", Icon: CodeIcon },
  { name: "Gestores", Icon: BriefcaseIcon },
];

export function AudiencesSection() {
  return (
    <section aria-labelledby="publicos-titulo" className="pt-[60px] md:pt-20">
      <Container>
        <SectionHeading id="publicos-titulo" eyebrow="Públicos" title="Construído para diferentes atores da saúde" />
        <ul className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {audiences.map(({ name, Icon }) => (
            <li key={name} className="hub-box flex items-center gap-4 p-4 md:p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-tile bg-sunken text-heading">
                <Icon width={24} height={24} />
              </span>
              <h3 className="text-base font-semibold leading-snug md:text-lg">{name}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
