import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { EngineeringMindset } from "@/components/EngineeringMindset";
import { Experience } from "@/components/Experience";
import { GitHubSection } from "@/components/GitHubSection";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const TITLE = "Hruthik Gowda — Software Developer & Engineering Student";
const DESC =
  "Portfolio of Hruthik Gowda: full-stack systems, AI/ML experiments and practical software built with React, Supabase, PostgreSQL and Python.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EngineeringMindset />
        <Experience />
        <GitHubSection />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
