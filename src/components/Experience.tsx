import { EXPERIENCE } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader label="04 / Experience" title="Experience I'm building.">
          <p>
            This is project-based experience, not professional employment history. Everything listed
            here is work I have actually done as a student and builder.
          </p>
        </SectionHeader>

        <ol className="mt-14 border-l border-border pl-6 sm:pl-10">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.title} as="li" delay={i * 90} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.68rem] top-2 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[2.68rem]" />
              <p className="mono-label">{e.meta}</p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{e.title}</h3>
              <p className="mt-2 text-muted-foreground">{e.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
