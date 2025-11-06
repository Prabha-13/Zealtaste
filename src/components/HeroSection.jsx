import React from "react";
import "./HeroSection.css";
import foodTruck from "../assets/img1.png";

const HeroSection = () => {
  return (
    <section
      className="bg-[#faefe4] w-full flex md:flex-row items-center justify-between 
                 min-h-[90vh] scroll-smooth overflow-hidden"
    >
      {/* Left side - Text */}
      <div
        className="md:w-1/2 w-full text-left flex flex-col justify-center gap-6 pl-[8cm]
                   opacity-0 animate-fadeInLeft delay-200"
      >
        <p className="text-[#e76f51] font-semibold tracking-[5px] uppercase text-lg transition-transform duration-500 hover:scale-105">
          Savory Wheels
        </p>

        <h1 className="text-[#004c3f] font-extrabold text-[65px] leading-[1.1] transition-transform duration-500 hover:scale-105">
          Zeal Taste: <br />
          <span className="text-[#004c3f]">Culinary Delights</span> <br />
          on Wheels
        </h1>

        <p className="text-[#6b6b6b] text-[20px] leading-relaxed max-w-md transition-transform duration-500 hover:scale-105">
          Bringing gourmet street food to your neighborhood — fresh, flavorful, and fast!
        </p>

        <button className="custom-btn animate-[pulse_3s_infinite]">
            Book Your Table
      </button>
      </div>

      {/* Right side - Image */}
      <div
        className="md:w-1/2 w-full flex justify-end items-center mr-[8cm]
                   opacity-0 animate-fadeInRight delay-200"
      >
        <img
          src={foodTruck}
          alt="Food Truck"
          className="w-[350px] h-auto rounded-[150px_0_0_150px]
                     object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;
