import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { brand } from "@/lib/brand";
import { primaryNav } from "@/lib/navigation";

/** Header institucional: assinatura oficial, vertical do produto e navegação principal. */
export function HubHeader() {
  return (
    <header className="sticky top-0 z-40 h-(--header-h) border-b border-line/80 bg-surface/95 shadow-[0_8px_30px_rgb(8_29_47/0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-[30px]">
        <Link
          href="/"
          aria-label={`${brand.name} — ${brand.vertical}. Ir para o início`}
          className="flex min-w-0 items-center gap-3 rounded-control"
        >
          <BrandLogo className="h-[40px] md:h-[42px]" />
          <span aria-hidden="true" className="hidden h-8 w-px bg-line sm:block" />
          <span className="hidden max-w-[150px] font-heading text-[13px] font-semibold leading-[1.1] text-heading sm:block">
            {brand.vertical}
          </span>
        </Link>
        <HeaderNav items={primaryNav} />
      </div>
    </header>
  );
}
