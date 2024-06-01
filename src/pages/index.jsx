import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import { HeroBackground } from "@/components/sections/Hero/HeroBackground";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <main className="tracking-[-0.02rem]">
      <HeroBackground />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
