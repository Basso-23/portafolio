import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Modal from "./Modal";
import Back from "@/icons/Back";
import Visit from "@/icons/Visit";
import JS from "@/icons/technology/JS";
import React_logo from "@/icons/technology/React";
import Next from "@/icons/technology/Next";
import Tailwind from "@/icons/technology/Tailwind";
import Astro from "@/icons/technology/Astro";
import Firebase from "@/icons/technology/Firebase";
import Html from "@/icons/technology/Html";
import Css from "@/icons/technology/Css";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";

const Hero = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [nameIndex, setNameIndex] = useState(originalData.length - 1);
  const [randomName, setRandomName] = useState();
  const [tempKey, setTempKey] = useState();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const selectedProjectName = originalData[nameIndex].name;
    setRandomName(selectedProjectName);
  }, [nameIndex, originalData]);

  const siguiente = () => {
    if (nameIndex === 0) {
      setNameIndex(originalData.length - 1);
    } else {
      setNameIndex(nameIndex - 1);
    }
    setKey((prevKey) => prevKey + 1);
  };

  const anterior = () => {
    if (nameIndex === originalData.length - 1) {
      setNameIndex(0);
    } else {
      setNameIndex(nameIndex + 1);
    }
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nameIndex === 0) {
        setNameIndex(originalData.length - 1);
      } else {
        setNameIndex(nameIndex - 1);
      }
      setKey((prevKey) => prevKey + 1);
    }, 20000);

    return () => clearTimeout(timer); // Limpiar el timeout anterior cuando el efecto se vuelva a ejecutar
  }, [nameIndex, originalData]);

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
    <section className="2xl:min-h-[800px] min-h-[500px]">
      {originalData
        .filter((item) => item.name === randomName)
        .map((item, index) => (
          <div key={index}>
            {/*//*DESKTOP /////////////////////////////////////////////////////////////////////////////*/}
            <div className="justify-end 2xl:flex hidden">
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
                  backgroundPosition: item.position,
                }}
                className="h-image"
              >
                <div className="shadowBot"></div>
              </m.div>

              <div className="h-left">
                <div className="h-info-container shadowLeft">
                  <div className="h-info 2xl:px-[85px] sm:px-[40px] px-[12px]">
                    <div className="h-title">{item.name}</div>
                    <div className="h-category">
                      Categoría • {item.category}
                    </div>
                    <div className="h-summary">{item.summary}</div>

                    <div className="w-fit text-[#dadada]">
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

                    <div className="h-buttons">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div
                            onClick={() => setTempKey(item.name)}
                            className="h-moreinfo hover:bg-[#ff9249]"
                          >
                            <span className="text-[13px] leading-none">
                              MÁS INFORMACIÓN
                            </span>
                          </div>
                        </AlertDialogTrigger>
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
                      <a
                        target="_blank"
                        href={item.url}
                        className="tooltip-container h-visit hover:text-[#ff9249] hover:border-[#ff9249]"
                      >
                        <Visit />
                        <div className="tooltip fixedCenterX w-[100px] ">
                          Visitar página
                        </div>
                      </a>
                    </div>

                    <div key={key} className="mt-7 slide-loader"></div>
                  </div>
                </div>

                <div className="arrows-container flex fixedCenterY">
                  <div
                    onClick={() => {
                      anterior();
                    }}
                    className="h-arrow hover:opacity-35"
                  >
                    <Back />
                  </div>
                  <div
                    onClick={() => {
                      siguiente();
                    }}
                    className="h-arrow hover:opacity-35 rotate-180"
                  >
                    <Back />
                  </div>
                </div>
                <div className="shadowBot"></div>
              </div>
            </div>

            {/*//*MOBILE /////////////////////////////////////////////////////////////////////////////*/}
            <div className="h-mobile 2xl:hidden flex">
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
                  backgroundPosition: item.position,
                }}
                className="h-mobile-image "
              >
                <div
                  style={{
                    marginTop: 0,
                  }}
                  className="arrows-container fixedCenterY md:flex hidden"
                >
                  <div
                    onClick={() => {
                      anterior();
                    }}
                    className="h-arrow hover:opacity-35"
                  >
                    <Back />
                  </div>
                  <div
                    onClick={() => {
                      siguiente();
                    }}
                    className="h-arrow hover:opacity-35 rotate-180"
                  >
                    <Back />
                  </div>
                </div>
                <div className="shadowBot"></div>
              </m.div>

              <div className=" bg-[#010001] relative">
                <div className="h-mobile-info fixedCenterX 2xl:px-[85px] sm:px-[40px] px-[12px]">
                  <div className="h-mobile-title text-[min(9.5vw,45px)]">
                    {item.name}
                  </div>
                  <div style={{ marginTop: 6 }} className="h-category">
                    Categoría • {item.category}
                  </div>
                  <div
                    style={{ width: "100%", marginTop: 20 }}
                    className="h-buttons sm:max-w-[300px]"
                  >
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div
                          onClick={() => setTempKey(item.name)}
                          className="h-moreinfo-mobile hover:bg-[#ff9249] "
                        >
                          <span className="text-[13px] leading-none">
                            MÁS INFORMACIÓN
                          </span>
                        </div>
                      </AlertDialogTrigger>
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
                    <a
                      target="_blank"
                      href={item.url}
                      className="tooltip-container h-visit hover:text-[#ff9249] hover:border-[#ff9249]"
                    >
                      <Visit />
                      <div className="tooltip fixedCenterX w-[100px] ">
                        Visitar página
                      </div>
                    </a>
                  </div>
                  <div key={key} className="mt-7 slide-loader"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Hero;
