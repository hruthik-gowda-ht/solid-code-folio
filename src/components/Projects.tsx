import { Link } from "@tanstack/react-router";
import { LINKS, PROJECTS, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] tracking-wide uppercase">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1.5 text-foreground/85">
            {s}
          </span>
          {i < steps.length - 1 ? <span className="text-primary">→</span> : null}
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <Reveal as="article" delay={i * 90} className="card-surface group rounded-2xl p-6 sm:p-9">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <p className="mono-label">
            {project.index} — {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
        </div>
        <span className="shrink-0 font-mono text-3xl text-border-strong sm:text-5xl">
          {project.index}
        </span>
      </div>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-surface-2/50 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
          >
            {t}
          </li>
        ))}
      </ul>

      {project.flow ? (
        <div className="mt-8 rounded-xl border border-border bg-background/40 p-5">
          <p className="mono-label mb-3">Workflow</p>
          <Flow steps={project.flow} />
        </div>
      ) : null}

      {project.features ? (
        <ul className="mt-7 grid gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-primary">—</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.highlight ? (
        <p className="mt-7 inline-block rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
          {project.highlight}
        </p>
      ) : null}

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
        >
          {project.cta} ↗
        </Link>
        {project.hasGithub ? (
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader label="02 / Selected Work" title="Things I've actually built." />
        <div className="mt-14 grid gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
