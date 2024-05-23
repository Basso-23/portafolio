import React, { useState, useEffect } from "react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import ImageRender from "@/components/utils/ImageRender";

const Hero = () => {
  return (
    <section className="pageSize sm:pt-20 pt-10">
      <div className="grid lg:grid-cols-2">
        <div>
          {/*//*________________________________________________________________________________*/}
          <div className="title sm:text-[32px] text-[28px]">
            Descubre nuevas ideas.
          </div>
          <div className="title sm:text-[32px] text-[28px]">
            Explora mi Trabajo
          </div>
          <div className="subtitle">
            Bienvenido a mi portafolio, soy un Ing. de Software especializado en
            desarrollo de web. Aquí encontrarás una selección de mis proyectos
            más destacados.
          </div>

          {/*//*________________________________________________________________________________*/}
          <div className="buttons-container lg:flex lg:flex-row flex flex-col">
            <div className="correo-button lg:w-fit w-full hover:bg-[#d1d1d1]">
              <Send />
              Correo Electrónico
            </div>
            <div className="github-button lg:w-fit w-full hover:bg-[#343434]">
              <Github />
              Ver Github
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
