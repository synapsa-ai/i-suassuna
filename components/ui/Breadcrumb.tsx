import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/icons";

export type BreadcrumbItem = { label: string; href?: string };

/** O último item é a página atual (sem link). Vive sobre a faixa verde dos cabeçalhos de página. */
export function Breadcrumb({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <nav aria-label="Trilha de navegação">
      <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm text-white/82">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="rounded-sm underline-offset-4 hover:text-white hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-medium text-white" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRightIcon width={14} height={14} className="text-white/40" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
