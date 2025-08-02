import React from "react";

import Icon1 from "/Frame.png";
import Icon2 from "/Frame (1).png";
import Icon3 from "/Frame (2).png";
import Icon4 from "/Frame (3).png";

const features = [
  {
    id: 1,
    title: "Unlimited Customization",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: Icon1, 
    bg: "bg-yellow-100",
  },
  {
    id: 2,
    title: "Vector shape & resizable",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: Icon2, 
    bg: "bg-cyan-100",
  },
  {
    id: 3,
    title: "Editing freedom",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: Icon3, 
    bg: "bg-blue-100",
  },
  {
    id: 4,
    title: "Best Award history",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    icon: Icon4,
    bg: "bg-rose-100",
  },
];

const FeatureSection = () => {
  return (
    <section className="lg:w-[1240px] mx-auto px-4 lg:px-20 py-16 text-center">
      <p className="text-sm text-[#D946EF] font-medium mb-2">Quality Features</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
        Meet exciting feature of app
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center">
            <div
              className={"w-20 h-20 rounded-xl flex items-center justify-center mb-4 "}
            >
              <img src={feature.icon} alt={feature.title} className="w-26 " />
              
            </div>
            <h3 className="text-base font-semibold text-[#0F172A] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
