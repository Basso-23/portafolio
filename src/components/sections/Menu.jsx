import React, { useState, useEffect } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Download from "@/icons/Download";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative">
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      {isOpen && (
        <div className="menu-container">
          <div className="option-title">
            <span className="text-[13px]">Menu</span>
          </div>
          <div className="option">
            <Send />
            <span className="text-[13px]">Correo Electrónico</span>
          </div>
          <div className="option">
            <Github /> <span className="text-[13px]">Github</span>
          </div>
          <div className="option">
            <Linkedin /> <span className="text-[13px]">LinkedIn</span>
          </div>
          <div style={{ border: "none" }} className="option">
            <Download /> <span className="text-[13px]">Currículum</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;