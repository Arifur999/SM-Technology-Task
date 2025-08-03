import { FaAngleRight } from "react-icons/fa";
import boost from "/video.png"; 

const BoostHeading = () => {


  return (
    <div className="lg:w-[1230px] p-3 mx-auto flex flex-col justify-center text-center items-center" data-aos="fade-up">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] leading-snug mb-4">
       Leading companies trust us <br /> to develop software
      </h2>
      <p className="text-[#64748B] pb-2  max-w-xl mx-auto lg:mx-0">
        We believe it’s important for everyone to have access to software <br /> especially when it comes to digital learning be navigate.
      </p>
      <span className="flex justify-center items-center text-[#8D448B] cursor-pointer pb-8">Explore Details <FaAngleRight /></span>
      <div >
        <img
          src={boost}
          alt="Boost Illustration"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[1110px]"
        />
      
   
      </div>
    </div>
  );
};

export default BoostHeading;