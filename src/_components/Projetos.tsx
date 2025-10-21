"use client";
// import { useState } from "react";
// import { Modal } from "../UI/Modal/Modal";

import React from "react";
import InicialCadastro from "../../public/images/NextCrud/Inicial.png";
import CardProject from "@/UI/Card_Project/CardProject";

export function Projetos() {
  const tecnologias = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Node.js",
  ];
 
  return (
    <section
      className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 py-20"
      id="projetos"
    >
      <div className="max-w-[1280] mx-auto">
        <div>
          <h1 className="text-[#38E1C6] font-bold mb-2 text-[1.2rem]">
            MEUS PROJETOS RECENTES
          </h1>

          <h2 className="text-white font-bold mb-8 text-[1.4rem]">
            CÓDIGO, DESIGN E ESTRATÉGIA PARA <br /> LEVAR SUA MARCA ALÉM DO
            ÓBVIO
          </h2>
        </div>
        {/* Card do Projeto */}

        <div className="flex flex-wrap justify-center gap-5 ">
          
          <CardProject
            image={InicialCadastro}
            alt="Cadastro Crud"
            title="NextCrud"
            tecnologia={tecnologias}
            classname=""
            online="Online"
            description="Projeto de cadastro de usuário, onde pode ser feito tanto a inclusão com a exclusão de mais usuários... "
            github="https://github.com/VictorPFe/NextCrud"
            site="oooo"
          />
       
        </div>
      </div>
    </section>
  );
}
