import React, { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import RenderImage from "../utils/RenderImage";
import Modal from "./Modal";
import Footer from "./Footer";
import Back from "@/icons/Back";
import Plus from "@/icons/Plus";
import Visit from "@/icons/Visit";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAtom } from "jotai";
import { dataAtom } from "@/atom";

const Projects = () => {
  const [data, setData] = useAtom(dataAtom);
  const [tempKey, setTempKey] = useState();

  return (
    <section className="p-section 2xl:mt-[-240px]">
      {/*//*TITLE ________________________________________________________________________________*/}
      <m.div
        initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
          type: "spring",
          delay: 0.2,
        }}
        className="2xl:px-[85px] sm:px-[40px] px-[12px]"
      >
        <div className="p-title sm:text-[28px] text-[22px]">
          Explora mis últimos trabajos
        </div>
        <div className="p-subtitle sm:text-[16px] text-[14px]">
          Aquí encontrarás una selección de mis proyectos más destacados.
        </div>
      </m.div>

      {/*//* PROJECTS________________________________________________________________________________*/}
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
          className="grid-container 2xl:px-[85px] sm:px-[40px] px-[12px]"
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
                        <div className="tooltip fixedCenterX w-[100px]">
                          Visitar página
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
                        <div className="volver hover:text-white lg:pl-14 pl-4 lg:mt-9 mt-16 inter">
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

      {/*//*FOOTER ________________________________________________________________________________*/}
      <Footer />
    </section>
  );
};

export default Projects;
