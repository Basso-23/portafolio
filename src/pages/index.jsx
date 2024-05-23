import React, { useState, useEffect } from "react";
import Projects from "@/components/sections/Projects";
import { HeroBackground } from "@/components/sections/Hero/HeroBackground";

const Home = () => {
  return (
    <main className="mb-20">
      <HeroBackground />
      <Projects />
    </main>
  );
};

export default Home;
