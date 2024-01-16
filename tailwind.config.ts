import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnightExpresso: '#040405',
        deepSpace: '#09090B',
        skyBlaze: '#0E5CFF',
        oceanLight: '#0E7CFF',
        silveryMoon: '#D8D8D8',
        sunsetOrange: '#FFA500',
        polarWhite: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
export default config
