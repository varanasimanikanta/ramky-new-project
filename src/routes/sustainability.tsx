import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Recycle, Droplets, Sun, HardHat, Users, HeartHandshake, Factory } from "lucide-react";
import envImage from "@/assets/project-environment.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Environmental responsibility, sustainable construction, waste and water management, renewable energy, safety, community development and CSR.",
      },
      { property: "og:title", content: "Sustainability — Ramky Infrastructure" },
      {
        property: "og:description",
        content: "How we build responsibly: environment, safety, community and CSR commitments.",
      },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: Sustainability,
});

const pillars = [
  { icon: Leaf, title: "Environmental Responsibility", text: "[Placeholder] Impact assessments, emissions monitoring and habitat protection on every site." },
  { icon: Factory, title: "Sustainable Construction", text: "[Placeholder] Low-carbon materials, reuse of aggregates and efficient site logistics." },
  { icon: Recycle, title: "Waste Management", text: "[Placeholder] Segregation, recycling and responsible disposal across projects and facilities." },
  { icon: Droplets, title: "Water Conservation", text: "[Placeholder] Recycling of construction water, rainwater harvesting and reuse systems." },
  { icon: Sun, title: "Renewable Energy", text: "[Placeholder] Solar installations and progressive replacement of diesel-powered site energy." },
  { icon: HardHat, title: "Employee Safety", text: "[Placeholder] Zero-harm targets, mandatory training and independent safety audits." },
  { icon: Users, title: "Community Development", text: "[Placeholder] Local employment, skills training and infrastructure support near project sites." },
  { icon: HeartHandshake, title: "CSR Initiatives", text: "[Placeholder] Education, healthcare and sanitation programmes run with local partners." },
];

const metrics = [
  { label: "Waste Recycled (%)", value: 65, suffix: "%" },
  { label: "Water Reused (ML/yr)", value: 120, suffix: "+" },
  { label: "Renewable Capacity (kW)", value: 850, suffix: "+" },
  { label: "Safety Training Hours", value: 40000, suffix: "+" },
];

function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Building responsibly, for people and the planet"
        description="[Placeholder] Summarise the sustainability strategy, governance and targets. Replace with verified ESG content."
      />

      <section className="surface-deep">
        <div className="container-page py-14">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90}>
                <dd className="font-display text-4xl font-bold text-accent">
                  <StatCounter value={m.value} suffix={m.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-primary-foreground/70">{m.label} (placeholder)</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Our focus areas" title="Eight commitments guiding delivery" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Card className="card-lift h-full">
                <CardContent className="pt-6">
                  <p.icon className="size-7 text-accent" aria-hidden="true" />
                  <h2 className="mt-4 text-base font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={envImage}
              alt="Solar panels and wind turbines beside a recycling facility"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Climate & energy"
              title="Lowering the footprint of construction"
              description="[Placeholder] Explain the energy transition roadmap, measurement approach and reporting cycle."
            />
            <div className="mt-6">
              <PlaceholderNotice />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
