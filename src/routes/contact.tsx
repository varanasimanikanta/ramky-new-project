import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { PlaceholderNotice } from "@/components/site/PlaceholderNotice";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ramky Infrastructure" },
      {
        name: "description",
        content: "Get in touch with Ramky Infrastructure — corporate office address, phone, email and enquiry form.",
      },
      { property: "og:title", content: "Contact Us — Ramky Infrastructure" },
      { property: "og:description", content: "Reach our team for project, partnership and career enquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const fields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", required: false },
  { id: "company", label: "Company", type: "text", required: false },
  { id: "subject", label: "Subject", type: "text", required: true },
] as const;

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our team"
        description="Enquiries about projects, partnerships, procurement or careers. Contact details below are placeholders."
      />

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold">Corporate office</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{company.email}</span>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Office location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>

            <div className="mt-6">
              <PlaceholderNotice text="The map points at a placeholder city. Replace it with the exact office location." />
            </div>
          </div>

          <form
            className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                (e.target as HTMLFormElement).reset();
                toast("Message captured locally", {
                  description: "Connect a backend to actually deliver enquiries to your inbox.",
                });
              }, 600);
            }}
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={f.id === "subject" ? "sm:col-span-2" : ""}>
                  <Label htmlFor={f.id}>
                    {f.label}
                    {f.required && <span className="text-accent"> *</span>}
                  </Label>
                  <Input id={f.id} name={f.id} type={f.type} required={f.required} className="mt-1.5" />
                </div>
              ))}
              <div className="sm:col-span-2">
                <Label htmlFor="message">
                  Message<span className="text-accent"> *</span>
                </Label>
                <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
              </div>
            </div>
            <Button type="submit" disabled={sending} className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Send aria-hidden="true" /> {sending ? "Sending…" : "Submit"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
