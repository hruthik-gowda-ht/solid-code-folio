import { useState, type FormEvent } from "react";
import { LINKS } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const inputClass =
  "w-full rounded-md border border-border bg-surface-2/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader label="05 / Contact" title="Let's build something useful." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-3">
            {[
              { label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
              { label: "LinkedIn", value: "Add your profile link", href: LINKS.linkedin },
              { label: "GitHub", value: "@hruthik-gowda-ht", href: LINKS.github },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card-surface flex items-center justify-between gap-4 rounded-xl px-5 py-4"
              >
                <span className="mono-label">{c.label}</span>
                <span className="min-w-0 truncate text-sm text-foreground/85">{c.value}</span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={90} className="card-surface rounded-2xl p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mono-label mb-2 block">
                    Name
                  </label>
                  <input id="name" name="name" required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mono-label mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mono-label mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={inputClass}
                  placeholder="What would you like to build?"
                />
              </div>
              <button
                type="submit"
                className="justify-self-start rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
              <p aria-live="polite" className="text-xs text-muted-foreground">
                {sent
                  ? "Thanks — this demo form isn't connected to an email service yet, so please reach out by email in the meantime."
                  : "This form is UI-only for now and ready to be connected to an email service."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
