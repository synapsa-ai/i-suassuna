import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  /** Centralizado por padrão; "start" para colunas de texto. */
  align?: "center" | "start";
  className?: string;
};

/** Título de seção sobre fundo claro: rótulo em caixa alta + h2 + texto de apoio opcional. */
export function SectionHeading({ id, eyebrow, title, children, align = "center", className = "" }: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-[720px] px-2.5 text-center min-[501px]:px-0" : "text-left"} ${className}`}
    >
      {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.5px] text-brand-soft">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-2xl font-semibold leading-tight md:text-[30px]">
        {title}
      </h2>
      {children && <div className="mt-4 text-base leading-[1.6] text-body-soft">{children}</div>}
    </div>
  );
}
