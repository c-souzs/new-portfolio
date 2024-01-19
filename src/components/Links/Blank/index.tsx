import classNames from "classnames";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";

interface LinkBlankProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>  {
  text: string
  to: string
}

export default function LinkBlank({ text, to, ...props }: LinkBlankProps) {
  return (
    <Link 
      href={to} 
      target="_blank"
      rel="noopener noreferrer"
      className={
        classNames(
          "group rounded-3xl px-8 py-2 text-base text-white border border-oceanLight bg-transparent transition-colors flex items-center gap-3",
        )}
      {...props}
    >
      { text }
      <HiArrowSmRight size={16} color="#FFF" className="transition-transform group-hover:translate-x-1 group-focus:translate-x-1"/>
    </Link>
  )
}