import AllStoresCard from "@/components/allStoresCard";
import FiltersUi from "@/components/filtersUi";
import StoresHeader from "@/components/storesHeader";
import { StoresPageReset } from "@/components/StoresPageReset";

function StoresList() {
  return (
    <div>
      <StoresPageReset />
      <StoresHeader />
      <FiltersUi />
      <AllStoresCard />
    </div>
  );
}

export default StoresList;
