const WAVE_COUNT = 33;

/** As mesmas 33 curvas de antes: y de 612 a 36 (passo 18), opacidade de 1,00 a 0,08. Só a cor mudou (dourado). */
const waves = Array.from({ length: WAVE_COUNT }, (_, index) => ({
  y: 612 - index * 18,
  opacity: Number((1 - (index * 0.92) / (WAVE_COUNT - 1)).toFixed(2)),
}));

/**
 * Curvas decorativas do hero: dourado a 15%, como assinatura discreta. Preenche a faixa verde onde é
 * colocado (HeroBand); não interativo e oculto de leitores de tela.
 */
export function HubBackground() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1422 700"
      className="pointer-events-none absolute inset-0 z-0 size-full text-gold opacity-15"
    >
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" fill="none">
        {waves.map((wave) => (
          <path
            key={wave.y}
            d={`M 0 ${wave.y} Q 355.5 65 711 400 Q 1066.5 735 1422 ${wave.y}`}
            opacity={wave.opacity}
          />
        ))}
      </g>
    </svg>
  );
}
