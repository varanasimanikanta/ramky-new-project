import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  HardHat,
  Landmark,
  Droplets,
  Route as RouteIcon,
  Leaf,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { businesses } from "@/data/site";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Our Businesses — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Infrastructure development, construction, urban development, water and wastewater, roads, environmental services and real estate.",
      },
      { property: "og:title", content: "Our Businesses — Ramky Infrastructure" },
      {
        property: "og:description",
        content: "Explore our capabilities across seven infrastructure business areas.",
      },
      { property: "og:url", content: "/businesses" },
    ],
    links: [{ rel: "canonical", href: "/businesses" }],
  }),
  component: Businesses,
});

const icons: Record<string, LucideIcon> = {
  Building2,
  HardHat,
  Landmark,
  Droplets,
  Route: RouteIcon,
  Leaf,
  Home,
};

function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Capabilities across the infrastructure lifecycle"
        description="From planning and construction to operations and environmental management, our business areas cover the full delivery chain."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((b, i) => {
            const Icon = icons[b.icon] ?? Building2;
            return (
              <Reveal key={b.slug} delay={i * 70}>
                <Card id={b.slug} className="card-lift h-full scroll-mt-28">
                  <CardContent className="flex h-full flex-col pt-6">
                    <span className="grid size-12 place-items-center rounded-md bg-secondary">
                      <Icon className="size-6 text-accent" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-lg font-semibold">{b.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.description}</p>
                    <Button asChild variant="ghost" className="mt-4 self-start px-0 hover:bg-transparent">
                      <Link to="/projects">
                        Learn More <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10">
          <PlaceholderNotice />
        </div>
      </section>
    </>
  );
}
