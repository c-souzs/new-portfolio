import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { technologiesBack, technologiesFront } from "@/utils/technologies";
import { IconType } from "react-icons";

const CardTechnologies = ({ icon, name }: {icon: IconType; name: string}) => {
  const Icon = icon;

  return (
    <li className="group bg-midnightExpresso text-white uppercase font-semibold text-sm text-white-100 border border-skyBlaze rounded py-6 shadow-card-technologies transition-transform duration-200 relative z-[888]" role="listitem">
        <span className="flex flex-col items-center justify-center gap-2 opacity-70 transition-opacity group-hover:opacity-100">
            <Icon size={52}/>   
            <p className="max-w-[100px] font-poppins text-center">{ name }</p>     
        </span>
    </li>
  )

}

export default function Technologies() {
  const technologiesFrontArray = Object.values(technologiesFront);
  const technologiesBackArray = Object.values(technologiesBack);

  return (
    <div className="bg-midnightExpresso text-white" id="skills">
      <div className="h-full max-w-7xl mx-auto px-6 py-14 md:px-8">
        <Title text="Conhecimentos" hasMarginBottom/>
        <section>
          <SubTitle text="Front-end"/>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6" role="list">
          {
              technologiesFrontArray.map(({icon, name}, index) => <CardTechnologies key={`card-tech-item-front-${index}`} icon={icon} name={name}/>)
            }
          </ul>
        </section>
        <section className="mt-12">
          <SubTitle text="Back-end"/>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6" role="list">
            {
              technologiesBackArray.map(({icon, name}, index) => <CardTechnologies key={`card-tech-item-back-${index}`} icon={icon} name={name}/>)
            }
          </ul>
        </section>
      </div>
    </div>
  )
}