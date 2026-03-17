export type ServiceCard = {
  title: string;
  description: string;
  accent: string;
};

export type PlatformStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  audience: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export type ComparisonRow = {
  label: string;
  basic: string;
  premium: string;
  enterprise: string;
};
