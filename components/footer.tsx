import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="md:hidden mb-6">
        <SocialLinks />
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        Conçu & développé par{" "}
        <a href="https://github.com/votre-username" className="text-primary hover:underline">
          Votre Nom
        </a>
      </p>
      <p className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} Tous droits réservés</p>
    </footer>
  )
}
