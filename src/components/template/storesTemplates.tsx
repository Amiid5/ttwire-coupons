import AboutCard from "../aboutCard";
import BannerSection from "../bannerSection";
import ConsCard from "../consCard";
import { CouponCard } from "../coupons";
import FaqCard from "../faqCard";
import ProsCard from "../prosCard";
import QuickStatsCard from "../quickStatsCard";
import SimilarStoresCard from "../similarStores";

function StoresTemplates() {
  return (
    <div className="min-h-screen w-full flex-1 bg-base text-white  ">
      <div>
        <BannerSection />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] max-w-[1440px] gap-6 mx-auto pt-10 pb-10 px-2 lg:px-2 ">
        <aside className="flex flex-col gap-6 h-full ">
          <AboutCard />
          <QuickStatsCard />
          <SimilarStoresCard />
          <ProsCard />
          <ConsCard />
        </aside>
        <main className="flex flex-col">
          <CouponCard />
          <FaqCard />
        </main>
      </div>
    </div>
  );
}

export default StoresTemplates;
