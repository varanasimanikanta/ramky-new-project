import projectRoad from "@/assets/project-road.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectEnvironment from "@/assets/project-environment.jpg";
import projectUrban from "@/assets/project-urban.jpg";

/**
 * All site content lives here so it can be edited in one place.
 * NOTE: every value below is PLACEHOLDER content, not verified company data.
 */

export const company = {
  name: "Ramky Infrastructure",
  tagline: "Building Infrastructure. Creating a Better Future.",
  address: "[Placeholder] Corporate Office Address, Hyderabad, Telangana, India",
  phone: "[Placeholder phone number]",
  email: "[placeholder@example.com]",
  careersEmail: "[careers-placeholder@example.com]",
  mapQuery: "Hyderabad, Telangana, India",
};

export const stats = [
  { label: "Years of Experience", value: 30, suffix: "+" },
  { label: "Major Projects", value: 250, suffix: "+" },
  { label: "Cities Served", value: 60, suffix: "+" },
  { label: "Employees", value: 5000, suffix: "+" },
  { label: "Infrastructure Delivered (km)", value: 1200, suffix: "+" },
];

export type Business = {
  slug: string;
  title: string;
  icon: string;
  description: string;
};

export const businesses: Business[] = [
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    icon: "Building2",
    description:
      "[Placeholder] End-to-end development of large-scale public and private infrastructure assets, from concept to commissioning.",
  },
  {
    slug: "construction",
    title: "Construction",
    icon: "HardHat",
    description:
      "[Placeholder] Civil and structural construction delivered with modern methods, strict quality control and on-time handover.",
  },
  {
    slug: "urban-development",
    title: "Urban Development",
    icon: "Landmark",
    description:
      "[Placeholder] Integrated townships, civic amenities and smart-city works planned around liveability and long-term growth.",
  },
  {
    slug: "water-wastewater",
    title: "Water & Wastewater Management",
    icon: "Droplets",
    description:
      "[Placeholder] Water treatment, sewage networks and reuse systems engineered for reliability and regulatory compliance.",
  },
  {
    slug: "roads-transportation",
    title: "Roads & Transportation",
    icon: "Route",
    description:
      "[Placeholder] Highways, expressways, flyovers and urban mobility corridors built to national standards.",
  },
  {
    slug: "environmental-services",
    title: "Environmental Services",
    icon: "Leaf",
    description:
      "[Placeholder] Waste management, remediation and environmental compliance services for industry and municipalities.",
  },
  {
    slug: "real-estate",
    title: "Real Estate Development",
    icon: "Home",
    description:
      "[Placeholder] Residential and commercial developments designed for quality, safety and lasting value.",
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: "Roads" | "Buildings" | "Water" | "Environmental" | "Urban Development";
  status: "Completed" | "Ongoing" | "Upcoming";
  summary: string;
  image: string;
  client: string;
  value: string;
  duration: string;
  scope: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "expressway-corridor-phase-1",
    name: "[Placeholder] Expressway Corridor — Phase I",
    location: "[Placeholder] Telangana, India",
    category: "Roads",
    status: "Ongoing",
    summary:
      "[Placeholder] Multi-lane access-controlled corridor improving regional freight and passenger movement.",
    image: projectRoad,
    client: "[Placeholder client / authority]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Earthwork and pavement construction",
      "[Placeholder] Major and minor bridges",
      "[Placeholder] Road safety and signage works",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
  {
    slug: "municipal-water-treatment-plant",
    name: "[Placeholder] Municipal Water Treatment Plant",
    location: "[Placeholder] Maharashtra, India",
    category: "Water",
    status: "Completed",
    summary:
      "[Placeholder] Treatment and distribution facility supplying safe drinking water to a growing urban population.",
    image: projectWater,
    client: "[Placeholder municipal corporation]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Intake and pumping stations",
      "[Placeholder] Treatment units and clarifiers",
      "[Placeholder] Operation and maintenance",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
  {
    slug: "corporate-campus-development",
    name: "[Placeholder] Corporate Campus Development",
    location: "[Placeholder] Karnataka, India",
    category: "Buildings",
    status: "Ongoing",
    summary:
      "[Placeholder] Green-rated commercial campus with high-rise office blocks and integrated amenities.",
    image: projectBuilding,
    client: "[Placeholder private client]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Structural and civil works",
      "[Placeholder] MEP installation",
      "[Placeholder] Landscaping and external development",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
  {
    slug: "integrated-waste-management-facility",
    name: "[Placeholder] Integrated Waste Management Facility",
    location: "[Placeholder] Tamil Nadu, India",
    category: "Environmental",
    status: "Completed",
    summary:
      "[Placeholder] Waste processing and renewable energy facility supporting circular-economy targets.",
    image: projectEnvironment,
    client: "[Placeholder authority]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Processing and segregation lines",
      "[Placeholder] Landfill engineering",
      "[Placeholder] Renewable energy integration",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
  {
    slug: "integrated-township",
    name: "[Placeholder] Integrated Township",
    location: "[Placeholder] Andhra Pradesh, India",
    category: "Urban Development",
    status: "Upcoming",
    summary:
      "[Placeholder] Planned township with residential clusters, civic infrastructure and green public spaces.",
    image: projectUrban,
    client: "[Placeholder development authority]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Master planning",
      "[Placeholder] Internal roads and utilities",
      "[Placeholder] Community facilities",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
  {
    slug: "urban-sewerage-network",
    name: "[Placeholder] Urban Sewerage Network",
    location: "[Placeholder] Gujarat, India",
    category: "Water",
    status: "Ongoing",
    summary:
      "[Placeholder] City-wide sewerage network upgrade with pumping stations and treatment capacity.",
    image: projectWater,
    client: "[Placeholder municipal corporation]",
    value: "[Placeholder contract value]",
    duration: "[Placeholder duration]",
    scope: [
      "[Placeholder] Pipeline laying",
      "[Placeholder] Pumping stations",
      "[Placeholder] Treatment plant upgrade",
    ],
    description:
      "[Placeholder project description] Replace this text with the verified project narrative, milestones and outcomes.",
  },
];

export const projectCategories = [
  "All",
  "Roads",
  "Buildings",
  "Water",
  "Environmental",
  "Urban Development",
] as const;

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: "JOB-001",
    title: "[Placeholder] Project Manager — Highways",
    department: "Roads & Transportation",
    location: "Hyderabad",
    experience: "10+ years",
    type: "Full-time",
    description: "[Placeholder] Lead delivery of highway packages including planning, cost and quality control.",
  },
  {
    id: "JOB-002",
    title: "[Placeholder] Site Engineer — Civil",
    department: "Construction",
    location: "Bengaluru",
    experience: "2-5 years",
    type: "Full-time",
    description: "[Placeholder] Supervise site execution, quality checks and daily progress reporting.",
  },
  {
    id: "JOB-003",
    title: "[Placeholder] Process Engineer — Water",
    department: "Water & Wastewater",
    location: "Pune",
    experience: "5-8 years",
    type: "Full-time",
    description: "[Placeholder] Design and commission treatment processes for municipal water projects.",
  },
  {
    id: "JOB-004",
    title: "[Placeholder] EHS Officer",
    department: "Safety & Sustainability",
    location: "Chennai",
    experience: "3-6 years",
    type: "Full-time",
    description: "[Placeholder] Drive environment, health and safety compliance across project sites.",
  },
  {
    id: "JOB-005",
    title: "[Placeholder] HR Business Partner",
    department: "Human Resources",
    location: "Hyderabad",
    experience: "6-9 years",
    type: "Full-time",
    description: "[Placeholder] Partner with business units on talent, engagement and workforce planning.",
  },
  {
    id: "JOB-006",
    title: "[Placeholder] Graduate Engineer Trainee",
    department: "Construction",
    location: "Multiple locations",
    experience: "0-1 years",
    type: "Trainee",
    description: "[Placeholder] Structured 12-month training programme across live infrastructure sites.",
  },
];

export const departments = [
  "All Departments",
  ...Array.from(new Set(jobs.map((j) => j.department))),
];
export const jobLocations = ["All Locations", ...Array.from(new Set(jobs.map((j) => j.location)))];
export const experienceLevels = ["Any Experience", "0-1 years", "2-5 years", "5-8 years", "10+ years"];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    slug: "new-highway-package-awarded",
    title: "[Placeholder] New highway package awarded",
    date: "2026-08-12",
    category: "Project Announcement",
    excerpt: "[Placeholder] Summary of a newly awarded roads package. Replace with verified announcement text.",
    image: projectRoad,
  },
  {
    slug: "water-plant-milestone",
    title: "[Placeholder] Water treatment plant reaches key milestone",
    date: "2026-07-02",
    category: "Project Milestone",
    excerpt: "[Placeholder] Summary of a project milestone update. Replace with verified content.",
    image: projectWater,
  },
  {
    slug: "sustainability-award",
    title: "[Placeholder] Recognised for sustainable construction practices",
    date: "2026-06-18",
    category: "Award",
    excerpt: "[Placeholder] Summary of an award or recognition. Replace with verified content.",
    image: projectEnvironment,
  },
  {
    slug: "csr-school-programme",
    title: "[Placeholder] CSR programme supports local schools",
    date: "2026-05-27",
    category: "CSR",
    excerpt: "[Placeholder] Summary of a community initiative. Replace with verified content.",
    image: projectUrban,
  },
  {
    slug: "employee-excellence-awards",
    title: "[Placeholder] Employee excellence awards announced",
    date: "2026-04-09",
    category: "People",
    excerpt: "[Placeholder] Summary of an internal recognition programme. Replace with verified content.",
    image: projectBuilding,
  },
  {
    slug: "industry-outlook",
    title: "[Placeholder] Industry outlook: infrastructure investment trends",
    date: "2026-03-15",
    category: "Industry Update",
    excerpt: "[Placeholder] Summary of an industry commentary piece. Replace with verified content.",
    image: projectRoad,
  },
];

export const milestones = [
  { year: "[Year]", title: "Company founded", text: "[Placeholder] Origins of the business and first projects." },
  { year: "[Year]", title: "Expansion into water infrastructure", text: "[Placeholder] Entry into water and wastewater delivery." },
  { year: "[Year]", title: "National footprint", text: "[Placeholder] Operations extended across multiple states." },
  { year: "[Year]", title: "Environmental services division", text: "[Placeholder] Launch of dedicated environmental capability." },
  { year: "[Year]", title: "Sustainability commitments", text: "[Placeholder] Formal ESG and safety commitments adopted." },
  { year: "[Year]", title: "Today", text: "[Placeholder] Current scale, capability and forward strategy." },
];
