"use client";
import { useStore } from "../store/useStore";
import { MdArrowForwardIos } from "react-icons/md";
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuCalendar, LuUser, LuMapPin, LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/ui/rating";

export default function BannerSection() {
  const firm = useStore((state) => state.stores);
  if (!firm) return null;

  const { banner_section, logo_url, name, url, quick_stats_card } = firm;

  return (
    <section className=" relative flex flex-col overflow-hidden bg-surface  text-white border-b border-b-border ">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className=" max-w-[1400px] w-full flex flex-col gap-6 mx-auto px-4 lg:px-6 py-8 lg:py-10  relative gap-8">
        <div>
          <span className="flex items-center gap-1 font-alt font-normal text-[14px]">
            <Link
              href="/stores"
              target="blank"
              className="hover:text-primary text-content-muted">
              Stores
            </Link>
            <MdArrowForwardIos size={10} className="text-content-muted" />
            <span className="capitalize ">{name}</span>
          </span>
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row md:justify-between  lg:flex-row lg:items-center gap-6">
          <div className="flex flex-col md:flex-row lg:flex-row lg:flex-1 min-w-0 gap-6">
            <div className="overflow-hidden w-[130px] h-[130px] rounded-[10px] shadow-border ">
              <Image
                width={130}
                height={130}
                src={logo_url ?? ""}
                alt={name ?? "store logo"}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <h1 className="capitalize text-3xl lg:text-5xl font-heading font-extrabold">
                  {name}
                </h1>
                <span className="capitalize bg-primary/20 text-[14px] text-primary px-2.5 py-0.5 rounded-full font-heading font-extrabold">
                  {banner_section.coupons_count} coupons
                </span>
              </div>
              <div className="flex gap-2 items-start lg:items-center ">
                <StarRating
                  ratingSize="text-[16px]"
                  starSize="text-[14px]"
                  rating={banner_section.rating_score}
                />
                <span className="text-content-muted font-heading text-[14px] ">
                  ({banner_section.rating_count.toLocaleString()} reviews)
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                <span className="flex items-center gap-2 items-center font-alt capitalize">
                  <LuUser size={16} className="text-primary" />
                  <span className="flex gap-1.5 text-[14px]">
                    <span className="text-content-muted"> CEO: </span>
                    {banner_section.ceo}
                  </span>
                </span>

                <span className="flex items-center gap-2 items-center font-alt capitalize">
                  <LuMapPin size={16} className="text-primary" />
                  <span className="flex gap-1.5 text-[14px]">
                    {banner_section.location}
                  </span>
                </span>
                <span className="flex items-center gap-2 items-center font-alt capitalize">
                  <LuCalendar size={16} className="text-primary" />
                  <span className="flex gap-1.5 text-[14px]">
                    <span className="text-content-muted">Est. </span>
                    {banner_section.established}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-col md:items-end sm:flex-row lg:flex-col gap-3 items-stretch lg:items-end  ">
              <Link href={url} target="blank">
                <button className="flex py-3 w-full justify-center  border cursor-pointer font-bold font-heading border-primary hover:bg-primary hover:text-black text-primary items-center gap-2 px-6 rounded-full">
                  Visit Site <LuExternalLink className="md:mb-1" />{" "}
                </button>
              </Link>
              <div className="flex gap-3 mr-2 md:justify-end justify-center  ">
                <Link
                  target="blank"
                  href={banner_section.media.instagram}
                  className="text-content-muted hover:text-primary cursor-pointer">
                  <FaInstagram />
                </Link>
                <Link
                  target="blank"
                  href={banner_section.media.twitter}
                  className="text-content-muted hover:text-primary cursor-pointer">
                  <FaXTwitter />
                </Link>
                <Link
                  target="blank"
                  href={banner_section.media.facebook}
                  className="text-content-muted hover:text-primary cursor-pointer">
                  <FaFacebook />
                </Link>
                <Link
                  target="blank"
                  href={banner_section.media.discord}
                  className="text-content-muted hover:text-primary cursor-pointer">
                  <FaDiscord />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
