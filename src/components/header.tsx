"use client";
import { useState } from "react";
import Link from "next/link";
import NavMenu from "./ui/menu";
import { LuMenu, LuX } from "react-icons/lu";
import { SearchAutocomplete } from "./SearchAutocomplete";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-surface px-4 py-3  border-b border-[#1d2024] ">
      <div
        className="flex max-w-[1440px] lg:mx-auto
    justify-between items-center bg-surface px-4 py-3    w-full">
        {/* Logo */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-white font-bold text-[20px] md:text-[24px] font-heading">
            Tt<span className="text-primary">wire</span>
          </Link>
        </div>

        {/* Nav */}
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Search + hamburger */}
        <div className="flex items-center gap-3">
          <div className="w-[180px] sm:w-[240px] md:w-[300px]">
            <SearchAutocomplete />
          </div>
          <div className="lg:hidden cursor-pointer text-white shrink-0">
            {isOpen ? (
              <LuX onClick={() => setIsOpen(false)} size={24} />
            ) : (
              <LuMenu onClick={() => setIsOpen(true)} size={24} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
