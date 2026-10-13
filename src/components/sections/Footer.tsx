import { footer, navLinks } from "@/lib/content";
import Logo from "@/components/marks/Logo";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Instagram,
  Linkedin,
  Swap,
  XIcon,
} from "@/components/marks/Icons";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram,
  X: XIcon,
  Dribbble: Globe,
};

export default function Footer() {
  return (
    <footer id="studio" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-10 lg:py-14">
        <div className="flex items-center gap-3">
          <Logo className="text-[21px] leading-none" />
          <span className="h-4 w-px bg-white/20" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
            {footer.tagline}
          </span>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              {link.caret ? (
                <ChevronDown className="h-3.5 w-3.5 text-white/40" />
              ) : null}
            </a>
          ))}

          <a
            href="#expertise"
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[12.5px] font-medium transition-colors hover:bg-white/15"
          >
            UI/UX
            <Swap className="h-3.5 w-3.5 opacity-60" />
          </a>
          <a
            href="/cloud-devops"
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[12.5px] font-medium transition-colors hover:bg-white/15"
          >
            Cloud + DevOps
            <ArrowUpRight className="h-3.5 w-3.5 opacity-55" />
          </a>
        </nav>

        <ul className="flex items-center gap-2.5">
          {footer.socials.map((name) => {
            const Icon = socialIcons[name as keyof typeof socialIcons];
            return (
              <li key={name}>
                <a
                  href="#top"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
