import type { ReactNode } from "react";

type GuideSectionProps = {
  id: string;
  title: string;
  /** Marca a seção como em elaboração (conteúdo ainda não definido). */
  pending?: boolean;
  children: ReactNode;
};

/** Seção de documentação com âncora, em painel branco. O scroll-margin compensa o cabeçalho e a barra sticky. */
export function GuideSection({ id, title, pending = false, children }: GuideSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className="hub-panel scroll-mt-[calc(var(--header-h)+4.75rem)] lg:scroll-mt-[calc(var(--header-h)+1.5rem)]"
    >
      <div className="hub-panel-head flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-4 md:px-8 md:py-5">
        <h2 id={`${id}-titulo`} className="text-xl font-semibold md:text-2xl">
          {title}
        </h2>
        {pending && <span className="hub-chip">Em elaboração</span>}
      </div>
      <div className="space-y-4 p-5 text-base leading-7 md:p-8">{children}</div>
    </section>
  );
}

/** Aviso padrão de conteúdo ainda não definido. */
export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-group border border-dashed border-line bg-sunken px-5 py-4 text-[0.9375rem] leading-7 text-body-soft">
      {children}
    </p>
  );
}

export function TagList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-brand-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
