import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LINKS, PROJECTS } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Hruthik Gowda" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Hruthik Gowda`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-10">
      <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
        <p className="mono-label">{label}</p>
        <div className="text-base leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="text-primary">—</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const cs = project.caseStudy;

  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden border-b border-border">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            ← Back to portfolio
          </Link>
          <p className="mono-label mt-10">
            {project.index} — {project.category}
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.05] font-semibold">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{project.description}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface-2/50 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Block label="Problem">{cs.problem}</Block>
        <Block label="Approach">{cs.approach}</Block>
        <Block label="Architecture">
          <ol className="grid gap-2 font-mono text-sm">
            {cs.architecture.map((a, i) => (
              <li key={a} className="flex gap-3">
                <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block label="Key Features">
          <List items={cs.keyFeatures} />
        </Block>
        <Block label="Technology">
          <List items={cs.technology} />
        </Block>
        <Block label="Challenges">
          <List items={cs.challenges} />
        </Block>
        <Block label="Outcome">
          <p className="text-foreground">{cs.outcome}</p>
        </Block>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/"
            hash="projects"
            className="rounded-md border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            All projects
          </Link>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}
