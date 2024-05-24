import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import { HeroBackground } from "@/components/sections/Hero/HeroBackground";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <main className="mb-20 tracking-[-0.02rem]">
      <Navbar />
      <HeroBackground />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
