import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import RenderImage from "../utils/RenderImage";
import Github from "@/icons/Github";
import Visit from "@/icons/Visit";
import "@fontsource-variable/inter";

import JS from "@/icons/technology/JS";
import React_logo from "@/icons/technology/React";
import Next from "@/icons/technology/Next";
import Tailwind from "@/icons/technology/Tailwind";
import Astro from "@/icons/technology/Astro";
import Firebase from "@/icons/technology/Firebase";
import Html from "@/icons/technology/Html";
import Css from "@/icons/technology/Css";

const Modal = ({ project }) => {
  const [originalData, setOriginalData] = useAtom(originalAtom);

  const skills = {
    Next: <Next />,
    Javascript: <JS />,
    React: <React_logo />,
    Tailwind: <Tailwind />,
    Astro: <Astro />,
    Firebase: <Firebase />,
    HTML: <Html />,
    CSS: <Css />,
  };

  const TechToRender = ({ name }) => {
    const Tech = skills[name];
    return Tech ? Tech : null;
  };

  return (
    <section
      style={{ fontFamily: "Inter Variable, sans-serif" }}
      className="w-full md:h-[83%] mt-5"
    >
      {originalData
        .filter((item) => item.name === project)
        .map((item, index) => (
          <div key={index} className="w-full h-full flex pl-14">
            {/*//*________________________________________________________________________________*/}
            <div className="md:w-[375px] h-full pr-14 flex flex-col">
              <div className="font-bold leading-[45px] text-[40px] mt-2">
                {item.name}
              </div>
              <div className="mt-6 text-[#bcbcbc] text-[15px]">
                Diseño para una tienda de donas para destacar su variedad de
                sabores únicos.
              </div>

              <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] mt-4 border-b py-4">
                <div className="font-medium text-[#bcbcbc]">Estado</div>
                <div
                  style={{ marginTop: 0.5, justifyContent: "end" }}
                  className="pulse-container"
                >
                  <div className="pulse"></div>
                  <div className=" text-white font-medium">En línea</div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] border-b py-4">
                <div className="font-medium text-[#bcbcbc]">Categoría</div>
                <div className="text-end capitalize text-[#bcbcbc]">
                  {item.category}
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-5 text-[24px]">
                {item.tech.map((item, index) => (
                  <div
                    key={index}
                    style={{ cursor: "auto" }}
                    className="tooltip-container text-[#bcbcbc] w-fit"
                  >
                    <TechToRender name={item} />
                    <div className="tooltip fixedCenterX w-fit min-w-[65px]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <div className=" grow justify-end flex flex-col">
                <div className=" grid grid-cols-1 gap-3 items-center text-sm">
                  <div className="bg-white text-black hover:bg-[#d1d1d1] h-[45px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                    <span> Visitar sitio</span>
                    <Visit />
                  </div>
                  <div className="bg-transparent border border-[#343434] hover:bg-[#343434] h-[48px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                    <Github />
                    <span>Código fuente</span>
                  </div>
                </div>
              </div>
            </div>

            {/*//*________________________________________________________________________________*/}
            <div className=" flex-1 h-full md:border-l border-[#202020] pl-14 pr-12 mr-2 overflow-y-auto pb-20">
              <div className="pointer-events-none">
                <RenderImage url={item.image} />
              </div>
              <div className=" mt-10">dadada</div>
              <div className=" mt-10">dadada</div>
              <div className=" mt-10">dadada</div>
              <div className=" mt-10">dadada</div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Modal;
