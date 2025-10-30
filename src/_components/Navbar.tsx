"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import JD from "../../public/logo/JD.svg";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Pega a rota atual

  const links = [
    {href: "/#", label: "Home"},
    {href: "/#sobremim", label: "Sobre mim"},
    {href: "/#contatos", label: "Contatos"},
    {href: "/#habilidades", label: "Habilidades"},
    {href: "/#projetos", label: "Projetos"},
  ]

  return (
    <header className="w-full fixed top-0 z-11">
      <div className="bg-[#141C27] flex justify-between items-center md:mx-20 lg:mx-30 xl:mx50 shadow-xl/30">
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
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "text-[#38E1C6]" // Ativo
                      : "hover:text-[#38E1C6]" // hover
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTÕES (CV + MENU) */}
        <div>
          <a
            href="/Curriculo/Curriculo-VictorPessoa.pdf"
            download="Curriculo-Victor-Pessoa"
            className="xl:flex hidden"
          >
            <button className="font-bold font-[family-name:var(--poppinsSans)] text-[#0D1117] hover:text-white transition-[0.3s] hover:bg-[#0D1117] bg-[#38E1C6] h-17 w-35 flex justify-center items-center cursor-pointer">
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
          {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "text-[#38E1C6]" // Ativo
                      : "hover:text-[#38E1C6]" // hover
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
           <a
            href="/Curriculo/Curriculo-VictorPessoa.pdf"
            download="Curriculo-Victor-Pessoa"
            className="font-[family-name:var(--poppinsSans)]"
          >
            <button className="rounded font-bold  text-[#0D1117] font-[family-name:var(--poppinsSans)] hover:text-white transition-[0.3s] hover:bg-[#0D1117] bg-[#38E1C6] h-17 w-35 flex justify-center items-center cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
      )}
    </header>
  );
}

