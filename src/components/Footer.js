import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10 container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2 pb-10">
          <div className="space-y-3 opacity-70">
            <h2 className="text-xl sm:text-2xl font-semibold">Tittle</h2>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
          </div>

          <div className="space-y-3 opacity-70">
            <h2 className="text-xl sm:text-2xl font-semibold">Tittle</h2>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
          </div>

          <div className="space-y-3 opacity-70">
            <h2 className="text-xl sm:text-2xl font-semibold">Tittle</h2>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
            <a href="#" className="block hover:underline text-sm sm:text-base">
              Subtittle
            </a>
          </div>
        </div>
        {/* iconsss */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-8 gap-6">
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <FaFacebook className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaTwitter className="hover:text-blue-400 transition" />
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm sm:text-base opacity-70">
            <span>© {new Date().getFullYear()} MyCompany</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
