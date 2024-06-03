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
import { motion as m, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

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
    <section className="pageSize min-h-[675px] 2xl:mt-[-240px] z-50 absolute w-full">
      <m.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
          type: "spring",
          delay: 0.2,
        }}
        className="2xl:px-[85px] px-[16px]"
      >
        <div className=" text-white text-[28px] font-semibold">
          Explora mis últimos trabajos
        </div>
        <div className="text-[#a0a0a0] text-[16px] font-medium pb-4 mt-1">
          ¡Bienvenido a mi portafolio! Aquí encontrarás una selección de mis
          proyectos más destacados.
        </div>
      </m.div>

      {/*//*________________________________________________________________________________*/}
      <m.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
          type: "spring",
          delay: 0.15,
        }}
        className="filter-containe hidden sm:gap-[30px] gap-[12px] overflow-y-hidden"
      >
        <Filter name={"proyectos"} icon={<All />} />
        <Filter name={"diseño"} icon={<Design />} />
        <Filter name={"full-stack"} icon={<Stack />} />
        <Filter name={"otros"} icon={<Toolbox />} />
      </m.div>

      {/*//*________________________________________________________________________________*/}
      <AnimatePresence>
        <m.div
          initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: 50,
            filter: "blur(5px)",
            transition: { duration: 0.15 },
          }}
          transition={{
            duration: 1.3,
            ease: "easeOut",
            type: "spring",
            delay: 0.4,
          }}
          className="grid-container 2xl:px-[85px] px-[16px]"
          key={currentFilter}
        >
          {data
            .map((item, index) => (
              <div key={index} className="project-container">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div onClick={() => setTempKey(item.name)}>
                      <RenderImage url={item.image} />
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
                        <a target="_blank" href={item.url}>
                          <Visit />
                        </a>
                      </div>
                    </div>
                  </div>
                  <AlertDialogContent asChild>
                    <div>
                      <AlertDialogCancel asChild>
                        <div
                          style={{ fontFamily: "Inter Variable, sans-serif" }}
                          className="volver hover:text-white lg:pl-14 pl-4 lg:mt-9 mt-16"
                        >
                          <div className="lg:pb-0 pb-4">
                            <Back />
                          </div>

                          <span className="lg:pb-0 pb-4">Volver</span>
                        </div>
                      </AlertDialogCancel>
                      <Modal project={tempKey} />
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ))
            .reverse()}
        </m.div>
      </AnimatePresence>
      <Footer />
    </section>
  );
};

export default Projects;
