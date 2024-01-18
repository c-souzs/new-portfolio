import { inter, roboto } from "@/app/layout";
import Button from "@/components/Button";
import LinkAnchor from "@/components/Links/Link";
import contactsLinks from "@/utils/contacts";
import classNames from "classnames";
import { HiDownload } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";

export default function Introduction() {
  const titleImageAvatar = "Uma ilustração de um avatar do autor do web site com um fundo círcular texturizado em tons de azul com bordas desfocadas."

  return (
    <div className="bg-midnightExpresso h-[calc(100vh-96px)] text-white">
      <div className="h-full max-w-7xl mx-auto px-6 grid grid-cols-1 items-center md:grid-cols-2 md:px-8">
        <section>
          <h3 className={classNames("text-silveryMoon", roboto.className)}>
            Olá, eu sou o {' '}
            <span className={classNames("inline-block text-xl text-white", inter.className)}>Caio Souza</span>
            <span className="inline-block font-medium text-xl animate-wave origin-[70% 70%]">👋🏻</span>
          </h3>
          <h1 className="text-5xl font-semibold text-oceanLight mb-3">Desenvolvedor <br /> Full-stack.</h1>
          <p className={classNames("mb-8 block lg:text-lg text-silveryMoon", roboto.className)}>
            Desenvolvedor Front-end na Agência Zetta, especializado em {' '}
            <span className="text-sunsetOrange">ReactJS, NextJS</span> {' '}
            e nas demais bibliotecas que compõem esse ecossistema. Atualmente, estou me especializando em {' '}
            <span className="text-sunsetOrange">JAVA, Spring Boot e MySQL</span>.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Button
              typeStyle="primary" 
              aria-label="Botão para baixar o currículo do autor do web site."
            >
              Baixar cv
              <HiDownload size={16} color="#FFF" />
            </Button>
            <LinkAnchor
              to={contactsLinks.linkedin.url}
              typeStyle="secondary" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite meu perfil no LinkedIn"
            >
              Linkedin
              <SiLinkedin size={16} color="#FFF" />
            </LinkAnchor>
          </div>
        </section>
        <div className="justify-end hidden md:flex">
          <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blur-avatar bg-no-repeat bg-cover bg-center flex justify-center items-center">
            <img 
              src="/profile-avatar.png" 
              alt="Avatar do autor do web site"
              title={titleImageAvatar}
              aria-label={titleImageAvatar} />
          </div>
        </div>
      </div>
    </div>
  )
}