"use client";

import Image from "next/image";
import { useState } from "react";
import img from "@/assets/place.png";

export default function CategorySection({ categories = [] }) {
  const [show, setShow] = useState(false);
  // console.log(categories);
  const displayedCategories = show ? categories : categories.slice(0, 6);

  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-12">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-semibold">Categories</h1>

        <button
          onClick={() => setShow((prev) => !prev)}
          className="bg-[#E7FAFE] px-4 py-2 rounded-xl font-semibold"
        >
          {show ? "Show less" : "View all categories"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10">
        {displayedCategories.map((item, index) => (
          <div
            key={index}
            className={`relative w-48 h-44 ${index % 2 === 0 ? "bg-[#F6EFEB]" : "bg-[#EEF3F8]"} rounded-[40px] flex items-end justify-center pb-6 `}
          >
            <div
              className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-3 `}
            >
              <Image
                src={img}
                alt={item}
                // width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-lg font-semibold capitalize">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
