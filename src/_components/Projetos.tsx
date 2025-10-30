"use client";
// import { useState } from "react";
// import { Modal } from "../UI/Modal/Modal";

import React from "react";
import CardProject from "@/UI/Card_Project/CardProject";
import InicialCadastro from "../../public/images/NextCrud/Inicial.png";
import burguerDelicious from '../../public/images/CardapioHamburgueria/BurgerDelicious.png';
import montyHall from "../../public/images/MontyHall/MontyHall.png";
import petshop from "../../public/images/PetShop/PetShop.png";


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
    "Vue.js",
    "CSS"
  ]
  const petS = [
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "AOS"
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
            image={montyHall}
            alt="Problema de Monty Hall"
            title="Problema de Monty Hall"
            tecnologia={montyH}
            site="https://problema-monty-hall.vercel.app/"
            description="Simulação interativa do famoso problema de probabilidade de Monty Hall. O usuário escolhe uma porta, uma é revelada e ele decide se troca ou não. O projeto mostra, de forma prática, como a troca aumenta as chances de vitória."
            github="https://github.com/VictorPFe/ProblemaMontyHall"
          />
          <CardProject
            image={petshop}
            alt="Pet Shop"
            title="Pet Shop"
            tecnologia={petS}
            site="https://pet-shop-dev.vercel.app/"
            description="Simulação interativa do famoso problema de probabilidade de Monty Hall. O usuário escolhe uma porta, uma é revelada e ele decide se troca ou não. O projeto mostra, de forma prática, como a troca aumenta as chances de vitória."
            github="https://github.com/VictorPFe/PetShopDev"
          />
       
        </div>
      </div>
    </section>
  );
}
