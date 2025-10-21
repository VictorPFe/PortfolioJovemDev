"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProjectProps {
  image: StaticImageData;
  alt: string;
  tecnologia: string[];
  online?: string;
  github?: string;
  description: string;
  title: string;
  site?: string;
  classname?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  image,
  alt,
  online,
  description,
  title,
  github,
  site,
  tecnologia,
  classname
}) => {
  return (
    <div className="flex justify-center max-w-[1280px] gap-4">
      <div className="bg-[#0D1117] p-5 rounded-2xl w-[300px] overflow-hidden shadow-lg shadow-[#0a0a0a]/60 duration-300 hover:-translate-y-2 hover:shadow-[#38e1c6]/30">
        
        {/* Imagem */}
        <div>
          <div className="bg-white w-full h-55 rounded-2xl overflow-hidden relative justify-center items-center flex">
            <Image src={image} alt={alt} className="object-cover" priority />
          </div>
        </div>

        {/* Título */}
        <h3 className="font-bold text-white mt-4 text-lg">{title}</h3>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 my-3">
          {tecnologia.map((tec, index) => (
            <span 
            key={index}
            className="rounded-full text-[#38E1C6] bg-[#141C27] py-1 px-3 font-semibold text-[0.7rem] shadow-sm shadow-[#38E1C6]/10">
              {tec}
            </span>
          ))}
        </div>

        {/* Descrição do Projeto */}
        <p className="text-[#D3D3D3] text-[0.85rem] leading-relaxed">{description}</p>

        {/* Botão */}
        <div className="flex gap-2 mt-5 justify-center">
          
          <button className="py-2 px-5 rounded-lg bg-[#02050A] text-[#38E1C6] font-bold text-sm transiton-all duration-200 hover:bg-[#38E1C6] hover:text-[#02050A]">
            <a href={github}>Github</a>
          </button>

          {site && (
            <a 
              href={site} 
              className={`py-2 px-5 rounded-lg bg-[#141c27] text-[#38E1C6] font-bold text-sm transition-all duration-200 hover:bg-[#38E1C6] hover:text-[#02050A] ${classname}`} 
              rel='noopener noreferrer' 
              target="_blank">
              {online || "Online"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProject;