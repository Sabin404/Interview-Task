"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "@/assets/bg.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    localStorage.setItem("subscribedEmail", email);
    setEmail("");
    alert("Subscribed!");
  };

  return (
    <div className="relative container  mx-auto overflow-hidden bg-white py-20 px-6">
      <div className="absolute inset-0 z-0 h-80  overflow-hidden ">
        <Image
          src={img}
          alt="subscribe bg"
          fill
          className="object-cover px-7 rounded-[60px] "
        />
      </div>

      <div className="relative  z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Subscribe to get the first news
        </h2>

        <p className="text-sm text-gray-500 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore dolore magna aliqua ut enim ad minim
        </p>

        <div className="flex items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            className="px-4 py-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] rounded-md outline-none w-64"
          />
          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-5 py-2 rounded-md"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
