import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { businesses, company } from "@/data/site";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/news", label: "News & Updates" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
] as const;

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "X", Icon: Twitter },
  { label: "Facebook", Icon: Facebook },
  { label: "YouTube", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="surface-deep mt-24">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            [Placeholder] A short company description goes here — infrastructure development,
            construction and environmental services delivered across India.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (placeholder link)`}
                className="grid size-9 place-items-center rounded-md border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Business areas">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Business Areas</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {businesses.slice(0, 6).map((b) => (
              <li key={b.slug}>
                <Link
                  to="/businesses"
                  hash={b.slug}
                  className="text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.phone}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ramky Infrastructure [placeholder entity name]. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
