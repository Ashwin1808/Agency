import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { name: string };

function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

/**
 * Simplified brand marks for the tools in the stack. Drawn by hand so the
 * page keeps its no-image-files rule while still reading as the real tool.
 */
export default function ToolLogo({ name, ...props }: Props) {
  switch (name) {
    case "AWS":
      return (
        <Svg {...props}>
          <text
            x="12"
            y="14"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.5"
            fill="currentColor"
          >
            aws
          </text>
          <path
            d="M3.5 17.5c1.7 1.5 4.6 2.2 8.5 2.2 3.4 0 6.6-.7 8.8-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="m17.8 16.2 3.4 1.4-1.1 3.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "Kubernetes":
      return (
        <Svg {...props}>
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="8.4" />
            <path d="M12 8.4V3.6M12 15.6v4.8M8.4 12h-4.8M15.6 12h4.8" />
            <path d="m9.3 9.3-3.3-3.3M14.7 14.7l3.3 3.3M14.7 9.3l3.3-3.3M9.3 14.7 6 18" />
          </g>
        </Svg>
      );

    case "Docker":
      return (
        <Svg {...props}>
          <g fill="currentColor">
            <rect x="3" y="9" width="3" height="3" rx="0.4" />
            <rect x="6.6" y="9" width="3" height="3" rx="0.4" />
            <rect x="10.2" y="9" width="3" height="3" rx="0.4" />
            <rect x="13.8" y="9" width="3" height="3" rx="0.4" />
            <rect x="6.6" y="5.5" width="3" height="3" rx="0.4" />
            <rect x="10.2" y="5.5" width="3" height="3" rx="0.4" />
            <rect x="10.2" y="2" width="3" height="3" rx="0.4" />
          </g>
          <path
            d="M2 14.4c0-1.3 1-2.3 2.3-2.3h13.5c1 0 1.8-.8 1.8-1.8 0-.9-.7-1.7-1.6-1.7-.7 0-1.3.4-1.6 1l-2-.4c.5-1.5 1.9-2.4 3.6-2.4 2.1 0 3.8 1.7 3.8 3.8 0 .3 0 .5-.1.8.3 1.5 1.6 2.4 3.3 2.4h.5c-.3 3.6-3.2 6.2-7.6 6.2-4.6 0-8.2-2.3-8.2-5.6z"
            fill="currentColor"
          />
        </Svg>
      );

    case "Terraform":
      return (
        <Svg {...props}>
          <path d="M12 2.5 21 8v8l-9 5.5L3 16V8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 2.5v19M3 8l18 8M21 8 3 16" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
          <path d="M12 2.5 21 8l-9 5.5L3 8Z" fill="currentColor" opacity="0.2" />
        </Svg>
      );

    case "GitHub":
      return (
        <Svg {...props}>
          <path
            d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.7.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z"
            fill="currentColor"
          />
        </Svg>
      );

    case "GitHub Actions":
      return (
        <Svg {...props}>
          <path d="M12 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M10.4 8.6 16 12l-5.6 3.4Z" fill="currentColor" />
        </Svg>
      );

    case "Argo CD":
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path
            d="M15.6 8.4 12 12l3.6 3.6M12 12H5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "Helm":
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M12 3.4v3M12 17.6v3M3.4 12h3M17.6 12h3" />
            <path d="m6.1 6.1 2.1 2.1M15.8 15.8l2.1 2.1M17.9 6.1l-2.1 2.1M8.2 15.8l-2.1 2.1" />
          </g>
        </Svg>
      );

    case "Prometheus":
      return (
        <Svg {...props}>
          <path
            d="M12 2.2c.6 3.4-.7 5.4-2.6 7.1-1.7 1.5-3.9 3-3.9 6 0 3.3 2.9 6.5 6.5 6.5s6.5-3.2 6.5-6.5c0-2.6-1.3-4-2.5-5.6-.5.6-1.1 1.1-1.8 1.4.9-3.3.2-6.4-2.2-8.9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M12 21.8c-2.6 0-4.6-1.9-4.6-4.4 0-1.9 1.3-2.9 2.3-4.1.7-.8 1.2-1.6 1.3-2.7 1.3 1.7 2 3.3 2 5 0 1.4 1.4 2.1 1.4 3.4 0 1-.6 1.6-1.4 1.6" fill="currentColor" />
        </Svg>
      );

    case "Grafana":
      return (
        <Svg {...props}>
          <path d="M12 2.6 21.4 8v8L12 21.4 2.6 16V8Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path
            d="M12 6.4 17.6 9.6v6.2L12 18.9l-5.6-3.1V9.6Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path d="M12 6.4v12.5M6.4 9.6 12 12l5.6-2.4" stroke="currentColor" strokeWidth="1.1" fill="none" />
        </Svg>
      );

    case "Trivy":
      return (
        <Svg {...props}>
          <path d="M12 2.6 20 5.8v6.4c0 4.3-3.2 7.8-8 9.2-4.8-1.4-8-4.9-8-9.2V5.8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="m8.6 12.2 2.4 2.4 4.4-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      );

    case "SonarQube":
    case "SonarCloud":
      return (
        <Svg {...props}>
          <path d="M4 18c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M7.4 18c0-2.5 2.1-4.6 4.6-4.6s4.6 2.1 4.6 4.6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="12" cy="18" r="1.6" fill="currentColor" />
        </Svg>
      );

    case "PostgreSQL":
      return (
        <Svg {...props}>
          <path
            d="M9.4 4.2c3.8-1 7.4.6 7.6 3.8.2 3-1.2 5-1.6 7.4-.4 2.6 1.2 4.4-1.4 5.2-2 .6-4-.6-4.6-2.6-.7-2.4.6-4 1-5.8.4-1.8-.2-3.2-1-4.4-.8-1.2-1-2.6 0-3.6Z"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
          />
          <path d="M9.2 4.4c-2 .6-3 2.4-2.6 4.4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
        </Svg>
      );

    default:
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </Svg>
      );
  }
}