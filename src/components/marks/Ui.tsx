import type { ReactNode } from "react";
import { ArrowRight } from "@/components/marks/Icons";

export function Eyebrow({
  n,
  label,
  dark = false,
  className = "",
}: {
  n: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`text-[12px] font-medium tabular-nums ${dark ? "text-white/75" : "text-ink/70"}`}
      >
        {n}
      </span>
      <span
        className={`h-px w-9 ${dark ? "bg-white/25" : "bg-black/25"}`}
        aria-hidden="true"
      />
      <span
        className={`text-[10.5px] font-medium uppercase tracking-[0.16em] ${
          dark ? "text-white/55" : "text-ink/45"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function LimeDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`ml-[0.14em] inline-block h-[0.15em] w-[0.15em] translate-y-[-0.02em] rounded-full bg-accent ${className}`}
    />
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "ink" | "accent" | "outline" | "outlineLight" | "soft";
  withArrow?: boolean;
  className?: string;
};

const variants: Record<NonNullable<PillProps["variant"]>, string> = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-ink",
  outline: "border border-black/15 text-ink",
  outlineLight: "border border-white/20 text-white",
  soft: "bg-black/[0.06] text-ink",
};

export function Pill({
  href,
  children,
  variant = "ink",
  withArrow = false,
  className = "",
}: PillProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13.5px] font-semibold transition-[transform,background-color,border-color,color] duration-300 hover:-translate-y-px ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}

export function CircleButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/12 ${className}`}
    >
      {children}
    </span>
  );
}
