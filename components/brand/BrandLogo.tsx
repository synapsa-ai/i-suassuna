import Image from "next/image";
import { brand } from "@/lib/brand";

/**
 * Logo do Instituto Suassuna. O arquivo e as dimensões vêm de lib/brand.ts,
 * então trocar o placeholder pela logo oficial não exige alterar componentes.
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  const { src, width, height, alt, monochromeWhite } = brand.logo;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      unoptimized={src.endsWith(".svg")}
      className={`w-auto ${monochromeWhite ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
