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
      },
      animation: {
        'wave': 'wave-animation 2.1s infinite',
      },
      backgroundImage: {
        'blur-avatar': "url('/blur-profile-avatar.svg')",
      }
    },
  },
  plugins: [],
}
export default config
