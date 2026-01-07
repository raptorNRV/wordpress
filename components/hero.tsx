import { ArrowDown } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-16">
      <div className="space-y-6">
        <p className="font-mono text-primary">Bonjour, je suis</p>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">Votre Nom.</h1>
        <h2 className="text-3xl font-bold text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          Je crée des expériences digitales exceptionnelles.
        </h2>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          Je suis un développeur full-stack passionné par la création d'applications web modernes, performantes et
          accessibles. Actuellement disponible pour de nouvelles opportunités.
        </p>
        <div className="flex items-center gap-6 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Me contacter
          </a>
          <SocialLinks />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
