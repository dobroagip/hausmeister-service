export interface Service {
  id: string;
  title: string;
  iconName: string; // Will map to a Lucide icon
  shortDesc: string;
  longDesc: string;
  category: 'cleaning' | 'gardening' | 'maintenance' | 'emergency';
  pricingBasis: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface ReferenceProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  location: string;
  completedDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  image: string;
  keywords: string[];
}
