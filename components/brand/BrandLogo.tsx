import Image from "next/image";
import { brand } from "@/lib/brand";

/**
 * Logo do Instituto Suassuna. O arquivo e as dimensões vêm de lib/brand.ts,
 * então trocar o placeholder pela logo oficial não exige alterar componentes.
 * `tone="white"` renderiza a assinatura em branco para fundos escuros; `"original"` mantém as cores oficiais.
 */
export function BrandLogo({ className = "", tone = "original" }: { className?: string; tone?: "original" | "white" }) {
  const { src, width, height, alt } = brand.logo;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      unoptimized={src.endsWith(".svg")}
      className={`w-auto object-contain ${tone === "white" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
