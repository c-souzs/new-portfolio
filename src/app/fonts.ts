import { Inter, Roboto } from "next/font/google"

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  variable: '--font-roboto'
})

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  fallback: ['sans-serif']
})
