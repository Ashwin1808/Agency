import type { CSSProperties } from "react";

/** Deterministic pseudo-random so the starfield is identical every render. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function shadowLayer(count: number, seed: number, span: number, alpha: number) {
  const rnd = lcg(seed);
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = Math.round(rnd() * span);
    const y = Math.round(rnd() * span);
    out.push(`${x}px ${y}px 0 0 rgba(255,255,255,${(rnd() * alpha + 0.06).toFixed(2)})`);
  }
  return out.join(",");
}

export function SpaceBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #121114 0%, #0a0a0c 42%, #060607 72%, #030304 100%)",
        }}
      />
      <span
        className="space-stars space-stars-far"
        style={{ "--stars": shadowLayer(160, 8675309, 900, 0.7) } as CSSProperties}
      />
      <span
        className="space-stars space-stars-near"
        style={{ "--stars": shadowLayer(70, 90210, 900, 0.95) } as CSSProperties}
      />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}

/** A single ringed planet with a few slow satellites. */
export function Planet() {
  return (
    <div className="space-planet relative aspect-square w-full max-w-[460px] mx-auto">
      <div className="space-planet-rings absolute inset-0">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="space-ring"
            style={{ inset: `${i * 11 + 2}%` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <span className="space-planet-glow" />
        <div className="space-planet-body relative aspect-square w-[38%] rounded-full" />
      </div>

      {[
        { d: 46, s: 60 },
        { d: 68, s: 84 },
        { d: 100, s: 52 },
      ].map((sat) => (
        <span
          key={sat.d}
          className="space-sat absolute inset-0"
          style={{ animationDuration: `${sat.d}s` }}
        >
          <span
            className="block h-[5px] w-[5px] rounded-full bg-white/70"
            style={{
              boxShadow: "0 0 10px 2px rgba(255,255,255,0.35)",
              marginTop: `${sat.s / 2}%`,
            }}
          />
        </span>
      ))}
    </div>
  );
}