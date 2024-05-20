import React, { useState, useEffect } from "react";
import All from "@/icons/All";
import Design from "@/icons/Design";
import Stack from "@/icons/Stack";
import Toolbox from "@/icons/Toolbox";
import { projects } from "@/json/projects";

const Projects = () => {
  const Filter = ({ name, icon }) => {
    return (
      <>
        <div
          className={`transition-all ${name === "Todos" ? "active" : "filter"}`}
        >
          {icon}
          {name}
        </div>
      </>
    );
  };

  return (
    <section className="mt-20">
      {/*//*________________________________________________________________________________*/}
      <div className="title-container">
        <div className="outline-title sm:text-[min(9vw,120px)] text-[min(9vw,60px)]">
          Galería de Proyectos
        </div>
        <div className="fill-title sm:text-[min(9vw,120px)] text-[min(9vw,60px)]">
          Galería de Proyectos
        </div>
        <div className="outline-title sm:text-[min(9vw,120px)] text-[min(9vw,60px)]">
          Galería de Proyectos
        </div>
      </div>

      {/*//*________________________________________________________________________________*/}
      <div className="subtitle-projects pageSize sm:text-[18px] text-[min(4.3vw,18px)]">
        Explore a diverse selection of 10 meticulously crafted pre-built website
        templates, each showcasing a unique visual style. Furthermore, each
        template comes with both light and dark versions.
      </div>
      <div className="px-2">
        <div className="filters-container sm:justify-center sm:mt-20 mt-16 text-[15px]">
          <Filter name={"Todos"} icon={<All />} />
          <Filter name={"Diseño"} icon={<Design />} />
          <Filter name={"Full-Stack"} icon={<Stack />} />
          <Filter name={"Otros"} icon={<Toolbox />} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
