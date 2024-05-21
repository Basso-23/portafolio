import React, { useState, useEffect } from "react";
import All from "@/icons/All";
import Design from "@/icons/Design";
import Stack from "@/icons/Stack";
import Toolbox from "@/icons/Toolbox";
import Tilt from "react-parallax-tilt";
import { motion as m } from "framer-motion";
import { projects } from "@/json/projects";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("todos");
  const [originalData, setOriginalData] = useState(projects);
  const [data, setData] = useState(projects);
  const [imageLoaded, setImageLoaded] = useState(true);

  const Filter = ({ name, icon }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
          filtering(name);
        }}
        className={name === currentFilter ? "active" : "filter"}
      >
        {icon}
        {name}
      </div>
    );
  };

  const filtering = (name) => {
    if (name === "todos") {
      setData(originalData);
    } else {
      const filtered = originalData.filter(
        (project) => project.category === name
      );
      setData(filtered);
    }
  };

  const ImageRender = ({ img }) => {
    useEffect(() => {
      if (imageLoaded) {
        const imagen = new Image();
        imagen.src = img;
        imagen.onload = () => {
          setTimeout(() => {
            setImageLoaded(false);
          }, 1300);
        };
      }
    }, [img]);
    return (
      <div className="relative border-b border-[#333333]">
        <div>
          {imageLoaded && (
            <div className=" absolute fixedCenterXnY">
              <div className=" loader"></div>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: `url(${img})`,
            visibility: imageLoaded ? "hidden" : "visible",
          }}
          className="aspect-video h-full w-full bg-no-repeat bg-cover relative bg-top"
        ></div>
      </div>
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

      {/*//*________________________________________________________________________________*/}
      <div className="px-2">
        <div className="filters-container sm:justify-center sm:mt-20 mt-16 text-[15px]">
          <Filter name={"todos"} icon={<All />} />
          <Filter name={"diseño"} icon={<Design />} />
          <Filter name={"full-stack"} icon={<Stack />} />
          <Filter name={"otros"} icon={<Toolbox />} />
        </div>
      </div>

      {/*//*________________________________________________________________________________*/}
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-[1900px] mx-auto sm:mt-14 mt-10 sm:px-4 px-2">
        {data
          .map((item, index) => (
            <m.div layout key={index}>
              <Tilt
                scale={1.04}
                transitionSpeed={2500}
                tiltMaxAngleX={1.1}
                tiltMaxAngleY={1.1}
                className="border border-[#333333] rounded-sm overflow-hidden
                bg-[#111111] cursor-pointer"
              >
                <ImageRender img={item.image} />
                <div className="sm:p-5 px-5 py-3">
                  <div className="text-[15px] font-medium">{item.name}</div>
                  <div className="text-[#858585] uppercase font-bold text-[13px] mt-1">
                    {item.category}
                  </div>
                </div>
              </Tilt>
            </m.div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Projects;
