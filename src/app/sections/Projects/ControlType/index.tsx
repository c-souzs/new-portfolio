import classNames from "classnames"
import { TypeFilterProjects } from "..";

interface ControlTypeProjectsProps {
  typeFilterProjects: TypeFilterProjects
  setTypeFilterProjects: (type: TypeFilterProjects) => void
}

export default function ControlTypeProjects({ typeFilterProjects, setTypeFilterProjects }: ControlTypeProjectsProps) {
  const basicStyleButton = "uppercase bg-midnightExpresso transition border border-oceanLight px-8 py-3 hover:text-oceanLight hover:shadow-button-active-slide focus:text-oceanLight focus:shadow-button-active-slide focus:outline-none";

  return (
    <div className="text-xl font-semibold w-full text-center mb-12">
      <button className={
        classNames("pr-6 rounded-tl-[60px] rounded-bl-[60px]",
        basicStyleButton,
        {"shadow-button-active-slide z-[888] text-oceanLight": typeFilterProjects === "FRONT"},
        {"border-r-0 text-silveryMoon": typeFilterProjects === "BACK"})}
        onClick={() => setTypeFilterProjects("FRONT")}
        aria-label="Filtrar projetos front-end"
        role="button"
        title="Filtrar projetos front-end"
        aria-pressed={typeFilterProjects === "FRONT"}>
          Front
      </button>
      <button className={
        classNames("pl-6 rounded-tr-[60px] rounded-br-[60px]",
        basicStyleButton,
        {"shadow-button-active-slide z-[999] text-oceanLight": typeFilterProjects === "BACK"},
        {"border-l-0 text-silveryMoon": typeFilterProjects === "FRONT"})}
        onClick={() => setTypeFilterProjects("BACK")}
        aria-label="Filtrar projetos back-end"
        role="button"
        title="Filtrar projetos back-end"
        aria-pressed={typeFilterProjects === "BACK"}>
          Back
      </button>
    </div>
  )
}