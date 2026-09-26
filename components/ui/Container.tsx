import type { ComponentPropsWithoutRef } from "react";

/**
 * Larguras e recuos do Hub:
 *  - wide (1400): grade de cards; recuo 10px até 500px, 15px até 768px e 20px acima;
 *  - default (1200): conteúdo e menu, mesmo recuo da grade;
 *  - narrow (1000): título, busca e filtros; recuo 15px até 768px e 20px acima (.search-section).
 */
export type ContainerSize = "wide" | "default" | "narrow";

const gutter = "px-2.5 min-[501px]:px-[15px] md:px-5";

const sizes: Record<ContainerSize, string> = {
  wide: `max-w-[1400px] ${gutter}`,
  default: `max-w-[1200px] ${gutter}`,
  narrow: "max-w-[1000px] px-[15px] md:px-5",
};

type ContainerProps = ComponentPropsWithoutRef<"div"> & { size?: ContainerSize };

export function Container({ size = "default", className = "", ...props }: ContainerProps) {
  return <div className={`mx-auto w-full ${sizes[size]} ${className}`} {...props} />;
}
