import { LINKS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="min-w-0 truncate text-sm text-muted-foreground">© 2026 Hruthik Gowda</p>
          <nav aria-label="Footer" className="flex shrink-0 gap-5 text-sm">
            <a href={LINKS.github} target="_blank" rel="noreferrer noopener" className="text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href={LINKS.linkedin} className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
            <a href={`mailto:${LINKS.email}`} className="text-muted-foreground hover:text-foreground">
              Email
            </a>
          </nav>
        </div>
        <p className="mono-label">Built with curiosity and a lot of debugging.</p>
      </div>
    </footer>
  );
}
