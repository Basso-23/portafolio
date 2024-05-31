import React, { useState, useEffect } from "react";
import Download from "@/icons/Download";
import Linkedin from "@/icons/Linkedin";
import Github from "@/icons/Github";
import Send from "@/icons/Send";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section className="navbar-bg hidden">
      <div className="navbar-container pageSize">
        {/*//*________________________________________________________________________________*/}
        <div className="hidden items-center">
          <div className="navbar-content">
            <div className="text-[20px] font-semibold">Portafolio</div>
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
          <div className="sm:hidden block"></div>
          <div className="sm:block hidden text-lg font-medium"></div>
          <div className="-mr-2">
            <Menu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
