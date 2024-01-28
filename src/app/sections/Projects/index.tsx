"use client"

import { useState } from "react";
import Title from "@/components/Title";
import ControlTypeProjects from "./ControlType";
import { front } from "@/utils/projects";
import CardProject from "./Card";
import Slide from "@/components/Slide";
import classNames from "classnames";
import { roboto } from "@/app/layout";

export type TypeFilterProjects = "FRONT" | "BACK";

export default function Projects() {
  const [typeFilterProjects, setTypeFilterProjects] = useState<TypeFilterProjects>("FRONT");
  

  return (
    <div className="bg-deepSpace text-white" id="projects">
      <div className="h-full max-w-7xl mx-auto px-6 py-14 md:px-8">
        <section className="mb-12">
          <Title text="Projetos" />
          <p className={classNames(
            "mt-3 text-silveryMoon",
            roboto.className
          )}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus ipsa nobis pariatur est distinctio doloribus itaque dolore consectetur excepturi! Tenetur nobis impedit amet velit deserunt corporis minima expedita ipsam.</p>
        </section>
        <section>
          <ControlTypeProjects 
            typeFilterProjects={typeFilterProjects}
            setTypeFilterProjects={setTypeFilterProjects} />

          <Slide>
            {
              front.map((project, index) => {
                return (
                  <CardProject project={project} key={`project-item-${index}`}/>
                )
              })
            }
          </Slide>
        </section>
      </div>
    </div>
  )
}