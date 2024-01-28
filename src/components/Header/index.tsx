"use client"

import { useState } from "react";

import classNames from "classnames";
import Link from "next/link";

import Logo from "../Logo";

const navItems = [
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Expieriências",
    href: "#experiences",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Conhecimentos",
    href: "#skills",
  }
]

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="bg-midnightExpresso text-white fixed z-[999] top-0 left-0 right-0" role="heading">
      <div className="h-24 max-w-7xl mx-auto px-6 flex justify-between items-center md:px-8">
        <Logo />
        <nav aria-label="Menu principal" role="navigation">
          <ul className={classNames(
            "text-white- md:flex md:justify-between md:items-center md:gap-x-12", 
            {"flex flex-col gap-y-8 absolute top-[100px] right-4 bg-deepSpace p-6 rounded shadow-bg-menu-mobile animate-right": menuActive}, 
            {"hidden": !menuActive})}
            role="list">
            {
              navItems.map(({name, href}) => {
                return (
                  <li key={`nav-item-#${href}`} role="listitem">
                    <Link href={href} 
                      className="relative after:absolute after:w-0 after:h-0.5 after:bg-skyBlaze after:block after:rounded-full after:mt-1 after:duration-300 hover:after:w-full focus:after:w-full focus:outline-none">
                      {name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <button  
            className={classNames(
              "w-10 h-10 bg-deepSpace flex items-center justify-center cursor-pointer rounded after:block after:bg-current after:shadow-menu-mobile after:transition-all after:ease-in after:duration-200 md:hidden",
              {"shadow-bg-menu-mobile after:text-skyBlaze after:h-1 after:w-1 after:-rotate-90 after:rounded-full": menuActive},
              {"after:w-5 after:h-0.5 after:rounded after:text-white": !menuActive})}
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Abrir menu principal na versão mobile"
        />
      </div>
    </header>
  )
}