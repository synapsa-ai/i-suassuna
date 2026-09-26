import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { HubFooter } from "@/components/layout/HubFooter";
import { HubHeader } from "@/components/layout/HubHeader";
import { brand } from "@/lib/brand";

// Roboto, a fonte já integrada ao projeto; a mudança de identidade está em cor, peso e contraste.
const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const title = `${brand.hubTitle} | ${brand.name}`;
const description = "Hub técnico de Guias de Implementação em Saúde Mental do Instituto Suassuna.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${brand.name}` },
  description,
  applicationName: brand.hubName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: brand.hubName,
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#173f35",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={roboto.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only rounded-control bg-surface px-4 py-3 font-medium text-heading focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Ir para o conteúdo
        </a>
        <HubHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <HubFooter />
      </body>
    </html>
  );
}
