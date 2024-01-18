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
      className="block text-oceanLight bg-deepSpace rounded-full p-3 transition-shadow hover:shadow-icon-social hover:text-skyBlaze focus:shadow-icon-social focus:text-skyBlaze"
      {...props} >
      { children }
    </Link>
  )
}