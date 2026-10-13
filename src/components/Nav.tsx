"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import Logo from "@/components/marks/Logo";
import { ArrowRight, ArrowUpRight, ChevronDown, Close, Menu, Swap } from "@/components/marks/Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-black/[0.07] bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-paper/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-20 lg:px-10">
        <div className="flex items-center gap-3">
          <a href="#top" aria-label="nexly home" className="group flex items-center">
            <Logo className="text-[21px] leading-none" />
          </a>
          <span className="hidden h-4 w-px bg-black/15 lg:block" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-black/40 lg:block">
            Product Design Studio
          </span>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-[13.5px] font-medium text-black/75 transition-colors hover:text-ink"
            >
              {link.label}
              {link.caret ? (
                <ChevronDown className="h-3.5 w-3.5 text-black/45" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#expertise"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[12.5px] font-medium text-paper transition-transform hover:-translate-y-px xl:inline-flex"
          >
            UI/UX
            <Swap className="h-3.5 w-3.5 opacity-60" />
          </a>
          <a
            href="/cloud-devops"
            className="hidden items-center gap-1.5 rounded-full bg-black/[0.06] px-4 py-2.5 text-[12.5px] font-medium text-ink transition-colors hover:bg-black/10 xl:inline-flex"
          >
            Cloud + DevOps
            <ArrowUpRight className="h-3.5 w-3.5 opacity-55" />
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-[12.5px] font-semibold text-ink transition-transform hover:-translate-y-px sm:inline-flex"
          >
            Start a project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            {open ? (
              <Close className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-black/[0.07] bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 ease-out lg:hidden ${
          open ? "max-h-[80svh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-6 sm:px-8"
          aria-label="Mobile"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/[0.07] py-4 text-[22px] font-semibold tracking-[-0.02em]"
            >
              <span className="flex items-baseline gap-3">
                <span className="text-[11px] font-medium tabular-nums text-black/35">
                  0{i + 1}
                </span>
                {link.label}
              </span>
              {link.caret ? (
                <ChevronDown className="h-4 w-4 text-black/35" />
              ) : null}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-[14px] font-semibold"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
