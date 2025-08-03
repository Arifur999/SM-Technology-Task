import React from "react";
import Logo from "/S 1.png";
import name from "/Petro.png";

const NavBar = () => {
  return (
    <header className="  bg-[#f9faff]">
        <div className="py-5 px-4 lg:w-[1250px] mx-auto lg:px-20 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl cursor-pointer font-bold text-primary flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <img src={name} alt="" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-8 text-gray-700 text-sm font-medium">
        <a href="#">Home</a>
        <div className="relative group">
          <button className="hover:text-[#8D448B]">Advertise</button>
          <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow rounded p-2 z-10">
            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Option 1</a>
            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Option 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-[#8D448B]">Supports</button>
          <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow rounded p-2 z-10">
            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Support 1</a>
            <a href="#" className="block px-4 py-1 hover:bg-gray-100">Support 2</a>
          </div>
        </div>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </nav>

      {/* Register Button */}
      <button className="text-sm border cursor-pointer border-[#8D448B] text-[#8D448B] hover:bg-[#8D448B] hover:text-white transition-all duration-200 px-4 py-2 rounded-lg">
        Register Now
      </button>
      </div>
    </header>
  );
};

export default NavBar;
