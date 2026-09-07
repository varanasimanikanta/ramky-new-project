import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, CalendarDays, Wallet, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Ramky Infrastructure" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Ramky Infrastructure` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.name} — Ramky Infrastructure` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <section className="relative isolate">
        <img
          src={project.image}
          alt={project.name}
          width={1200}
          height={800}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-20 md:py-28">
          <Button asChild variant="ghost" className="mb-6 px-0 text-primary-foreground hover:bg-transparent">
            <Link to="/projects">
              <ArrowLeft aria-hidden="true" /> Back to projects
            </Link>
          </Button>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
            <Badge variant="secondary">{project.status}</Badge>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold text-primary-foreground md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="size-4 text-accent" aria-hidden="true" /> {project.location}
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Project overview</h2>
            <p className="mt-4 text-muted-foreground">{project.summary}</p>
            <p className="mt-4 text-muted-foreground">{project.description}</p>

            <h3 className="mt-10 text-xl font-semibold">Scope of work</h3>
            <ul className="mt-4 space-y-2">
              {project.scope.map((s) => (
                <li key={s} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PlaceholderNotice />
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-semibold">Project facts</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <Building className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="font-medium">{project.client}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Wallet className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-muted-foreground">Contract value</dt>
                  <dd className="font-medium">{project.value}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-medium">{project.duration}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium">{project.location}</dd>
                </div>
              </div>
            </dl>
            <Button asChild className="mt-6 w-full">
              <Link to="/contact">Enquire about this project</Link>
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}
