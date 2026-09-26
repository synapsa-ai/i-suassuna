import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * primary: dourado com texto verde escuro. secondary: contorno branco, para usar sobre o verde.
 * outline: contorno verde, para usar sobre claro.
 */
export type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary: "hub-button hub-button--lg",
  secondary: "hub-button hub-button--lg hub-button--ghost",
  outline: "hub-button hub-button--lg hub-button--outline",
};

export function buttonClass(variant: ButtonVariant = "primary", className = ""): string {
  return `${variants[variant]} ${className}`.trim();
}

type LinkButtonProps = ComponentProps<typeof Link> & { variant?: ButtonVariant };

/** Link interno do Next.js com aparência de botão. */
export function LinkButton({ variant = "primary", className = "", ...props }: LinkButtonProps) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}
