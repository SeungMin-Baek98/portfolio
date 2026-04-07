export type NavigationItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type HeroContent = {
  name: string;
  role: string;
  headline: string;
  description: string;
  ctas: LinkItem[];
  highlights: HeroHighlight[];
};

export type Strength = {
  title: string;
  summary: string;
  detail: string;
};

export type TechStackGroup = {
  category: string;
  items: string[];
};

export type DetailSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type TechReason = {
  name: string;
  reason: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  period: string;
  role: string;
  impact: string;
  technologies: string[];
  featured: boolean;
  links: LinkItem[];
  detail: {
    overview: string;
    problem: DetailSection;
    solution: DetailSection;
    result: DetailSection;
    techStack: TechReason[];
  };
};

export type AboutSection = {
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export type ContactContent = {
  title: string;
  description: string;
  items: ContactItem[];
  note: string;
};
