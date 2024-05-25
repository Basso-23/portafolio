import React, { useState, useEffect } from "react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import RenderImage from "@/components/utils/RenderImage";

const Hero = () => {
  return (
    <section className="pageSize sm:pt-20 pt-10 ">
      <div className="grid lg:grid-cols-2 items-center sm:justify-start justify-center">
        <div>
          {/*//*________________________________________________________________________________*/}
          <div className="title sm:text-[50px] text-[45px] sm:text-start text-center">
            Descubre mis
          </div>
          <div className="title sm:text-[50px] text-[45px] sm:text-start text-center mt-9 ">
            habilidades
          </div>
          <div className="subtitle sm:pt-8 pt-6 sm:text-start text-center">
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
          <RenderImage url={"https://i.imgur.com/x9SN9ss.png"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
