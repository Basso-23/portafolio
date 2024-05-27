import React, { useState, useEffect } from "react";
import "@fontsource-variable/inter";
import All from "@/icons/All";
import Design from "@/icons/Design";
import Stack from "@/icons/Stack";
import Toolbox from "@/icons/Toolbox";
import Plus from "@/icons/Plus";
import Visit from "@/icons/Visit";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import RenderImage from "../utils/RenderImage";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Modal from "./Modal";
import Back from "@/icons/Back";

const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("proyectos");
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [tempKey, setTempKey] = useState();

  const Filter = ({ name, icon }) => {
    return (
      <div
        onClick={() => {
          setCurrentFilter(name);
          filtering(name);
        }}
        className={
          name === currentFilter
            ? "active sm:min-w-0 min-w-[90px]"
            : "inactive sm:min-w-0 min-w-[90px]"
        }
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
    <section className="pageSize min-h-[90svh] sm:mt-20 mt-10 pb-3">
      {/*//*________________________________________________________________________________*/}
      <div className="filter-container sm:gap-[30px] gap-[12px]">
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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div onClick={() => setTempKey(item.name)}>
                    <RenderImage url={item.image} soon={item.soon} />
                  </div>
                </AlertDialogTrigger>
                <div className="info">
                  <div>{item.name}</div>
                  <div className="icons-container">
                    <AlertDialogTrigger asChild>
                      <div
                        onClick={() => setTempKey(item.name)}
                        className="tooltip-container"
                      >
                        <div className="tooltip fixedCenterX w-[65px]">
                          Más info
                        </div>
                        <Plus />
                      </div>
                    </AlertDialogTrigger>
                    <div className="tooltip-container">
                      <div className="tooltip fixedCenterX w-[80px]">
                        Visitar sitio
                      </div>
                      <Visit />
                    </div>
                  </div>
                </div>
                <AlertDialogContent asChild>
                  <div>
                    <AlertDialogCancel asChild>
                      <div
                        style={{ fontFamily: "Inter Variable, sans-serif" }}
                        className=" flex gap-[2px] items-center text-[13px] font-medium w-fit cursor-pointer text-[#5b5b5b] hover:text-white leading-none mx-9 mt-9"
                      >
                        <Back />
                        <span>Volver a Proyectos</span>
                      </div>
                    </AlertDialogCancel>
                    <Modal project={tempKey} />
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Projects;
