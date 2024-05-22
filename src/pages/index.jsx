import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/sections/Navbar";
import { AuroraBackgroundDemo } from "@/components/sections/Hero/AuroraBackgroundDemo";
import Hero from "@/components/sections/Hero/Hero";

const Home = () => {
  return (
    <main className="mb-20">
      <Navbar />
      <AuroraBackgroundDemo />
      <div className="sm:hidden block pt-[60px]">
        <Hero />
      </div>
      <Projects />
    </main>
  );
};

export default Home;
