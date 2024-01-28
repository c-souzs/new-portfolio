import { roboto } from "@/app/fonts";
import classNames from "classnames";

import Contact from "@/components/Contact";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";

import trainings from "@/utils/trainings";

export default function About() {
  
  return (
    <div className="bg-deepSpace text-white" id="about">
      <div className="h-full max-w-7xl mx-auto px-6 py-14 md:px-8">
        <section className="mb-14 text-white-100">
            <Title text="Sobre mim" hasMarginBottom/>
            <div className="block items-center gap-10 lg:flex">
              <div className="flex-1 mb-6 flex flex-col items-center lg:mb-4">
                <img 
                  src="/profile.png" 
                  alt="Caio Souza" 
                  role="img"
                  title="Foto do autor do web site, Caio Souza"
                  aria-label="Foto do autor do web site, Caio Souza"
                  className="rounded-full object-cover w-[250px] mb-6 lg:mb-4"/>
                <Contact bgButton="midnightExpresso"/>
              </div>
              <div 
                className={classNames("flex-[3] flex flex-col gap-y-3", roboto.className)} aria-label="Descrição sobre quem sou, jornada de estudos, formação e objetivos.">
                <p role="">Prazer, meu nome é Caio Henrique de Souza. Tenho 20 anos e atualmente moro em Lavras, MG. Sou desenvolvedor front-end, entusiasta do desenvolvimento web, técnico em informática pelo IFMG e cursando Sistemas de Informação.</p>
                <p>Durante minha jornada de estudos, tive a oportunidade de realizar projetos desafiadores para aplicar minhas habilidades. Entre eles, destaco uma dashboard administrativa e um sistema online com a integração de uma API de pagamentos. Esses projetos me permitiram evoluir minhas habilidades em tecnologias como JavaScript, Typescript, React, Next.js, Styled Components, Redux e GraphQL. Como resultado, aprimorei meus conhecimentos em JavaScript e adotei boas práticas de programação avançadas.</p>
                <p>Meus planos são me tornar um desenvolvedor full-stack e dominar as principais tecnologias da melhor linguagem, o JavaScript. Estou sempre pronto para enfrentar novos desafios e buscar novas oportunidades para aprimorar minhas habilidades 💪🏻</p>
              </div>
            </div>
        </section>
        <section>
          <SubTitle text="Formação e cursos"/>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Lista de cursos e formações realizadas">
              {
                  trainings.map(({title, school, yearStart, yearEnd}, index) => {
                    const yearEndFormatted = yearEnd ? yearStart === yearEnd ? yearStart : `${yearStart} - ${yearEnd}` : `${yearStart} há atual`;
                    return (
                        <li className="bg-midnightExpresso rounded px-4 py-2" key={`training-${index}`}>
                            <div className="flex justify-between gap-4 mb-2 text-oceanLight font-semibold">
                                <h6>{ title }</h6>
                                <p className={classNames("text-sm opacity-50 text-right", roboto.className)}>{ yearEndFormatted }</p>
                            </div>
                            <p className={classNames("text-silveryMoon text-sm", roboto.className)}>{ school }</p>
                        </li>
                    )
                  })
              }
          </ul>
        </section>       
      </div>
    </div>
  )
}