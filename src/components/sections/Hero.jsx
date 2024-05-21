import Check from "@/icons/Check";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/scroll-animation.json";

const Hero = () => {
  const Checkmark = ({ info }) => {
    return (
      <div className=" flex items-center gap-2 md:justify-center">
        <div className="bg-black text-white rounded-full p-[6px] sm:text-[16px] text-[min(4vw,16px)] ">
          <Check />
        </div>
        <div className="sm:text-[19px] text-[min(5vw,19px)] leading-none mt-[1px]">
          {info}
        </div>
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
      <div className="hero-container ">
        {/*//*________________________________________________________________________________*/}
        <div className="text-[min(4vw,17px)] second-title md:-mt-10 -mt-4 animate-fade-up ">
          PORTAFOLIO — ING. DE SOFTWARE/DESARROLLADOR WEB
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="sm:text-[min(9vw,80px)] text-[min(9vw,60px)] main-title mt-5 animate-fade-up animate-delay-[100ms] ">
          Descubre nuevas ideas
        </div>
        <div className="sm:text-[min(9vw,80px)] text-[min(9vw,60px)] main-title mt-2 animate-fade-up animate-delay-[200ms] ">
          Explora mi Trabajo.
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className=" grid md:grid-cols-3 grid-cols-1 sm:text-[13px] text-[min(3vw,13px)] md:max-w-[700px] max-w-[300px] w-full gap-2 mt-10 animate-fade-up animate-delay-[300ms] ">
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

        {/*//*________________________________________________________________________________*/}
        <div className=" grid md:grid-cols-3 grid-cols-1 w-fit md:gap-2 gap-4 mt-[52px] animate-fade-up animate-delay-[500ms] ">
          <Checkmark info={"10 Design Concepts"} />
          <Checkmark info={"135+ UI Sections"} />
          <Checkmark info={"Light & Dark Versions"} />
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="animation-container fixedCenterX sm:block hidden">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
