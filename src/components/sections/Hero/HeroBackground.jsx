import React from "react";
import AuroraBackground from "../../ui/aurora-background";
import Hero from "./Hero";

export function HeroBackground() {
  return (
    <>
      {/*//*________________________________________________________________________________*/}
      <section className="sm:block hidden">
        <AuroraBackground>
          <div className="pt-[60px] z-20">
            <Hero />
          </div>
        </AuroraBackground>
      </section>

      {/*//*________________________________________________________________________________*/}
      <section className="sm:hidden block pt-[50px]">
        <Hero />
      </section>
    </>
  );
}
