import { NameTechnologyGlobal } from "./technologies"

export interface Project {
  name: string
  description: string
  link: string
  image: string
  repository: string
  technologies: NameTechnologyGlobal[]
}

export const front: Project[] = [
  {
    name: "Bitwit",
    description: "A social media platform for developers to share their projects and ideas.",
    link: "https://bitwit-souzzs.vercel.app",
    image: "https://portfolio-souzzs.vercel.app/assets/bitwit-demo-da60fa46.png",
    repository: "https://bitwit-souzzs.vercel.app",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  },
  {
    name: "Dash Next",
    description: "My personal portfolio built with React and Next.js.",
    link: "https://next-dash-souzzs.vercel.app/login",
    image: "https://portfolio-souzzs.vercel.app/assets/dash-next-demo-07e77bb8.png",
    repository: "https://next-dash-souzzs.vercel.app/login",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  },
  {
    name: "Custom Ranek",
    description: "An e-commerce platform built with React and Next.js.",
    link: "https://custom-ranek.vercel.app",
    image: "https://portfolio-souzzs.vercel.app/assets/ranek-demo-330d9622.png",
    repository: "https://github.com/c-souzs/custom-ranek",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  },
  {
    name: "Bitwit",
    description: "A social media platform for developers to share their projects and ideas.",
    link: "https://bitwit-souzzs.vercel.app",
    image: "https://portfolio-souzzs.vercel.app/assets/bitwit-demo-da60fa46.png",
    repository: "https://bitwit-souzzs.vercel.app",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  },
  {
    name: "Dash Next",
    description: "My personal portfolio built with React and Next.js.",
    link: "https://next-dash-souzzs.vercel.app/login",
    image: "https://portfolio-souzzs.vercel.app/assets/dash-next-demo-07e77bb8.png",
    repository: "https://next-dash-souzzs.vercel.app/login",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  },
  {
    name: "Custom Ranek",
    description: "An e-commerce platform built with React and Next.js.",
    link: "https://custom-ranek.vercel.app",
    image: "https://portfolio-souzzs.vercel.app/assets/ranek-demo-330d9622.png",
    repository: "https://github.com/c-souzs/custom-ranek",
    technologies: [
      'typescript', 'next', 'cmsgraphQl', 'jest', 'reactTestingLibrary', 'tailwindcss'
    ]
  }
]

const back = [
  
]