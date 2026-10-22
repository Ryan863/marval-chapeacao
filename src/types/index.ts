export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  highlights: string[];
  image: string;
  waMessage: string;
  featured?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  vehicle: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  tradeName: string;
  corporateName: string;
  tagline: string;
  foundationYear: number;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    fullFormatted: string;
    mapsSearchQuery: string;
    mapsDirectionsUrl: string;
  };
  openingHours: {
    weekdays: string;
    weekend: string;
  };
  googleRating: {
    score: number;
    totalReviews: number;
    badge: string;
  };
}
