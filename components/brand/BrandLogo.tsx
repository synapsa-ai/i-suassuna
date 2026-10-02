import Image from "next/image";
import { brand } from "@/lib/brand";

/**
 * Logo do Instituto Suassuna. O arquivo e as dimensões vêm de lib/brand.ts,
 * então trocar o placeholder pela logo oficial não exige alterar componentes.
 * `tone="white"` renderiza a logo em branco por filtro CSS (para fundos azuis escuros; funciona com
 * qualquer arquivo de fundo transparente); `"original"` mantém as cores do arquivo.
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
      className={`w-auto ${tone === "white" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
