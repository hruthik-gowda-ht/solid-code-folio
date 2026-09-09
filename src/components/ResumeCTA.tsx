import { LINKS } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ResumeCTA() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Interested in what I can build?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Let&apos;s talk about software, products, and problems worth solving.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.resume}
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Resume
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              GitHub ↗
            </a>
            <a
              href={LINKS.linkedin}
              className="rounded-md border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
