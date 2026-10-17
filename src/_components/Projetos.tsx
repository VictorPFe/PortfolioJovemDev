"use client";
// import { useState } from "react";
// import { Modal } from "../UI/Modal/Modal";

import React from "react";
import CardProject from "@/UI/Card_Project/CardProject";
import InicialCadastro from "../../public/images/NextCrud/Inicial.png";
import burguerDelicious from '../../public/images/CardapioHamburgueria/BurgerDelicious.png';
import petshop from "../../public/images/PetShop/PetShop.png";
import spotifyF from '../../public/images/Spotify/Spotify.png';
import barbarFlow from '../../public/images/BarberFlow/BarberFlow.png';




export function Projetos() {
  const NextCrud = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Node.js",
  ];

  const burgerD = [
    "HTML",
    "CSS",
    "JavaScript"
  ]
  const montyH = [
    "HTML",
    "CSS",
    "Javascript",
    "Node.JS",
    "Express",
    "PostgreSQL"
  ]
  const petS = [
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "AOS"
  ]
  const spotify = [
    "HTML",
    "Bootstrap"
  ]


 
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
            tecnologia={NextCrud}
            description="Projeto de cadastro de cliente, gerenciamento simples de cliente com operações CRUD (Criar, Ler, Atualizar, Excluir). "
            github="https://github.com/VictorPFe/NextCrud"
          />
          <CardProject
            image={burguerDelicious}
            alt="Cardapio Digital Hamburgueria"
            title="Burger Delicious"
            tecnologia={burgerD}
            site="https://cardapio-de-hamburgueria-iota.vercel.app/"
            description="Projeto de um cardápio digital desenvolvido para uma hamburgueria. O site apresenta os produtos com imagens, descrições e preços, além de um carrinho funcional para adicionar itens e finalizar o pedido. O design é moderno, responsivo e fácil de usar, oferecendo uma boa experiência tanto no celular quanto no computador."
            github="https://github.com/VictorPFe/Cardapio-de-Hamburgueria"
          />
          <CardProject
            image={barbarFlow}
            alt="BarberFlow - Barber Studio"
            title="BarberFlow - Barber Studio"
            tecnologia={montyH}
            site="https://barberflow-seven-omega.vercel.app/"
            description="Barbearia com sistema de agendamento integrado ao sistema web - 'Ainda em desenvolvimento'"
            github="https://github.com/VictorPFe/BarberFlow/"
          />
          <CardProject
            image={petshop}
            alt="Pet Shop"
            title="Pet Shop"
            tecnologia={petS}
            site="https://pet-shop-dev.vercel.app/"
            description="PetShopDev é uma landing page que apresenta uma pet shop fictícia dedicada ao cuidado e bem-estar dos animais. O site destaca serviços como banho e tosa, consulta veterinária, vacinação, adestramento e táxi pet, além de depoimentos de clientes satisfeitos e informações de contato claras."
            github="https://github.com/VictorPFe/PetShopDev"
          />
          <CardProject
            image={spotifyF}
            alt="Spotify"
            title="Spotify"
            tecnologia={spotify}
            site="https://spotify-music-psi.vercel.app/"
            description="Landing page inspirada no Spotify, desenvolvida com foco em um design moderno, responsivo e visualmente atrativo. O projeto apresenta uma interface organizada e intuitiva, utilizando HTML, CSS e Bootstrap para criar uma experiência agradável em diferentes dispositivos. A página foi criada para demonstrar habilidades em desenvolvimento front-end, estruturação de layouts e estilização de interfaces modernas."
            github="https://github.com/VictorPFe/Spotify---Music"
            classname="object-cover "
          />
       
        </div>
      </div>
    </section>
  );
}
