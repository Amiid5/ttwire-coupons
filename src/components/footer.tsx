import { LuGithub, LuTwitter, LuInstagram, LuGlobe } from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-surface  p-10  border-t-4 border-t-green-500 font-inter text-white">
      <div className="w-full 2xl:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold font-SpaceGrotesk text-primary">
            Ttwire<span className="text-white">.</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your premier gateway to the best prop firm deals and strategies.
            Empowering traders globally since 2024.
          </p>
          <div className="flex gap-4 mt-2">
            <LuTwitter
              size={18}
              className="text-gray-500 hover:text-accent cursor-pointer transition-all"
            />
            <LuInstagram
              size={18}
              className="text-gray-500 hover:text-accent cursor-pointer transition-all"
            />
            <LuGithub
              size={18}
              className="text-gray-500 hover:text-accent cursor-pointer transition-all"
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-SpaceGrotesk font-bold text-lg uppercase tracking-wider">
            Explore
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400 font-medium">
            <li className="hover:text-myBlue transition-all cursor-pointer">
              Prop Firms
            </li>
            <li className="hover:text-myBlue transition-all cursor-pointer">
              Coupon Codes
            </li>
            <li className="hover:text-myBlue transition-all cursor-pointer">
              Education
            </li>
            <li className="hover:text-myBlue transition-all cursor-pointer">
              Reviews
            </li>
          </ul>
        </div>

        {/* Column 3: Trust/Support */}
        <div className="flex flex-col gap-4">
          <h3 className="font-SpaceGrotesk font-bold text-lg uppercase tracking-wider">
            Support
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400 font-medium">
            <li className="hover:text-white transition-all cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-white transition-all cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white transition-all cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition-all cursor-pointer">
              Affiliate Disclosure
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter/CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="font-SpaceGrotesk font-bold text-lg uppercase tracking-wider">
            Stay Updated
          </h3>
          <div className="flex bg-surfice border border-borderSecondary rounded-xl p-1">
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent text-sm p-2 outline-none w-full"
            />
            <button className="bg-bannerBg text-secondary text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110">
              Join
            </button>
          </div>
          <p className="text-[10px] text-gray-500">
            Get the latest FundingPips discounts direct to your inbox.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600 font-bold uppercase tracking-[0.2em]">
        <span>© 2026 TTWIRE MEDIA GROUP</span>
        <div className="flex items-center gap-2">
          <LuGlobe size={12} />
          <span>English (US)</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
