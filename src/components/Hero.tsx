import { LINKS } from "@/data/portfolio";

function EngineeringVisual() {
  return (
    <div className="relative hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
      <div className="grid-bg absolute inset-0 rounded-xl opacity-60 [mask-image:radial-gradient(circle_at_60%_40%,black,transparent_72%)]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <g stroke="currentColor" className="text-border-strong" strokeWidth="1" fill="none">
          <path d="M60 300 L140 200 L240 240 L330 120" />
          <path d="M60 300 L160 320 L240 240" />
          <path d="M140 200 L170 90 L330 120" />
        </g>
        {[
          [60, 300],
          [140, 200],
          [240, 240],
          [330, 120],
          [170, 90],
          [160, 320],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="14" className="fill-primary/10" />
            <circle cx={x} cy={y} r="3.5" className="fill-primary" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 left-0 w-64 rounded-lg border border-border bg-surface/80 p-3 font-mono text-[11px] leading-relaxed backdrop-blur">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        </div>
        <p className="text-muted-foreground">
          <span className="text-primary">$</span> git commit -m &quot;ship it&quot;
        </p>
        <p className="text-muted-foreground/70">3 files changed</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border pt-32 pb-0">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </p>

          <h1 className="mt-7 text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02] font-semibold">
            Software Developer
            <span className="block text-muted-foreground">who builds things that work.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m an Information Science engineering student focused on building practical
            software, solving problems, and turning ideas into working products.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <EngineeringVisual />
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <p className="mono-label">Building • Learning • Shipping</p>
        </div>
      </div>
    </section>
  );
}
