export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  statusNote: string;
  badge?: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface RiyadhRegion {
  name: string;
  slug: string;
  neighborhoods: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}
