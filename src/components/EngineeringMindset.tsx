import { PRINCIPLES } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function EngineeringMindset() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">How I approach building.</h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.n}
              as="li"
              delay={i * 90}
              className="group bg-background p-7 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-sm text-primary">{p.n}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
