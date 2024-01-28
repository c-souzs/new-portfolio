import contactsLinks from "@/utils/contacts";
import LinkSocial from "../Links/Social";

export default function Contact({ bgButton }: {bgButton: "midnightExpresso" | "deepSpace"}) {
  const contactsLinksValues = Object.values(contactsLinks);

  return (
    <ul className={"flex flex-wrap justify-center items-center gap-x-6"}>
      {
        contactsLinksValues.map((linkData) => {
          const Icon = linkData.icon;

          return (
            <LinkSocial 
              key={`social-${linkData}`}
              to={linkData.url} 
              rel="noopener noreferrer"
              bg={bgButton}
              title="Link para contato via rede sociais"
              aria-label="Link para contato via rede sociais">
              <Icon size={18} color="currentColor"/>
            </LinkSocial>
          )
        })
      }
    </ul>
  )
}