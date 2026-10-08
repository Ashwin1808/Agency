import { industries } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import { Columns, Gauge, Heart, Plane, Shield, Users } from "@/components/marks/Icons";

const icons = {
  columns: Columns,
  shield: Shield,
  heart: Heart,
  gauge: Gauge,
  users: Users,
  plane: Plane,
};

export default function Industries() {
  return (
    <section id="industries" className="bg-paper pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <Reveal>
            <Eyebrow n="05" label={industries.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{industries.heading[0]}</span>
              <span className="block">
                {industries.heading[1]}
                <LimeDot />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex items-end">
            <p className="max-w-[280px] text-[13.5px] leading-[1.6] text-ink/65">
              {industries.sub}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6 lg:mt-16">
          {industries.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={i * 80} distance={16} as="li">
                <span
                  aria-current={item.active ? "true" : undefined}
                  className="flex flex-col items-center gap-3"
                >
                  <span
                    className={`flex aspect-square w-full max-w-[76px] items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 hover:-translate-y-1 ${
                      item.active
                        ? "border-accent bg-accent"
                        : "border-black/[0.09] bg-white hover:border-black/25"
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.4} />
                  </span>
                  <span
                    className={`text-[12px] ${
                      item.active ? "font-medium text-ink" : "text-ink/55"
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
