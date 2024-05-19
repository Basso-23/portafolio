import Check from "@/icons/Check";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const Checkmark = ({ info }) => {
    return (
      <div className=" flex items-center gap-2 md:justify-center">
        <div className="bg-black text-white rounded-full p-[6px] text-[16px]">
          <Check />
        </div>
        <div className="text-[19px] leading-none mt-[1px]">{info}</div>
      </div>
    );
  };

  return (
    <section
      style={{
        backgroundImage: "url(./hero.webp)",
      }}
      className="h-[100svh] parallax"
    >
      <div className="hero-container pageSize">
        <div className="lg:text-[20.5px] sm:text-[18px] second-title md:-mt-10 -mt-4 text-balance animate-fade-up ">
          RESONANCE — MODERN ONE/MULTI PAGE WORDPRESS THEME
        </div>
        <div className="lg:text-[86px] md:text-[70px] sm:text-[60px] text-[40px] main-title mt-5 animate-fade-up animate-delay-[100ms] ">
          Create your beautiful
        </div>
        <div className="lg:text-[86px] md:text-[70px] sm:text-[60px] text-[40px] main-title mt-2 animate-fade-up animate-delay-[200ms] ">
          website with Resonance.
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 md:max-w-[700px] max-w-[300px] w-full gap-2 mt-10 animate-fade-up animate-delay-[300ms] ">
          <div className="white-button">
            <span className="label-up-socials">MULTI PAGE DEMOS</span>
            <span className="label-up-socials">MULTI PAGE DEMOS</span>
          </div>
          <div className="white-button">
            <span className="label-up-socials">ONE PAGE DEMOS</span>
            <span className="label-up-socials">ONE PAGE DEMOS</span>
          </div>
          <div className="outline-button">
            <span className="label-up-socials">INTRO SECTIONS</span>
            <span className="label-up-socials">INTRO SECTIONS</span>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 w-fit md:gap-2 gap-4 mt-[52px] animate-fade-up animate-delay-[500ms] ">
          <Checkmark info={"10 Design Concepts"} />
          <Checkmark info={"135+ UI Sections"} />
          <Checkmark info={"Light & Dark Versions"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
