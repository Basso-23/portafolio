import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import RenderImage from "../utils/RenderImage";
import Github from "@/icons/Github";
import Visit from "@/icons/Visit";

const Modal = ({ project }) => {
  const [originalData, setOriginalData] = useAtom(originalAtom);

  return (
    <section className="w-full md:h-[84%] mt-5">
      {originalData
        .filter((item) => item.name === project)
        .map((item, index) => (
          <div key={index} className="w-full h-full flex pl-12">
            {/*//*________________________________________________________________________________*/}
            <div className="md:w-[335px] h-full text-[38px] font-bold leading-[45px] relative">
              <div>{item.name} </div>
              <div className=" grid grid-cols-1 gap-4 mt-4 items-center text-sm font-medium absolute bottom-0 w-full">
                <div className="bg-white text-black hover:bg-[#d1d1d1] h-[45px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                  <span> Visitar sitio</span>
                  <div className="mt-[2px]">
                    <Visit />
                  </div>
                </div>
                <div className="bg-transparent border border-[#343434] hover:bg-[#343434] h-[48px] text-[14px] flex items-center justify-center gap-[6px] rounded-sm cursor-pointer leading-none">
                  <div className="mt-[2px]">
                    <Github />
                  </div>
                  <span>Repositorio</span>
                </div>
              </div>
            </div>

            {/*//*________________________________________________________________________________*/}
            <div className=" flex-1 h-full md:border-l border-[#202020] ml-12 px-10 mr-2 overflow-y-auto pb-20">
              <div className="pointer-events-none">
                <RenderImage url={item.image} soon={item.soon} />
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
