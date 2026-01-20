"use client";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
// import { inter } from "@/app/layout";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white flex justify-between items-center p-5 text-black relative pr-8 shadow-b-lg">
      <h1 className="text-3xl font-lobster font-medium pl-8">Ecom</h1>
      <nav className={`hidden md:flex gap-6 font-medium `}>
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </nav>

      <div className="hidden md:flex gap-5">
        <FaFacebook className="hover:cursor-pointer" />
        <FaInstagram className="hover:cursor-pointer" />
        <FaTwitter className="hover:cursor-pointer" />
      </div>
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div
          className={`absolute top-full left-0 w-full p-5 bg-white flex flex-col items-start gap-5 py-4  md:hidden z-10 transform transition-all duration-300 ease-in-out
             ${open ? "translate-y-0 " : "-translate-y-full "}`}
        >
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">About Us</a>

          <div className="flex gap-5 mt-2">
            <FaFacebook className="hover:cursor-pointer" />
            <FaInstagram className="hover:cursor-pointer" />
            <FaTwitter className="hover:cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
