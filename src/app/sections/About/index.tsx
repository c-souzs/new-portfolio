import { roboto } from "@/app/layout";
import LinkSocial from "@/components/Links/Social";
import Title from "@/components/Title";
import contactsLinks from "@/utils/contacts";
import trainings from "@/utils/trainings";
import classNames from "classnames";

export default function About() {
  const contactsLinksValues = Object.values(contactsLinks);
  
  
  return (
    <div className="bg-deepSpace text-white">
      <div className="h-full max-w-7xl mx-auto px-6 py-14 md:px-8">

        <section className="mb-14 text-white-100">
            <Title text="Sobre mim" />
            <div className="flex items-center gap-7">
              <div className="flex-1 mb-4 flex flex-col items-center">
                <img 
                  src="/profile.png" 
                  alt="Caio Souza" 
                  title="Foto do autor do web site, Caio Souza"
                  aria-label="Foto do autor do web site, Caio Souza"
                  className="rounded-full object-cover w-[250px] mb-4"/>
                <ul className={"flex flex-wrap justify-center items-center gap-x-6"}>
                  {
                    contactsLinksValues.map((linkData) => {
                      const Icon = linkData.icon;

                      return (
                        <LinkSocial 
                          to={linkData.url} 
                          rel="noopener noreferrer"
                          title="Link para contato via rede sociais"
                          aria-label="Link para contato via rede sociais">
                          <Icon size={18} color="currentColor"/>
                        </LinkSocial>
                      )
                    })
                  }
                </ul>
              </div>
              <div 
                className={classNames("flex-[3] flex flex-col gap-y-3", roboto.className)} aria-label="Descrição sobre quem sou, jornada de estudos, formação e objetivos.">
                <p>Prazer, meu nome é Caio Henrique de Souza. Tenho 20 anos e atualmente moro em Lavras, MG. Sou desenvolvedor front-end, entusiasta do desenvolvimento web, técnico em informática pelo IFMG e cursando Sistemas de Informação.</p>
                <p>Durante minha jornada de estudos, tive a oportunidade de realizar projetos desafiadores para aplicar minhas habilidades. Entre eles, destaco uma dashboard administrativa e um sistema online com a integração de uma API de pagamentos. Esses projetos me permitiram evoluir minhas habilidades em tecnologias como JavaScript, Typescript, React, Next.js, Styled Components, Redux e GraphQL. Como resultado, aprimorei meus conhecimentos em JavaScript e adotei boas práticas de programação avançadas.</p>
                <p>Meus planos são me tornar um desenvolvedor full-stack e dominar as principais tecnologias da melhor linguagem, o JavaScript. Estou sempre pronto para enfrentar novos desafios e buscar novas oportunidades para aprimorar minhas habilidades 💪🏻</p>
              </div>
            </div>
        </section>
        <section>
          <h2 className="text-white font-medium mb-10 flex items-center gap-2 before:w-4 before:h-1 before:bg-sunsetOrange before:inline-block before:rounded">
            Formação e cursos
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Lista de cursos e formações realizadas">
              {
                  trainings.map(({title, school, yearStart, yearEnd}, index) => {
                    const yearEndFormatted = yearEnd ? yearStart === yearEnd ? yearStart : `${yearStart} - ${yearEnd}` : `${yearStart} há atual`;
                    return (
                        <li className="bg-midnightExpresso rounded px-4 py-2" key={`training-${index}`}>
                            <div className="flex justify-between gap-4 mb-2 text-oceanLight font-semibold">
                                <h6>{ title }</h6>
                                <p className="text-sm opacity-50 text-right">{ yearEndFormatted }</p>
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