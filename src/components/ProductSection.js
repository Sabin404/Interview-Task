"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "@/assets/phone.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductSection = ({ products }) => {
  const [product, setProduct] = useState(products || []);
  const [search, setSearch] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = product.filter((p) =>
    p.title.toLowerCase().includes(debounceQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginationProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-center lg:text-left font-semibold">
        Our Products
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search products..."
          className="
            w-full sm:w-3/4 lg:w-1/2
            p-3
            rounded-lg
            shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]
            outline-none
            focus:ring-2 focus:ring-blue-400
            placeholder:font-medium
            transition
          "
        />
      </div>

      <div
        className="grid gap-4 sm:gap-6 md:gap-8
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {paginationProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="w-full relative h-52 sm:h-48 md:h-44 lg:h-40">
              <Image
                src={img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="font-semibold text-sm sm:text-base line-clamp-2">
                {item.title}
              </p>

              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-black text-sm sm:text-base">
                  ${item.price}
                </p>
                <p className="font-medium text-black text-xs sm:text-sm capitalize">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* button ko algi */}

      <div className="flex flex- justify-center items-center gap-1 sm:gap-3 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="flex hover:cursor-pointer items-center gap-1 px-2 sm:px-2 py-1 sm:py-1.5 border rounded-lg disabled:opacity-50 font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
        >
          <FaArrowLeft /> Prev
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 hover:cursor-pointer sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium border text-sm sm:text-base ${
                currentPage === page
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-gray-200 border-gray-300 text-gray-700"
              } transition`}
            >
              {page}
            </button>
          );
        })}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="flex hover:cursor-pointer items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border rounded-lg disabled:opacity-50 font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
