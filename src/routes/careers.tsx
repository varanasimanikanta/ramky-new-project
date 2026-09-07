import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Briefcase, MapPin, GraduationCap, TrendingUp, HeartPulse, Award } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { departments, experienceLevels, jobLocations, jobs } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Ramky Infrastructure" },
      {
        name: "description",
        content:
          "Build your career while building India's future. Explore openings across engineering, project delivery and corporate functions.",
      },
      { property: "og:title", content: "Careers — Ramky Infrastructure" },
      { property: "og:description", content: "Current job openings, benefits, growth and learning at Ramky Infrastructure." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const reasons = [
  { icon: Briefcase, title: "Why Work With Us", text: "[Placeholder] Nation-scale projects, strong engineering culture and long-term stability." },
  { icon: HeartPulse, title: "Employee Benefits", text: "[Placeholder] Health cover, insurance, site allowances and family support programmes." },
  { icon: TrendingUp, title: "Career Growth", text: "[Placeholder] Clear career paths, internal mobility and merit-based progression." },
  { icon: GraduationCap, title: "Learning & Development", text: "[Placeholder] Technical academies, certifications and leadership development." },
];

function Careers() {
  const [title, setTitle] = useState("");
  const [dept, setDept] = useState(departments[0]);
  const [loc, setLoc] = useState(jobLocations[0]);
  const [exp, setExp] = useState(experienceLevels[0]);
  const [query, setQuery] = useState({ title: "", dept: departments[0], loc: jobLocations[0], exp: experienceLevels[0] });

  const results = useMemo(
    () =>
      jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(query.title.toLowerCase()) &&
          (query.dept === departments[0] || j.department === query.dept) &&
          (query.loc === jobLocations[0] || j.location === query.loc) &&
          (query.exp === experienceLevels[0] || j.experience === query.exp),
      ),
    [query],
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career While Building India's Future."
        description="Join teams delivering roads, water systems, buildings and environmental infrastructure across the country."
      />

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <Card className="card-lift h-full">
                <CardContent className="pt-6">
                  <r.icon className="size-7 text-accent" aria-hidden="true" />
                  <h2 className="mt-4 text-base font-semibold">{r.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16" id="openings">
        <div className="container-page">
          <SectionHeading eyebrow="Current openings" title="Search our job opportunities" />

          <form
            className="mt-8 grid gap-4 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-5"
            onSubmit={(e) => {
              e.preventDefault();
              setQuery({ title, dept, loc, exp });
            }}
          >
            <div className="md:col-span-2">
              <Label htmlFor="job-title">Job title</Label>
              <Input
                id="job-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Site Engineer"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="job-dept">Department</Label>
              <Select value={dept} onValueChange={setDept}>
                <SelectTrigger id="job-dept" className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="job-loc">Location</Label>
              <Select value={loc} onValueChange={setLoc}>
                <SelectTrigger id="job-loc" className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {jobLocations.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="job-exp">Experience</Label>
              <Select value={exp} onValueChange={setExp}>
                <SelectTrigger id="job-exp" className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((x) => (
                    <SelectItem key={x} value={x}>
                      {x}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-5">
              <Button type="submit" className="w-full md:w-auto">
                <Search aria-hidden="true" /> Search jobs
              </Button>
            </div>
          </form>

          <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
            Showing {results.length} of {jobs.length} openings (placeholder listings).
          </p>

          <ul className="mt-4 space-y-4">
            {results.map((j, i) => (
              <Reveal key={j.id} as="li" delay={i * 50}>
                <div className="card-lift flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{j.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{j.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                      <Badge variant="secondary">{j.department}</Badge>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="size-3.5 text-accent" aria-hidden="true" /> {j.location}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Award className="size-3.5 text-accent" aria-hidden="true" /> {j.experience}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Briefcase className="size-3.5 text-accent" aria-hidden="true" /> {j.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() =>
                      toast("Application flow not connected yet", {
                        description: "Add a real application form and email routing before going live.",
                      })
                    }
                  >
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>

          {results.length === 0 && (
            <p className="mt-6 text-muted-foreground">No openings match your search. Try widening the filters.</p>
          )}

          <div className="mt-10">
            <PlaceholderNotice />
          </div>
        </div>
      </section>
    </>
  );
}
