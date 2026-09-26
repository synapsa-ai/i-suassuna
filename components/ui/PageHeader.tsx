import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { HeroBand } from "@/components/ui/HeroBand";

type PageHeaderProps = {
  breadcrumb: readonly BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

/** Cabeçalho de páginas internas: a mesma faixa verde do hero, com o título centralizado. */
export function PageHeader({ breadcrumb, eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <HeroBand className="pb-10 pt-8 text-center md:pb-12 md:pt-12">
      <Container size="narrow">
        <Breadcrumb items={breadcrumb} />
        {eyebrow && <p className="mt-6 text-xs font-medium uppercase tracking-[0.5px] text-gold-soft">{eyebrow}</p>}
        <h1
          className={`${eyebrow ? "mt-2.5" : "mt-6"} mx-auto max-w-[800px] text-[28px] font-bold leading-[1.17] min-[501px]:text-[35px] md:text-[45px]`}
        >
          {title}
        </h1>
        {description && (
          <div className="mx-auto mt-4 max-w-[720px] text-base leading-[1.6] text-white/82">{description}</div>
        )}
        {children}
      </Container>
    </HeroBand>
  );
}
