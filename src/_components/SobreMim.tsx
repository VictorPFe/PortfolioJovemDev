import Image from "next/image";
import FotoPerfil from "../../public/perfil/Foto - Victor .jpg";

export function SobreMim() {
  return (
    <section className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 lg:flex justify-center items-center" id="sobremim">
      <div className="flex flex-col xl:flex-row items-center justify-center lg:w-[1280] pb-44 pt-38">

        <div>

          <div>
            <h2 className="text-[#38E1C6] font-bold sm:text-2xl text-[1.2rem] ml-7 mb-2">
              SOBRE MIM
            </h2>
            <h2 className="text-white font-bold sm:text-3xl text-2xl mb-8">
              De ideias inspiradoras a <br />
              portfólios de alto impacto.
            </h2>
          </div>

          <div className="flex gap-5 ">
            <div className="bg-[#38E1C6] sm:w-70 sm:h-1 sm:ml-5"></div>
            <p className="text-[#D3D3D3] text-[1rem] mr-15">
              Desenvolvedor Front-end Júnior apaixonado por tecnologia e criação 
              de soluções digitais. Experiência prática no desenvolvimento de 
              interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript, 
              React e Next.js. Boa compreensão de lógica de programação, integração 
              com APIs e foco em código limpo, desempenho e usabilidade. <br/>
              Possuo também conhecimentos em Back-end, utilizando Node.js e Express, além de 
              experiência na realização de testes de APIs com Postman. Tenho conhecimentos 
              básicos em bancos de dados como MySQL, PostgreSQL e MongoDB, aplicando conceitos 
              fundamentais de modelagem e manipulação de dados.

            </p>
          </div>

        </div>

        <div className="relative mx-auto pt-14">
          <div className="bg-[#38E1C6] w-[300px] h-[400px] absolute"></div>
          <div className="bg-white w-[300px] h-[400px] overflow-hidden top-4 right-4 relative">
            <Image 
              src={FotoPerfil}
              alt="Foto Perfil - Sobre mim"
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
