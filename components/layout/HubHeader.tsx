import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { brand } from "@/lib/brand";
import { primaryNav } from "@/lib/navigation";

/** Header institucional: fundo branco, marca + vertical à esquerda, menu e ação de busca à direita. */
export function HubHeader() {
  return (
    <header className="sticky top-0 z-40 h-(--header-h) border-b border-line bg-surface">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-[30px]">
        <Link
          href="/"
          aria-label={`${brand.name} — ${brand.vertical}. Ir para o início`}
          className="flex min-w-0 items-center gap-3 rounded-control"
        >
          <BrandLogo className="h-[35px]" />
          <span aria-hidden="true" className="hidden h-7 w-px bg-line sm:block" />
          <span className="hidden text-base font-semibold text-heading sm:block">{brand.vertical}</span>
        </Link>
        <HeaderNav items={primaryNav} />
      </div>
    </header>
  );
}
