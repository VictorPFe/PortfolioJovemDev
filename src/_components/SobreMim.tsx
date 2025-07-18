import Image from "next/image";
import FotoPerfil from "../../public/Foto - Victor .jpg";

export function SobreMim() {
  return (
    <section className="mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 lg:flex justify-center items-center">
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
              Sou um estudante dedicado apaixonado por programação, atualmente
              estou cursando Desenvolvimento Full Stack na Universidade Estácio
              de Sá, adquiri experiência prática em tecnologias essenciais para
              a criação de soluções webcompletas. Tenho habilidades em front-
              end, incluindo HTML, CSS, JavaScript e Tailwind CSS e também no
              desenvolvimento back-end com Java, Node.js, Express e Python.
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
