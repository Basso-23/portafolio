import React, { useState, useEffect } from "react";
import All from "@/icons/All";
import Design from "@/icons/Design";
import Stack from "@/icons/Stack";
import Toolbox from "@/icons/Toolbox";
import Plus from "@/icons/Plus";
import Visit from "@/icons/Visit";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import ImageRender from "../utils/ImageRender";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("proyectos");
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);

  const Filter = ({ name, icon }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
          filtering(name);
        }}
        className={name === currentFilter ? "active" : "inactive"}
      >
        {icon}
        {name}
      </div>
    );
  };

  const filtering = (name) => {
    if (name === "proyectos") {
      setData(originalData);
    } else {
      const filtered = originalData.filter(
        (project) => project.category === name
      );
      setData(filtered);
    }
  };

  return (
    <section className="pageSize min-h-screen sm:mt-20 mt-10">
      {/*//*________________________________________________________________________________*/}
      <div className="filter-container">
        <Filter name={"proyectos"} icon={<All />} />
        <Filter name={"diseño"} icon={<Design />} />
        <Filter name={"full-stack"} icon={<Stack />} />
        <Filter name={"otros"} icon={<Toolbox />} />
      </div>

      {/*//*________________________________________________________________________________*/}
      <div className="grid-container">
        {data
          .map((item, index) => (
            <div key={index} className="project-container">
              <ImageRender url={item.image} />
              <div className="info">
                <div>{item.name}</div>
                <div className="icons-container">
                  <div className="tooltip-container">
                    <div className="tooltip fixedCenterX w-[65px]">
                      Más info
                    </div>
                    <Plus />
                  </div>
                  <div className="tooltip-container">
                    <div className="tooltip fixedCenterX w-[80px]">
                      Visitar sitio
                    </div>
                    <Visit />
                  </div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Projects;
