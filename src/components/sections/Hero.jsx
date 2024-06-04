import React, { useState, useEffect } from "react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import RenderImage from "@/components/utils/RenderImage";
import { toast } from "sonner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "@fontsource-variable/inter";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Modal from "./Modal";
import Back from "@/icons/Back";
import { motion as m } from "framer-motion";
import Visit from "@/icons/Visit";
import Plus from "@/icons/Plus";
import Info from "@/icons/Info";
import JS from "@/icons/technology/JS";
import React_logo from "@/icons/technology/React";
import Next from "@/icons/technology/Next";
import Tailwind from "@/icons/technology/Tailwind";
import Astro from "@/icons/technology/Astro";
import Firebase from "@/icons/technology/Firebase";
import Html from "@/icons/technology/Html";
import Css from "@/icons/technology/Css";

const Hero = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [nameIndex, setNameIndex] = useState(originalData.length - 1);
  const [randomName, setRandomName] = useState();

  useEffect(() => {
    const selectedProjectName = originalData[nameIndex].name;
    setRandomName(selectedProjectName);
  }, [nameIndex]);

  const siguiente = () => {
    if (nameIndex === 0) {
      setNameIndex(originalData.length - 1);
    } else {
      setNameIndex(nameIndex - 1);
    }
  };

  const anterior = () => {
    if (nameIndex === originalData.length - 1) {
      setNameIndex(0);
    } else {
      setNameIndex(nameIndex + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      siguiente();
    }, 20000);

    return () => clearTimeout(timer); // Limpiar el timeout anterior cuando el efecto se vuelva a ejecutar
  }, [nameIndex]);

  const skills = {
    Next: <Next />,
    Javascript: <JS />,
    React: <React_logo />,
    Tailwind: <Tailwind />,
    Astro: <Astro />,
    Firebase: <Firebase />,
    HTML: <Html />,
    CSS: <Css />,
  };

  const TechToRender = ({ name }) => {
    const Tech = skills[name];
    return Tech ? Tech : null;
  };

  return (
    <section className="pageSize min-h-[850px]">
      {originalData
        .filter((item) => item.name === randomName)
        .map((item, index) => (
          <div key={index} className="z-40 ">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: "easeOut",
                type: "spring",
                delay: 0,
              }}
              key={randomName}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="w-[100%] max-h-[850px] aspect-video bg-right bg-no-repeat bg-cover relative 2xl:block hidden"
            >
              <div className=" w-full h-full bottom-0 bannerShadowBot absolute"></div>
            </m.div>

            <div className="w-[100%] max-h-[850px] aspect-video absolute top-0 2xl:block hidden">
              <div
                key={randomName}
                className=" left-0 bannerShadowLeft absolute h-full w-[72%] z-50"
              >
                <div className="w-[50%] h-full 2xl:px-[85px] sm:px-[40px] px-[12px] flex flex-col justify-center -mt-24">
                  <div className="w-[100%] max-w-[400px] text-[60px] font-semibold">
                    {item.name}
                  </div>
                  <div className="text-[14px] text-[#6e6e6e] font-medium capitalize mt-4 w-fit">
                    Categoría | {item.category}
                  </div>
                  <div className="text-[16px] text-[#dadada] font-medium w-[100%] max-w-[450px] mt-2">
                    {item.summary}
                  </div>

                  <div className=" w-fit text-[#dadada]">
                    <div className="modal-tech">
                      {item.tech.map((item, index) => (
                        <div
                          key={index}
                          style={{ cursor: "auto" }}
                          className="tooltip-container w-fit"
                        >
                          <TechToRender name={item} />
                          <div className="tooltip fixedCenterX w-fit min-w-[65px]">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" flex gap-3 mt-12 items-center w-fit">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="transition-all gap-1 rounded-smm bg-[#F47420] hover:bg-[#ff9249] w-fit h-[40px] flex justify-center items-center text-[20px] font-semibold text-black px-6 cursor-pointer select-none">
                          <Info />
                          <span className="text-[13px] leading-none">
                            MÁS INFORMACIÓN
                          </span>
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent asChild>
                        <div>
                          <AlertDialogCancel asChild>
                            <div
                              style={{
                                fontFamily: "Inter Variable, sans-serif",
                              }}
                              className="volver hover:text-white lg:pl-14 pl-4 lg:mt-9 mt-16"
                            >
                              <div className="lg:pb-0 pb-4">
                                <Back />
                              </div>

                              <span className="lg:pb-0 pb-4">Volver</span>
                            </div>
                          </AlertDialogCancel>
                          <Modal project={item.name} />
                        </div>
                      </AlertDialogContent>
                    </AlertDialog>

                    <a
                      target="_blank"
                      href={item.url}
                      className="rounded-smm tooltip-container w-fit transition-all h-full aspect-square border-2 border-[#F47420] text-[#F47420] hover:text-[#ff9249] hover:border-[#ff9249] flex justify-center items-center text-[20px] cursor-pointer select-none"
                    >
                      <Visit />
                      <div className="tooltip fixedCenterX w-fit min-w-[80px] ">
                        Visitar sitio
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between select-none absolute w-full -mt-24 text-[38px] fixedCenterY px-4 z-50">
                <div
                  onClick={() => {
                    anterior();
                  }}
                  className=" hover:opacity-35 text-white cursor-pointer transition-all"
                >
                  <Back />
                </div>
                <div
                  onClick={() => {
                    siguiente();
                  }}
                  className=" hover:opacity-35 text-white cursor-pointer transition-all rotate-180"
                >
                  <Back />
                </div>
              </div>
              <div className=" w-full h-full bottom-0 bannerShadowBot absolute"></div>
            </div>

            <div className="2xl:hidden flex h-[70svh] w-full flex-col">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0,
                }}
                key={randomName}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="w-[100%] h-[75%] bg-center bg-no-repeat bg-cover relative "
              >
                <div className=" w-full h-full bottom-0 bannerShadowBot absolute"></div>
              </m.div>

              <div className=" bg-[#010001] flex-1"></div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Hero;
