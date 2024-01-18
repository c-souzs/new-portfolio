import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="text-3xl text-white font-semibold tracking-wider" 
      title="Logo do portfolio."
      aria-label="Logo do portfolio."
    >
      SOU
      <span className="text-oceanLight">Z</span>
      S
    </Link>
  )
}