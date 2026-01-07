import Image from "next/image"
import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description:
      "Une plateforme e-commerce complète avec panier, paiement Stripe, gestion des commandes et tableau de bord administrateur. Interface moderne et responsive.",
    image: "/ecommerce-dashboard-modern.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Application de Gestion",
    description:
      "Application SaaS de gestion de projets avec collaboration en temps réel, notifications et intégrations tierces. Architecture scalable et sécurisée.",
    image: "/project-management-dashboard.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Créatif",
    description:
      "Site portfolio interactif avec animations Three.js, transitions fluides et design unique. Optimisé pour les performances et le SEO.",
    image: "/creative-portfolio-website-3d.jpg",
    tech: ["Next.js", "Three.js", "Framer Motion", "GSAP"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

const otherProjects = [
  {
    title: "CLI Tool",
    description: "Outil en ligne de commande pour automatiser les tâches répétitives de développement.",
    tech: ["Node.js", "Commander.js"],
    github: "https://github.com",
  },
  {
    title: "API REST",
    description: "API RESTful sécurisée avec authentification JWT et documentation Swagger.",
    tech: ["Express", "PostgreSQL", "JWT"],
    github: "https://github.com",
  },
  {
    title: "Chrome Extension",
    description: "Extension pour améliorer la productivité lors de la navigation web.",
    tech: ["JavaScript", "Chrome API"],
    github: "https://github.com",
  },
  {
    title: "Mobile App",
    description: "Application mobile cross-platform de suivi d'habitudes quotidiennes.",
    tech: ["React Native", "Expo"],
    github: "https://github.com",
  },
  {
    title: "Design System",
    description: "Bibliothèque de composants UI réutilisables et accessibles.",
    tech: ["React", "Storybook", "Tailwind"],
    github: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "Plateforme de blog avec CMS headless et rendu statique.",
    tech: ["Next.js", "Sanity", "MDX"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-xl">03.</span>
        Mes projets
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}
          >
            {/* Image */}
            <div className={`md:col-span-7 relative group ${index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""}`}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-lg overflow-hidden"
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/30 hover:bg-transparent transition-colors duration-300" />
              </a>
            </div>

            {/* Content */}
            <div
              className={`md:col-span-6 md:row-start-1 z-10 ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"}`}
            >
              <p className="font-mono text-sm text-primary mb-2">Projet vedette</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
              <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <ul
                className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                  index % 2 === 1 ? "md:justify-end" : ""
                }`}
              >
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Site live"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <h3 className="text-center text-xl font-bold text-foreground mb-10">Autres projets notables</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <Folder className="h-10 w-10 text-primary" />
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
