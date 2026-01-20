import React from "react";
import Image from "next/image";
import img from "@/assets/img.png";
import img2 from "@/assets/image.png";
import img3 from "@/assets/person.png";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-5">
      <div className="max-w-7xl mx-auto bg-[#E7FAFE]  grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start bg-white w-fit px-3 py-2 pr-6 rounded-4xl">
            <Image
              width={20}
              height={20}
              src={img2}
              alt="logo"
              className="w-5 h-5"
            />
            <span className={`font-sans text-sm  text-black`}>Hot Deals</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight text-center lg:text-left">
            Enjoy 10% off in all our products.
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            itaque aut fuga doloribus.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            <button className="flex items-center gap-2 bg-[#0000000D] rounded-full px-4 py-2 text-sm">
              <span className="font-bold">$</span> Lorem
            </button>
            <button className="flex  items-center gap-2 bg-[#0000000D] rounded-full px-4 py-2 text-sm">
              <span className="font-bold">$</span> Lorem
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src={img3}
                alt="pfp"
                className="w-10 h-10 rounded-full object-contain"
              />
              <div className="text-sm text-left">
                <p className="font-medium">John Smith</p>
                <p className="text-gray-500">15 March 2020</p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-2xl text-sm hover:cursor-pointer hover:opacity-90 transition">
              View Product
              <FaPlayCircle className="text-lg" />
            </button>
          </div>
        </div>

        <div className="relative w-full h-60 sm:h-80 lg:h-full">
          <Image
            width={600}
            height={400}
            src={img}
            alt="product"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
