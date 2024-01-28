import classNames from "classnames";
import { PiBagSimple } from "react-icons/pi";

interface CardJobProps {
  revert?: boolean;
}

export function CardJob({ revert = false }: CardJobProps) {
  return (
  <div className={classNames(
    "flex items-start gap-3",
    { "flex-row-reverse": revert}
  )}>
    <span className="p-1 w-10 h-10 bg-oceanLight rounded-full flex justify-center items-center opacity-50">
      <PiBagSimple color="#040405" size={24}/>
    </span>
    <div className="max-w-[60vw]  bg-deepSpace rounded p-4 relative z-[999]">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-xl text-sunsetOrange font-medium">Desenvolvedor front end</h3>
          <p className="text-sm text-silveryMoon">Emakers Jr.</p>
        </div>
        <div className="texts-sm text-end text-silveryMoon">
          <p>julho de 2023 - dezembro de 2023.</p>
          <p>06 meses</p>
        </div>
      </div>
      <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est provident dolorum, porro cupiditate ut placeat molestias cumque repudiandae, excepturi expedita dolores? Temporibus mollitia nihil et. Id ratione consectetur eius?</p>
      <p className="text-sunsetOrange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
  )
}