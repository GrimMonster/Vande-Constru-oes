export interface WorkMedia {
  id: string;
  driveId: string;
  title: string;
  category: string;
  location: string;
  thumbnailUrl: string;
  embedUrl: string;
  originalUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'residencial' | 'edificios' | 'interiores' | 'corporativo';
  area: string; // e.g. "1.200 m²"
  location: string; // e.g. "Alphaville, SP"
  year: string;
  description: string;
  imageUrl: string;
  secondaryImages?: string[];
  specs: {
    structure: string;
    timeline: string;
    highlight: string;
  };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Layers' | 'PenTool' | 'ShieldCheck' | 'Cpu' | 'Compass';
  deliverables: string[];
  span?: string; // CSS grid span class
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarUrl?: string;
  projectRef: string;
}

export interface AiBriefResult {
  title: string;
  estimatedInvestment: string;
  structuralHighlight: string;
  sustainabilityFactor: string;
  executionTimeline: string;
  recommendedMaterials: string[];
  curatorMessage: string;
}
