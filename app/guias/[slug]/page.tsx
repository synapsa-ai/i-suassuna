import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideDocument } from "@/components/guides/GuideDocument";
import { GuideHeader } from "@/components/guides/GuideHeader";
import { GuideSectionNav } from "@/components/guides/GuideSectionNav";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGuideBySlug, guideSections, implementationGuides } from "@/lib/guides";

// Um único segmento dinâmico atende as três rotas do Hub, lendo de lib/guides.ts.
// Slugs fora da lista retornam 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return implementationGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default async function GuidePage({ params }: PageProps<"/guias/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const otherGuides = implementationGuides.filter((item) => item.id !== guide.id);

  return (
    <>
      <GuideHeader guide={guide} />

      <Container className="pt-10 lg:pt-14">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
          <GuideSectionNav sections={guideSections} />
          <div className="pt-6 lg:pt-0">
            <GuideDocument guide={guide} />
          </div>
        </div>
      </Container>

      <section aria-labelledby="outros-guias" className="pt-[60px] md:pt-20">
        <Container size="wide">
          <SectionHeading id="outros-guias" title="Outros Guias de Implementação" />
          <ul className="mt-10 grid grid-cols-1 gap-3 min-[501px]:grid-cols-2 min-[501px]:gap-4 md:gap-6">
            {otherGuides.map((item) => (
              <li key={item.id}>
                <GuideCard guide={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
