import React, { useState, useEffect } from "react";
import Download from "@/icons/Download";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Send from "@/icons/Send";
import All from "@/icons/All";

const Navbar = () => {
  return (
    <section className=" h-[60px] w-full flex items-center border-b bg-[#060a0e] border-[#2b2b2b] fixed z-30 justify-between px-10 text-[#838586] ">
      <div className="flex gap-8 items-center text-sm">
        <div className="flex gap-2 items-center leading-none">
          <All /> <span>Proyectos</span>
        </div>
        <div className="flex gap-2 items-center">
          <Github /> <span>Experiencia</span>
        </div>
        <div className="flex gap-2 items-center">
          <Github /> <span>Tecnologías</span>
        </div>
      </div>
      <div className="flex gap-8 items-center text-sm leading-none">
        <div className="flex gap-2 items-center">
          <Send />
          <span> Correo Electrónico</span>
        </div>
        <div className="flex gap-2 items-center">
          <Github /> <span>Github</span>
        </div>
        <div className="flex gap-2 items-center">
          <Linkedin /> <span>LinkedIn</span>
        </div>
        <div className="flex gap-2 items-center">
          <Download /> <span>Currículum</span>
        </div>
        <div className=" flex gap-4 items-center border-l pl-6 border-[#2b2b2b]">
          <div>Disponible</div> <div className="pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
