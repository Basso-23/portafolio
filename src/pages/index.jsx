import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";
import Contact from "@/icons/Contact";

const Home = () => {
  return (
    <main className="tracking-[-0.01rem]">
      <Hero />
      <Projects />
      <a
        target="_blank"
        href={"https://beacons.ai/carlosbaso"}
        className="contact sm:bottom-8 sm:right-8 bottom-3 right-2"
      >
        <Contact />
      </a>
    </main>
  );
};

export default Home;
