import React, { useState, useEffect } from "react";
import Send from "@/icons/Send";
import Github from "@/icons/Github";
import RenderImage from "@/components/utils/RenderImage";
import { toast } from "sonner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "@fontsource-variable/inter";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";

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
      <div className="grid lg:grid-cols-2 items-center sm:justify-start justify-center">
        <div>
          {/*//*________________________________________________________________________________*/}
          <div className="title sm:text-[48px] text-[42px] sm:text-start text-center">
            Explora mis
          </div>
          <div className="title sm:text-[48px] text-[42px] sm:text-start text-center sm:mt-10 mt-9 ">
            últimos trabajos
          </div>
          <div className="subtitle sm:pt-8 pt-6 sm:text-start text-center">
            ¡Bienvenido! Aquí encontrarás una selección de mis proyectos más
            destacados.
          </div>

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
            <div key={index} className="relative lg:block hidden">
              <RenderImage url={item.image} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Hero;
