/**
 * Padrões e referências externas relacionados à interoperabilidade.
 *
 * O Hub é um portal de Guias de Implementação em Saúde Mental; padrões como o FHIR são apenas
 * referências externas e não fazem parte da identidade do produto. Enquanto `href` estiver ausente,
 * a referência aparece como simples menção. Para transformá-la em link, basta preencher `href`:
 *
 *   { id: "fhir", label: "FHIR", description: "…", href: "https://…" }
 *
 * Nenhum outro arquivo precisa mudar.
 */
export type ExternalReference = {
  id: string;
  label: string;
  description: string;
  /** Link externo para a documentação/referência. Sem ele, o item não é clicável. */
  href?: string;
};

export const externalReferences: readonly ExternalReference[] = [
  {
    id: "fhir",
    label: "FHIR",
    description: "Padrão internacional de interoperabilidade em saúde, uma das referências externas possíveis.",
  },
];
