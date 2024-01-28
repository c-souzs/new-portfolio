import Title from "@/components/Title";
import { CardJob } from "./Card";
import classNames from "classnames";
import { roboto } from "@/app/layout";

export default function Jobs() {
  return (
    <div className="bg-midnightExpresso text-white" id="experiences">
      <div className="h-full max-w-7xl mx-auto px-6 py-14 md:px-8">
        <Title 
          text="Experiências Profissional"
        />
        <p className={classNames(
          "mt-3 mb-12 text-silveryMoon",
          roboto.className
        )}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus ipsa nobis pariatur est distinctio doloribus itaque dolore consectetur excepturi! Tenetur nobis impedit amet velit deserunt corporis minima expedita ipsam.</p>
        <section className="flex flex-col gap-6 md:gap-12" aria-label="Experiências profissional adquiridas por mim listadas de forma detalhada sobre os cargos que já ocupei.">
          <CardJob />
          <CardJob revert/>
          <CardJob />
        </section>
      </div>
    </div>
  )
}