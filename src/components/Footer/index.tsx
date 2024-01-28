import Logo from "../Logo";
import Contact from "../Contact";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-midnightExpresso relative z-50 text-silveryMoon">
        <div className="h-full max-w-7xl mx-auto px-6 py-14">
            <div className="flex flex-col justify-center gap-6 items-center sm:flex-row sm:justify-between">
                <Logo />
                <Contact bgButton="deepSpace"/>
            </div>
            <p className="text-white-50 text-center mt-8">Copyright © {date.getFullYear()} - Alguns direitos reservados.</p>
        </div>
    </footer>
  )
}