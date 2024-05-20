import React, { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <section className=" h-[100svh] w-full "></section>
    </main>
  );
};

export default Home;
