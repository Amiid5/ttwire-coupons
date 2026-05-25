import BenefitsSection from "@/components/benefitsSection";
import Categories from "@/components/categories";
import CtaComponent from "@/components/ctaComponent";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Stats */}
      <section className="min-h-fit bg-base border-b border-b-border text-white py-8 px-4">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:flex md:justify-around md:items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading">36+</h2>
            <span className="text-[12px] md:text-[14px] text-content-muted">
              Verified brands
            </span>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading">
              247+
            </h2>
            <span className="text-[12px] md:text-[14px] text-content-muted">
              Active coupons
            </span>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading">30k</h2>
            <span className="text-[12px] md:text-[14px] text-content-muted">
              Monthly savers
            </span>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading">14</h2>
            <span className="text-[12px] md:text-[14px] text-content-muted">
              Categories
            </span>
          </div>
        </div>
      </section>

      <Categories />
      <BenefitsSection />
      <CtaComponent />
    </div>
  );
}
