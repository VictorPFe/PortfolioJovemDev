export function Contato() {
  return (
    <section className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 lg:flex justify-center items-center">
      <div className="lg:flex justify-center items-center lg:w-[1280]">
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

        <div className="bg-[#0D1117] p-10 mb-10">
          <div>
            <h2 className="text-white font-bold text-[1.46rem] mb-4">ENTRE EM CONTATO COMIGO</h2>
            <p className="text-[#D3D3D3] font-bold mb-7">
              Eu transformo ideias em experiências digitais completas: design,
              código e manutenção, tudo comigo.
            </p>
          </div>
          <div>
            <form action="" className="">
              <input type="text" placeholder="Seu nome" required className="text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3"/>
              <input type="email" name="" id="" required placeholder="Seu email" className="text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 mt-5"/>
              <input type="tel" name="" id="" required placeholder="Seu telefone" className=" text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 mt-5"/>
              <textarea name="" id="" placeholder="Mensagem" required className=" text-white font-bold placeholder:text-[0.9rem] placeholder:text-[#D3D3D3] placeholder:font-bold border-2 border-[#38E1C6] w-full p-3 pb-40 mt-5 "></textarea>
              <input type="submit" value="Enviar" className="text-[#0D1117] font-bold bg-[#38E1C6] py-4 px-10 mt-5"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
