import { Navbar } from "@/_components/Navbar";
import { Header } from "@/_components/Header";
import { SobreMim } from "../_components/SobreMim";
import { Contato } from "@/_components/Contato";
import { Habilidades } from "@/_components/Habilidades";
import { Projetos } from "@/_components/Projetos";
import { Footer } from "@/_components/footer";

export default function index(){
  return (
    <main>
      <Navbar />
      <Header />
      <SobreMim />
      <Contato />
      <Habilidades />
      <Projetos />
      <Footer />
    </main>
  )
}

