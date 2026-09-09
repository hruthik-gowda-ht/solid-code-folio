import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const INTERESTS = [
  "Software development",
  "Full-stack applications",
  "Problem solving",
  "Databases",
  "AI/ML experimentation",
  "Real-world systems",
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader label="01 / About" title="More than just a list of technologies." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I build software because I like the part where a messy, manual, half-broken process
              becomes something people can actually use. Most of my work starts from a real
              annoyance rather than a tutorial.
            </p>
            <p>
              That means I care about the parts that aren&apos;t visible: how data is modelled, who
              is allowed to do what, what happens when a step is rejected, and whether the system
              still makes sense six weeks later. I&apos;d rather ship one system that holds together
              than five demos that don&apos;t.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {INTERESTS.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-foreground/80"
                >
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 self-start">
            <Reveal delay={80} className="card-surface rounded-xl p-6">
              <p className="mono-label">Currently</p>
              <p className="mt-3 text-lg font-medium">
                Engineering Student • Builder • Problem Solver
              </p>
            </Reveal>
            <Reveal delay={160} className="card-surface rounded-xl p-6">
              <p className="mono-label">Focus</p>
              <p className="mt-3 text-lg font-medium">Turning ideas into usable software.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
