import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import RenderImage from "../utils/RenderImage";
import Github from "@/icons/Github";
import Visit from "@/icons/Visit";
import JS from "@/icons/technology/JS";
import React_logo from "@/icons/technology/React";
import Next from "@/icons/technology/Next";
import Tailwind from "@/icons/technology/Tailwind";
import Astro from "@/icons/technology/Astro";
import Firebase from "@/icons/technology/Firebase";
import Html from "@/icons/technology/Html";
import Css from "@/icons/technology/Css";

const Modal = ({ project }) => {
  const [originalData, setOriginalData] = useAtom(originalAtom);

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
    <section className="w-full lg:h-[83%] lg:mt-5 h-[100svh] inter">
      {originalData
        .filter((item) => item.name === project)
        .map((item, index) => (
          <div key={index} className="w-full h-full">
            {/*//*DESKTOP/////////////////////////////////////////////////////////////////////////////*/}
            <div className="modal-container lg:flex hidden">
              <div className="modal-left">
                <div className="modal-name">{item.name}</div>
                <div className="modal-summary">{item.summary}</div>

                <div className="modal-info mt-4">
                  <div>Estado</div>
                  <div
                    style={{ marginTop: 0.5, justifyContent: "end" }}
                    className="pulse-container"
                  >
                    <div className="pulse"></div>
                    <div className="text-white">En línea</div>
                  </div>
                </div>

                <div className="modal-info">
                  <div>Categoría</div>
                  <div className="text-end capitalize">{item.category}</div>
                </div>

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

                <div className="left-end">
                  <div className="modal-buttons-container">
                    <a
                      target="_blank"
                      href={item.url}
                      className="modal-visit hover:bg-[#ff9249]"
                    >
                      <span className="text-[13px] leading-none">
                        Visitar página
                      </span>
                      <Visit />
                    </a>
                    <a
                      target="_blank"
                      href={item.github}
                      className="modal-github hover:bg-[#343434]"
                    >
                      <Github />
                      <span className="text-[13px] leading-none">Github</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="modal-right">
                <div className="pointer-events-none">
                  <RenderImage url={item.image} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h1 }}
                  className="h1-content"
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.h2 }}
                  className="h2-content"
                ></div>
              </div>
            </div>

            {/*//*MOBILE/////////////////////////////////////////////////////////////////////////////*/}
            <div className="modal-container-mobile lg:hidden block">
              <div className="pointer-events-none mt-0">
                <RenderImage url={item.image} />
              </div>

              <div style={{ marginTop: 24 }} className="modal-name">
                {item.name}
              </div>
              <div className="modal-summary">{item.summary}</div>

              <div
                style={{ marginTop: 24 }}
                className="modal-buttons-container"
              >
                <a
                  target="_blank"
                  href={item.url}
                  className="modal-visit hover:bg-[#ff9249]"
                >
                  <span className="text-[13px] leading-none">
                    Visitar página
                  </span>
                  <Visit />
                </a>
                <a
                  target="_blank"
                  href={item.github}
                  className="modal-github hover:bg-[#343434]"
                >
                  <Github />
                  <span className="text-[13px] leading-none">Github</span>
                </a>
              </div>

              <div className="modal-info mt-4">
                <div>Estado</div>
                <div
                  style={{ marginTop: 0.5, justifyContent: "end" }}
                  className="pulse-container"
                >
                  <div className="pulse"></div>
                  <div className="text-white">En línea</div>
                </div>
              </div>

              <div className="modal-info">
                <div>Categoría</div>
                <div className="text-end capitalize">{item.category}</div>
              </div>

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

              <div
                dangerouslySetInnerHTML={{ __html: item.h1 }}
                className="h1-content"
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: item.h2 }}
                className="h2-content"
              ></div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Modal;
