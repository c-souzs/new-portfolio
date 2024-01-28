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
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'right-animation': {
          '0%': { transform: 'translateX(16px)', opacity: '.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'wave': 'wave-animation 2.1s infinite',
        right: 'right-animation .5s forwards',
      },
      boxShadow: {
        'button-active': '0 0 5px #0E7CFF',
        'button-active-slide': '0 0 5px 2px #0E7CFF',
        'card-technologies': '4px 5px 4px 3px rgba(14, 124, 255, .137)',
        'menu-mobile': 'currentcolor 0px 7px, currentcolor 0px -7px',
        'bg-menu-mobile': '#0E7CFF 0px 0px .25rem',
      },
    },
  },
  plugins: [],
}
export default config
