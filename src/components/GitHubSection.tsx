import { LINKS } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const TILES = [
  { label: "GitHub", value: "@hruthik-gowda-ht" },
  { label: "Repositories", value: "Public work" },
  { label: "Projects", value: "Full-stack & ML" },
  { label: "Code", value: "Readable commits" },
];

export function GitHubSection() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Don&apos;t take my word for it.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Look at the code.</p>
        </Reveal>

        <Reveal delay={90} className="card-surface mt-12 rounded-2xl p-7 sm:p-10">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {TILES.map((t) => (
              <div key={t.label} className="bg-background p-6">
                <p className="mono-label">{t.label}</p>
                <p className="mt-3 font-mono text-sm text-foreground/85">{t.value}</p>
              </div>
            ))}
          </div>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
