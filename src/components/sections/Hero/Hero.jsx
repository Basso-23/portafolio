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
          <div className="title">Web design inspiration catalog</div>
          <div className="subtitle">
            Unleash your creativity with out-of-this-world web design
            inspiration from across the web
          </div>

          {/*//*________________________________________________________________________________*/}
          <div className="buttons-container lg:flex lg:flex-row flex flex-col">
            <div className="correo-button lg:w-fit w-full hover:bg-[#d1d1d1]">
              <Send />
              Copiar Correo Electrónico
            </div>
            <div className="github-button lg:w-fit w-full hover:bg-[#343434]">
              <Github />
              Explorar Github
            </div>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="relative lg:block hidden">
          <ImageRender url={"https://i.imgur.com/sVqvpsf.png"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
