import StoreInitializer from "@/components/initializeres/storeInitializer";
import SimilarInitializer from "@/components/initializeres/SimilarInitializer";
import { getStoreBySlug, getSimilarStores } from "@/lib/strapi";
import {
  Store,
  StoresResponse,
  SimilarStore,
} from "../../../lib/types/storeTypes";
import StoresTemplates from "@/components/template/storesTemplates";

type Params = {
  id: string;
};

export default async function FirmPage({ params }: { params: Params }) {
  const { id } = await params;

  const data: StoresResponse = await getStoreBySlug(id);
  const store: Store = data.data[0];

  const similarData = await getSimilarStores(store.subcategory, store.slug);
  const similar: SimilarStore[] = similarData.data.map((s: Store) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    logo_url: s.logo_url,
    rating_score: s.rating_score,
    rating_count: s.rating_count,
    coupons_count: s.banner_section?.coupons_count ?? "0",
    city: s.banner_section?.city,
  }));

  return (
    <main>
      <StoreInitializer data={store} />
      <SimilarInitializer data={similar} />
      <StoresTemplates />
    </main>
  );
}
