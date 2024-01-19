import Link from "next/link";
import Logo from "../Logo";

const navItems = [
  {
    name: "Sobre",
    href: "/about",
  },
  {
    name: "Expieriências",
    href: "/experiences",
  },
  {
    name: "Projetos",
    href: "/projects",
  },
  {
    name: "Conhecimentos",
    href: "/skills",
  }
]

export default function Header() {
  return (
    <header className="bg-midnightExpresso text-white">
      <div className="h-24 max-w-7xl mx-auto px-6 flex justify-between items-center md:px-8">
        <Logo />
        <nav aria-label="Menu principal">
          <ul className="flex gap-x-12 justify-center items-center text-lg">
            {
              navItems.map(({name, href}) => {
                return (
                  <li key={`nav-item-#${href}`}>
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
      </div>
    </header>
  )
}