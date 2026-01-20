"use client";

import Image from "next/image";
import { useState } from "react";
import img from "@/assets/place.png";

export default function CategorySection({ categories = [] }) {
  const [show, setShow] = useState(false);
  const displayedCategories = show ? categories : categories.slice(0, 6);

  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-12">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-semibold">Categories</h1>

        <button
          onClick={() => setShow((prev) => !prev)}
          className="bg-[#E7FAFE] px-2 py-2 rounded-xl font-semibold text-sm sm:text-base hover:cursor-pointer"
        >
          {show ? "Show less" : "View all "}
        </button>
      </div>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10 justify-items-center">
        {displayedCategories.map((item, index) => (
          <div
            key={index}
            className={`relative w-48 h-44
                        ${index % 2 === 0 ? "bg-[#F6EFEB]" : "bg-[#EEF3F8]"} 
                        rounded-[40px] flex flex-col items-center justify-end pb-6`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-3">
              <Image
                src={img}
                alt={item}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold capitalize text-center">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="sm:hidden overflow-x-auto py-4 -mx-4 px-4">
        <div className="flex gap-4">
          {displayedCategories.map((item, index) => (
            <div
              key={index}
              className={`relative min-w-30 h-36
                          ${index % 2 === 0 ? "bg-[#F6EFEB]" : "bg-[#EEF3F8]"} 
                          rounded-[30px] flex flex-col items-center justify-end
                          pb-4 pt-6 `}
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-3 shadow-md">
                <Image
                  src={img}
                  alt={item}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold capitalize text-center mt-6 px-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
