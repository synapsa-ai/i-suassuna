"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SectionLink = { id: string; label: string };

/** Distância do topo (em px) abaixo da qual uma seção passa a ser considerada "atual". */
const ACTIVE_OFFSET = 168;

const linkBase =
  "block whitespace-nowrap rounded-control px-3.5 py-2 text-sm font-medium transition-colors lg:whitespace-normal lg:px-4";
const linkActive = "bg-brand text-white";
const linkIdle = "text-body-soft hover:bg-hover hover:text-heading";

/**
 * Navegação interna do guia. No desktop é uma sidebar sticky; no mobile vira uma barra
 * horizontal fixa logo abaixo do cabeçalho. Destaca a seção visível ao rolar a página.
 */
export function GuideSectionNav({ sections }: { sections: readonly SectionLink[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = sections[0]?.id ?? "";
      if (atBottom) {
        current = sections[sections.length - 1]?.id ?? current;
      } else {
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= ACTIVE_OFFSET) current = section.id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  // No mobile a lista rola na horizontal: mantém o item ativo visível.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !item || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav
      aria-label="Nesta página"
      className="sticky top-(--header-h) z-30 -mx-2.5 border-b border-line bg-page px-2.5 min-[501px]:-mx-[15px] min-[501px]:px-[15px] md:-mx-5 md:px-5 lg:top-[calc(var(--header-h)+1.5rem)] lg:z-auto lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0"
    >
      <p className="hidden text-xs font-medium uppercase tracking-[0.5px] text-brand-soft lg:mb-3 lg:block lg:px-4">
        Nesta página
      </p>
      <ul ref={listRef} className="relative flex gap-2 overflow-x-auto py-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:py-0">
        {sections.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id} className="shrink-0 lg:shrink">
              <a
                href={`#${section.id}`}
                aria-current={active ? "location" : undefined}
                className={`${linkBase} ${active ? linkActive : linkIdle}`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
      <Link
        href="/guias"
        className="mt-6 hidden items-center gap-1.5 rounded-sm px-4 text-sm font-medium text-brand-soft underline-offset-4 hover:underline lg:inline-flex"
      >
        <span aria-hidden="true">←</span> Todos os guias
      </Link>
    </nav>
  );
}
