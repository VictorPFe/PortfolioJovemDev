import Image from "next/image";
import fotoPerfil from "../../public/perfil/Foto.png";

export function Header() {
  return (
    <header className="bg-[#0D1117] relative">
      <div className="absolute top-0 right-40 w-60 h-full transform -skew-x-20 bg-[#141C27] z-0"></div>
      <div className="relative mx-10 md:mx-20 lg:mx-50 flex flex-col xl:flex-row justify-center items-center pt-44 pb-34 gap-20 z-10">
        <div className="text-white">
          <h1 className="text-[2.7rem] 2xl:text-6xl leading-10 font-black mb-6">
            OLÁ, EU SOU VICTOR! <br />
            <span className="text-3xl 2xl:text-4xl text-[#38E1C6]">
              DESENVOLVEDOR FRONT-END
            </span>
          </h1>

          <p className="text-[#D3D3D3] text-lg leading-relaxed">
            Desenvolvedor Front-End apaixonado por criar interfaces modernas,
            performáticas e centradas no usuário.
            Com expertise em React, Next.js, TypeScript e Tailwind CSS, alio
            design e tecnologia para transformar ideias complexas em
            experiências digitais intuitivas e envolventes. Tenho um olhar
            atento aos detalhes e foco em usabilidade, desempenho e código
            limpo. Minha missão é entregar soluções que encantem tanto usuários
            quanto equipes de produto.
          </p>
        </div>

        {/* Bloco da imagem */}
        <div className="flex-shrink-0 xl:flex hidden">
          <Image
            src={fotoPerfil}
            alt="Foto Perfil - JovemDev"
            width={400}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
