"use client";

import React from "react";
import { useState } from "react";
import { Card } from "../UI/Card/Card";
import HTML from "../../public/HTML 1.svg";
import CSS from "../../public/CSS 1.svg";
import JavaScript from "../../public/JS 1.svg";
import TypeScript from "../../public/TypeScript 1.svg";
import Java from "../../public/Java 1.svg";
import ReactJS from "../../public/React 1.svg";
import NextJs from "../../public/NextJs.svg";
import TailwindCSS from "../../public/TailwindCSS.svg";
import VueJS from "../../public/VueJs.svg";

export function Habilidades() {
  const [message, setMessage] = useState("");

  return (
    <section className="bg-[#0D1117] ">
      <div className="max-w-[1280] mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 flex flex-col xl:flex-row items-center justify-center py-30">

        <div className="flex flex-col items-center w-[600px] py-10">
          <h3 className="text-[#38E1C6] font-bold text-[1.5rem]">
            HABILIDADES
          </h3>
          <p className="text-[#D3D3D3] text-[1rem] text-center">
            {message || "Passe o cursor do mouse no card para ler o card"}
          </p>
        </div>

        <div className="lg:flex flex-wrap gap-3 justify-center overflow-hidden max-w-[530px] grid grid-cols-3">
          <Card
            image={HTML}
            alt="HTML"
            message="Linguagem de marcação para estruturar páginas web"
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={CSS}
            alt="CSS"
            message="Estiliza elementos HTML para criar layouts bonitos"
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={JavaScript}
            alt="JavaScript"
            message="	Linguagem essencial para interatividade e lógica no front-end moderno."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={TypeScript}
            alt="TypeScript"
            message="JavaScript com tipagem estática para mais segurança e produtividade."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={Java}
            alt="Java"
            message="Linguagem robusta e orientada a objetos, muito usada em back-end e apps."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={ReactJS}
            alt="ReactJS"
            message="Biblioteca para construir interfaces dinâmicas e reativas com eficiência."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={NextJs}
            alt="NextJs"
            message="Framework React com SSR, rotas otimizadas e ótimo desempenho."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={TailwindCSS}
            alt="TailwindCSS"
            message="Framework de utilitários que permite estilizar direto no HTML com agilidade."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
          <Card
            image={VueJS}
            alt="VueJS"
            message="Framework progressivo para criar UIs reativas com estrutura simples."
            onMouseEnter={setMessage}
            onMouseLeave={() => setMessage("")}
          />
        </div>

      </div>
      
    </section>
  );
}
