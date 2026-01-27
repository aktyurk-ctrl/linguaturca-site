"use client";

import Link from "next/link";

export default function HeroFormButton() {
  return (
    <Link
      href="#about"
      className="inline-block px-6 py-3 bg-[#009FE3] text-white rounded-full font-semibold text-base hover:bg-[#0084C1] transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Узнать больше о школе
    </Link>
  );
}
