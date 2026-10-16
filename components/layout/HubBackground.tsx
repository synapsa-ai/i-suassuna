const WAVE_COUNT = 24;

const waves = Array.from({ length: WAVE_COUNT }, (_, index) => ({
  y: 620 - index * 24,
  opacity: Number((1 - (index * 0.92) / (WAVE_COUNT - 1)).toFixed(2)),
}));

/**
 * Grade e curvas usam as formas geométricas da marca sem competir com o conteúdo.
 */
export function HubBackground() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1422 700"
      className="pointer-events-none absolute inset-0 z-0 size-full text-accent opacity-20"
    >
      <defs>
        <linearGradient id="brand-wave" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.55" stopColor="currentColor" />
          <stop offset="1" stopColor="#0076bf" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <g stroke="url(#brand-wave)" strokeWidth={1.25} strokeLinecap="round" fill="none">
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
