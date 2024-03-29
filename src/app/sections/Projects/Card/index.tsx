import classNames from "classnames"
import { roboto } from "@/app/fonts"

import LinkBlank from "@/components/Links/Blank"
import LinkAnchor from "@/components/Links/Link"

import { Project } from "@/utils/projects"
import globalTechnologies from "@/utils/technologies"

import { SiGithub } from "react-icons/si"

interface CardProjectProps {
  project: Project
}

export default function CardProject({ project }: CardProjectProps) {
  const { name, description, technologies, image, link, repository } = project
  
  return (
    <div className="w-[80vw] mx-auto text-center flex-shrink-0 transition-transform duration-500 opacity-80 scale-90 lg:w-[60vw]">
      <h3 className="font-bold text-sunsetOrange uppercase text-3xl mb-2">{ name }</h3>
      <ul className="hidden flex-wrap justify-center gap-4 mt-4 mb-4 md:flex" role="list">
            {
                technologies.map((nameTech) => {
                    const Icon = globalTechnologies[nameTech].icon;

                    return (
                        <li className="flex flex-col items-center gap-1 text-oceanLight opacity-50 transition-opacity hover:opacity-80" key={`${name}-${nameTech}`} role="listitem">
                            <Icon size={18} title={name}/>
                            <p className="font-roboto font-semibold text-[10px] uppercase">{ name }</p>
                        </li>
                    )
                })
            }
        </ul>
      <p className={classNames(
        "mb-6",
        roboto.className
      )}>{ description }</p>
      <img 
        src={image} 
        alt={name} 
        role="img"
        title={name}
        aria-label={name}
        className="rounded"/>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        <LinkBlank 
          text="Visitar site" 
          to={link}
          title={`Visite o site do meu projeto ${name} online e teste o mesmo`}
          aria-label={`Visite o site do meu projeto ${name} e teste o mesmo`}/>
        <LinkAnchor 
          to={repository} 
          typeStyle="tertiary"
          aria-label={`"Acesse o repositório do meu projeto ${name} e veja como ele foi desenvolvido"`}
          target="_blank"
          rel="noopener noreferrer"
          title={`"Acesse o repositório do meu projeto ${name} e veja como ele foi desenvolvido"`}>
          Repositório
          <SiGithub size={14} />
        </LinkAnchor>
      </div>
    </div>
  )
}