import classNames from "classnames";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  hasMarginBottom?: boolean;
}

export default function Title({ text, hasMarginBottom = false, ...props }: TitleProps) {
  return (
    <h2
      className={classNames("text-2xl text-white font-medium flex items-center gap-2 before:w-4 before:h-1 before:bg-oceanLight before:inline-block before:rounded", {"mb-10": hasMarginBottom})}
      {...props}
    >
      { text }
    </h2>
  )
}