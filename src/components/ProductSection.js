"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "@/assets/phone.jpg";

const ProductSection = ({ products }) => {
  const [product, setProduct] = useState(products || []);
  const [search, setSearch] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;
  // console.log(product);

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
      <h1 className=" text-2xl sm:text-3xl lg:text-4xl mb-6 text-center lg:text-left font-semibold">
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
        className="grid gap-6 sm:gap-8 
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {paginationProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <Image
              width={200}
              height={200}
              src={img}
              alt={item.title}
              className="w-full h-50 sm:h-40 object-contain"
            />

            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="font-semibold text-sm sm:text-base line-clamp-2">
                {item.title}
              </p>

              <p className="text-gray-600  text-xs sm:text-sm line-clamp-2 ">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-black  text-sm sm:text-base">
                  ${item.price}
                </p>
                <p className="font-medium text-black  text-xs sm:text-sm capitalize">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-1 border rounded-lg disabled:opacity-50 font-bold hover:bg-gray-100 transition"
        >
          {"<"} Prev
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-1 border rounded-lg disabled:opacity-50 font-bold hover:bg-gray-100 transition"
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
