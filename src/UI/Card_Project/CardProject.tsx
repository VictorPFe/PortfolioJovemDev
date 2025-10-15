import Image, { StaticImageData } from "next/image";

interface ModalProps {
  image: StaticImageData;
  alt: string;
  tecnologia: string;
  message: string;
  github?: string;
  site?: string;
}

export function CardProject({
  image,
  alt,
  message,
  github,
  site,
  tecnologia,
  
}: ModalProps) {
  return (
    <div className="flex justify-center max-w-[1280px] gap-4">
      <div className="bg-[#0D1117] p-4 rounded-2xl w-[300px] overflow-hidden">
        {/* Box image */}
        <div>
          <div className="bg-white w-full h-55 rounded-2xl overflow-hidden relative justify-center items-center flex">
            <Image src={image} alt={alt} className="object-cover" priority />
          </div>
        </div>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 my-3">
          <p className="rounded  text-[#38E1C6] font-bold text-[0.6rem]">
            {tecnologia}
          </p>
        </div>

        {/* Descrição do Projeto */}
        <p className="text-[#D3D3D3] text-[0.8rem]">{message}</p>

        {/* Botão */}
        <div className="flex gap-2 mt-5">
          <button className="py-1 px-3 rounded  bg-[#02050A] text-[#38E1C6] font-bold">
            <a href={github}>Github</a>
          </button>

          <button className="bg-[#38E1C6] py-1 px-3 rounded text-[#02050A] font-bold">
            <a href={site}>Ver online</a>
          </button>
        </div>
      </div>
    </div>
  );
}
