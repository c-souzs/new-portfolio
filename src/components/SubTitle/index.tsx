export default function SubTitle({ text }: { text: string }){
  return (
    <h3 className="text-white font-medium mb-6 flex items-center gap-2 before:w-4 before:h-1 before:bg-sunsetOrange before:inline-block before:rounded">
      { text}
    </h3>
  )
}