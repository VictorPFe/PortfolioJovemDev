"use client";

import React from "react";
import { useForm } from "@formspree/react";

export function Contato() {
  const [state, handleSubmit] = useForm("xvgwndqg");

  const handleCustomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const nome = form.nome.value;
    const email = form.email.value;
    const telefone = form.telefone.value;
    const mensagem = form.mensagem.value;

    // === Envia para o Formspree (E-MAIL)
    await handleSubmit(e);

    const texto = `Olá!%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${telefone}%0A*Mensagem:* ${mensagem}`;
    const numero = "5571992989634";
    const link = `https://wa.me/${numero}?text=${texto}`;
    window.open(link, "_blank");

    form.reset();
  };

  return (
    <section
      className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 lg:flex justify-center items-center"
      
    >
      <div className="lg:flex justify-center items-center lg:w-[1280]" id="contatos">
        <div className="w-full pr-10">
          <h2 className="text-white font-bold text-5xl sm:text-7xl leading-[0.8]">
            Design{" "}
            <span className="text-2xl sm:text-4xl ">
              e <br className="hidden sm:inline" />
              inovação
            </span>
          </h2>
          <p className="text-white py-10 font-bold">
            Sou desenvolvedor front-end e trabalho de forma independente para
            entregar soluções digitais completas. Atuo desde a consultoria
            inicial, passando pelo design de interfaces intuitivas e modernas,
            até o desenvolvimento front-end com foco em performance e
            responsividade. Além disso, ofereço suporte contínuo e manutenção
            para garantir que seu projeto evolua com segurança e qualidade. Se
            você busca alguém que une visão criativa com execução técnica, estou
            aqui para transformar suas ideias em experiências digitais de alto
            nível.
          </p>
        </div>

        <div className="bg-[#0D1117] p-10 mb-10" >
          <div>
            <h2 className="text-white font-bold text-[1.46rem] mb-4">
              ENTRE EM CONTATO COMIGO
            </h2>
            <p className="text-[#D3D3D3] font-bold mb-7">
              Eu transformo ideias em experiências digitais completas: design,
              código e manutenção, tudo comigo.
            </p>
          </div>
          <div>
            <form onSubmit={handleCustomSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
                className="text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Seu email"
                className="text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 mt-5"
              />
              <input
                type="tel"
                name="telefone"
                required
                placeholder="Seu telefone"
                className=" text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 mt-5"
              />
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                required
                className=" text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 pb-40 mt-5 mb-5"
              ></textarea>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="text-[#0D1117] font-bold bg-[#38E1C6] py-4 px-10"
                >
                  {state.submitting ? "Enviando..." : "Enviar"}
                </button>
                {state.succeeded && (
                  <p className="text-[#38E1C6] font-bold">Mensagem enviada!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
