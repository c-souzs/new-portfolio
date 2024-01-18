import classNames from "classnames";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: IconType;
  typeStyle: 'primary' | 'secondary';
}

export default function Button({ children, icon, typeStyle, ...props }: ButtonProps) {
  const Icon = icon;

  return (
    <button 
      className={
        classNames(
          "rounded-3xl px-8 py-2 text-base text-white border border-oceanLight flex items-center gap-3 transition-colors hover:bg-skyBlaze hover:border-skyBlaze focus:bg-skyBlaze focus:border-skyBlaze",
          {"bg-oceanLight": typeStyle === 'primary'},
          {"bg-transparent": typeStyle === 'secondary'}
        )}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} color="#FFF"/>}
    </button>
  )
}