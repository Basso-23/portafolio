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
import Modal from "../Modal";
import Back from "@/icons/Back";
import { motion as m } from "framer-motion";

const Hero = () => {
  const handleToast = () => {
    toast.success("Correo electrónico copiado exitosamente");
  };

  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [randomName, setRandomName] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * originalData.length);
    const selectedProjectName = originalData[randomIndex].name;
    setRandomName(selectedProjectName);
  }, [originalData]);

  return (
    <section className="pageSize">
      <div className="grid lg:grid-cols-2 items-center sm:justify-start justify-center min-h-96">
        <div>
          {/*//*________________________________________________________________________________*/}
          <m.div
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              delay: 0,
            }}
            className="title sm:text-[48px] text-[42px] sm:text-start text-center"
          >
            Explora mis
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              delay: 0.05,
            }}
            className="title sm:text-[48px] text-[42px] sm:text-start text-center sm:mt-10 mt-9 "
          >
            últimos trabajos
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              delay: 0.1,
            }}
            className="subtitle sm:pt-8 pt-6 sm:text-start text-center"
          >
            ¡Bienvenido! Aquí encontrarás una selección de mis proyectos más
            destacados.
          </m.div>

          {/*//*________________________________________________________________________________*/}
          <div className="buttons-container sm:grid-cols-2 grid-cols-1 sm:mx-0 mx-auto">
            <CopyToClipboard
              text={"carlos.baso23@gmail.com"}
              onCopy={() => {
                handleToast();
              }}
            >
              <div className="correo-button hover:bg-[#d1d1d1]">
                <Send />
                <span>Correo electrónico</span>
              </div>
            </CopyToClipboard>
            <a
              target="_blank"
              href="https://github.com/Basso-23"
              className="github-button hover:bg-[#343434]"
            >
              <Github />
              <span>Github</span>
            </a>
          </div>
        </div>

        {/*//*________________________________________________________________________________*/}
        {originalData
          .filter((item) => item.name === randomName)
          .map((item, index) => (
            <m.div
              initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                delay: 0.1,
              }}
              key={index}
              className="relative lg:block hidden"
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div>
                    <RenderImage url={item.image} />
                  </div>
                </AlertDialogTrigger>
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
                    <Modal project={item.name} />
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </m.div>
          ))}
      </div>
    </section>
  );
};

export default Hero;
