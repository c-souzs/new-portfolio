interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export default function Title({ text, ...props }: TitleProps) {
  return (
    <h2
      className="text-2xl text-white font-medium mb-10 flex items-center gap-2 before:w-4 before:h-1 before:bg-oceanLight before:inline-block before:rounded"
      {...props}
    >
      { text }
    </h2>
  )
}