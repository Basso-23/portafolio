import React, { useState, useEffect } from "react";
import Download from "@/icons/Download";
import Linkedin from "@/icons/Linkedin";
import Github from "@/icons/Github";
import Send from "@/icons/Send";
import Menu from "../utils/Menu";

const Navbar = () => {
  return (
    <section className="fixed h-[60px] w-full z-30 mt-0 navbar-bg">
      <div className="flex items-center justify-between pageSize h-full">
        {/*//*________________________________________________________________________________*/}
        <div className="lg:flex hidden items-center">
          <div className="navbar-content">
            <div className=" text-lg font-semibold">Portafolio</div>
            <div className="sec divider">
              <Send />
              <span> Correo Electrónico</span>
            </div>
            <div className="sec">
              <Github /> <span>Github</span>
            </div>
            <div className="sec">
              <Linkedin /> <span>LinkedIn</span>
            </div>
            <div className="sec">
              <Download /> <span>Currículum</span>
            </div>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="lg:hidden flex items-center justify-between w-full">
          <div className=" text-lg font-semibold ml-[5px]">Portafolio</div>
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
