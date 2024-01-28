import contactsLinks from "@/utils/contacts";
import Social from "../Links/Social";
import Logo from "../Logo";
import LinkSocial from "../Links/Social";

export default function Footer() {
  const date = new Date();

  const contactsLinksValues = Object.values(contactsLinks);

  return (
    <footer className="bg-midnightExpresso relative z-50 text-white">
        <div className="h-full max-w-7xl mx-auto px-6 py-14">
            <div className="flex flex-wrap justify-center gap-6 items-center sm:justify-between">
                <Logo />
                <ul className={"flex flex-wrap justify-center items-center gap-x-6"}>
                  {
                    contactsLinksValues.map((linkData) => {
                      const Icon = linkData.icon;

                      return (
                        <LinkSocial 
                        key={`social-${linkData}`}
                          to={linkData.url} 
                          rel="noopener noreferrer"
                          title="Link para contato via rede sociais"
                          aria-label="Link para contato via rede sociais">
                          <Icon size={18} color="currentColor"/>
                        </LinkSocial>
                      )
                    })
                  }
                </ul>
            </div>
            <p className="text-white-50 text-center mt-8">Copyright © {date.getFullYear()} - Alguns direitos reservados.</p>
        </div>
    </footer>
  )
}