import React, { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/sections/Navbar";

const Home = () => {
  return (
    <main className="mb-20">
      <Navbar />
      <div className="pt-[60px]">
        <Hero />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
