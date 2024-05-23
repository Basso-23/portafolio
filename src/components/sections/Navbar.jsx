import React, { useState, useEffect } from "react";
import Download from "@/icons/Download";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Send from "@/icons/Send";
import All from "@/icons/All";
import Case from "@/icons/Case";
import Code from "@/icons/Code";

const Navbar = () => {
  return (
    <section className="navbar-container 2xl:px-6">
      <div className="navbar-desktop 2xl:flex hidden">
        {/*//*________________________________________________________________________________*/}
        <div className="navbar-content">
          <div className="sec">
            <All /> <span>Proyectos</span>
          </div>
          <div className="sec">
            <Case /> <span>Experiencia</span>
          </div>
          <div className="sec">
            <Code /> <span>Tecnologías</span>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        <div className="navbar-content">
          <div className="sec">
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
          <div className="sec divider pointer-events-none">
            <div className="text-white">Disponible</div>
            <div className="pulse"></div>
          </div>
        </div>
      </div>

      {/*//*________________________________________________________________________________*/}
      <div className="navbar-mobile 2xl:hidden flex">
        <div>menu</div>
      </div>
    </section>
  );
};

export default Navbar;
