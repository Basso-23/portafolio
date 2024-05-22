import Hexagon from "@/icons/Hexagon";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <section>
      <div className=" w-full h-[60px] border-b border-[#343434]">
        <div className=" justify-between flex items-center h-full pageSize">
          <div className=" text-2xl flex gap-3 items-center">
            <Hexagon /> <div className=" font-bold text-xl">PORTAFOLIO</div>
          </div>
          <div className="lg:flex hidden gap-6 text-[14px] items-center font-medium">
            <div className=" w-8 aspect-square rounded-full bg-[#323332]"></div>
            <div className="">Correo Electrónico</div>
            <div className="">Github</div>
            <div className="">LinkedIn</div>
            <div className="border-r pr-6 border-[#343434]">Currículum</div>
            <div className="flex gap-4 text-[14px] items-center">
              <div>Disponible</div> <div className="pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
