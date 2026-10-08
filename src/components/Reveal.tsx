"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** stagger, in milliseconds */
  delay?: number;
  className?: string;
  /** reveal distance in px; opacity + translateY only */
  distance?: number;
  /** render as a different element, e.g. "li" inside a list */
  as?: "div" | "li" | "span";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  distance = 24,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement & HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      node.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.shown = "true";
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          transitionDelay: delay ? `${delay}ms` : undefined,
          "--reveal-y": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
