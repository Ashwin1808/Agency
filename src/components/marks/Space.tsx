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

export function Nebula() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <span className="space-nebula space-nebula-a" />
      <span className="space-nebula space-nebula-b" />
      <span className="space-nebula space-nebula-c" />
    </div>
  );
}

export function SpaceBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 0%, #0d0d16 0%, #08080f 38%, #05050a 68%, #030305 100%)",
        }}
      />
      <Nebula />
      <span
        className="space-stars space-stars-far"
        style={{ "--stars": shadowLayer(170, 8675309, 900, 0.75) } as CSSProperties}
      />
      <span
        className="space-stars space-stars-near"
        style={{ "--stars": shadowLayer(80, 90210, 900, 0.95) } as CSSProperties}
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

/** Kubernetes-style hexagon badge used in the hero scene. */
function K8sBadge() {
  return (
    <div className="absolute -right-2 top-0 z-20 flex h-[86px] w-[76px] items-center justify-center sm:h-[104px] sm:w-[92px]">
      <span className="hero-glow" aria-hidden="true" />
      <svg viewBox="0 0 60 68" className="relative h-full w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]">
        <path d="M30 1 58 17v34L30 67 2 51V17Z" fill="#0f1320" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <g stroke="#d4f34a" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx="30" cy="34" r="12.5" />
          <path d="M30 12v9M30 47v9M11 34h8M41 34h8M17 21l6 6M43 21l-6 6M17 47l6-6M43 47l-6-6" />
          <path d="M30 24.5 38 40h-16Z" />
        </g>
      </svg>
    </div>
  );
}

/** Soft volumetric cloud used in the hero scene. */
function CloudShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="hero-cloud" aria-hidden="true" />
      <svg viewBox="0 0 120 66" className="relative h-auto w-full" aria-hidden="true">
        <path
          d="M28 62a20 20 0 0 1 1.5-39.9A26 26 0 0 1 79 15.4a21 21 0 0 1 13 45.6Z"
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/** Code -> Build -> Deploy -> Scale card plus a terminal, like the reference. */
function HeroScene({ flow, terminal }: { flow: string[]; terminal: { cmd: string; tone: string; ok?: boolean }[] }) {
  return (
    <div className="relative w-full">
      {/* server stack behind */}
      <div className="pointer-events-none absolute -left-6 top-6 hidden h-[230px] w-[110px] flex-col justify-between opacity-60 sm:flex">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-[52px] rounded-lg border border-white/10 bg-white/[0.03]"
            style={{ animation: `space-twinkle ${4 + i}s ease-in-out infinite`, animationDelay: `${i}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 ml-auto w-full max-w-[440px] sm:ml-6">
        <div className="absolute -right-2 -top-12 z-20">
          <K8sBadge />
        </div>
        <div className="absolute -left-4 -top-14 z-20 w-[130px] sm:left-2 sm:w-[170px]">
          <CloudShape />
        </div>

        <div className="hero-panel relative overflow-hidden rounded-[1.25rem] border border-white/[0.09] bg-white/[0.03] p-5 backdrop-blur-sm">
          <span className="hero-scan" aria-hidden="true" />
          <ol className="relative flex items-center gap-2">
            {flow.map((step, i) => (
              <li key={step} className="flex flex-1 items-center gap-2">
                <span className="flex h-[52px] flex-1 flex-col items-center justify-center gap-1.5 rounded-[0.7rem] border border-white/[0.09] bg-white/[0.04]">
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="text-[10.5px] font-medium text-white/75">{step}</span>
                </span>
                {i < flow.length - 1 ? (
                  <span className="text-[11px] text-accent/70">→</span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-[1rem] border border-white/[0.09] bg-[#080a12]/90 p-4 font-mono text-[11.5px] shadow-[0_28px_60px_-30px_rgba(0,0,0,0.9)]">
          {terminal.map((line, i) => (
            <p key={line.cmd} className={`flex items-center gap-1.5 ${i > 0 ? "mt-1.5" : ""}`}>
              {i === 0 ? <span className="text-accent/70">&gt;</span> : <span>&nbsp;</span>}
              <span className={line.tone}>{line.cmd}</span>
              {line.ok ? <span className="text-accent">✓</span> : null}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSceneExport(props: {
  flow: string[];
  terminal: { cmd: string; tone: string; ok?: boolean }[];
}) {
  return <HeroScene {...props} />;
}
export function Gyroscope({ className = "" }: { className?: string }) {
  return (
    <div className={`gyro-scene relative aspect-square w-full ${className}`}>
      <div className="gyro absolute inset-0">
        <span className="gyro-ring" style={{ transform: "rotateX(72deg)" }} />
        <span
          className="gyro-ring gyro-ring-2"
          style={{ transform: "rotateY(72deg)" }}
        />
        <span
          className="gyro-ring gyro-ring-2"
          style={{ transform: "rotateX(38deg) rotateY(38deg)" }}
        />
        <span
          className="gyro-ring gyro-ring-3"
          style={{ transform: "rotateX(88deg) rotateY(20deg)" }}
        />

        <span className="gyro-core" />

        {[
          { r: 48, t: 0 },
          { r: 48, t: 120 },
          { r: 48, t: 240 },
          { r: 36, t: 60 },
        ].map((sat) => (
          <span
            key={`${sat.r}-${sat.t}`}
            className="gyro-sat"
            style={{ transform: `rotate(${sat.t}deg) translateX(${sat.r}%)` }}
          />
        ))}
      </div>
    </div>
  );
}

/** Commit-to-production rail with a packet travelling stage to stage. */
export function PipelineRail({
  steps,
  seconds = 20,
}: {
  steps: { n: string; label: string; note: string }[];
  seconds?: number;
}) {
  return (
    <div
      style={
        {
          "--rail": `${seconds}s`,
          // four gaps between five nodes across 80% of the track
          "--step": `${seconds / 4}s`,
        } as CSSProperties
      }
    >
      <div className="relative pt-9">
        <span className="rail-track" />
        <span className="rail-packet" />

        {/* grid keeps every node centred under its own column, so the
            packet and the labels cannot drift out of alignment */}
        <ol className="grid grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.n} className="flex flex-col items-center text-center">
              <span
                className="rail-node-dot -mt-[3.5px] block h-[7px] w-[7px] rounded-full bg-white/25"
                style={{ "--i": i } as CSSProperties}
              />
              <span className="mt-5 block text-[10px] font-medium tabular-nums text-white/30">
                {s.n}
              </span>
              <span className="mt-2 block text-[15px] font-semibold tracking-[-0.015em] text-white">
                {s.label}
              </span>
              <span className="mt-1.5 block text-[11.5px] leading-tight text-white/35">
                {s.note}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* live stage readout, kept in step with the travelling packet */}
      <div className="mt-10 flex flex-wrap items-center gap-x-2.5 border-t border-white/[0.07] pt-4 font-mono text-[11.5px]">
        <span className="text-white/30">$</span>
        <span className="text-white/50">deploy --watch</span>
        <span className="stage-readout text-accent" />
        <span className="text-white/25">→ prod</span>
        <span className="ml-auto hidden text-white/25 sm:block">
          git is the source of truth
        </span>
      </div>
    </div>
  );
}