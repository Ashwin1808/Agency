import type { ReactNode } from "react";

type Variant = "banking" | "insurance" | "healthcare" | "finance" | "enterprise" | "travel";

const paths: Record<Variant, ReactNode> = {
  banking: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5.5 10v8M9.5 10v8M14.5 10v8M18.5 10v8" />
      <path d="M3.5 20h17" />
    </>
  ),
  insurance: (
    <>
      <path d="m12 3 7 2.8v5.5c0 4.3-2.9 7.7-7 9.5-4.1-1.8-7-5.2-7-9.5V5.8L12 3Z" />
      <path d="m9 12 2.2 2.2 4-4.2" />
    </>
  ),
  healthcare: (
    <>
      <path d="M12 20.5S3.8 15.7 3.8 10.3A4.4 4.4 0 0 1 12 8.2a4.4 4.4 0 0 1 8.2 2.1c0 5.4-8.2 10.2-8.2 10.2Z" />
      <path d="M5 11.7h3l1.4-2.3 2 4.2 1.3-2h4.5" />
    </>
  ),
  finance: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 3.5-4 3 3L20 7" />
      <path d="M16.5 7H20v3.5" />
    </>
  ),
  enterprise: (
    <>
      <path d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V20" />
      <path d="M15 9h3.5A1.5 1.5 0 0 1 20 10.5V20" />
      <path d="M8 8h2M8 12h2M8 16h2M17 12h1M17 16h1" />
      <path d="M3 20h18" />
    </>
  ),
  travel: (
    <>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="M10 13 21 3" />
    </>
  ),
};

export default function SectorIcon({
  variant,
  className,
  strokeWidth = 1.4,
}: {
  variant: Variant;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[variant]}
    </svg>
  );
}
