import { Fragment } from "react";
import { externalReferences } from "@/lib/external-references";

/**
 * Chip discreto "FHIR · APIs · Redes". As referências externas (hoje, FHIR) vêm de lib/external-references.ts:
 * enquanto não têm `href` aparecem como texto; ao preencher `href`, a própria referência vira link externo
 * dentro do chip. "APIs" e "Redes" são apenas menções a camadas futuras.
 */
export function ExternalReferences() {
  return (
    <p
      aria-label="Referências externas"
      className="hub-chip border-gold bg-transparent px-3 py-1 font-mono text-xs text-heading"
    >
      {externalReferences.map((reference, index) => (
        <Fragment key={reference.id}>
          {index > 0 && " · "}
          {reference.href ? (
            <a
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              title={reference.description}
              aria-label={`${reference.label} (abre em nova aba)`}
              className="underline decoration-gold underline-offset-2 hover:text-brand-soft"
            >
              {reference.label}
            </a>
          ) : (
            <span title={reference.description}>{reference.label}</span>
          )}
        </Fragment>
      ))}
      {" · APIs · Redes"}
    </p>
  );
}
