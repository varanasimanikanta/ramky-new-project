import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Leaf, Lightbulb, Users } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import teamImage from "@/assets/team-engineers.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/PageHero";
import { StatCounter } from "@/components/site/StatCounter";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { businesses, news, projects, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramky Infrastructure — Building Infrastructure for a Better Future" },
      {
        name: "description",
        content:
          "Infrastructure development, construction, water, urban and environmental services delivered across India with a focus on quality, safety and sustainability.",
      },
      { property: "og:title", content: "Ramky Infrastructure — Building Infrastructure for a Better Future" },
      {
        property: "og:description",
        content: "Driving sustainable growth through innovation, excellence and world-class infrastructure.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { icon: ShieldCheck, title: "Trust & Safety", text: "[Placeholder] Uncompromising safety systems and audited quality processes on every site." },
  { icon: Lightbulb, title: "Innovation", text: "[Placeholder] Modern construction methods, digital planning and engineering-led delivery." },
  { icon: Leaf, title: "Sustainability", text: "[Placeholder] Lower-impact construction, water stewardship and renewable energy adoption." },
  { icon: Users, title: "People", text: "[Placeholder] A skilled workforce supported by training, growth and community programmes." },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Elevated highway interchange under construction at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-28 md:py-40">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Infrastructure &amp; Development · India</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-primary-foreground md:text-6xl">
              Building Infrastructure. Creating a Better Future.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">
              Driving sustainable growth through innovation, excellence and world-class infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/projects">
                  Explore Our Projects <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Ramky Infrastructure"
              title="An engineering-led partner for nation-building projects"
              description="[Placeholder] Ramky Infrastructure develops, builds and maintains infrastructure across roads, water, urban development, buildings and environmental services. Replace this introduction with the verified company overview."
            />
            <p className="mt-4 max-w-2xl text-muted-foreground">
              [Placeholder] Add a second paragraph describing capability, delivery model and the standards
              the organisation works to.
            </p>
            <Button asChild className="mt-7">
              <Link to="/about">
                Learn More <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={teamImage}
              alt="Engineers reviewing drawings at a construction site"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="surface-deep" aria-labelledby="stats-heading">
        <div className="container-page py-16 md:py-20">
          <h2 id="stats-heading" className="sr-only">
            Company statistics
          </h2>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center lg:text-left">
                <dt className="order-2 mt-2 text-sm text-primary-foreground/70">{s.label}</dt>
                <dd className="font-display text-4xl font-bold text-accent md:text-5xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
          <div className="mt-10 max-w-2xl">
            <p className="text-xs text-primary-foreground/60">
              Figures shown are placeholders and can be edited at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="What we stand for"
          title="Trust, innovation, sustainability and people"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="card-lift h-full border-border/70">
                <CardContent className="pt-6">
                  <p.icon className="size-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Our businesses" title="Capabilities across the infrastructure lifecycle" />
            <Button asChild variant="outline">
              <Link to="/businesses">View all businesses</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.slice(0, 6).map((b, i) => (
              <Reveal key={b.slug} delay={i * 70}>
                <Card className="card-lift h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured projects" title="Delivering infrastructure that lasts" />
          <Button asChild variant="outline">
            <Link to="/projects">All projects</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block h-full overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] card-lift"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                  <h3 className="mt-2 text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="News & updates" title="Latest from Ramky Infrastructure" />
            <Button asChild variant="outline">
              <Link to="/news">All news</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((n, i) => (
              <Reveal key={n.slug} delay={i * 90}>
                <Card className="card-lift h-full overflow-hidden pt-0">
                  <img
                    src={n.image}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {new Date(n.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · {n.category}
                    </p>
                    <h3 className="mt-2 text-base font-semibold">{n.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="surface-deep flex flex-col items-start justify-between gap-6 rounded-xl p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Build your career while building India&apos;s future.
            </h2>
            <p className="mt-2 text-primary-foreground/75">
              Explore open roles across engineering, project delivery and corporate functions.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/careers">
              View Careers <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <PlaceholderNotice />
        </div>
      </section>
    </>
  );
}
