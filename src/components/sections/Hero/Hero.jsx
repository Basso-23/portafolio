import React, { useState, useEffect } from "react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import ImageRender from "@/components/utils/ImageRender";

const Hero = () => {
  return (
    <section className="pageSize sm:pt-20 pt-10 ">
      <div className="grid lg:grid-cols-2 items-center">
        <div>
          {/*//*________________________________________________________________________________*/}
          <div className="title sm:text-[62px] text-[45px]">Descubre</div>
          <div className="title sm:text-[62px] text-[45px] sm:mt-12 mt-8">
            nuevas ideas.
          </div>
          <div className="subtitle sm:pt-8 pt-6">
            ¡Explora mi trabajo! Aquí encontrarás una selección de mis proyectos
            más destacados.
          </div>

          {/*//*________________________________________________________________________________*/}
          <div className="buttons-container sm:grid-cols-2 grid-cols-1">
            <div className="correo-button hover:bg-[#d1d1d1]">
              <Send />
              <span className="text-sm">Correo Electrónico</span>
            </div>
            <div className="github-button hover:bg-[#343434]">
              <Github />
              <span className="text-sm">Ver Github</span>
            </div>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="relative lg:block hidden">
          <ImageRender url={"https://i.imgur.com/x9SN9ss.png"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
