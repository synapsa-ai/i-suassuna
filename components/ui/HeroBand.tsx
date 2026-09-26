import type { ComponentPropsWithoutRef } from "react";
import { HubBackground } from "@/components/layout/HubBackground";

/**
 * Faixa verde do topo das páginas: degradê institucional + curvas douradas discretas.
 * É compartilhada pelo hero da home e pelos cabeçalhos das páginas internas.
 */
export function HeroBand({ className = "", children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`hub-hero on-dark relative overflow-hidden ${className}`} {...props}>
      <HubBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
