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
      className="w-full lg:h-[83%] lg:mt-5 h-[100svh]"
    >
      {originalData
        .filter((item) => item.name === project)
        .map((item, index) => (
          <div key={index} className="w-full h-full">
            <div className="w-full h-full lg:flex hidden pl-14">
              {/*//*________________________________________________________________________________*/}
              <div className="md:w-[375px] h-full pr-14 flex flex-col">
                <div className="font-bold leading-[45px] text-[40px] mt-2">
                  {item.name}
                </div>
                <div className="mt-6 text-[#a1a1a1] text-[15px]">
                  {item.summary}
                </div>

                <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] mt-4 border-b py-4">
                  <div className=" text-[#a1a1a1]">Estado</div>
                  <div
                    style={{ marginTop: 0.5, justifyContent: "end" }}
                    className="pulse-container"
                  >
                    <div className="pulse"></div>
                    <div className=" text-white font-normal">En línea</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] border-b py-4">
                  <div className=" text-[#a1a1a1]">Categoría</div>
                  <div className="text-end capitalize text-[#a1a1a1] ">
                    {item.category}
                  </div>
                </div>

                <div className="flex gap-2 justify-end pt-5 text-[24px]">
                  {item.tech.map((item, index) => (
                    <div
                      key={index}
                      style={{ cursor: "auto" }}
                      className="tooltip-container text-[#a1a1a1] w-fit"
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
              <div className=" flex-1 h-full md:border-l border-[#202020] pl-14 pr-12 mr-2 overflow-y-auto pb-6">
                <div className="pointer-events-none">
                  <RenderImage url={item.image} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h1 }}
                  className="h1-content"
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h2 }}
                  className="mt-6 h2-content"
                ></div>
              </div>
            </div>

            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            {/*//*________________________________________________________________________________*/}
            <div className="w-full h-full lg:hidden block px-4 overflow-y-auto pb-24">
              <div className="pointer-events-none mt-0">
                <RenderImage url={item.image} />
              </div>
              <div className="font-bold leading-[45px] text-[40px] mt-6">
                {item.name}
              </div>
              <div className="mt-4 text-[#a1a1a1] text-[15px]">
                {item.summary}
              </div>
              <div className=" grid grid-cols-1 gap-3 items-center text-sm mt-6">
                <div className="bg-white text-black hover:bg-[#d1d1d1] h-[45px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                  <span> Visitar sitio</span>
                  <Visit />
                </div>
                <div className="bg-transparent border border-[#343434] hover:bg-[#343434] h-[48px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                  <Github />
                  <span>Código fuente</span>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] mt-4 border-b py-4">
                <div className=" text-[#a1a1a1]">Estado</div>
                <div
                  style={{ marginTop: 0.5, justifyContent: "end" }}
                  className="pulse-container"
                >
                  <div className="pulse"></div>
                  <div className=" text-white font-normal">En línea</div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[14px] leading-none border-[#343434] border-b py-4">
                <div className=" text-[#a1a1a1]">Categoría</div>
                <div className="text-end capitalize text-[#a1a1a1] ">
                  {item.category}
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-5 text-[24px]">
                {item.tech.map((item, index) => (
                  <div
                    key={index}
                    style={{ cursor: "auto" }}
                    className="tooltip-container text-[#a1a1a1] w-fit"
                  >
                    <TechToRender name={item} />
                    <div className="tooltip fixedCenterX w-fit min-w-[65px]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: item.h1 }}
                className="h1-content"
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: item.h2 }}
                className="mt-6 h2-content"
              ></div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Modal;
