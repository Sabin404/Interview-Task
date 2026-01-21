"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import img from "@/assets/phone.jpg";
import Link from "next/link";

const BASE_URL = "https://fakeapi.net";

const ProductSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const LIMIT = Number(searchParams.get("limit")) || 4;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/products?limit=${LIMIT}&page=${currentPage}`,
          { cache: "no-store" },
        );
        const data = await res.json();

        setProducts(data.data);
        if (data.total) {
          setTotalPages(Math.ceil(data.total / LIMIT));
        } else {
          setTotalPages(3);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [currentPage, LIMIT]);

  const changePage = (page) => {
    router.push(`?page=${page}&limit=${LIMIT}`, { scroll: false });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 container mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-center lg:text-left font-semibold">
        Our Products
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, idx) => (
            <Link
              href={`/products/${item.id}`}
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <div className="w-full relative h-52 sm:h-48 md:h-44 lg:h-40">
                <Image
                  src={img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 mt-2">
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
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(Math.max(currentPage - 1, 1))}
          className="flex items-center gap-1 px-3 py-1 border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition"
        >
          <FaArrowLeft /> Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`px-3 py-1 rounded-lg border ${
                page === currentPage
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
          className="flex items-center gap-1 px-3 py-1 border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
