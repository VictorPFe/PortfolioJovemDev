import { InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Footer (){
  return(
    <section className="bg-[#0D1117] py-16 text-white">
      <div className="flex items-center justify-center px-4">

        <footer className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-20 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Front-end Developer</h3>
            <p className="mb-4">Código limpo, design elegante e performance que encanta</p>
            <a 
            href={`https://wa.me/5571992989634?text=Olá, tudo bem? Vim pelo seu site e gostaria de um orçamento.`}
            className="bg-[#38E1C6] text-[#0D1117] px-4 py-2 rounded-sm"
            >
              Fale comigo no WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: victorpessoa354@gmail.com</p>
            <p>Telefone: (71) 99298-9634</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-3">
              <a 
                href="https://github.com/VictorPFe"
                target="_blank"
              >
                <GithubLogoIcon className="w-8 h-8"/>
              </a>
              <a 
                href="https://www.linkedin.com/in/victor-pessoa-dev/"
                target="_blank"
              >
                <LinkedinLogoIcon className="w-8 h-8"/>
              </a>
              <a 
                href="https://www.instagram.com/_jovemdev/"
                target="_blank"
              >
                <InstagramLogoIcon className="w-8 h-8"/>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )

}