import type { SVGProps } from "react";
import { ClipboardCheckIcon, HexagonIcon, TruckIcon } from "@/components/ui/icons";
import { getCategory, guideStatuses, type GuideCategoryId, type GuideStatusId } from "@/lib/guides";

const categoryIcons: Record<GuideCategoryId, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  core: HexagonIcon,
  "saude-itinerante": TruckIcon,
  neuropsicologia: ClipboardCheckIcon,
};

/** Ícone do guia. Decorativo: a categoria também aparece em texto. */
export function CategoryIcon({ category, ...props }: { category: GuideCategoryId } & SVGProps<SVGSVGElement>) {
  const Icon = categoryIcons[category];
  return <Icon {...props} />;
}

/** Categoria do guia como chip. `tone="dark"` para uso sobre a faixa verde. */
export function CategoryTag({ category, tone = "light" }: { category: GuideCategoryId; tone?: "light" | "dark" }) {
  return (
    <span className={`hub-chip ${tone === "dark" ? "hub-chip--on-dark" : ""}`}>{getCategory(category).label}</span>
  );
}

/** Status: ouro suave com texto verde escuro; serve sobre claro e sobre a faixa verde. */
export function StatusBadge({ status }: { status: GuideStatusId }) {
  return <span className="hub-badge hub-badge--accent">{guideStatuses[status].label}</span>;
}
