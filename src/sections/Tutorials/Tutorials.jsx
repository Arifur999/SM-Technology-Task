import React from "react";
import image from "/image.png";
import image2 from "/image (1).png";
import image3 from "/image (2).png";
import { FaCommentDots } from "react-icons/fa";

const Tutorials = () => {
  const cards = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      image: image,
      comment: "22 Comments",
    },
    {
      title: "Create multiple artboard by using figma prototyping development",
      image: image2,
      comment: "15 Comments",
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      image: image3,
      comment: "18 Comments",
    },
  ];

  return (
    <>
      {/* First Section */}
      <section className="pt-12 pb-40 px-4 bg-[#F3F4F5] relative">
        <div className="max-w-[1290px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm text-[#8D448B] font-semibold uppercase mb-2">
              Quality Features
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Tutorials that people love most
            </h1>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[220px] object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                    {card.title}
                  </h2>
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <FaCommentDots /> {card.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlapping Banner */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-70px] w-full max-w-[1290px] px-4 sm:px-0">
          <div
            className="w-full rounded-2xl bg-[#8D448B] flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-4 md:gap-0 shadow-lg text-center md:text-left"
            style={{
              backgroundImage: `url('/pattarn.png')`,
              backgroundPosition: "calc(100% - 90px) center",
              backgroundSize: "420px auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-[700px]">
              Hire the world’s best developers and designers around!
            </h2>
            <button className="bg-white cursor-pointer text-[#8D448B] font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
              HIRE DEVELOPERS
            </button>
          </div>
        </div>
      </section>

     
      <section className="h-[100px] bg-white"></section>


      <style jsx>{`
        @media (max-width: 768px) {
          div[style] {
            background-size: 200px auto !important;
            background-position: calc(100% - 20px) center !important;
          }
        }
        @media (max-width: 480px) {
          div[style] {
            background-size: 150px auto !important;
            background-position: calc(100% - 10px) center !important;
          }
        }
      `}</style>
    </>
  );
};

export default Tutorials;
