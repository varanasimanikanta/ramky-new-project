import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import teamImage from "@/assets/team-engineers.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { milestones } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Company overview, vision, mission, core values, leadership, milestones and our quality and safety commitment.",
      },
      { property: "og:title", content: "About Us — Ramky Infrastructure" },
      {
        property: "og:description",
        content: "Our vision, mission, values, leadership and milestones in infrastructure development.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "[Placeholder] Doing the right thing, transparently, on every project." },
  { icon: Target, title: "Excellence", text: "[Placeholder] Engineering rigour and disciplined execution." },
  { icon: HeartHandshake, title: "Responsibility", text: "[Placeholder] Care for people, communities and the environment." },
  { icon: Compass, title: "Innovation", text: "[Placeholder] Better methods, materials and digital delivery." },
];

const leadership = [
  { name: "[Placeholder Name]", role: "[Placeholder] Chairman" },
  { name: "[Placeholder Name]", role: "[Placeholder] Managing Director" },
  { name: "[Placeholder Name]", role: "[Placeholder] Chief Financial Officer" },
  { name: "[Placeholder Name]", role: "[Placeholder] Chief Human Resources Officer" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An infrastructure company built on engineering discipline"
        description="[Placeholder] Introduce the organisation, its history and the sectors it serves. Replace this text with verified company information."
      />

      <section className="container-page py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Company overview" title="Who we are" />
            <p className="mt-4 text-muted-foreground">
              [Placeholder] Describe the company&apos;s scale, geographic footprint, delivery capability and
              the client segments it serves.
            </p>
            <p className="mt-4 text-muted-foreground">
              [Placeholder] Add supporting detail about the operating model, in-house engineering strength and
              plant and machinery capability.
            </p>
            <div className="mt-6">
              <PlaceholderNotice />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={teamImage}
              alt="Project team on site"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="eyebrow">Vision</p>
                <p className="mt-3 text-lg">
                  [Placeholder vision statement] To be recognised as a trusted partner in building sustainable
                  infrastructure.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="eyebrow">Mission</p>
                <p className="mt-3 text-lg">
                  [Placeholder mission statement] To deliver quality infrastructure safely, on time and with
                  respect for people and the environment.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Core values" title="The principles behind our work" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <Card className="card-lift h-full">
                <CardContent className="pt-6">
                  <v.icon className="size-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="Our growth over the years" />
          <ol className="relative mt-12 border-l border-border pl-6">
            {milestones.map((m, i) => (
              <Reveal key={i} as="li" delay={i * 70} className="mb-10 last:mb-0">
                <span
                  className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-background bg-accent"
                  aria-hidden="true"
                />
                <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Leadership" title="Guiding the organisation" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((l, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="card-lift h-full">
                <CardContent className="pt-6">
                  <div className="grid size-14 place-items-center rounded-full bg-secondary font-display text-lg font-bold text-muted-foreground">
                    ?
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{l.name}</h3>
                  <p className="text-sm text-muted-foreground">{l.role}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="surface-deep rounded-xl p-10">
          <SectionHeading eyebrow="Quality & safety" title="Our commitment on every site" />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "[Placeholder] Documented quality management systems and independent testing.",
              "[Placeholder] Zero-harm safety culture with training, audits and incident reporting.",
              "[Placeholder] Compliance with applicable Indian standards and client specifications.",
            ].map((t, i) => (
              <p key={i} className="text-sm text-primary-foreground/80">
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
