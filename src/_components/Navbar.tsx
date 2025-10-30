"use client";

import { useState } from "react";
import Image from "next/image";
import JD from "../../public/logo/JD.svg";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-11">
      <div className="bg-[#141C27] flex justify-between items-center  mx-10 md:mx-20 lg:mx-50 shadow-xl/30">
        {/* LOGO */}
        <div className="flex items-center">
          <nav className="bg-[#38E1C6] h-17 w-17 flex justify-center items-center">
            <a href="#">
              <Image
                src={JD}
                alt="Jovem Dev - Logo"
                className="text-[#0D1117] h-11 w-11"
              />
            </a>
          </nav>
          <p className=" pl-4 text-white font-[family-name:var(--poppinsSans)] font-bold">
            JOVEMDEV
          </p>
        </div>

        {/* LINKS - VISÍVEL APENAS EM TELAS GRANDES */}
        <nav className="text-white font-[family-name:var(--interSans)] font-bold xl:flex hidden">
          <ul className="flex gap-7">
            <li>
              <Link href="#" className="hover:text-[#38E1C6]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#sobremim" className="hover:text-[#38E1C6]">
                Sobre mim
              </Link>
            </li>
            <li>
              <Link href="#contatos" className="hover:text-[#38E1C6]">
                Contatos
              </Link>
            </li>
            <li>
              <Link href="#habilidades" className="hover:text-[#38E1C6]">
                Habilidades
              </Link>
            </li>
            <li>
              <Link href="#projetos" className="hover:text-[#38E1C6]">
                Projetos
              </Link>
            </li>
          </ul>
        </nav>

        {/* BOTÕES (CV + MENU) */}
        <div>
          <a
            href="/Curriculo/Curriculo-VictorPessoa.pdf"
            download="Curriculo-Victor-Pessoa"
            className="xl:flex hidden"
          >
            <button className="font-bold text-[#0D1117] hover:text-white transition-[0.3s] hover:bg-[#0D1117] bg-[#38E1C6] h-17 w-35 flex justify-center items-center cursor-pointer">
              Download CV
            </button>
          </a>

          {/* BOTÃO MENU MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#38E1C6] h-17 w-17 flex justify-center items-center cursor-pointer xl:hidden"
          >
            {menuOpen ? (
              <X className="text-[#0D1117] h-8 w-8" />
            ) : (
              <List className="text-[#0D1117] h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="rounded-b-sm xl:hidden bg-[#141C27] font-[family-name:var(--interSans)] text-white font-bold flex flex-col items-center py-6 space-y-5 shadow-lg mx-10 md:mx-20 lg:mx-50 ">
          <Link
            rel="stylesheet"
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#38E1C6]"
          >
            Home
          </Link>
          <Link
            rel="stylesheet"
            href="#sobremim"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#38E1C6]"
          >
            Sobre mim
          </Link>
          <Link
            rel="stylesheet"
            href="#contatos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#38E1C6]"
          >
            Contato
          </Link>
          <Link
            rel="stylesheet"
            href="#habilidades"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#38E1C6]"
          >
            Habilidades
          </Link>
          <Link
            rel="stylesheet"
            href="#projetos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#38E1C6]"
          >
            Projetos
          </Link>
           <a
            href="/Curriculo/Curriculo-VictorPessoa.pdf"
            download="Curriculo-Victor-Pessoa"
            className=""
          >
            <button className="rounded font-bold text-[#0D1117] hover:text-white transition-[0.3s] hover:bg-[#0D1117] bg-[#38E1C6] h-17 w-35 flex justify-center items-center cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

{
  /* <button className="bg-[#38E1C6] h-17 w-17 flex justify-center items-center cursor-pointer xl:hidden">
  <List className="text-[#0D1117] h-9 w-9" />
</button> */
}
