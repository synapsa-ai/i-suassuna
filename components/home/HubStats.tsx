import { Container } from "@/components/ui/Container";
import { BookmarkIcon, HexagonIcon, LayersIcon } from "@/components/ui/icons";
import { guideCategories, implementationGuides } from "@/lib/guides";

/** Indicadores derivados dos dados reais dos guias; nada é inventado. Vivem sobre a faixa verde do hero. */
export function HubStats() {
  const stats = [
    { value: implementationGuides.length, label: "Guias de Implementação", Icon: BookmarkIcon },
    { value: guideCategories.length, label: "Áreas", Icon: LayersIcon },
    { value: implementationGuides.filter((guide) => guide.category === "core").length, label: "Core", Icon: HexagonIcon },
  ];

  return (
    <section aria-label="Indicadores do Hub" className="mt-10 md:mt-[60px]">
      <Container>
        <ul className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
          {stats.map(({ value, label, Icon }) => (
            <li
              key={label}
              className="hub-tile flex w-full max-w-[313px] flex-1 basis-[280px] items-center gap-3.5 px-[18px] py-4 md:gap-5 md:px-6 md:py-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-tile bg-gold text-brand md:size-[52px]">
                <Icon className="size-[22px] md:size-[26px]" />
              </span>
              <span aria-hidden="true" className="h-8 w-0.5 shrink-0 bg-linear-to-b from-transparent via-white/30 to-transparent md:h-10" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[28px] font-bold leading-none text-white md:text-4xl">{value}</span>
                <span className="text-[11px] uppercase tracking-[0.5px] text-white/75 md:text-xs">{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
