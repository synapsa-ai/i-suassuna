import type { Metadata, Viewport } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import "./globals.css";
import { HubFooter } from "@/components/layout/HubFooter";
import { HubHeader } from "@/components/layout/HubHeader";
import { brand } from "@/lib/brand";

// A identidade do site institucional combina Poppins no texto com Spartan nos títulos.
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const spartan = League_Spartan({
  subsets: ["latin", "latin-ext"],
  variable: "--font-spartan",
  display: "swap",
});

const title = `${brand.hubName} — ${brand.hubTitle}`;
const description = "Conhecimento clínico, padrões e tecnologia para construir uma saúde mais interoperável. Guias de Implementação do Instituto Suassuna.";

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
  themeColor: "#081d2f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${poppins.variable} ${spartan.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only rounded-control bg-surface px-4 py-3 font-medium text-heading focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Ir para o conteúdo
        </a>
        <HubHeader />
        <main id="conteudo" className="flex-1 pb-[60px] has-[[data-flush-end]]:pb-0">
          {children}
        </main>
        <HubFooter />
      </body>
    </html>
  );
}
