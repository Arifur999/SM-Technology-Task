import React from "react";
import boost from "/img (2).png";
const CustomerSupport = () => {
  return (
    <section className="bg-white mb-4 lg:mb-12   px-4 md:px-8 lg:px-0">
      <div className="max-w-[1220px]  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Right Content */}
        <div
          data-aos="fade-left"
          className="text-center lg:pr-18 lg:text-left max-w-xl"
        >
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-[#0F172A] leading-snug mb-4">
            Free Customer Support to ensure what you like <br /> to expect
          </h2>
          <p className="text-[#64748B] mb-6">
            We offer a risk-free trial period of up to two weeks. You will only
            have to pay if you are happy with the developer and wish to
            continue. If you are unsatisfied, we’ll refund payment or fix issues
            on our dime period customers.
          </p>
          <br />
          <p className="text-[#64748B]">
            If you are happy with the developer and wish to continue. If you are
            unsatisfied, we’ll refund payment or fix issues.
          </p>

          <div className="mt-6">
            <button className="text-[#8D448B] cursor-pointer hover:underline font-medium">
              Learn more &rarr;
            </button>
          </div>
        </div>
        {/* Left Image */}
        <div data-aos="fade-right" className="flex-shrink-0">
          <img
            src={boost}
            alt="Boost Illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[585px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
