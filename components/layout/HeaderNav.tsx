"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import type { NavItem } from "@/lib/navigation";

function isActive(item: NavItem, pathname: string): boolean {
  if (item.match === "exact") return pathname === item.href;
  if (item.match === "prefix") return pathname === item.href || pathname.startsWith(`${item.href}/`);
  return false;
}

/** Navegação principal: links em pílula no desktop e painel no mobile. */
export function HeaderNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <nav aria-label="Principal" className="ml-auto mr-4 hidden lg:block">
        <ul className="flex items-center gap-1 xl:gap-4">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(item, pathname) ? "page" : undefined}
                className="hub-navlink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/guias#busca" className="hub-button ml-auto max-lg:hidden lg:ml-0">
        <SearchIcon width={16} height={16} />
        Buscar
      </Link>

      <Link
        href="/guias#busca"
        aria-label="Buscar guias"
        className="ml-auto inline-flex size-11 items-center justify-center rounded-control text-heading transition-colors hover:bg-sunken lg:hidden"
      >
        <SearchIcon width={22} height={22} />
      </Link>

      <button
        ref={buttonRef}
        type="button"
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-control text-heading transition-colors hover:bg-sunken lg:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-[0_10px_30px_rgb(16_54_88/0.12)] lg:hidden"
      >
        <nav aria-label="Principal" className="mx-auto w-full max-w-[1200px] px-5 py-5 md:px-[30px]">
          <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item, pathname) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="hub-navlink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
