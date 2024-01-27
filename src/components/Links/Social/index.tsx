import Link from "next/link";

interface LinkSocialProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>  {
  children: React.ReactNode;
  to: string;
}

export default function LinkSocial({ children, to, ...props }: LinkSocialProps) {
  const isEmail = to.includes("@");

  return (
    <Link 
      href={isEmail ? `mailto:${to}` : to}
      target="_blank"
      className="block text-oceanLight bg-deepSpace rounded-full p-3 transition-shadow hover:shadow-button-active hover:text-skyBlaze focus:shadow-button-active focus:text-skyBlaze focus:outline-none"
      {...props} >
      { children }
    </Link>
  )
}