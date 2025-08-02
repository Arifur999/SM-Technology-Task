import React from "react";
import HeroImage from "/img.png";
import company from "/logo (1).png";
import title from "/comp.png";

const Hero = () => {
  return (
    <section className="bg-[#f9faff] ">
        <div className="flex flex-col lg:flex-row lg:w-[1250px] mx-auto justify-between px-4 lg:px-20 py-10 lg:py-20">
      {/* Left Side */}
      <div
        className="lg:w-[565px] lg:pt-18 lg:text-left"
        data-aos="fade-right"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
          Great software is <br />
          built with amazing <br />
          developers
        </h1>
        <p className="text-gray-600 text-base lg:text-lg pb-6">
          We help build and manage a team of world-class <br className="hidden lg:block" />
          developers to bring your vision to life
        </p>

        {/* Newsletter Input */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Subscribe newsletter"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="bg-[#8D448B] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200">
            Subscribe
          </button>
        </div>

        {/* Sponsors */}
        <div className="pt-14 flex items-center gap-4 text-sm text-gray-500">
          <img src={title} alt="" />
          <div className="flex items-center gap-4 opacity-70">
            <img src={company} alt="logo" />
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        className="w-full lg:w-[772px] mt-10 lg:mt-0"
        data-aos="fade-left"
      >
        <img src={HeroImage} alt="Hero" className="w-full h-auto" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
