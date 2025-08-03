import React from "react";
import boost from "/img (1).png"
import { HiCheckCircle } from "react-icons/hi";
const BoostSection = () => {
 return (
    <section className="bg-white  px-4 md:px-8 lg:px-0">
      <div className="max-w-[1220px]  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div data-aos="fade-right" className="flex-shrink-0">
          <img
            src={boost}
            alt="Boost Illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[633px]"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="text-center lg:pr-18 lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-snug mb-4">
            Boost your agencies <br />
            by choosing <span className="text-[#3B82F6]">Ninja <br /> Developers</span>
          </h2>
          <p className="text-[#64748B] mb-6">
            Create custom landing pages with Shades that convert <br /> more visitors than any website, no coding required.
          </p>
          
          {/* Feature List */}
          <ul className="space-y-4 text-left text-[#334155]">
            <li className="flex items-center gap-3">
              <HiCheckCircle className="text-[#6366F1] text-xl" />
              <span>Unlimited design possibility</span>
            </li>
            <li className="flex items-center gap-3">
              <HiCheckCircle className="text-[#6366F1] text-xl" />
              <span>Completely responsive features</span>
            </li>
            <li className="flex items-center gap-3">
              <HiCheckCircle className="text-[#6366F1] text-xl" />
              <span>Easy to customize plugins</span>
            </li>
          </ul>

          <div className="mt-6">
            <button className="text-[#8D448B] cursor-pointer hover:underline font-medium">
              Learn more &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BoostSection;
