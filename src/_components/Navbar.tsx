import Image from "next/image";
import JD from "../../public/JD.svg";
import { List } from "@phosphor-icons/react/dist/ssr";

export function Navbar() {
  return (
    <header className="w-full fixed top-0 z-11">
      <div className="bg-[#141C27] flex justify-between items-center  mr-10 ml-10 md:mr-20 md:ml-20 lg:mr-50 lg:ml-50 shadow-xl/30">
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
        <nav className="text-white font-[family-name:var(--interSans)] font-bold xl:flex hidden">
          <div className="space-x-8">
            <a href="#" className="hover:text-[#38E1C6]">Home</a>
            <a href="#" className="hover:text-[#38E1C6]">Sobre mim</a>
            <a href="#" className="hover:text-[#38E1C6]">Habilidades</a>
            <a href="#" className="hover:text-[#38E1C6]">Projetos</a>
            <a href="#" className="hover:text-[#38E1C6]">Contatos</a>
          </div>
        </nav>
        <button className="bg-[#38E1C6] h-17 w-17 flex justify-center items-center cursor-pointer">
          <List className="text-[#0D1117] h-9 w-9" />
        </button>
      </div>
    </header>
  );
}
