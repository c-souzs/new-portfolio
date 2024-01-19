import { IconType } from 'react-icons';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiRedux, SiGithub, SiJest, SiTestinglibrary, SiGraphql, } from 'react-icons/si';

export const technologiesFront = {
  html: {
      icon: SiHtml5,
      name: 'html 5'
  },
  css: {
      icon: SiCss3,
      name: 'css 3'
  },
  github: {
      icon: SiGithub,
      name: 'github'
  },
  
  javascript: {
      icon: SiJavascript,
      name: 'javascript'
  },
  typescript: {
      icon: SiTypescript,
      name: 'typescript'
  },
  react: {
      icon: SiReact,
      name: 'react'
  },
  redux: {
      icon: SiRedux,
      name: 'redux'
  },
  next: {
      icon: SiNextdotjs,
      name: 'nextJs'
  },
  jest: {
      icon: SiJest,
      name: 'jest'
  },
  reactTestingLibrary: {
      icon: SiTestinglibrary,
      name: 'testing library'
  },
  tailwindcss: {
      icon: SiTailwindcss,
      name: 'tailwindcss'
  },
  styledcomponents: {
      icon: SiStyledcomponents,
      name: 'styled components'
  },
  cmsgraphQl: {
      icon: SiGraphql,
      name: 'cms graphQL'
  },
}

export type NameTechnologyFront = keyof typeof technologiesFront;

export const technologiesBack = {}

export type NameTechnologyBack = keyof typeof technologiesBack;

const globalTechnologies = {
  ...technologiesFront,
  ...technologiesBack
}

export type NameTechnologyGlobal = keyof typeof globalTechnologies;

export default globalTechnologies