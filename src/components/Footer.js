import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  py-8 mt-10">
      <div className="p-4 ">
        <div className="flex justify-around border-b pb-10">
          <div className="mb-4  flex flex-col gap-10 opacity-65">
            <h1 className="text-2xl  font-medium">Title</h1>
            <a href="#">subtitle</a>
            <a href="#">subtitle</a>
            <a href="#">subtitle </a>
            <a href="#">subtitle</a>
          </div>
          <div className="mb-4  flex flex-col gap-10 opacity-65">
            <h1 className="text-2xl font-medium">Title</h1>
            <a href="#">subtitle</a>
            <a href="#">subtitle</a>
            <a href="#">subtitle</a>
            <a href="#">subtitle</a>
          </div>
          <div className="mb-4  flex flex-col gap-10 opacity-65">
            <h1 className="text-2xl font-medium ">Title</h1>
            <a href="">subtitle</a>
            <a href="">subtitle</a>
            <a href="">subtitle</a>
            <a href="">subtitle</a>
          </div>
        </div>
        <div className="flex justify-around pt-9">
          <div className="flex gap-5 mt-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
          <div className="flex gap-10 opacity-65">
            <span>Copyright</span>
            <span>Term Condition</span>
            <span>Product Website</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
