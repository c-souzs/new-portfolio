"use client"

import LinkBlank from "@/components/Links/Blank";
import LinkAnchor from "@/components/Links/Link";
import Title from "@/components/Title";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import ControlTypeProjects from "./ControlType";
import { front } from "@/utils/projects";
import CardProject from "./Card";

export type TypeFilterProjects = "FRONT" | "BACK";

export default function Projects() {
  const [typeFilterProjects, setTypeFilterProjects] = useState<TypeFilterProjects>("FRONT");
  

  return (
    <div className="bg-midnightExpresso text-white">
      <div className="h-full max-w-7xl mx-auto px-6 py-14">
        <section className="mb-12">
          <Title text="Projetos" />
          <p className="mt-3 text-silveryMoon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus ipsa nobis pariatur est distinctio doloribus itaque dolore consectetur excepturi! Tenetur nobis impedit amet velit deserunt corporis minima expedita ipsam.</p>
        </section>
        <section>
          <ControlTypeProjects 
            typeFilterProjects={typeFilterProjects}
            setTypeFilterProjects={setTypeFilterProjects} />

          <div className="flex flex-col gap-14">
            {
              front.map((project, index) => {
                return (
                  <CardProject project={project} key={`project-item-${index}`}/>
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}