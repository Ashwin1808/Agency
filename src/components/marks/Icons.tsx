import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h14.5" />
      <path d="M13 6.5l5.5 5.5L13 17.5" />
    </Svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </Svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 12H5.5" />
      <path d="M11 6.5 5.5 12 11 17.5" />
    </Svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Svg>
  );
}

export function Play(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8.5 6.4a.6.6 0 0 1 .92-.5l8.1 5.6a.6.6 0 0 1 0 1l-8.1 5.6a.6.6 0 0 1-.92-.5V6.4Z"
        fill="currentColor"
        stroke="none"
      />
    </Svg>
  );
}

export function Swap(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8.5h13.5" />
      <path d="m14.5 5.5 3 3-3 3" />
      <path d="M20 15.5H6.5" />
      <path d="m9.5 12.5-3 3 3 3" />
    </Svg>
  );
}

export function Bolt(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.4 2.8 5.2 13.1h5.6l-1.2 8.1 8.2-10.3h-5.6l1.2-8.1Z" />
    </Svg>
  );
}

export function Search(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </Svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 2.8 8.2 4.6L12 12 3.8 7.4 12 2.8Z" />
      <path d="m3.8 12 8.2 4.6 8.2-4.6" />
      <path d="m3.8 16.4 8.2 4.6 8.2-4.6" />
    </Svg>
  );
}

export function Grid(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.6" y="3.6" width="6.8" height="6.8" rx="1.6" />
      <rect x="13.6" y="3.6" width="6.8" height="6.8" rx="1.6" />
      <rect x="3.6" y="13.6" width="6.8" height="6.8" rx="1.6" />
      <rect x="13.6" y="13.6" width="6.8" height="6.8" rx="1.6" />
    </Svg>
  );
}

export function Code(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 7.5-4.5 4.5L9 16.5" />
      <path d="m15 7.5 4.5 4.5L15 16.5" />
    </Svg>
  );
}

export function Users(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8.2" r="3.2" />
      <path d="M3.2 19.2c0-3.1 2.6-5.3 5.8-5.3s5.8 2.2 5.8 5.3" />
      <path d="M16.2 5.4a3.2 3.2 0 0 1 0 5.8" />
      <path d="M17.4 14.2c2 .9 3.4 2.5 3.4 4.6" />
    </Svg>
  );
}

export function Target(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 6.4V4" />
      <path d="M12 20v-2.4" />
      <path d="M6.4 12H4" />
      <path d="M20 12h-2.4" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.8c.9 4.3 2.4 6.5 6.6 7.4-4.2.9-5.7 3.1-6.6 7.4-.9-4.3-2.4-6.5-6.6-7.4 4.2-.9 5.7-3.1 6.6-7.4Z" />
      <path d="M18.4 16.2c.4 1.7 1 2.6 2.6 3-1.6.4-2.2 1.3-2.6 3-.4-1.7-1-2.6-2.6-3 1.6-.4 2.2-1.3 2.6-3Z" />
    </Svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 2.8 7.2 2.9v5.6c0 4.4-3 7.9-7.2 9.8-4.2-1.9-7.2-5.4-7.2-9.8V5.7L12 2.8Z" />
      <path d="m8.9 12.2 2.2 2.2 4.1-4.3" />
    </Svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 2.8 7.2 2.9v5.6c0 4.4-3 7.9-7.2 9.8-4.2-1.9-7.2-5.4-7.2-9.8V5.7L12 2.8Z" />
    </Svg>
  );
}

export function Rocket(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6c3 1.7 5 4.8 5 8.4l-2.4 3.2H9.4L7 11c0-3.6 2-6.7 5-8.4Z" />
      <circle cx="12" cy="9.6" r="1.7" />
      <path d="m9.4 14.2-2.2 4.4 3.6-1.1" />
      <path d="m14.6 14.2 2.2 4.4-3.6-1.1" />
    </Svg>
  );
}

export function Columns(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 9.6 12 4.4l8.6 5.2" />
      <path d="M5.8 9.9v8.4" />
      <path d="M10 9.9v8.4" />
      <path d="M14 9.9v8.4" />
      <path d="M18.2 9.9v8.4" />
      <path d="M3.2 19.6h17.6" />
    </Svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20.4S3.8 15.6 3.8 10.2A4.4 4.4 0 0 1 12 8.1a4.4 4.4 0 0 1 8.2 2.1c0 5.4-8.2 10.2-8.2 10.2Z" />
      <path d="M4.6 11.6h3l1.4-2.3 2 4.2 1.3-2h4.6" />
    </Svg>
  );
}

export function Gauge(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.8 18.4a8.6 8.6 0 1 1 16.4 0" />
      <path d="m12 18.4 4.2-5.4" />
      <circle cx="12" cy="18.4" r="1.3" />
    </Svg>
  );
}

export function Plane(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.8c.9 0 1.6.9 1.6 2v4.4l7.2 4.1v1.9l-7.2-2.1v4l2.5 1.7v1.6L12 19.3l-4.1 1.1v-1.6l2.5-1.7v-4l-7.2 2.1v-1.9l7.2-4.1V4.8c0-1.1.7-2 1.6-2Z" />
    </Svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5.6 9.8V19" />
      <circle cx="5.6" cy="6" r="1.3" />
      <path d="M10.6 19v-5.3c0-1.6 1-2.7 2.4-2.7s2.4 1 2.4 2.7V19" />
      <path d="M10.6 9.8V19" />
    </Svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.8" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.9" cy="7.1" r="1.05" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4.8 4.8 14.4 14.4" />
      <path d="M19.2 4.8 4.8 19.2" />
    </Svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.4c2.2 2.5 3.4 5.5 3.4 8.6s-1.2 6.1-3.4 8.6c-2.2-2.5-3.4-5.5-3.4-8.6S9.8 5.9 12 3.4Z" />
    </Svg>
  );
}

export function Check(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 7.5h17" />
      <path d="M3.5 16.5h17" />
    </Svg>
  );
}

export function Close(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function FileText(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13.4 2.8H6.6a1.8 1.8 0 0 0-1.8 1.8v14.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V8.2l-5.8-5.4Z" />
      <path d="M13.2 2.9v5.2h5.6" />
      <path d="M8.6 13h6.8" />
      <path d="M8.6 16.6h4.4" />
    </Svg>
  );
}

export function Home(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m3.6 10.4 8.4-6.6 8.4 6.6" />
      <path d="M6 9v10.4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
      <path d="M10 20.4v-6h4v6" />
    </Svg>
  );
}

export function LifeBuoy(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m5.9 5.9 4 4" />
      <path d="m14.1 14.1 4 4" />
      <path d="m18.1 5.9-4 4" />
      <path d="m9.9 14.1-4 4" />
    </Svg>
  );
}

export function User(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.8 20.2c0-3.8 3.2-6.2 7.2-6.2s7.2 2.4 7.2 6.2" />
    </Svg>
  );
}

export function Activity(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 12.4h4.2l2.4-6 3.8 12 2.4-6h4.4" />
    </Svg>
  );
}

