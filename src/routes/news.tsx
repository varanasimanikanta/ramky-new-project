import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { news } from "@/data/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Company announcements, project milestones, awards, CSR activities, employee achievements and industry updates.",
      },
      { property: "og:title", content: "News & Updates — Ramky Infrastructure" },
      { property: "og:description", content: "The latest announcements and updates from Ramky Infrastructure." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const categories = ["All", ...Array.from(new Set(news.map((n) => n.category)))];

function News() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? news : news.filter((n) => n.category === active);

  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="Announcements, milestones and recognition"
        description="Company news, project updates, awards and community initiatives. All entries below are placeholders."
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter news by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={i * 70}>
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
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{n.category}</Badge>
                    <time dateTime={n.date} className="text-xs text-muted-foreground">
                      {new Date(n.date).toLocaleDateString("en-IN", { dateStyle: "medium" })}
                    </time>
                  </div>
                  <h2 className="mt-3 text-base font-semibold">{n.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <PlaceholderNotice />
        </div>
      </section>
    </>
  );
}
