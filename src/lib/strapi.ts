const BASE = "https://ambitious-heart-279d249420.strapiapp.com/api";

const COUPON_FIELDS = [
  "populate[coupons][fields][0]=code",
  "populate[coupons][fields][1]=title",
  "populate[coupons][fields][2]=type",
  "populate[coupons][fields][3]=description",
  "populate[coupons][fields][4]=discount_amount",
  "populate[coupons][fields][5]=discount_label",
  "populate[coupons][fields][6]=is_verified",
  "populate[coupons][fields][7]=is_exclusive",
  "populate[coupons][fields][8]=expiry_status",
  "populate[coupons][fields][9]=expiry_date",
  "populate[coupons][fields][10]=starts_at",
  "populate[coupons][fields][11]=success_rate",
  "populate[coupons][fields][12]=sort_order",
  "populate[coupons][fields][13]=popularity_tag",
  "populate[coupons][fields][14]=url",
  "populate[coupons][fields][15]=usage_count_text",
  "populate[coupons][fields][16]=conditions_tag",
  "populate[coupons][fields][17]=anchor",
  "populate[coupons][fields][18]=meta_title",
  "populate[coupons][fields][19]=meta_description",
  "populate[coupons][fields][20]=canonical_url",
].join("&");

const COMPONENTS = [
  "populate[banner_section][populate][media]=*",
  "populate[about_card]=*",
  "populate[seo]=*",
  "populate[pros_card]=*",
  "populate[cons_card]=*",
  "populate[faq_card][populate][questions]=*",
  "populate[quick_stats_card]=*",
].join("&");

const FULL_POPULATE = `${COUPON_FIELDS}&${COMPONENTS}`;

// All stores
export const getAllStoresFull = async () => {
  const res = await fetch(`${BASE}/stores?${FULL_POPULATE}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
};

export const getAllStores = async () => {
  const baseQuery = `fields[0]=name&fields[1]=slug&fields[2]=url&fields[3]=logo_url&fields[4]=category&fields[5]=subcategory&fields[6]=store_status&fields[7]=rating_score&fields[8]=rating_count&fields[9]=last_verified_at&fields[10]=h1_title&populate[banner_section][fields][0]=coupons_count&populate[banner_section][fields][1]=rating_score&populate[banner_section][fields][2]=rating_count&populate[banner_section][fields][3]=city&pagination[pageSize]=25`;

  // Fetch page 1 first to get total pages
  const first = await fetch(`${BASE}/stores?${baseQuery}&pagination[page]=1`, {
    next: { revalidate: 3600 },
  }).then((r) => r.json());

  const totalPages = first.meta.pagination.pageCount;

  // If only one page return immediately
  if (totalPages === 1) return first;

  // Fetch all remaining pages in parallel
  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) =>
      fetch(`${BASE}/stores?${baseQuery}&pagination[page]=${i + 2}`, {
        next: { revalidate: 3600 },
      }).then((r) => r.json()),
    ),
  );

  // Merge everything into one response
  return {
    data: [...first.data, ...rest.flatMap((r) => r.data)],
    meta: first.meta,
  };
};

// Single store by slug
export const getStoreBySlug = async (slug: string) => {
  const res = await fetch(
    `${BASE}/stores?filters[slug][$eq]=${slug}&${FULL_POPULATE}`,
    {
      next: { revalidate: 3600 },
    },
  );
  return res.json();
};

// Similar stores by subcategory
export const getSimilarStores = async (
  subcategory: string,
  excludeSlug: string,
) => {
  const res = await fetch(
    `${BASE}/stores?filters[subcategory][$eq]=${subcategory}&filters[slug][$ne]=${excludeSlug}&fields[0]=name&fields[1]=slug&fields[2]=logo_url&fields[3]=rating_score&fields[4]=rating_count&populate[banner_section][fields][0]=coupons_count&populate[banner_section][fields][1]=city&pagination[limit]=4`,
    { next: { revalidate: 3600 } },
  );
  return res.json();
};
