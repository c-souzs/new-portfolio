import { inter, roboto } from "@/app/layout";
import classNames from "classnames";
import { PiBagSimple } from "react-icons/pi";

interface CardJobProps {
  revert?: boolean;
}

export function CardJob({ revert = false }: CardJobProps) {
  return (
  <div className={classNames(
    "block items-start gap-3 sm:flex",
    { "flex-row-reverse": revert},
    roboto.className
  )}>
    <span className="p-1 w-10 h-10 min-w-10 mb-3 bg-oceanLight rounded-full flex justify-center items-center opacity-50 sm:mb-0">
      <PiBagSimple color="#040405" size={24}/>
    </span>
    <div className="lg:max-w-[60vw]  bg-deepSpace rounded p-4 relative z-[888]">
      <div className="justify-between items-center sm:flex">
        <div>
          <h3 className={classNames(
            "text-xl text-sunsetOrange font-medium",
            inter.className
          )}>Desenvolvedor front end</h3>
          <p className="text-sm text-silveryMoon">Emakers Jr.</p>
        </div>
        <div className="flex justify-between text-sm text-end text-silveryMoon sm:block">
          <p>julho de 2023 - dezembro de 2023.</p>
          <p>06 meses.</p>
        </div>
      </div>
      <p className="my-6 text-silveryMoon md:my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est provident dolorum, porro cupiditate ut placeat molestias cumque repudiandae, excepturi expedita dolores? Temporibus mollitia nihil et. Id ratione consectetur eius?</p>
      <p className={classNames(
        "text-sunsetOrange",
        inter.className
      )}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  )
}