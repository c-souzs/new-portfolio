import classNames from "classnames";
import Link from "next/link";

interface LinkSocialProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>  {
  children: React.ReactNode;
  to: string;
  bg:'midnightExpresso' | 'deepSpace';
}

export default function LinkSocial({ children, to, bg, ...props }: LinkSocialProps) {
  const isEmail = to.includes("@");

  return (
    <Link 
      href={isEmail ? `mailto:${to}` : to}
      target="_blank"
      className={classNames(
        "block text-oceanLight rounded-full p-3 transition-shadow hover:shadow-button-active hover:text-skyBlaze focus:shadow-button-active focus:text-skyBlaze focus:outline-none",
        { "bg-midnightExpresso": bg === 'midnightExpresso' },
        { "bg-deepSpace": bg === 'deepSpace' },
      )}
      {...props} >
      { children }
    </Link>
  )
}