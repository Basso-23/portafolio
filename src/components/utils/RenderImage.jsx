import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { imageAtom } from "@/atom";
import Tilt from "react-parallax-tilt";

const RenderImage = ({ url }) => {
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

  useEffect(() => {
    if (imageLoaded) {
      const imagen = new Image();
      imagen.src = url;
      imagen.onload = () => {
        setTimeout(() => {
          setImageLoaded(false);
        }, 1300);
      };
    }
  }, [url, imageLoaded, setImageLoaded]);

  return (
    <div className="relative bg-[#111111] rounded-sm ">
      {imageLoaded && (
        <div className="absolute fixedCenterXnY">
          <div className="loader"></div>
        </div>
      )}
      <Tilt
        scale={1.03}
        transitionSpeed={2500}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        style={{
          backgroundImage: `url(${url})`,
          visibility: imageLoaded ? "hidden" : "visible",
        }}
        className="image"
      ></Tilt>
    </div>
  );
};

export default RenderImage;
