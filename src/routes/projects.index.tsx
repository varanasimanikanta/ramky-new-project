import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { projectCategories, projects } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Explore our project portfolio across roads, buildings, water, environmental and urban development sectors.",
      },
      { property: "og:title", content: "Projects — Ramky Infrastructure" },
      { property: "og:description", content: "A portfolio of infrastructure projects across India." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const [category, setCategory] = useState<string>("All");
  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio built across sectors and states"
        description="Filter the portfolio by sector to see representative projects. All entries below use placeholder content."
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <article className="card-lift flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{p.category}</Badge>
                    <Badge
                      className={
                        p.status === "Completed"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {p.status}
                    </Badge>
                  </div>
                  <h2 className="mt-3 text-base font-semibold">{p.name}</h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5 text-accent" aria-hidden="true" /> {p.location}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                  <Button asChild variant="ghost" className="mt-4 self-start px-0 hover:bg-transparent">
                    <Link to="/projects/$slug" params={{ slug: p.slug }}>
                      View project <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-muted-foreground">No projects in this category yet.</p>
        )}

        <div className="mt-12">
          <PlaceholderNotice />
        </div>
      </section>
    </>
  );
}
