"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/assets/bg.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubscribe = () => {
    if (!email) {
      setError("Email is required");
      setTimeout(() => setError(null), 3000);
      return;
    }
    localStorage.setItem("subscribedEmail", email);
    setEmail("");
    alert("Subscribed!");
  };

  return (
    <div className="relative container mx-auto overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="absolute inset-0 z-0 h-80 sm:h-96 md:h-112 overflow-hidden">
        <Image
          src={img}
          alt="subscribe bg"
          fill
          className="object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Subscribe to get the first news
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore dolore magna aliqua ut enim ad minim
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            className="px-4 py-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] rounded-md outline-none w-full sm:w-64"
          />
          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-5 py-2 rounded-md w-full sm:w-auto hover:cursor-pointer hover:bg-black/80"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
