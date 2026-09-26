import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { brand } from "@/lib/brand";
import { primaryNav } from "@/lib/navigation";

/** Barra sólida em verde institucional; a mesma organização de antes (marca à esquerda, menu à direita). */
export function HubHeader() {
  return (
    <header className="on-dark sticky top-0 z-40 h-(--header-h) border-b border-white/10 bg-brand">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-[30px]">
        <Link
          href="/"
          aria-label={`${brand.name} — ${brand.hubTitle}. Ir para o início`}
          className="flex min-w-0 items-center gap-3 rounded-control"
        >
          <BrandLogo className="h-[35px]" />
          <span className="hidden text-lg font-semibold text-white md:block xl:text-xl">{brand.hubTitle}</span>
        </Link>
        <HeaderNav items={primaryNav} />
      </div>
    </header>
  );
}
