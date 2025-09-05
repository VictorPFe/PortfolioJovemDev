// "use client";

import React from "react";
// import { useState } from "react";
// import { Modal } from "../UI/Modal/Modal";
import InicialCadastro from "../../public/images/NextCrud/Inicial.png";
// import NextJs from "../../public/tecnologias/NextJs.svg";
// import TypeScript from "../../public/tecnologias/TypeScript 1.svg";
// import TailwindCSS from "../../public/tecnologias/TailwindCSS.svg";
import Image from "next/image";


export function Projetos() {
  // const [activeId, setActiveId] = useState<number | null>(null);

  // const projetos = [
  //   {
  //     id: 1,
  //     image: InicialCadastro,
  //     alt: "Cadastro Crud Next.js",
  //     message: "Cadastro Simples",
  //     icons: [NextJs, TypeScript, TailwindCSS]
  //   },
  //   {
  //     id: 2,
  //     image: InicialCadastro,
  //     alt: "Cadastro Crud Next.js",
  //     message: "Cadastro Simples",
  //     icons: [NextJs,  TailwindCSS]
  //   },
  // ]

  return (
    <section className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 lg:flex justify-center items-center py-20">
      <h1 className="text-[#38E1C6] font-bold mb-2 text-[1.2rem]">
        MEUS PROJETOS RECENTES
      </h1>

      <h2 className="text-white font-bold mb-8 text-[1.4rem]">
        CÓDIGO, DESIGN E ESTRATÉGIA PARA <br /> LEVAR SUA MARCA ALÉM DO ÓBVIO
      </h2>

      <div className="bg-[#0D1117] w-full p-4 rounded-2xl overflow-hidden">

        <div className="bg-white w-full h-55 rounded-2xl overflow-hidden relative justify-center items-center flex">
          <Image
            src={InicialCadastro}
            alt="Cadastro Crud"
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 my-3">
          <p className="bg-[#02050A] py-1 px-3 rounded text-[#38E1C6] font-bold text-[0.8rem]">
            Next.JS
          </p>
          <p className="bg-[#02050A] py-1 px-3 rounded text-[#38E1C6] font-bold text-[0.8rem]">
            TypeScript
          </p>
          <p className="bg-[#02050A] py-1 px-3 rounded text-[#38E1C6] font-bold text-[0.8rem]">
            TailwindCSS
          </p>
          <p className="bg-[#02050A] py-1 px-3 rounded text-[#38E1C6] font-bold text-[0.8rem]">
            Firebase
          </p>
        </div>

        <p className="text-[#D3D3D3]">
          Projeto de cadastro de usuário, onde pode ser feito tanto a inclusão
          com a exclusão de mais usuários... Projeto utilizando firebase como
          banco de dados, Next.js, TypeScript e TailwindCSS para o front-end.
        </p>

        <div className="flex gap-2 mt-5">

          <button className="py-1 px-3 rounded border text-[#38E1C6] font-bold">
            <a href="">Github</a>
          </button>

          <button className="bg-[#38E1C6] py-1 px-3 rounded text-[#02050A] font-bold">
            <a href="">Ver online</a>
          </button>

        </div>

      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="relative bg-white h-60 rounded-tl-2xl rounded-br-2xl overflow-hidden flex items-center group"
            onMouseEnter={() => setActiveId(projeto.id)}
            onMouseLeave={() => setActiveId(null)}
          >

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>

          {activeId === projeto.id && (
            <div className="absolute w-full text-center z-20 opacity-100 text-white font-bold transition-all duration-300">
              
              <div className="">

                <p className="font-bold mb-2">{projeto.message}</p>
                <div className="flex gap-2 justify-center">
                  {projeto.icons.map((icon, index) => (
                    <Image 
                      key={index}
                      src={icon}
                      alt={`Ícone ${index}`}
                      width={24}
                      height={24}
                      
                    />
                  ))}
                </div>

              </div>

            </div>
          )}  

          <Modal
            image={projeto.image}
            alt={projeto.alt}
            message={projeto.message}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          </div>
        ))}
      </div> */}
    </section>
  );
}
