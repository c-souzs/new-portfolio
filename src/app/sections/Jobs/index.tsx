import Title from "@/components/Title";
import { CardJob } from "./Card";

export default function Jobs() {
  return (
    <div className="bg-midnightExpresso text-white">
      <div className="h-full max-w-7xl mx-auto px-6 py-14">
        <Title 
          text="Experiências Profissional"
        />
        <p className="mt-3 mb-12 text-silveryMoon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus ipsa nobis pariatur est distinctio doloribus itaque dolore consectetur excepturi! Tenetur nobis impedit amet velit deserunt corporis minima expedita ipsam.</p>
        <div className="flex flex-col gap-9">
          <CardJob />
          <CardJob revert/>
          <CardJob />
        </div>
      </div>
    </div>
  )
}