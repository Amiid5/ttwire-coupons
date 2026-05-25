export interface SimilarStore {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  rating_score: number;
  rating_count: number;
  coupons_count: string;
  city: string;
}

interface AboutCard {
  id: number;
  title: string;
  description: string;
}

interface MediaLinks {
  id: number;
  twitter: string;
  instagram: string;
  facebook: string;
  discord: string;
}

interface BannerSection {
  id: number;
  coupons_count: string;
  rating_score: number;
  rating_count: number;
  ceo: string;
  founded: string;
  location: string;
  established: string;
  media: MediaLinks;
  city: string;
}

export interface SeoFields {
  id: number;
  h1_title: string;
  meta_title: string;
  meta_description: string;
  keywords: string[];
  og_image: string;
  og_title: string;
  og_description: string;
  og_type: string;
  og_url: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  twitter_site: string;
  canonical_url: string;
  robots: string;
  schema_markup: {
    url: string;
    logo: string;
    name: string;
    "@type": string;
    sameAs: string[];
    address: {
      "@type": string;
      addressCountry: string;
      addressLocality: string;
    };
    "@context": string;
    description: string;
    foundingDate: string;
    aggregateRating: {
      "@type": string;
      bestRating: string;
      ratingValue: string;
      reviewCount: string;
    };
  };
}

export interface Coupon {
  id: number;
  documentId: string;
  code: string | null;
  type: "code" | "deal";
  title: string;
  description: string;
  discount_amount: string;
  discount_label: string;
  is_verified: boolean;
  is_exclusive: boolean | null;
  expiry_status: "active" | "limited" | "expired";
  expiry_date: string;
  popularity_tag: string;
  url: string;
  usage_count_text: string;
  conditions_tag: string;
  anchor: string;
  meta_title: string;
  meta_description: string;
  canonical_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  starts_at: string;
  success_rate: number;
  sort_order: number;
}

interface ProsCard {
  id: number;
  title: string;
  pros: string[];
}

interface ConsCard {
  id: number;
  title: string;
  cons: string[];
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqCard {
  id: number;
  title: string;
  questions: FaqItem[];
}

interface QuickStatsCard {
  id: number;
  title: string;
  rating_score: number;
  rating_count: number;
  active_coupons: string;
  status: "active" | "inactive";
  last_verified: string;
  success_rate: number;
}

export interface AllStoresTypes {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  url: string;
  logo_url: string;
  category: string;
  subcategory: string;
  store_status: "active" | "inactive";
  rating_score: number;
  rating_count: number;
  last_verified_at: string;
  h1_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  banner_section: {
    coupons_count: string;
    rating_score: number;
    rating_count: number;
    city: string;
  };
}

export interface AllStores {
  data: AllStoresTypes[];
}

export interface Store {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  url: string;
  logo_url: string;
  category: string;
  subcategory: string;
  store_status: "active" | "inactive";
  rating_score: number;
  rating_count: number;
  last_verified_at: string;
  h1_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  about_card: AboutCard;
  seo: SeoFields;
  banner_section: BannerSection;
  pros_card: ProsCard;
  cons_card: ConsCard;
  faq_card: FaqCard;
  quick_stats_card: QuickStatsCard;
  coupons: Coupon[];
}

export interface StoresResponse {
  data: Store[];
}
