import classNames from "classnames";
import Link from "next/link";

interface LinkAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>  {
  children: React.ReactNode;
  to: string;
  typeStyle: 'primary' | 'secondary' | 'tertiary';
}

export default function LinkAnchor({ children, to, typeStyle, ...props }: LinkAnchorProps) {
  return (
    <Link 
      href={to} 
      role="link"
      className={
        classNames(
          "transition-colors flex items-center gap-3 focus:outline-none",
          {"rounded-3xl px-8 py-2 text-base text-white border border-oceanLight hover:bg-skyBlaze hover:border-skyBlaze focus:bg-skyBlaze focus:border-skyBlaze": typeStyle !== 'tertiary'},
          {"bg-oceanLight": typeStyle === 'primary'},
          {"bg-transparent": typeStyle === 'secondary'},
          {"text-silveryMoon text-sm hover:text-white focus:text-white": typeStyle === 'tertiary'}
        )}
      {...props}
    >
      { children }
    </Link>
  )
}