import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="mono-label">{label}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
      {children ? (
        <div className="mt-5 text-base leading-relaxed text-muted-foreground">{children}</div>
      ) : null}
    </Reveal>
  );
}
