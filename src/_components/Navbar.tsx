import Image from "next/image";
import JD from "../../public/logo/JD.svg";
import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
         
            <ul className="flex gap-7">
              <li><Link href="#" className="hover:text-[#38E1C6]">Home</Link></li>
              <li><Link href="#sobremim" className="hover:text-[#38E1C6]">Sobre mim</Link></li>
              <li><Link href="#contatos" className="hover:text-[#38E1C6]">Contatos</Link></li>
              <li><Link href="#habilidades" className="hover:text-[#38E1C6]">Habilidades</Link></li>
              <li><Link href="#projetos" className="hover:text-[#38E1C6]">Projetos</Link></li>
            </ul>
    
        </nav>
        <button className="bg-[#38E1C6] h-17 w-17 flex justify-center items-center cursor-pointer">
          <List className="text-[#0D1117] h-9 w-9" />
        </button>
      </div>
    </header>
  );
}
