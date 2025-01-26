"use client";

import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ferme le menu mobile si l'écran dépasse 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg px-6 py-3 flex items-center justify-between z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div>
            <Image src="/images/logo1.png" alt="logo" width={50} height={50}/>
          </div>
        </div>

        {/* Middle Links */}
        <div className="hidden lg:flex space-x-8">
          {["Home", "About", "Explor", "Ressource", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-red-600 transition  font-semibold"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="hidden lg:flex items-center">
          <BiUser size={24} className="text-gray-700 cursor-pointer hover:text-red-600" />
          <BiWallet size={24} className="text-gray-700 cursor-pointer ml-4 hover:text-red-600" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <CgMenu
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-start px-6 py-4">
          {/* Close Icon */}
          <div className="flex items-center justify-between w-full mb-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GrTechnology size={24} className="text-blue-500" />
              <span className="font-bold text-blue-500 text-lg">TechDev</span>
            </div>
            <IoClose
              size={28}
              className="text-gray-700 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 w-full">
            {["Home", "Features", "Services", "Reviews", "Teams", "Pricing", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500 transition font-medium border-b border-gray-300 pb-2 w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition self-start">
            <BsLightningChargeFill className="mr-2" />
            Create Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;