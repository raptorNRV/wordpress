import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/votre-username",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/votre-profil",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/votre-username",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:votre@email.com",
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
          aria-label={social.name}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
